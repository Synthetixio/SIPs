---
sccp: 405
network: Base
title: Deprecate BAL Market
author: Kaleb
status: Vote_Pending
created: 2025-04-14
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x6daf67bc31dfe325bd40a4b0bcac88d8339eea322f3015d4932f644788c336ef
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
