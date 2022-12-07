---
sccp: 260
network: Etheruem & Optimism
title: Update Synthetix Liquidations
author: Kaleb (@kaleb-keny), Afif ⚽ (@aband1)
status: Vote_Pending
created: 2022-12-07
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to implement the following:
- increase the `liquidationRatio` from 145% to 175%
- increase the `snxLiquidationPenalty` from 45% to 75%
- increase the `selfLiquidationPenalty` from 40% to 70% 

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

- `liquidationRatio` is the ratio below which stakers can be flagged for liquidation, after the `liquidationDelay` of 8 hours,the flagged staker is liquidated. 
- `liquidationPenalty` is the penalty paid to other stakers in the debt pool that take on the debt of liquidated accounts.
- `selfLiquidationPenalty` is the penalty paid to other stakers when a staker liquidates his debt to the target collateralization ratio.


## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The motivation for pushing up these parameters are as follows:
- [1-Year short funding rates](https://www.binance.com/en/futures/funding-history/1) on SNX has been been historically around 75%. Hence, the arbitrage would be to long SNX escrow and short futures in order to hedge debt, in case the account gets liquidated on synthetix from a snx price decrease, he would stand to lose the liquidation penalty which is lower than the funding rate earned.
- Increases the incentive on stakers to repay debt and further push up the network collateralization ratio.
- Increases the incentive for stakers to bring additional capital into the system to take on the liquidated snx of fallen brothers.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
