---
sccp: 295
network: Optimism
title: Deter Trading with Atomic & Delayed Orders
author: Kaleb (@kaleb-keny)
status: Approved
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0xf217bc6d127fd29440cdb347518d2d2627eb030f4c4f59d7196c6b8521091ee9
created: 2023-04-13
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes dissuade trading on atomic & delayed order by increasing fees on all perp markets to 30%. This does not affect pyth fees whereby the fees are outlined in [SCCP-293](https://sips.synthetix.io/sccp/sccp-293/).

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->
The fee configurations that will be updated to 30% are:
- takerFeeDelayedOrder
- makerFeeDelayedOrder
- makerFee
- takerFee

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The alternative orders types were kept in existing perp v2 contracts because of historical purposes, whereby the new offchain perp markets were built on top of functionalities available in perps v1 contracts. However, they expose both debt pool stakers and traders to risks of losses if left unchecked. Note that integrators were asked to not support these alternative order types.


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
