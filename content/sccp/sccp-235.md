---
sccp: 235
network: Ethereum
title: Update Atomic Swap Parameters
author: Kaleb Keny (@kaleb-keny)
status: Implemented
created: 2022-09-13
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x33429cb50c02583d48ecc10edc8f7ad4353b3eb427b983df8f868f37995bfeb9
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Given the need to temporarily lower the atomic volume per block ahead of the [POS](https://sips.synthetix.io/sccp/sccp-231/), this SCCP proposes to experiment with lower the `atomicExchangeFeeRate` on trades into sETH, which are proposed to be lowered to 10 bp.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The `atomicExchangeFeeRate` is the fee levied on trades into a synths atomically.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The average fee on trades into `ETH` on chain is around 10 bp, whether on uniswap or curve. Lowering the fee to 10 bp while maintaining the upper bound on `maxAtomicVolumePerBlock` allows the protocol to capture more of the organic on-chain volume through partner aggregator integrations. The frequency of latency arbitrages would increase as a result of the decrease in fees, however, the low `maxAtomicVolumePerBlock` constrains the profitability of latency arbitrage bots considerably.
The volume would be assessed and more SCCP's would be proposed based on the observed nature of the volume taking place on chain.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
