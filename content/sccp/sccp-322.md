---
sccp: 322
network: Base
title: Update Perps V3 Parameters - maxMarketValue
author: Kaleb (@kaleb-keny)
status: Draft
created: 2024-04-16
type: Governance
---

# Simple Summary

This SCCP proposes to incorporate a `maxMarketValue` of 7m$ on ETH and BTC perp markets.

# Abstract

The ETH and BTC perp markets `maxMarketValue` is currently in a disabled state after the release of this feature in [SIP-361](https://sips.synthetix.io/sips/sip-361/). This sccp introduces that feature which caps the max size for a given market, denominated in USD.

# Motivation

`maxMarketValue` is currently not capped due to the parameter being set at zero, as per the default value after the release of SIP-361. This SCCP updates that value to a starting point that can be updated at a later point, based on utilization.

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).


