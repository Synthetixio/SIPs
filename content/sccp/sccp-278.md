---
sccp: 278
network: Optimism
title: Unwind Perps V1 Markets
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2023-02-08
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x0e26409b6e50ab74c8867341ef131cbe25ae6a32e2ddfeb73fc4a961f46c0a44
type: Governance
---

# Simple Summary

This SCCP proposes to lower the open interest capacity on perps v1 markets gradually, as traders unwind their position. This SCCP can only be implemented subsequent to [SCCP-277](https://sips.synthetix.io/sccp/sccp-277/).

# Abstract

The parameters configuration that would be changed is `maxMarketValueUSD` which would be lowered iteratively to the amount of open interest available until the `maxMarketValueUSD` reaches zero.


# Motivation

The main motivation is to unwind in the least disruptive manner the perps v1 markets.


# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
