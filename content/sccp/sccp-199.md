---
sccp: 199
network: Ethereum & Optimism
title: Lower C-Ratio and adjust parameters for SIP-148
author: Kain (@kaiynne)
status: Draft
created: 2022-05-13
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

The active network ratio is currently low enough that the introduction of SIP-148 poses potential risks to the network if a majority of holders elect to utilise self liquidation rather than repaying their debt. This SCCP adjusts the initial paramters and the C-ratio to reduce the risk to the network upon the introduction of SIP-148. By reducing the delta between the current active ratio and the target ratio less collateral and debt will need to be transferred between stakers. This will allow for a more orderly distribution of debt within the network once SIP-148 is implemented.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

collateralisationRatio: 300%
liquidationEscrowDuration: 1 year
liquidationDelay: 12 hours
liquidationRatio: 150%
liquidationPenalty: 30%
selfLiquidationRatio: 250%
selfLiquidationPenalty: 20%
flagReward (L1): 10 SNX
flagReward (L2): 1 SNX
liquidateReward (L1): 20 SNX
liquidateReward (L2): 2 SNX

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Lowering the c-ratio will reduce the impact of self-liquidation once SIP-148 is introduced. Once the active ratio approaches 300% again the c-ratio should be incrementally moved up towards 400%

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
