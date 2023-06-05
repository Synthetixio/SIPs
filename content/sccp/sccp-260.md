---
sccp: 260
network: Ethereum & Optimism
title: Update Synthetix Liquidation Parameters
author: Kaleb (@kaleb-keny), Afif ⚽ (@aband1)
status: Implemented
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x1dae66ba639ce2014aeb040ad23a89566f9ee0e3ca9a50e0f0cf773fec9b3e2d
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
- `liquidationPenalty` is the penalty paid to other stakers who take on the debt of the liquidated account.
- `selfLiquidationPenalty` is the penalty paid to other stakers, when a staker liquidates his debt to the target collateralization ratio.


## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The motivation for pushing up these parameters are as follows:
- [1-Year short funding rates](https://www.binance.com/en/futures/funding-history/1) on SNX has been been historically around 75%. If a staker who earns liquidation rewards and wants to hedge his escrow, he can't sell it and has to pay an 75% funding rate. So a penalty of 75% would bring the net present value of the debt assumed in line with that of liquidation rewards.
- Increases the incentive on stakers to repay their debt.
- Increases the incentive for stakers to bring additional capital into the system to take on the liquidated snx of fallen brothers.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
