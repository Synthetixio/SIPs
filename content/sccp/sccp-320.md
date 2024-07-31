---
sccp: 320
network: Base
title: Update Perps V3 Parameters
author: Kaleb (@kaleb-keny)
status: Implemented
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x050bf82f5ba6cdf4744d1cc7709ae1ada934b5ba5f4d74744e16699fbe4bb639
created: 2024-04-13
type: Governance
---

# Simple Summary

This SCCP proposes to update the perps v3 parameters as per the below:

## Skew Scale

| **Market** | **Current Scale** | **Proposed Sclae** | **Current Slippage** | **Proposed Slippage** | **Cex Slippage** |
|:----------:|:-----------------:|:------------------:|:--------------------:|:---------------------:|:----------------:|
|     ETH    |      500,000      |       350,000      |         1.54         |          2.20         |       1.09       |
|      W     |     8,750,000     |     26,250,000     |        459.24        |         153.08        |       61.89      |

*The Slippage figures above consider a trade of size 500k$*

## Maker Fee

Lower the maker fee on ETH and BTC to zero from 2 bp

# Abstract

Below is a description of the parameter changes proposed in the SCCP:
- `skewScale` is the scaling factor of the relevant market in the underlying currency for computing PD and Funding Rates.
- `makerFee` is the fee paid to LP's when traders reduce the skew

# Motivation

The proposed parameter changes on skew scale and maker fee aim at increasing the incentive on arbitrageurs to arbitrage the skew by targeting an effective liquidity with the current level of open interest.

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).


