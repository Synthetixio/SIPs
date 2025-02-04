---
sccp: 390
network: Base
title: Update Perps V3 Parameters
author: Kaleb (@kaleb-keny)
created: 2025-02-03
status: Vote_Pending
type: Governance
---

## Simple Summary

This SCCP proposes to update the perps v3 parameters on the ETH and BTC Markets, as per the below:

### Skew Scale

| **Market** | **Current** | **Proposed** | **Cex Slippage** | **Snx Slippage** |
|:----------:|:-----------:|:------------:|:----------------:|:----------------:|
|     ETH    |   350,000   |    300,000   |       2.25       |         3        |
|     BTC    |    35,000   |     12,500   |        0.8       |         2        |

*Slippage denoted above are on trades of size 500k$*

## Abstract

The `skewScale` is the parameter that determines the slippage incurred by the market when a given skew prevails.

## Motivation

The main motivation behind this SCCP is to increase the incentive on arbitrageurs to balance out a skew, given recent increased volatility of price moves. 

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
