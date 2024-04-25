---
sccp: 327
network: Base
title: Enable Perps V3 Markets / Update Parameters
author: Kaleb (@kaleb-keny)
status: Vote_Pending
created: 2024-04-25
type: Governance
---

# Simple Summary

This SCCP specifies the parameters of the followings SIPS:
- [SIP-370](https://sips.synthetix.io/sips/sip-370/) 
- [SIP-372](https://sips.synthetix.io/sips/sip-372/) 
- [SIP-375](https://sips.synthetix.io/sips/sip-375/) 
- [SIP-379](https://sips.synthetix.io/sips/sip-379/) 
- [SIP-380](https://sips.synthetix.io/sips/sip-380/) 

The below parameters would be applied on the new markets:

| **Market** | **InitialMarginRatio** | **minInitialMarginRatio** | **maintMarginScalar** | **skewScale** | **maxMarketSize** | **maxMarketValue** |
|:----------:|:----------------------:|:-------------------------:|:---------------------:|:-------------:|:-----------------:|:------------------:|
|     tao    |          2.89          |             5%            |          0.37         |     16,250    |        500        |       250,000      |
|    link    |          6.73          |             2%            |          0.37         |   3,750,000   |       60,000      |      1,000,000     |
|     gmx    |          1.27          |             5%            |          0.44         |    125,000    |       10,000      |       250,000      |
|     inj    |          1.31          |             5%            |          0.46         |    750,000    |       10,000      |       250,000      |
|     axl    |          2.85          |             5%            |          0.34         |   3,375,000   |      200,000      |       250,000      |
|     sui    |          1.96          |             5%            |          0.34         |   27,500,000  |      180,000      |       250,000      |
|    ethfi   |          2.12          |             5%            |          0.38         |   5,500,000   |       60,000      |       250,000      |
|     tia    |          2.24          |             5%            |          0.38         |   3,000,000   |       20,000      |       250,000      |
|     stx    |          2.61          |             5%            |          0.43         |   7,500,000   |       80,000      |       250,000      |
|    arkm    |          4.43          |             5%            |          0.44         |   5,500,000   |      100,000      |       250,000      |
|     ton    |          2.89          |             5%            |          0.37         |   4,000,000   |       40,000      |       250,000      |
|   pendle   |          2.45          |             5%            |          0.37         |   3,000,000   |       35,000      |       250,000      |
|    gala    |          1.29          |             5%            |          0.35         |  750,000,000  |     5,000,000     |       250,000      |
|    bome    |          1.44          |             5%            |          0.38         | 1,875,000,000 |     20,000,000    |       500,000      |

Aside from the changes above, the perps markets will have the following configurations as well:
- MakerFeeRatio: 2 bp
- TakerFeeRatio: 10 bp
- maxFundingVelocity: 36
- flagRewardRatio: 3 bp
- minimumPositionMargin: 50 snxUSD
- lockedOiRatio: 0.5
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


