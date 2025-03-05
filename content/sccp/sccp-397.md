---
sccp: 397
author: Kaleb
network: Base
title: Lower OI on KAITO Perp Market
status: Implemented
created: 2025-03-05
proposal: >-
 https://snapshot.org/#/snxgov.eth/proposal/0x4de1820162d55fb22577cd2d676f1e0742f1bc47ee80806108263f18ff155ee1
type: Governance
---

## Simple Summary

Lower the `maxMarketValue` on the KAITO perp market to 200k from 1.5m. 

## Abstract

`maxMarketValue` is the maximum open interest allowed on a given perp market, denominated in snxUSD, the protocols' native currency.

## Motivation

Based on the latest market data and the volatility of the token, it is recommended to lower the oi on this market while keeping some room for traders to take on positions.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
