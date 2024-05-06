---
sccp: 328
network: Base
title: Update Perps V3 Parameters
author: Kaleb (@kaleb-keny)
status: Vote_Pending
type: Governance
---

# Simple Summary

This SCCP proposes to update the perps v2 parameters as per the below:

## Max Market Value and Max Market Size

| **ticker** | **Current MMV** | **Proposed MMV** | **Current MMS** | **Proposed MMS** |
|:----------:|:---------------:|:----------------:|:---------------:|:----------------:|
|    link    |    1,000,000    |     UNCHANGED    |      60,000     |      100,000     |
|    bonk    |     500,000     |     1,000,000    |  45,000,000,000 |  55,000,000,000  |
|     ena    |     500,000     |     1,000,000    |     676,000     |     1,500,000    |
|     op     |     500,000     |     1,000,000    |     300,000     |      500,000     |
|      w     |     500,000     |     UNCHANGED    |     508,000     |     1,400,000    |
|    bome    |     500,000     |     UNCHANGED    |    20,000,000   |    80,000,000    |
|    gala    |     250,000     |     UNCHANGED    |    5,000,000    |    20,000,000    |
|     ton    |     250,000     |     UNCHANGED    |      40,000     |      200,000     |
|     tao    |     250,000     |     UNCHANGED    |       500       |       2,000      |
|     tia    |     250,000     |     UNCHANGED    |      20,000     |      100,000     |
|     sui    |     250,000     |     UNCHANGED    |     180,000     |      400,000     |
|     stx    |     250,000     |     UNCHANGED    |      80,000     |      200,000     |
|   pendle   |     250,000     |     UNCHANGED    |      35,000     |      100,000     |

## Initial Margin Ratio

| **Ticker** | **Current IMR** | **Proposed IMR** |
|:----------:|:---------------:|:----------------:|
|      W     |      15.39      |       3.87       |
|     SOL    |      24.39      |       4.90       |
|     BTC    |      13.35      |       1.54       |
|     ETH    |       8.92      |       1.16       |


# Abstract

The parameters configurations description is as follows:
- initialMarginRatio is a scalar applied on the minimumInitialMarginRatio to determine the minimum initial margin required to support a given portfolio of positions. A lower minimum initial margin ratio allows for more leverage.
- maxMarketSize is the max market value of the relevant market in the underlying currency
- maxMarketValue is the max market value of the relevant market in USD

# Motivation

The motivation behind the changes to the scalar applied on the initial margin is to align the potential leverage base we offer when compared to that obtained on centralized exchanges. While the update of max market value and max market size is done taking into current and expected rising amounts of liquidity provided as well as the open interest utilization on those markets. 

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).


