---
sccp: 372
title: Deploy More Markets to Perps V3 Base and Arbitrum
network: Arbitrum & Base
status: Vote_Pending
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x7dfe429b79f136243c3a9821508aee40fd4c708ff2ccd9faac6a3e70335b20c5
type: Governance
created: 2024-12-04
author: Kaleb
---

# Simple Summary

This SCCP proposes to deploy the below markets on Perps V3 on Base and Arbitrum:

| **Market** | **minimumInitialMarginRatio** | **initialMarginRatio** | **maintenanceMarginScalar** | **skewScale** | **maxMarketSize** | **maxMarketValue** |
|:----------:|:-----------------------------:|:----------------------:|:---------------------------:|:-------------:|:-----------------:|:------------------:|
|   MORPHO   |               5%              |          1.36          |             0.317           |   2,000,000   |     1,000,000     |      1,000,000     |
|  CHILLGUY  |               5%              |          1.36          |             0.317           |    8,000,000  |     6,000,000     |      2,000,000     |
|    AERO    |               5%              |          0.322         |             0.317           |      500,000  |     1,000,000     |        300,000     |


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

The more options traders have via Synthetix Perps, the less likely they will move their margin to other trading venues to trade markets we don't provide. 

# Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
