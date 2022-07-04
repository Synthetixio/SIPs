---
sccp: 206
network: Optimism
title: Update Wrapper Parameters
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
- Increase the LUSD `BurnFeeRate` from 0% to 1%
- Increase the ETH wrappr `maxTokenAmount` from 3700 ETH to 5700 ETH
- Decrease the ETH wrappr `mintFeeRate` from 20 bp to 5 bp

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Below is a description of the parameters being updated:
- The `burnFeeRate` is the fee paid to release the locked token by burning synth equivalent. 
- The `maxTokenAmount` is the maximum amount of synth equivalent that can be locked in the wrappr.
- The `mintFeeRate` is the fee levied when minting a synth equivalent with the wrappr.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The main motivation is the recent premium seen on the sUSD peg, increasing the LUSD `burnFeeRate` will reduce the amount of sUSD that is being burned in order to release the locked LUSD. the `burnFeeRate` was originally set to zero, as to encourage arbitrages and sending the LUSD back to L1 where it's needed for liquidations. Originally 50m$ worth of LUSD was locked in the LUSD wrappr making up over 40% of all the LUSD ever minted, that amount has steadily decreased in the last few weeks as can be seen [here](https://dune.com/queries/848381/1489436).
This SCCP also proposes to increase the `maxTokenAmount` for the ETH wrappr and decrease it's minting fee as to encourage repeg of sUSD. Currently the debt pool is 25% (or 25m$) long ETH, increasing the wrapper capacity by 2k ETH could lead to a decrease in the skew by 2m$, as the sETH is sent over to sUSD. Although this is not ideal, the benefit of repeg outweights the minimal impact on the debt pool skew.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
