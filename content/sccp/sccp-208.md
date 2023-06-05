---
sccp: 208
network: Ethereum & Optimism
title: Lower target staking ratio
author: kain (@kaiynne)
status: Implemented
created: 2022-07-05
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/bafkreiel7k36443pmeleqpuwghdh3rmbfjpzg4vjthtxnoramyhofnopbi
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Lower the target staking ratio to 55%

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

This SCCP lowers the target staking ratio from 85% down to 55%.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

SIP-202 was implemented to increase the staking ratio within the network. At the time of implementation the inflation rate was adjusted from ~300k per week to 800k per week, it was then rebased for several months until it was eventually paused by SCCP-196 at 2.23m SNX per week. It should be noted that SCCP-196 did not modify the correct parameters within SIP-202, baseInflation is modified each week based on the staking ratio, the correct approach should have been to modify the variables: positiveAdjustment, negativeAdjustment and decayRate to 0%. Regardless this SCCP overrides SCCP-196 and modifies the targetStakingRatio from 85% to 55%. This means if this SCCP passes the inflation rate will be reduced by 10% per week if the staking ratio is over 60% and by 5% per week if it is between 50%-60%. Given the current staking ratio of ~70% this should result in a steady reduction in inflation over the next few months, but it also ensures that if a significant number of stakers unstake based on this change, resulting in less than 50% of SNX being staked, that inflation will once again increase to offset this drop. This ensures the inflation rate remains responsive to the behaviour of stakers within the network. 

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
