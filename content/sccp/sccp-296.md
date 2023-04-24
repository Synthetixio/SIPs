---
sccp: 296
network: Optimism
title: Lower Max Liquidation Fee
author: Kaleb (@kaleb-keny)
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x174375e209eb511990d2d727ae7ebdb48935292f864f6c3071a04dba953808ed
status: Vote_Pending
created: 2023-04-24
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to decrease the max liquidation fee to 100 sUSD from 1,000 sUSD.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->
The `maxLiquidationFee` is the cap on the reward paid to a keeper for triggering a flag. The liquidation fee is variable based on the size of the position liquidated (currently 35 bp) with a floor of 2 sUSD and a cap of 1,000 sUSD.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The fee is excessively high, resulting in keepers spamming optimism in order to earn the 1,000 sUSD for transactions that cost less than a dollar to execute. Hence, lowering that fee would balance out the need to continue to incentivize keepers for triggering liquidations and snx stakers earning the bulk of the liquidation reward.


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
