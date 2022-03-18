---
sccp: 170
network: Optimism
title: Update Parameters of ETH Wrappr
author: Kaleb (@kaleb-keny)
status: Draft
created: 2022-03-18
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to lower the `maxETH` in the ETH wrappr to 0.
## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The parameters updated determines the maximum amount of ETH that can be minted with ETH wrappr.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Given the favorable vote on [SIP-210](https://sips.synthetix.io/sccp/sip-210/), this sccp proposes to lower the `maxETH` on the ETH wrappr to 0, as to prevent the situation of more ETH being wrapped after unwinding takes place. Currently there is 117k ETH in the ETH wrappr, with 36k ETH at most is expected to be unwound with the DAI wrappr. The existing utilization after unwind is expected to be around 80k ETH and should it drop further, it will prevent further unskew in the scenario where traders are able to mint ETH with sETH which gets send to stables.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
