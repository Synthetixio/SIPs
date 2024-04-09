---
sccp: 316
network: Base
title: Enable Perps V3 Markets / Update Parameters
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2024-04-05
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0xa91ace8abb27f8edb96db0e581cf18245d3775a74fae4412c9deeb1ab0a6fc1b
type: Governance
---

# Simple Summary

This SCCP specifies the parameters of the followings SIPS:
- [SIP-363](https://sips.synthetix.io/sips/sip-363/) 
- [SIP-368](https://sips.synthetix.io/sips/sip-368/) 

The below parameters would be applied on the new markets:

| **Market** | **InitialMarginRatio** | **minimumInitialMarginRatio** | **maintenanceMarginScalar** | **skewScale** | **takerFeeRatio** | **maxMarketSize** | **maxMarketValue** |
|:----------:|:----------------------:|:-----------------------------:|:---------------------------:|:-------------:|:-----------------:|:-----------------:|:------------------:|
|     SNX    |          2.82          |              0.05             |             0.39            |   3,400,000   |       0.001       |      127,000      |       500,000      |
|     SOL    |          24.39         |              0.02             |             0.33            |   1,406,250   |       0.0008      |       2,900       |       500,000      |
|     WIF    |          5.99          |              0.04             |             0.4             |   10,000,000  |       0.001       |      152,000      |       500,000      |
|      W     |          15.39         |              0.05             |             0.35            |   8,750,000   |       0.001       |      508,000      |       500,000      |


Aside from the changes above, the perps markets will have the following configurations as well:
- MakerFeeRatio: 2 bp
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


