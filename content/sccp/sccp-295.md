---
sccp: 295
network: Optimism
title: Deter Trading with Atomic & Delayed Orders
author: Kaleb (@kaleb-keny)
status: Draft
created: 2023-04-13
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes deter trading on atomic & delayed order trades by increasing fees on all markets to 30%. This does not affect pyth fees whereby the fees are outlined in SCCP-293.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->
The fee configurations that will be updated to 30% are:
- takerFeeDelayedOrder
- makerFeeDelayedOrder
- makerFee
- takerFee

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The alternative orders types were kept in existing perp contracts because of tech debt purposes, whereby they build on top of functionalities available in perps v1. However, they expose both debt pool stakers and traders to risks of losses if left unchecked. Note that integrators were asked to not support these alternative order types, and they are planned to be deprecated in the next perps v3 release due to the superior product that could be offered with offchain delayed orders.


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
