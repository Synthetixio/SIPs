---
sccp: 380
network: Arbitrum
title: Decrease OI Caps on Arbitrum Perps to Zero
author: Kaleb (@kaleb-keny)
status: Implemented
proposal: >-
 https://snapshot.org/#/snxgov.eth/proposal/0x03a88cd83d9387df8538c7bc71761620ccf3a94576b9551dd4574205e226128b
type: Governance
---

## Simple Summary

This SCCP proposes to lower the oi caps on all markets on arbitrum to zero.

## Abstract

The cap can be lowered by reducing the `maxMarketValue` and `maxMarketSize` to zero.

## Motivation

Intentions to wind down the arbitrum deploy requires that markets switch to close-only mode. Lowering the oi parameters to zero allows traders to exit their position at their leisure. 

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
