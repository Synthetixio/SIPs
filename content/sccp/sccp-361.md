---
sccp: 361
title: Deploy More Markets to Perps V3 Base and Arbitrum
network: Arbitrum & Base
status: Approved
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x5e7cf75d134a601387307761637ae1518d597ba3da6f48ea787149ed6ee62d18
type: Governance
created: 2024-10-28
author: Robin (@robin2192), Kaleb
---

# Simple Summary

This SCCP proposes to deploy the below markets on Perps V3 on Base and Arbitrum.

| **Market** | **minimumInitialMarginRatio** | **initialMarginRatio** | **maintenanceMarginScalar** | **skewScale** | **maxMarketSize** | **maxMarketValue** |
|:----------:|:-----------------------------:|:----------------------:|:---------------------------:|:-------------:|:-----------------:|:------------------:|
|    GOAT    |               5%              |          2.459         |            0.317            |      20M      |     5,000,000     |      3,000,000     |
|   MOODENG  |               5%              |          1.588         |            0.317            |      50M      |     17,000,000    |      3,000,000     |
|    SAFE    |               5%              |          1.211         |            0.317            |       3M      |      500,000      |       500,000      |
|     CAT    |               5%              |          1.575         |            0.328            |      250B     |   35,000,000,000  |      1,000,000     |

Aside from the above parameters , the perps markets will have the following configurations as well:
- TakerFeeRatio: 10 bp (5 bp during the promotional period)
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

The more options traders have via Synthetix Perps, the less likely they will move their margin to other trading venues to trade markets we don't provide. 

# Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
