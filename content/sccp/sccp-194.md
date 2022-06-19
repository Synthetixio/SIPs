---
sccp: 194
network: Optimism
title: Increase ETH Futures Base Fee
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2022-06-13
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/QmShMQ4VbmXSsrf83MvdddWUNgW24LEiNBhYxAPwMV4vPa
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Increase ETH Futures `makerFee` and `takerFee` to 30 and 35 bp, from 25 and 30 bp.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

`makerFee` and `takerFee` are the fees paid by traders when filled immediately.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The main motivation is the recent increase in market volatiliy which exposes stakers to few latency arbitrage opportunities, despite the offchain circuit breaker helping lean against these periods. Raising fees on eth which is one of the lowest fee assets with respect to it's inherent volatility and oracle latency, will allow us to scale back the aggressiveness of the latency circuit breaker and ensure that the latency arbitrages are constrained.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
