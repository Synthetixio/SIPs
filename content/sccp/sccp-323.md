---
sccp: 323
network: Base
title: Enable Perps V3 Markets / Update Parameters
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2024-04-16
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0xfd6710af4630801d680017a6eeea8b16785f3d84dd23e821dca999ba8eece997
---

# Simple Summary

This SCCP specifies the parameters of the followings SIPS:
- [SIP-373](https://sips.synthetix.io/sips/sip-373/) 
- [SIP-376](https://sips.synthetix.io/sips/sip-376/) 

The below parameters would be applied on the new markets:

| **Market** | **InitialMarginRatio** | **minimumInitialMarginRatio** | **maintenanceMarginScalar** |   **skewScale**   | **maxMarketSize** |
|:----------:|:----------------------:|:-----------------------------:|:---------------------------:|:-----------------:|:-----------------:|
|     ENA    |          3.46          |             5.00%             |             0.38            |     25,500,000    |      676,000      |
|    DOGE    |           6.9          |             2.00%             |             0.3             |    789,000,000    |     4,200,000     |
|    AVAX    |          9.08          |             2.00%             |             0.36            |     1,250,000     |       19,000      |
|     OP     |          2.27          |             4.00%             |             0.38            |     16,000,000    |      300,000      |
|    ORDI    |          3.02          |             2.00%             |             0.38            |      870,000      |       15,000      |
|    PEPE    |          4.88          |             4.00%             |             0.43            | 8,400,000,000,000 |  360,000,000,000  |
|    RUNE    |           5.39         |             5.00%             |             0.36            |      2,000,000    |       94,300      |
|    BONK    |           2.55         |             5.00%             |             0.37            |  800,000,000,000  |   45,000,000,000  |
|     FTM    |          5.58          |             3.33%             |             0.38            |     59,000,000    |      965,000      |
|     ARB    |          4.16          |             3.33%             |             0.38            |     41,000,000    |      565,000      |
|    MATIC   |          4.41          |             2.00%             |             0.26            |     84,000,000    |      940,000      |
|     BNB    |          10.72         |             2.00%             |             0.35            |      250,000      |      1,200        |


Aside from the changes above, the perps markets will have the following configurations as well:
- MakerFeeRatio: 2 bp
- TakerFeeRatio: 10 bp
- maxMarketValue: 500k$ for all, except PEPE 1.5m$
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


