---
sccp: 284
network: Ethereum
title: Update ExchangeFeeRate - Non Atomic Trades
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2023-02-20
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x656c57c31e6e2ab0ec002c8a8e5e186df0305a6bf0d98cd72796448c57d8ddf5
type: Governance
---

# Simple Summary

This SCCP proposes to increase the non-atomic `exchangeFeeRate` on trades to sETH and sBTC to 35 bp, from 10 bp and 25 bp respectively.

# Abstract

The `exchangeFeeRate` is the fee applied on trades into a given currency key.


# Motivation

The main motivation is the chainlink heartbeat of [50 bp](https://docs.chain.link/data-feeds/price-feeds/addresses), vis-a-vis the low trading fees being offered on exchanges to sETH and sBTC, opening up a gap for latency arbitrage.


# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
