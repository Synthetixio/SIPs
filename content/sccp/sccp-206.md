---
sccp: 206
network: Optimism
title: Update LUSD Wrapper Parameters
author: Kaleb (@kaleb-keny)
status: Draft
created: 2022-07-04
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/bafkreig3tej4sp4gisxwagkqh5qhkvzmivdmt2w4re5zrgs2bmo5p5olvm
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Implement the following:
- Increase the LUSD `BurnFeeRate` from 0% to 2%

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The `burnFeeRate` is the fee paid to release the locked token by burning synth equivalent. 

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The main motivation is the recent premium seen on the sUSD peg, increasing the LUSD `burnFeeRate` will reduce the amount of sUSD that is being burned in order to release the locked LUSD. the `burnFeeRate` was originally set to zero, as to encourage arbitrages and sending the LUSD back to L1 where it's needed for liquidations. Originally 50m$ worth of LUSD was locked in the LUSD wrappr making up over 40% of all the LUSD ever minted, that amount has steadily decreased in the last few weeks as can be seen [here](https://dune.com/queries/848381/1489436).

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
