---
sccp: 404
network: Base
title: Update Perps V3 Parameters
author: Kaleb
status: Vote_Pending
created: 2025-04-14
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x5472a83f6d88b24391c403b9ffb69d2d1c208964b39a2f1b66907771c51b7f75
type: Governance
---

## Simple Summary

This sccp proposes update the perps v3 parameters as per the below:

### Max Market Value

| **ticker** | **Current MMV** | **Proposed MMV** | **CEX OI** | **Current SNX OI** |
|:----------:|:---------------:|:----------------:|:-------:|:----------------:|
|     mew    |       1.00      |       0.50       |   5.78  |       0.30       |
|     not    |       1.00      |       0.70       |   7.07  |       0.21       |
|   people   |       1.00      |       0.50       |   5.89  |       0.13       |
|     axl    |       0.50      |       0.25       |   2.62  |       0.31       |
|    goat    |       3.00      |       0.50       |   6.15  |       0.50       |
|     pol    |       3.00      |       1.50       |  14.24  |       1.37       |
|     om     |       3.00      |       1.00       |  17.14  |       0.39       |

*All amounts above are in dollar millions.*

### Skew Scale 

| **ticker** | **Current SkewScale** | **Proposed Skew Scale** | **Current Slippage** | **Proposed Slippage** | **Cex Slippage** |
|:----------:|:---------------------:|:-----------------------:|:--------------------:|:---------------------:|:----------------:|
|   virtual  |       11,285,000      |        22,570,000       |          403         |          202          |        54        |
|    trump   |       3,138,300       |        6,276,600        |          95          |           48          |        11        |
|    avax    |       1,580,100       |        3,160,200        |          79          |           40          |         9        |
|     arb    |       60,186,800      |       120,373,600       |          138         |           69          |        16        |
|     sol    |        817,500        |        1,635,000        |          23          |           12          |         2        |


*Slippage above in bp, on 500k$ worth of volume*

### Initial Margin Ratio

Lower the Initial Margin Ratio on the TRUMP market to 6.85 from 14.387.

## Abstract

The parameters being updated are described below;
 - The `maxMarketValue` is the oi cap in dollar terms and the maxMarketSize represents the cap denominated by the market's underlying currency.
 - `skewScale` is the scaling factor of the relevant market in the underlying currency for computing price impact and funding rates
 - `initialMarginRatio` is a scalar applied on the position size to determine the margin set aside to support the users' exposure


## Motivation

The motivation behind the Max Market Value update is related to the price pull back on these markets. These changes do not affect the current oi configured, given that the size parameter (maxMarketSize) plays the role to restrict the OI from a decrease in price. However, the change proposes in this sccp updates the max market value parameter as per the current oi offering in the most liquid centralized exchanges.

The skew scale and initial margin ratio parameters aligns the slippage and margin requirement parameters with what is observed on centralized markets.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
