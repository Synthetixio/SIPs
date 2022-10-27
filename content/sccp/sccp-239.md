---
sccp: 239
network: Optimism
title: Update OP-PERP Market Parameters
author: Platschi (@platschi)
status: Draft
created: 2022-10-21
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to update the OP-PERP market max open interest as per the below:

| **CurrencyKey**  | **Proposed OI**  | **Current OI**  |
|----------------- |-------------------- |------------------- |
|    **sOP**    |          200k          |         100k          |

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The `maxMarketValueUSD` is the maximum amount of open interest allowed on each side of a market.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Liquidity for OP-PERP is sufficient and utilization is high enough that an increase in open interest should be deemed acceptable. Additionally, the skew has been neutral for extended periods of time.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
