---
sccp: 259
network: Optimism
title: Update Dynamic Fee Rounds
author: Kaleb (@kaleb-keny)
status: Rejected
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x2720fd8be623b20a39493c855d55dde468a77f52f5e062de356274a6c4556c90
created: 2022-12-07
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to decrease the `exchangeDynamicFeeRounds` to zero.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

`exchangeDynamicFeeRounds` is the number of price pushes used to compute dynamic fees. Lowering this parameter to zero effectively disables dynamic fees.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Given the transition of the product offering on optimism towards perps v2, dynamic fees can be phased off, given feed freshness guarantees by off-chain delayed orders.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
