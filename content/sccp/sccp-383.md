---
sccp: 383
title: Deploy TRUMP and MELANIA to Perps V3 Base
network: Base
status: Vote_Pending
type: Governance
proposal: >-
 https://snapshot.org/#/snxgov.eth/proposal/0xfb2e7385229d57ae370d731f5be0ec118dea6bac1e4530ad3b9eabb141df0e77
created: 2025-01-20
author: Kaleb
---

# Simple Summary

This SCCP proposes to deploy the below markets on Perps V3 on Base:

| **Market** | **minimumInitialMarginRatio** | **initialMarginRatio** | **maintenanceMarginScalar** | **skewScale** | **maxMarketSize** | **maxMarketValue** |
|:----------:|:-----------------------------:|:----------------------:|:---------------------------:|:-------------:|:-----------------:|:------------------:|
|   MELANIA  |             1.811             |          5.00%         |            0.408            |    750,000    |    1,000,000.00   |      2,000,000     |
|    TRUMP   |             14.837            |          5.00%         |            0.407            |   1,500,000   |     105,000.00    |      3,000,000     |


Aside from the above parameters , the perps markets will have the following configurations as well:
- TakerFeeRatio: 10 bp 
- MakerFeeRatio: 2 bp
- maxFundingVelocity: 36
- flagRewardRatio: 3 bp
- minimumPositionMargin: 15
- lockedOiRatio: 0.1
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
