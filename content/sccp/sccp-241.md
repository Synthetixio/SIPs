---
sccp: 241
network: Optimism
title: Update DOGE Futures Parameters
author: Kaleb (@kaleb-keny)
status: Vote_Pending
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x5aa4f9b3ae8a05a412c113cc5021c2445c5dcef5d1e98cfd7d92e7c953eb663f
created: 2022-10-31
type: Governance
---

## Simple Summary

Increase DOGE Futures makerFee and takerFee to 60 and 65 bp, from 35 and 40 bp.

## Abstract

makerFee and takerFee are the fees paid by traders when filled immediately.

## Motivation

The main motivation is the recent increase in market volatiliy related to DOGE which exposes stakers to few latency arbitrage opportunities, despite the offchain circuit breaker helping lean against these periods. Raising fees on DOGE will allow us to scale back the aggressiveness of the latency circuit breaker and ensure that the latency arbitrages are constrained.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).