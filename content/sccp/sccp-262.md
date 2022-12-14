---
sccp: 262
network: Optimism
title: Increase Spot sETH Fees
author: Kaleb (@kaleb-keny)
status: Vote_Pending
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x096e0c0e7f22b1cfeed5e33d25ea94db2be936aa37161b857273906f8274794d
created: 2022-12-14
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to increase `exchangeFeeRate` on spot sETH from 25 bp to 35 bp. This is to be implemented along with the launch of perps v2.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

`exchangeFeeRate` is the fee rate applied on exchanges into a particular synth. 

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Given the imminent release of perps v2, the aim is to minimize disruption via the off-chain circuit breakers where the suspension of the  spot exchange disrupts perps-v2.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
