---
sccp: 297
network: Optimism
title: Lower Liquidator Fee Ratio
author: Fifa
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0xc843e455bac322436c46097982052442f14723d31fb2eb02506ad8b5ed8cc73d
status: Vote_Pending
created: 2023-04-24
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to lower the liquidation fee ratio from 35 bp to 2 bp.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->
The `liquidationFeeRatio` is fee rate applied on the position size for flagging a position for liquidation, it is capped at the `maxKeeperFee` and floored at the `keeperLiquidationFee`.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The fee should be lowered in order to incentivize keepers to liquidate large positions with priority. Currently the 35 bp fee would treat all positions with a size above 28k$ with equal priority, lowering that fee to 2 bp would result in incentivization of large positions (up to 500k$) with higher priority due to the larger fee that could be earned.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

