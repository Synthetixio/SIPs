---
sccp: 349
network: Base
title: Perps V3 - Deprecate MATIC Market
author: Kaleb (@kaleb-keny)
status: Draft
created: 2024-08-29
type: Governance
---

# Simple Summary

This SCCP proposes to lower the `maxMarketValue` and `maxMarketSize` parameters to zero on the MATIC market because of the [token swap](https://www.binance.com/en/support/announcement/binance-will-support-the-polygon-matic-token-swap-to-polygon-pol-6a6de383727f4659a3050f7982e1620f?hl=en) and as per oracle providers' recommendations. 
Furthermore, the price feed will be switched to the POL price feed, once it becomes available, to allow traders to close their positions.

# Abstract
`maxMarketValue` and `maxMarketSize` parameters determine the maximum open interest on the market, setting these parameters to zero effectively sets the market to close only.

# Motivation

The proposed change is in light of the recent token swap. 

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).


