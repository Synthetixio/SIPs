---
kip: 
title: Cross-Margin v2.0.0 (CMv2)
status: Draft
author: Jared Borders (@jaredborders), Jeremy Chiaramonte (@jchiaramonte7)
created: 2022-12-14
---

## Summary

Upgrade current cross-margin implementation to include new features and support Synthetix Perps V2 integration. 

## Abstract

This KIP proposes an upgrade to Kwenta's cross-margin implementation. The core improvement includes support for Synthetix Perps V2, which provides users with a better trading experience with decreased fees and other improvements.

Secondary improvements include an architecture rework to support account upgradability and versioning, traditional cross-margin optionality, and new order types/strategies. Among those types and strategies are reduce-only orders, batched orders, and conditional orders (replacing advanced orders).

## Motivation

The current Kwenta cross-margin implementation does not allow traders to interact with Synthetix Perps V2, only works with atomic orders (which have high fees in V2), and also lacks many features that sophisticated traders expect from a traditional exchange. Finally, the current version of cross-margin could be more flexible and optimized to improve the overall experience of traders.

## Specification

### Synthetix Perps V2

As defined by SIP-281, orders may now be delayed to improve trading; thus, our current atomic trading system must be updated.1 Instead of simply executing an order immediately, orders are submitted in one transaction and executed after a delay in another transaction. Execution is not limited to the order-submitting account but can be executed by any caller. We will replace all instances of the function `modifyPositionWithTracking` with `submitOffchainDelayedOrderWithTracking` and leave order execution up to either the user or another external party (such as a keeper).

SIP-281 will also have significant implications concerning conditional orders. Conditional orders must be carefully built to balance risk and usability. Thus, strategies to prevent bad actors will be in place and discussed later in the conditional orders section.

### Architecture

#### System Upgradeability

Cross-Margin v1 (CMv1) does not support contract upgradeability, and the protocol logic is only compatible with Synthetix Perps V1. Due to this, all protocol contracts must be redeployed to support Perps V2 interaction.

Future upgrades to the protocol will require the same steps unless upgradability is introduced. Currently, margin accounts are created per user and are minimal proxies as defined by EIP-1167.2 The implementation address typically could not be changed; however, deploying a proxy that forwards all calls from each minimal proxy to another logic contract enables the protocol to upgrade margin account logic without the need to redeploy another account. A proof of concept of this system design has been implemented and tested here: https://github.com/JaredBorders/upgradable-minimal-proxy.

Furthermore, adding account versioning and a permanent contract store that tracks deployed accounts and the respective deployer will simplify frontend interaction and account tracking. Reducing subgraph reliance will decrease frontend load and improve performance. The store will also track verified factory addresses, ensuring that only trusted sources can update tracked accounts.

#### Order Execution

CMv1 relies on position-defining objects to dictate logic execution regarding placing/modifying/closing positions. As strategies and the underlying protocol grows in complexity, upgradability will become increasingly difficult. Furthermore, CMv1 bundles multiple calls to Synthetix in an order-specific fashion that cannot be decoupled resulting in decreased flexibility.

CMv2 will break down order state by specifying individual commands to execute, relying solely on the caller to determine what action(s) they wish to perform. Upgrading functionality that maps one-to-one with Perps V2 and beyond will become as trivial as adding a new function and command key. The latter will be represented as an enum and passed to an "execute" function in the CMv2 contracts alongside necessary input parameters.

### Traditional Cross-Margin

Traditional cross-margin shares account margin across all positions. However, due to the isolated nature of Synthetix's implementation of perps markets, directly sharing margin is not possible. 

CMv2 will introduce optional account access to user-approved addresses that will allow approved addresses to deposit/withdraw margin on behalf of users. These approved addresses can belong to Kwenta-designed keepers that can execute account margin rebalancing during certain account conditions (such as approaching liquidation). They can also belong to the third-party designed trading bots that offer a similar service. This design will increase account flexibility and incentivize others to improve the trading experience for Kwenta users.

### New Order Types/Strategies

#### Conditional Orders (previously Advanced Orders)

Conditional orders (ex: limit/stop-loss) must be reimagined for Perps V2’s delayed orders. Submitting an order once certain market conditions are met does not guarantee that post delay, the execution price will still be valid. Furthermore, price feeds previously were atomic and on-chain, allowing a keeper (Gelato) to poll Synthetix markets to determine if an order is ready to be executed. 

This changes with Perps V2. To ensure keepers submit valid orders, we will implement our version of price feed verification very similar to what Synthetix uses for executing delayed off-chain orders, which requires a price feed that is then verified on-chain. We will also redefine our advanced orders as conditional orders to highlight the conditional aspect of our new orders and the divergence from traditional advanced market order syntax.

#### Reduce-Only Orders

In existing markets, reduce only orders allow traders to place orders that only reduce the current position. This ensures, when there exists an **active order and active position** and the position is either modified or closed out, the remaining order doesn’t re-open or extend the current position. CMv2 will include a new option to restrict orders to reduce only.

#### Batched Orders

CMv2 will implement new functions that allow complex order composition that combines market and conditional orders in a single transaction. This addition will require a minor update of the new order-defining data structure. Providing a means for users to open a position and define conditional orders that prevent loss or realize gains in a single transaction will significantly improve the trader experience.

## Sources

1. https://sips.synthetix.io/sips/sip-281/
2. https://eips.ethereum.org/EIPS/eip-1167

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).






