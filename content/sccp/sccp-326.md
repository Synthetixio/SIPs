---
sccp: 326
network: Base
title: Update Perps V3 Parameters
author: Kaleb (@kaleb-keny)
status: Vote_Pending
created: 2024-04-22
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x8b83ff6bfed2a8e1905db9fb3901c587e0e9e02b5b63b426727ce1839590e80d
---

# Simple Summary

This SCCP proposes to updates the below parameters, pertaining to Perps V3:

## lockedOiRatio

| **ticker** | **Existing** | **Proposed** |
|:----------:|:------------:|:------------:|
|     eth    |      0.5     |     0.25     |
|     btc    |      0.5     |     0.25     |

## Max Market Value and Max Market Size

| **ticker** | **Current MMV M$** | **Proposed MMV $M** | **Current MMS** |   **New MMS**  |
|:----------:|:------------------:|:-------------------:|:---------------:|:--------------:|
|     btc    |         5.0        |        10.00        |       149       |       230      |
|     eth    |         7.0        |        10.00        |      2,777      |      5,000     |
|     sol    |         0.5        |         3.00        |      5,000      |     30,000     |
|     snx    |         0.5        |         1.00        |     127,000     |     500,000    |

## Skew Scale

| **Ticker** | **Current Parameter** | **New Parameter** | **Current Slippage** | **Proposed Slippage** | **Cex** |
|:----------:|:---------------------:|:-----------------:|:--------------------:|:---------------------:|:-------:|
|     BTC    |         50,000        |       35,000      |         0.75         |          1.07         |   0.50  |
|    RUNE    |       2,000,000       |     3,000,000     |          215         |          145          |    35   |


# Abstract

The parameters configurations description is as follows:
- skewScale is the scaling factor of the relevant market in the underlying currency for computing PD and Funding Rates
- The oi cap for a market is determined by the minimum between the `maxMarketValue` (in USD) and the value of `maxMarketSize` in USD. 
- The `lockedOiRatio` determines the minimum amount of `requiredCredit` available from LP's to back a given market for a given amount of open interest.  

# Motivation

The update to the `lockedOiRatio` is to allow improved efficiency of usage of liquidity from USDC stakers.  The skewScale update is to incentivize market makers' arbitrage of the skew and lastly the increase in oi caps on these markets is to provide higher levels of oi for traders to open positions given the more efficient of usage of provided liquidity from USDC stakers.  

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).


