---
sccp: 405
network: Base
title: Deprecate BAL Market
author: Kaleb
status: Vote_Pending
created: 2025-04-14
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x5472a83f6d88b24391c403b9ffb69d2d1c208964b39a2f1b66907771c51b7f75
type: Governance
---

## Simple Summary

This sccp proposes deprecate the BAL market. This is done by lowering the `maxMarketValue` and `marketMarketSize` parameters to zero.

## Abstract

The parameters being updated are described below;
 - The `maxMarketValue` is the oi cap in dollar terms and the maxMarketSize represents the cap denominated by the market's underlying currency.
 - The `maxMarketValue` is the oi cap in the market's underlying currency.


## Motivation

The main motivation is the recent [delisting](https://www.binance.com/en/support/announcement/detail/fac9c3e401da4cc8b604566fd261d70c) on the most liquid centralized markets.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
