---
sccp: 344
network: Base
title: Update Perps V3 Parameters
author: Kaleb
status: Implemented
created: 2024-07-29
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x4107db01b643da4ce4fb576b26ba642affc6ebab9af325daca4f879d0b57f111
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to increase AAVE's maxMarketValue to 1m$ and `maxMarketSize` to 15k tokens.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The `maxMarketValue` is the oi cap in dollar terms and the `maxMarketSize` represents the cap denominated by the market's underlying currency. 

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Given the increase in utilization and to facilitate trading and funding rate arbitrage, this SCCP proposes to increase the oi caps on the AAVE  perp market.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
