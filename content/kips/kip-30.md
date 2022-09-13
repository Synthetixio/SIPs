---
kip: 30
title: Copy Trading Account MVP
status: Draft
author: Troy (@Tburm)
created: 2022-09-08
---

## Summary

A proposal to implement a feature to allow traders to open copy trading accounts on Kwenta.

## Abstract

This proposal outlines a new feature on Kwenta which allows traders to open an account which copies the trades of another account. Traders will specify a cross-margin account and a list of assets to copy to create a new copy trading account. Once the account is created, keepers will listen to trades on the target account and rebalance the copy trading account to mirror market exposure.

## Motivation

1. Traders have expressed interest in copying trades of other accounts on Kwenta. Since futures market trades are all executed on-chain, traders have access to historical trading data for every other trading account.
2. Traders want to promote others to copy trade them in exchange for a share of their profits.

## Specification

Terminology:
- Copy trading account: A cross-margin (CM) enabled smart contract account which mirrors trades from another CM account 
- Target account: The account being copied by a copy trading account

The `MarginBase.sol` contract provides users with an interface to manage margin and futures positions across many markets in a single transaction. Keepers will use these functions to copy positions from the target account and execute trades on the copy trading account. To enable these functions the `MarginBase.sol` contract needs some new functionality:

- Stores the address of the target account (`address targetAccount`.)
- Stores an array of markets to be copied (`address[] copiedMarkets`.)
- Stores the max fee for any trade placed while rebalancing (`uint256 maxFee`.)
- Stores a mapping of addresses that opt out of copy trading (`mapping(address => uint8) targetAccountExcluded`.)
- A function `rebalance` which matches the market exposure between the copy trading account and the target account when they are imbalanced.
- Implements new access controls which prevent traders from submitting specific trades. Instead, these functions are delegated to a keeper account.
- Implements a new `withdraw` function which closes positions proportionally and withdraws margin to the account owner.

**Account Creation**

Account creation follows a similar flow to cross margin, however users are required to specify two inputs at account creation time: `targetAccount` and `copiedMarkets`. The `targetAccountExcluded` value must return a false value for the `targetAccount`. Once an account is created, the account owner can deposit sUSD to the account. The rebalance function is called on deposit to copy positions between the copy trading account and the target account.

**Rebalancing**

When the `copiedTrader` account emits any `PositionModified` event, the keeper calls `rebalance` on the copy trading account. Rebalancing will open or close positions accordingly to give the copy trader the same market exposure as their target using the following logic:

* `marginTotal = marginFree + marginMarket1 + ... + marginMarketN`
* `freeMarginPct = marginFree / marginTotal`
* `marginPctMarket1 = marginMarket1 / marginTotal` (calculate for all `copiedMarkets`)
* `leverageMarket1 = notionalSizeMarket1 / marginMarket1` (calculate for all `copiedMarkets`)
* Modify positions such that `freeMarginPct`, `marginPctMarketN`, and `leverageMarketN` are equal for all `copiedMarkets` between the copy trading account and the target account

If any trade will execute with a fee greater than the account's `maxFee` parameter, the transaction will revert.

The rebalance function has additional parameters to add or remove futures markets from `copiedMarkets`. This features is convenient if a trader's risk tolerance for certain assets has changed or when new assets are listed on Kwenta. A trader can specify the markets to add or remove while rebalancing. Adding markets will open new positions, taking margin from existing positions accordingly. Removing markets will close the position in the specified market and increase positions on other markets.

Additionally, traders can specify an amount of margin to withdraw on rebalance. Keepers will always submit transactions with a value of 0. Users can submit transactions with any amount up to their `totalMargin`, which will proportionally reduce position sizes and return margin to the trader.

**Opt Out**

Traders are opted in to copy trading by default, meaning any trader can create an account copying their trades. If traders would like to prevent accounts copying their trades, they can call a function on the factory contract which will prevent further copy trading accounts from being created. Any accounts created prior to this transaction will continue to exist and copy their trades.

**Considerations and Risks**

* Open interest caps could cause transactions to fail if the copy trading account trade sizes exceed caps during rebalancing
* Dynamic fees could cause the copy trader to pay significant fees compared to their target since the transactions are executed sequentially

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
