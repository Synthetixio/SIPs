---
sccp: 358
title: Deploy More Markets on Perps V3 Base and Arbitrum
network: Base & Arbitrum
status: Draft
type: Governance
created: 2024-10-11
author: Robin (@robin2192), Kaleb
---

# Simple Summary

This SCCP proposes to deploy the below markets on Perps V3 on Base and Arbitrum.

## Base Markets:

| **Market** | **minimumInitialMarginRatio** | **InitialMarginRatio** | **maintenanceMarginScalar** |    **skewScale**    | **maxMarketSize** | **maxMarketValue** |
|:----------:|:-----------------------------:|:----------------------:|:---------------------------:|:-------------------:|:-----------------:|:------------------:|
|     MKR    |             5.00%             |          0.522         |            0.334            |        9,000        |        730        |      1,000,000     |
|     POL    |             5.00%             |          0.438         |            0.346            |      40,250,000     |     2,665,960     |      1,000,000     |
|     MEW    |             5.00%             |          1.597         |            0.328            |    2,500,000,000    |    123,319,770    |      1,000,000     |
|   POPCAT   |             5.00%             |          2.808         |            0.328            |      20,250,000     |      711,490      |      1,000,000     |
|    EIGEN   |             5.00%             |          0.91          |            0.334            |      4,000,000      |      268,820      |      1,000,000     |
|     WLD    |             5.00%             |          1.168         |            0.335            |      20,000,000     |      428,600      |      1,000,000     |
|   PEOPLE   |             5.00%             |          2.403         |            0.334            |     500,000,000     |     11,341,730    |      1,000,000     |
|     ZRO    |             5.00%             |          1.037         |            0.334            |      4,250,000      |      237,850      |      1,000,000     |
|   RENDER   |             5.00%             |          1.467         |            0.325            |      2,250,000      |      179,630      |      1,000,000     |
|     NOT    |             5.00%             |          1.14          |            0.345            |    5,000,000,000    |    118,077,700    |      1,000,000     |
|    SATS    |             5.00%             |          0.907         |            0.345            | 100,000,000,000,000 | 3,332,222,592,470 |      1,000,000     |
|     IO     |             5.00%             |          0.694         |            0.334            |      6,000,000      |      477,550      |      1,000,000     |

## Arbitrum Markets:

| **Market** | **minimumInitialMarginRatio** | **InitialMarginRatio** | **maintenanceMarginScalar** |     **skewScale**    |  **maxMarketSize** | **maxMarketValue** |
|:----------:|:-----------------------------:|:----------------------:|:---------------------------:|:--------------------:|:------------------:|:------------------:|
|   ALGO     |             5.00%             |          5.19          |             0.36            |    103,875,000.00    |    5,953,850.00    |     500,000.00     |
|   APT      |             5.00%             |          1.00          |             0.31            |     6,075,000.00     |     352,300.00     |    2,000,000.00    |
|   ARKM     |             5.00%             |          4.43          |             0.44            |     11,000,000.00    |     400,000.00     |     500,000.00     |
|   ATOM     |             5.00%             |          2.49          |             0.31            |     11,250,000.00    |     329,300.00     |    1,000,000.00    |
|   AXL      |             5.00%             |          2.85          |             0.34            |     10,125,000.00    |    1,000,000.00    |     500,000.00     |
|   AXS      |             5.00%             |          0.88          |             0.31            |     4,218,750.00     |     162,000.00     |     500,000.00     |
|   BAL      |             5.00%             |          3.94          |             0.35            |     1,125,000.00     |     377,600.00     |     500,000.00     |
|   BCH      |             5.00%             |          1.60          |             0.32            |      168,750.00      |      9,350.00      |    2,000,000.00    |
|   BLUR     |             5.00%             |          1.49          |             0.37            |    100,000,000.00    |    3,329,150.00    |     500,000.00     |
|   BOME     |             5.00%             |          1.44          |             0.38            |   3,750,000,000.00   |   229,513,950.00   |    1,000,000.00    |
|   BONK     |             5.00%             |          2.55          |             0.37            | 1,600,000,000,000.00 | 135,525,228,000.00 |    2,000,000.00    |
|   COMP     |             5.00%             |          1.80          |             0.41            |      241,876.00      |      17,000.00     |     500,000.00     |
|   DOT      |             5.00%             |          2.09          |             0.32            |     15,000,000.00    |     724,950.00     |    2,000,000.00    |
|   ENA      |             5.00%             |          3.46          |             0.38            |    102,000,000.00    |    3,000,000.00    |    1,000,000.00    |
|   EOS      |             5.00%             |          2.47          |             0.33            |     72,000,000.00    |    3,182,150.00    |    1,000,000.00    |
|   ETC      |             5.00%             |          2.71          |             0.33            |     3,375,000.00     |      80,750.00     |    1,000,000.00    |
|   ETHBTC   |             2.00%             |          1.39          |             0.26            |   3,400,000,000.00   |    72,226,506.00   |    2,000,000.00    |
|   ETHFI    |             5.00%             |          2.12          |             0.38            |     16,500,000.00    |     300,000.00     |     500,000.00     |
|   FIL      |             5.00%             |          1.81          |             0.26            |     12,750,000.00    |     812,100.00     |    2,000,000.00    |
|   FLOW     |             10.00%            |          9.28          |             0.28            |     15,000,000.00    |    1,380,350.00    |     500,000.00     |
|   FTM      |             3.33%             |          5.58          |             0.38            |    118,000,000.00    |    4,655,350.00    |    2,000,000.00    |
|   FXS      |             6.67%             |          2.59          |             0.34            |     2,104,687.00     |     371,700.00     |     500,000.00     |
|   GALA     |             5.00%             |          1.29          |             0.35            |   1,125,000,000.00   |    36,165,750.00   |     500,000.00     |
|   GRT      |             5.00%             |          4.22          |             0.39            |    112,500,000.00    |    4,516,800.00    |     500,000.00     |
|   ICP      |             5.00%             |          1.86          |             0.44            |     3,000,000.00     |      91,100.00     |     500,000.00     |
|   IMX      |             5.00%             |          1.95          |             0.40            |     8,400,000.00     |     508,750.00     |     500,000.00     |
|   INJ      |             5.00%             |          1.31          |             0.46            |     2,250,000.00     |      73,500.00     |    1,000,000.00    |
|   JTO      |             5.00%             |          1.49          |             0.38            |     8,000,000.00     |     369,800.00     |     500,000.00     |
|   JUP      |             5.00%             |          3.35          |             0.37            |     33,750,000.00    |     967,850.00     |     500,000.00     |
|   LDO      |             5.00%             |          1.25          |             0.34            |     21,000,000.00    |     695,300.00     |     500,000.00     |
|   MEME     |             5.00%             |          1.32          |             0.37            |   1,300,000,000.00   |    73,846,350.00   |     500,000.00     |
|   PENDLE   |             5.00%             |          2.45          |             0.37            |     6,000,000.00     |     200,000.00     |     500,000.00     |
|   SEI      |             5.00%             |          5.13          |             0.39            |     71,000,000.00    |    3,496,500.00    |    1,000,000.00    |
|   SNX      |             5.00%             |          2.82          |             0.39            |     10,200,000.00    |     500,000.00     |     500,000.00     |
|   STRK     |             5.00%             |          0.89          |             0.37            |     40,000,000.00    |    1,904,850.00    |     500,000.00     |
|   SUI      |             5.00%             |          1.96          |             0.34            |     55,000,000.00    |    1,559,950.00    |    2,000,000.00    |
|   SUSHI    |             5.00%             |          1.37          |             0.40            |     16,000,000.00    |    1,018,050.00    |     500,000.00     |
|   TAO      |             5.00%             |          2.89          |             0.37            |       32,500.00      |      2,450.00      |    1,000,000.00    |
|   TON      |             5.00%             |          2.89          |             0.37            |     12,000,000.00    |     576,800.00     |    2,000,000.00    |
|   TRX      |             5.00%             |          1.88          |             0.28            |    806,250,000.00    |    19,348,600.00   |    2,000,000.00    |
|     W      |             5.00%             |          3.87          |             0.35            |     59,062,500.00    |    2,000,000.00    |     500,000.00     |
|   YFI      |             5.00%             |          1.49          |             0.39            |       2,125.00       |       150.00       |     500,000.00     |
|     MEW    |             5.00%             |          1.597         |            0.328            |     2,500,000,000    |     123,319,770    |      1,000,000     |
|   POPCAT   |             5.00%             |          2.808         |            0.328            |      20,250,000      |       711,490      |      1,000,000     |
|    EIGEN   |             5.00%             |          0.91          |            0.334            |       4,000,000      |       268,820      |      1,000,000     |
|     WLD    |             5.00%             |          1.168         |            0.335            |      20,000,000      |       428,600      |      1,000,000     |
|   PEOPLE   |             5.00%             |          2.403         |            0.334            |      500,000,000     |     11,341,730     |      1,000,000     |
|     ZRO    |             5.00%             |          1.037         |            0.334            |       4,250,000      |       237,850      |      1,000,000     |
|   RENDER   |             5.00%             |          1.467         |            0.325            |       2,250,000      |       179,630      |      1,000,000     |
|     NOT    |             5.00%             |          1.14          |            0.345            |     5,000,000,000    |     118,077,700    |      1,000,000     |
|    SATS    |             5.00%             |          0.907         |            0.345            |  100,000,000,000,000 |  3,332,222,592,470 |      1,000,000     |
|     IO     |             5.00%             |          0.694         |            0.334            |       6,000,000      |       477,550      |      1,000,000     |

Aside from the above parameters , the perps markets will have the following configurations as well:
- TakerFeeRatio: 10 bp
- MakerFeeRatio: 0 bp
- maxFundingVelocity: 9
- flagRewardRatio: 3 bp
- minimumPositionMargin: 50
- lockedOiRatio: 0.5 
- maxLiquidationLimitMultiplier: 1.5
- maxLiquidationPD: 5 bp
- endorsedLiquidator: "0x11233749514Ab8d00C0A5873DF7428b3db70030f"


# Abstract

The parameters configurations description is as follows:
- initialMarginRatio is a scalar applied on the minimumInitialMarginRatio to determine the minimum initial margin required to support a given portfolio of positions
- maintenanceMarginScalar is a scalar applied on the initialMargin in order to obtain the maintenanceMargin. When traders fall below the maintenance margin, they are liquidated.
- skewScale is the scaling factor of the relevant market in the underlying currency for computing price impact and funding rates
- maxMarketSize is the max market value of the relevant market in the underlying currency
- maxMarketValue is the max market value of the relevant market in USD
- maker/taker fees pertain to fees charged when trading
- maxFundingVelocity is the main parameter that allows to nudge funding rates
- minimumPositionMargin is the minimum margin required
- lockedOiRatio is the multiplier that determines the minimum amount of perp collateral required to back a given perp market
- maxLiquidationLimitMultiplier is a parameter that rate limits liquidations. It is applied on the sum of maker and taker fees with a liquidation rate limit being triggered if pd exceeds that value
- maxLiquidationPD is the minimum pd that triggers a reset of the liquidation capacity
- endorsedLiquidator is a liquidator address that can bypass the rate limit
- the collateral liquidation penalty is the penalty paid to the liquidator for executing a liquidation


# Motivation

The main motivation is to bring the deployed markets on Base and Arbitrum to parity, while also launching additional markets with high caps to both, in order to fully showcase the feature set available with the V3 deploy.

# Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).