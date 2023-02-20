---
sccp: 284
network: Ethereum
title: Update Fee Reclamation Fees
author: Kaleb (@kaleb-keny)
status: Vote_Pending
created: 2023-02-20
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0xc8b69c824f31ed5b5734e5baa343a0c9496114ec089486f3cde6a8a2e2ebf012
type: Governance
---

# Simple Summary

This SCCP proposes to increase the non-atomic `exchangeFeeRate` on trades to sETH and sBTC to 35 bp, from 10 bp and 25 bp respectively.

# Abstract

The `exchangeFeeRate` is the fee applied on trades into a given currencyKey, which incorporates the 6 minute fee reclamation.


# Motivation

The main motivation is the chainlink heartbeat of 50 bp, vis-a-vis the low trading fees being offered on exchanges to sETH and sBTC, opening up a gap for latency arbitrage.


# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
