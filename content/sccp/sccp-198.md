---
sccp: 198
network: Ethereum & Optimism
title: Adjust LUSD Wrapprs
author: Kaleb (@kaleb-keny)
status: Draft
created: 2022-05-12
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Lower the LUSD `burnFeeRate` and `maxTokenAmount` to zero.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The `burnFeeRate` is the fee paid to release LUSD by burning sUSD.
The `maxTokenAmount` is the maximum amount of LUSD that can be wrapped to mint sUSD.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Given market conditions and imbalanced sUSD/stables supply, the changes in the parameters will restrict the supply of sUSD and allow it to decrease via arbitrage activities.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
