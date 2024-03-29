---
sccp: 174
network: Optimism
title: Update Base Fees
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2022-03-30
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/QmcNPCS7NA9xVShdmnJBgFooSJJNeefbRC7ngxbwUQd4L6
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to update the following base fee parameters:

- raise sSOL baseFee to 40 bp
- raise sAVAX baseFee to 40 bp
- raise sAAVE baseFee to 50 bp
- raise sUNI baseFee to 50 bp
- raise futures makerFee on ETH to 25 bp

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The `baseFee` is the fee charged for exchange into a particular synth. The `makerFee` is the fee levied in order to establish a position in a `FuturesMarket` contract.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The main reason for this change is to decrease the likelihood of latency arbitrage attacks.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
