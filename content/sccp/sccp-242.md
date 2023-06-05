---
sccp: 242
network: Ethereum
title: Update Atomic Swap Fees
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2022-11-03
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x6b5fa95da6b551dbd6b5b9ff4925e56815a1c6693a73c1681f33a9ddeef712ec
type: Governance
---

## Simple Summary

Increase the standard atomic exchange fee that does not go throught direct integration, on sETH and sBTC to `40 bp` and `35 bp` respectively, from `10 bp` on both.

## Abstract

The `atomicExchangeFee` is the fee levied on trades into the repsective synth.

## Motivation

Given the recent release of [SIP-267](https://sips.synthetix.io/sips/sip-267/) as well as the 1inch integration [SCCP-288](https://sips.synthetix.io/sips/sip-288/), the standard atomic exchange fees can be increased, given that users that utilize synth exchanges over 1inch benefit from the overriden parameters. This sccp, helps lean against the 1 block uniswap latency.
 
## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).