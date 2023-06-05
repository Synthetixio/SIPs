---
sccp: 226
network: Ethereum
title: Increase Atomic Exchange Fees - ETH
author: Kaleb (@kaleb-keny)
status: Implemented
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x6a0f5f3098ab4dccf1e952633828b7e996526f6af8a3de2e7e3fbfd238d6975b
created: 2022-09-05
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to increase fee on swaps into ETH to 25 bp from 17 bp.


## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The `atomicExchangeFeeRate` is levied on exchanges into a particular synth.


## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The primary motivation is to optimize the parameters of the exchange function in order to lower the chance of latency arbitrages.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
