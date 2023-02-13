---
sccp: 279
network: Ethereum
title: Increase ETH Wrapper Capacity
author: Kaleb (@kaleb-keny)
status: Vote_Pending
created: 2023-02-13
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x0e26409b6e50ab74c8867341ef131cbe25ae6a32e2ddfeb73fc4a961f46c0a44
type: Governance
---

# Simple Summary

This SCCP proposes to increase the maxTokenAmount on the ETH wrapper from 15k ETH to 20k ETH.

# Abstract

The `maxTokenAmount` is the max amount allowed to be used to issue a synth with a underlying specified in the wrapper contract, in this case it's WETH.

# Motivation

The main motivation is to lean against the positive skew ETH on the debt pool, which is around 45%, taking into account the current ETH wrapper being at capacity on the ethereum network and the sUSD peg at a slight premium. Note that if the 5K ETH get wrapped and sent to sUSD the skew would be lowered to 40%.

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
