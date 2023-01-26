---
sccp: 275
network: Ethereum & Optimism
title: Update Wrapper Parameters
author: Kaleb (@kaleb-keny)
status: Vote_Pending
created: 2023-01-26
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0xaf93b1a51f63d4f98c207beaf34e6a894ff67f90980c82ad47bfa21fb0c65ce2
type: Governance
---

# Simple Summary

This SCCP proposes to implement the following:
  - Increase the WETH wrapper `burnFeeRate`  to 50 bp from 10 bp
  - Lower the the DAI wrapper `burnFeeRate`  to 5 bp from 10 bp

# Abstract

The `burnFeeRate` is a parameter that determines the fee to be paid in order to release the underlying, when a synth is burned.

# Motivation

The main motivation is to lean against the increasing ETH skew in the debt pool, by increasing the chance that arbitrage bots would reverse sUSD to sETH trade flow imbalance in the curve pools with synth exchanges, rather than using the ETH wrapper.

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
