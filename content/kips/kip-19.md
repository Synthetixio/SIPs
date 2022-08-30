---
kip: 19
title: Advanced Orders
status: Approved
author: Jeremy Chiaramonte (@JChiaramonte7)
created: 2022-06-30
---

## Summary

Advanced orders enable new trading strategies for futures.

## Abstract

Leveraging Gelato's keeper system, Kwenta will automate specialized orders for futures. The first two products to come of this will be limit orders and stop orders. 

## Motivation

Market orders are the only available order type (next-price orders are market orders under the hood) for Kwenta futures at the moment. There are trading benefits by allowing orders to execute in the future based on defined conditions. 

## Specification

Advanced orders are now feasible as a result of "margin accounts" introduced in [KIP-18: Cross Margin](./kip-18.md).

A trader can specify a limit order or stop market order and register the task with Gelato. If the specified condition evaluates true, Gelato keepers will execute the order on behalf of the trader. Keeper fees are paid in ETH (on execution) and will be required to be stored in the margin account for future execution.

Margin will be committed for an advanced order meaning it cannot be used for any other order or cross margin while the order is active. 

### Slippage

Users specify a price for the execution of their order, however trades are always executed at the current oracle price. Thus, a trader's buy order may be filled at a price below their specified order resulting in positive slippage. Similarly, a trader's stop loss may trigger at a price below their specified order resulting in negative slippage. Below are detailed examples of each scenario:

- If the next oracle price falls below a given limit price during for an order to open a long, (ie. $400 to buy ETH & new oracle price = $398) the order will experience positive slippage and will execute at $398.

- If the next oracle price falls below a given stop loss price for an order to close a long, (ie. $400 stop loss & new oracle price = $398) the order will experience negative slippage and will execute at $398.

### Rationale & User Flows

- As a **trader** I want:
    - To gain exposure at a particular price:
        - By placing a limit open to buy/sell an asset at a given price or better.
    - To reduce risk on a bounce or take profits on a position:
        - By placing a limit close to sell/buyback an asset at a given price or better. 
    - To catch a trend:
        - By placing a stop order to enter a trade at a given price.
    - To cap downside on a trade:
        - By placing a stop loss order to sell a declining asset (if long) or buy a rising asset (if short) at a given price.

### Technical Specification

All advanced orders are indexed by market key. This means there can only be one order per market. There are three key functions for interacting with advanced orders:

- Placing an order. This stores the order onchain until execution or cancellation.
```
function placeOrder(
    address market, 
    int256 marginDelta, 
    int256 sizeDelta, 
    uint256 targetPrice,
    OrderTypes orderType // LIMIT or STOP
) payable external onlyOwner;
```
*This function is payable because a trader is responsible for providing ETH to their margin accounts to pay for Gelato executed transactions. Note that the margin account must have a minimum of 0.1 ETH before orders can be placed*

- Cancelling an order. This removes an order for a given market.
```
function cancelOrder(address market) external onlyOwner;
```
- Executing an order. This will be executed by a keeper when a condition is true.
```
function executeOrder(address market) external onlyOps;
```

When an order is placed margin is committed to that order. This prevents weird UX loopholes where margin expected for a limit order can accidentally be used by other orders or cross margin. Committed margin is also not eligible for withdrawal from the margin account. The remaining amount of `freeMargin` is visible in the contract with:

```
function freeMargin() public view returns (uint256);
```

Additionally, due to the volatility and unpredictablity of the [dynamic fee](https://sips.synthetix.io/sips/sip-184/), orders can specify a cap on the dynamic fee that can be charged to a position modification. This is enabled through a separate order placement function:

```
function placeOrderWithFeeCap(
        ...,
        uint256 maxDynamicFee
) payable external onlyOwner;
```

### Fee Structure

Fees are charged for each advanced order executed. There are two new fees users are accountable for, the keeper fee (gelato) and the Kwenta fee. Kwenta fee parameters will be controlled through governance. Fees will initially be sent to the treasury.

At the start these fees will be set to 0. All advanced orders are subject to cross margin fees when executed.

| Order Type  | Kwenta Fee | Keeper Fee |
| ----------- | ---------- | ---------- |
| Limit       | 3bp        | Dependent on network congestion (ETH)  |
| Stop        | 3bp        | Dependent on network congestion (ETH)  |

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
