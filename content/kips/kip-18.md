---
kip: 18
title: Cross Margin
status: Draft
author: Jeremy Chiaramonte
created: 2022-06-30
---

## Summary

Cross margin opens the door for new trading strategies and increases the accessibility of futures on Kwenta.

## Abstract

An abstraction layer to be built on top of the Synthetix Futures (V1) protocol which creates "margin accounts" for each trader. Margin accounts enable Kwenta to simplify rebalancing operations and provide cross margin functionality.

## Motivation

The current futures system requires traders to deposit margin into specific markets before trading. This two step process causes friction when trying to act on market conditions and when managing margin between multiple markets. Cross margin improves the UX of trading on Kwenta.

## Specification

A major change introduced with this KIP is the introduction of a "margin account" system. Each trader will be required to set up a smart contract wallet (this step is managed by the frontend) that holds margin on behalf of the trader. Smart contract accounts also open the door for future functionality as seen in [KIP-19: Advanced Orders](./kip-19.md).

Cross margin is achieved by bundling together the margin step and the trade step when modifying a futures position. With the current implementation a trader can also open/modify/close multiple positions at once (atomically). It will be up to the frontend implementation on how to manage and rebalance margin. 

### Rationale & User Flows

- As a **trader** I want:
    - To manage positions on **a singular asset**:
        - By opening BTC position without having to perform two transactions.
        - By opening BTC position using the margin from closing a LINK position.
    - To manage positions on **a basket of assets**:
        - By opening positions across many markets in one step.
        - By rebalancing all assets at once to keep leverage constant and avoid liquidation
    - To speculate on the **ratio between two asset prices**:
        - By opening pair trade ETH/SOL in one step.
        - By rebalancing a pair trade with profits from a drifting asset.

### Technical Specification

There will be a factory contract (MarginAccountFactory) that creates new margin accounts. Each margin account's functionality will be restricted to the owner of the account, which is the original creator.

The current architecture relies on [MinimalProxies](https://eips.ethereum.org/EIPS/eip-1167) where each margin account is a minimal proxy. This substantially decreases the gas costs of account creation at the expense of slightly increased interaction cost. Events are emitted on account creation and these are expected to be indexed by a subgraph. 

`distributeMargin` is the core function of Cross Margin and accepts an array of `UpdateMarketPositionSpec` structs. 

```solidity
function distributeMargin(UpdateMarketPositionSpec[] memory _newPositions);
``` 

Each spec will specify the market, margin Δ (delta), size Δ, and optional* boolean to denote positions being closed. 

```solidity
struct UpdateMarketPositionSpec {
        bytes32 marketKey;
        int256 marginDelta;
        int256 sizeDelta;
        bool isClosing;
}
```

A positive margin Δ will deposit margin into a specified market and a negative margin delta will withdraw margin from a specified market. 

A positive size Δ will increase the notional size of a position and negative size Δ will decrease the notional size or invert the direction of a position (long vs. short).

*Note that positions can still be closed if the passed size Δ is the exact inverse of the current size. 

### Fee Structure

Fees are charged on the rebalancing of margin. When margin is moved either from a trader's margin account to a position, from a position to a margin account, or between two positions fees will be applied to the sum of margin transferred. The fee parameter will be controlled through governance by the Elite Council. The initial fee is 5bp and initial revenue will be sent to the treasury.

### Caveats

An expectation of typical cross margin is rebalancing. This iteration does not include rebalancing -- due to keeper system constraints. It will be up to the end user to balance their margin. For example if a trader opens two positions with equal margin for both, over time their positions will become unbalanced respective to market movements and it will be possible for one position to be liquidated before the other.

### Future Work

The margin account (and respectively cross margin) system could be extended to support a one-to-many (EOA -> margin account**s**) mapping. This would enable multiple positions per singular market per user. For example, a trader could open a 10x position in both directions to bet on market volatility (with an expectation that one position will be liquidated).

Another potential feature is the ability to allow keepers to "top up" margin on nearly liquidated positions. Margin would be drawn from the margin account (idle margin). Enabling automatic top off could keep delinquent positions afloat during turbulent trading sessions. This would require an integration with Gelato and external access to trader margins.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
