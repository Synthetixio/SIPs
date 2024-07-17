---
sccp: 340
network: Base
title: Enable Perps V3 Markets / Update Parameters
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2024-07-02
type: Governance
---

# Simple Summary

This SCCP specifies the parameters of [SIP-386](https://sips.synthetix.io/sips/sip-386/) 

The below parameters would be applied on the new markets:

| **Market** | **InitialMarginRatio** | **minInitialMarginRatio** | **maintMarginScalar** |   **skewScale**   | **maxMarketSize** | **maxMarketValue** |
|:----------:|:----------------------:|:-------------------------:|:---------------------:|:-----------------:|:-----------------:|:------------------:|
|     yfi    |          1.49          |            0.05           |          0.39         |       2,125       |         15        |       50,000       |
|     xrp    |          2.57          |            0.05           |          0.33         |    400,000,000    |      208,249      |       50,000       |
|     xlm    |           1.4          |            0.05           |          0.37         |    166,500,000    |     1,090,425     |       50,000       |
|     uni    |          0.77          |            0.05           |          0.31         |     2,250,000     |       21,419      |       100,000      |
|     trx    |          1.88          |            0.05           |          0.28         |    322,500,000    |      796,481      |       50,000       |
|    sushi   |          1.37          |            0.05           |          0.4          |     8,000,000     |      117,960      |       50,000       |
|    strk    |          0.89          |            0.05           |          0.37         |     20,000,000    |      144,743      |       50,000       |
|    shib    |           2.2          |            0.05           |          0.32         | 1,875,000,000,000 |   5,813,953,488   |       50,000       |
|     sei    |          5.13          |            0.05           |          0.39         |     35,500,000    |      293,317      |       50,000       |
|    rndr    |          5.09          |            0.05           |          0.37         |     3,750,000     |       65,023      |       250,000      |
|    pyth    |          0.84          |            0.05           |          0.37         |     60,000,000    |      617,717      |       100,000      |
|    near    |          3.35          |            0.05           |          0.36         |     9,375,000     |       18,900      |       50,000       |
|    meme    |          1.32          |            0.05           |          0.37         |    325,000,000    |     5,336,179     |       50,000       |
|     ltc    |          0.005         |            0.02           |          0.4          |     1,687,500     |       1,330       |       50,000       |
|     ldo    |          1.25          |            0.05           |          0.34         |     14,000,000    |      200,340      |       200,000      |
|     jup    |          3.35          |            0.05           |          0.37         |     22,500,000    |      121,567      |       50,000       |
|     jto    |          1.49          |            0.05           |          0.38         |     4,000,000     |       41,441      |       50,000       |
|     imx    |          1.95          |            0.05           |          0.4          |     5,600,000     |       63,418      |       50,000       |
|     icp    |          1.86          |            0.05           |          0.44         |     2,000,000     |       12,122      |       50,000       |
|     grt    |          4.22          |            0.05           |          0.39         |     75,000,000    |      472,043      |       50,000       |
|     fxs    |          2.59          |          0.06666          |          0.34         |     1,403,125     |       33,029      |       50,000       |
|    flow    |          9.28          |            0.1            |          0.28         |     15,000,000    |      159,395      |       50,000       |
|     fil    |          1.81          |            0.05           |          0.26         |     6,375,000     |       22,379      |       50,000       |
|   ethbtc   |          1.39          |            0.02           |          0.26         |   1,700,000,000   |     72,226,506    |      2,000,000     |
|     etc    |          2.71          |            0.05           |          0.33         |     2,250,000     |       4,200       |       50,000       |
|     eos    |          2.47          |            0.05           |          0.33         |     48,000,000    |      172,851      |       50,000       |
|    dydx    |          1.45          |            0.05           |          0.34         |     18,000,000    |       72,860      |       50,000       |
|     dot    |          2.09          |            0.05           |          0.32         |     7,500,000     |       15,793      |       50,000       |
|     crv    |          4.56          |            0.05           |          0.39         |     60,000,000    |     3,000,000     |       500,000      |
|    comp    |           1.8          |            0.05           |          0.41         |      120,938      |       2,003       |       50,000       |
|    blur    |          1.49          |            0.05           |          0.37         |     50,000,000    |      496,684      |       50,000       |
|     bch    |           1.6          |            0.05           |          0.32         |       84,375      |        256        |       50,000       |
|     bal    |          3.94          |            0.05           |          0.35         |     1,125,000     |       33,624      |       50,000       |
|     axs    |          0.88          |            0.05           |          0.31         |     2,109,375     |       16,488      |       50,000       |
|    atom    |          2.49          |            0.05           |          0.31         |     5,625,000     |       14,718      |       50,000       |
|     apt    |            1           |            0.05           |          0.31         |     3,037,500     |       14,055      |       50,000       |
|    algo    |          5.19          |            0.05           |          0.36         |     51,937,500    |     1,360,068     |       100,000      |
|     ada    |          4.35          |            0.05           |          0.33         |    150,000,000    |      499,984      |       100,000      |
|    aave    |          3.38          |            0.05           |          0.38         |      180,000      |       2,022       |       100,000      |

Aside from the changes above, the perps markets will have the following configurations as well:
- MakerFeeRatio: 2 bp / except ETHBTC 0.001 bp
- TakerFeeRatio: 10 bp / except ETHBTC 5 bp
- maxFundingVelocity: 36 / except ETHBTC 9
- flagRewardRatio: 3 bp
- minimumPositionMargin: 50 snxUSD
- lockedOiRatio: 0.5 / except ETHBTC 0.25
- maxLiquidationLimitMultiplier: 1.5
- maxLiquidationPD: 5 bp
- endorsedLiquidator: "0x11233749514Ab8d00C0A5873DF7428b3db70030f"

# Abstract

The parameters configurations description is as follows:
- initialMarginRatio is a scalar applied on the minimumInitialMarginRatio to determine the minimum initial margin required to support a given portfolio of positions
- maintenanceMarginScalar is a scalar applied on the initialMarginRatio in order to obtain the maintenanceMargin. When traders fall below the maintenance margin, they head to the oubliette.
- skewScale is the scaling factor of the relevant market in the underlying currency for computing price impact and funding rates
- maxMarketSize is the max market value of the relevant market in the underlying currency
- maxMarketValue is the max market value of the relevant market in USD
- maker/taker fees pertain to fees charged when trading
- maxFundingVelocity is the main parameter that allows to nudge funding rates
- minimumPositionMargin is the minimum margin required
- lockedOiRatio is the multiplier that determines the minimum amount of perp collateral required to back a given perp market
- maxLiquidationLimitMultiplier is a parameter that rate limits liquidations. It is applied on the sum of maker and taker fees with a liquidation rate limit being triggered if pd exceeds that value
- maxLiquidationPD is the minimum pd that triggers a reset of the liquidation capacity
- flagRewardRatio is the reward paid to the flagger, capped at 100 snxUSD per account liquidated
- endorsedLiquidator is a liquidator address that can bypass the rate limit

# Motivation

The main motivation is to  launch the markets specified above.

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).


