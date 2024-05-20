---
sccp: 332
network: Base
title: Update Perps V3 Parameters
author: Kaleb (@kaleb-keny)
status: Draft
type: Governance
---

# Simple Summary

This SCCP proposes to update the perps v2 parameters as per the below:

## Max Market Value and Max Market Size

| **Market** | **Current MMV** | **Proposed MMV** | **Change MMV** | **Current MMS** | **Proposed MMS** |  **Change MMS** |
|:----------:|:---------------:|:----------------:|:--------------:|:---------------:|:----------------:|:---------------:|
|     btc    |      10.00      |       15.00      |      +5.00     |       230       |        400       |       +170      |
|     eth    |      10.00      |       15.00      |      +5.00     |      5,000      |      10,000      |      +5,000     |
|     sol    |       3.00      |       5.00       |      +2.00     |      30,000     |      60,000      |     +30,000     |
|    doge    |       0.50      |       2.00       |      +1.50     |    4,200,000    |    25,000,000    |   +20,800,000   |
|     bnb    |       0.50      |       2.00       |      +1.50     |      1,200      |       7,000      |      +5,800     |
|    matic   |       0.50      |       2.00       |      +1.50     |     940,000     |     6,000,000    |    +5,060,000   |
|    avax    |       0.50      |       2.00       |      +1.50     |      19,000     |      100,000     |     +81,000     |
|     sui    |       0.25      |       1.00       |      +0.75     |     400,000     |     2,000,000    |    +1,600,000   |
|     arb    |       0.50      |       1.00       |      +0.50     |     565,000     |     2,000,000    |    +1,435,000   |
|     wif    |       1.50      |       2.00       |      +0.50     |     750,000     |     1,500,000    |     +750,000    |
|    ordi    |       0.50      |       1.00       |      +0.50     |      15,000     |      50,000      |     +35,000     |
|     ftm    |       0.50      |       1.00       |      +0.50     |     965,000     |     2,000,000    |    +1,035,000   |
|    rune    |       0.50      |       1.00       |      +0.50     |      94,300     |      300,000     |     +205,700    |
|     axl    |       0.20      |       0.50       |      +0.30     |     200,000     |     1,000,000    |     +800,000    |
|    ethfi   |       0.20      |       0.50       |      +0.30     |      60,000     |      300,000     |     +240,000    |
|    arkm    |       0.24      |       0.50       |      +0.26     |     100,000     |      400,000     |     +300,000    |
|     inj    |       0.25      |       0.50       |      +0.25     |      10,000     |      40,000      |     +30,000     |
|     stx    |       0.25      |       0.50       |      +0.25     |     200,000     |      500,000     |     +300,000    |
|     tia    |       0.25      |       0.50       |      +0.25     |     100,000     |      120,000     |     +20,000     |
|   pendle   |       0.25      |       0.50       |      +0.25     |     100,000     |      200,000     |     +100,000    |
|     gmx    |       0.25      |       0.50       |      +0.25     |      10,000     |      35,000      |     +25,000     |
|     tao    |       0.25      |       0.50       |      +0.25     |      2,000      |       3,000      |      +1,000     |
|    pepe    |       1.50      |       1.50       |        -       | 360,000,000,000 |  360,000,000,000 |        -        |
|    link    |       1.00      |       1.00       |        -       |     100,000     |      120,000     |     +20,000     |
|     op     |       1.00      |       1.00       |        -       |     500,000     |      750,000     |     +250,000    |
|    bonk    |       1.00      |       1.00       |        -       |  55,000,000,000 |  75,000,000,000  | +20,000,000,000 |
|    gala    |       0.25      |       0.25       |        -       |    20,000,000   |    20,000,000    |        -        |
|     ton    |       0.25      |       0.25       |        -       |     200,000     |      200,000     |        -        |
|     ena    |       1.00      |       1.00       |        -       |    1,500,000    |     3,000,000    |    +1,500,000   |
|    bome    |       0.50      |       0.50       |        -       |    80,000,000   |    90,000,000    |   +10,000,000   |
|      w     |       0.50      |       0.50       |        -       |    1,400,000    |     2,000,000    |     +600,000    |
|     snx    |       1.00      |       0.50       |      -0.50     |     500,000     |      500,000     |        -        |

# Abstract

The parameters configurations description is as follows:
- maxMarketSize is the max market value of the relevant market in the underlying currency
- maxMarketValue is the max market value of the relevant market in USD

# Motivation

The motivation behind the changes to scale up perps trading on base, as the LP collateral pool size has increased. 

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).


