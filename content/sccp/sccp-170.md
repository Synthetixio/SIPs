---
sccp: 170
network: Ethereum
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

The parameter determines the maximum amount of ETH that can be minted with the ETH wrappr.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Given the imminent unwind of the negative ETH Skew, this sccp proposes to lower the `maxETH` parameter on the ETH wrappr to 0, as to prevent the situation of more ETH being wrapped after unwinding takes place. Currently there is 117k ETH in the ETH wrappr, with 36k ETH expected to be unwound. The existing utilization after unwind is expected to be around 80k ETH, just above the current `maxETH` level of 75k ETH. If the ETH wrapped goes below 75k ETH, it might prevent further unskew as arbers are able to mint ETH with sETH, later sent to stables.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
