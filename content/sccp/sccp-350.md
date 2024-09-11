---
sccp: 350
title: Deploy More Markets on Perps V3 Arbitrum
network: Arbitrum
status: Draft
type: Governance
created: 2024-09-02
author: Kaleb
---

# Simple Summary

This SCCP proposes to deploy the below markets on the new Perps V3 deploy as well SOL and USDe for direct margining.

## Markets:

| **Market** | **minimumInitialMarginRatio** | **InitialMarginRatio** | **maintenanceMarginScalar** |   **skewScale**   | **maxMarketSize** | **maxMarketValue** |
|:----------:|:-----------------------------:|:----------------------:|:---------------------------:|:-----------------:|:-----------------:|:------------------:|
|    LINK    |             0.20%             |          5.00          |             0.34            |     3,750,000     |      450,000      |      5,000,000     |
|     ARB    |             0.33%             |          1.90          |             0.38            |     50,000,000    |     6,000,000     |      3,000,000     |
|    DOGE    |             0.20%             |          1.60          |             0.36            |    789,000,000    |     51,000,000    |      5,000,000     |
|     GMX    |             0.50%             |          1.20          |             0.4             |      250,000      |       20,000      |       500,000      |
|    AAVE    |             0.50%             |          4.10          |            0.375            |      180,000      |       50,000      |      3,000,000     |
|    NEAR    |             0.50%             |          1.60          |             0.35            |     8,000,000     |      750,000      |      3,000,000     |
|     UNI    |             0.50%             |          0.49          |             0.31            |     2,250,000     |      500,000      |      3,000,000     |
|     XRP    |             0.50%             |          1.20          |             0.32            |    187,500,000    |     5,000,000     |      1,000,000     |
|     LTC    |             0.20%             |          5.50          |             0.4             |     1,687,500     |       77,000      |      5,000,000     |
|    ORDI    |             0.20%             |          1.16          |             0.38            |      870,000      |      100,000      |      3,000,000     |
|     STX    |             0.50%             |          2.80          |             0.43            |     15,000,000    |      700,000      |      1,000,000     |
|    SHIB    |             0.50%             |          2.66          |             0.32            | 4,000,000,000,000 |  150,000,000,000  |      2,000,000     |
|     BNB    |             0.20%             |          3.40          |             0.37            |      250,000      |       9,500       |      5,000,000     |
|    AVAX    |             0.20%             |          4.20          |             0.36            |     1,250,000     |      225,000      |      5,000,000     |
|    PEPE    |             0.50%             |          0.60          |             0.32            | 8,400,000,000,000 |  660,000,000,000  |      5,000,000     |
|     OP     |             0.40%             |          1.00          |             0.37            |     16,000,000    |     2,000,000     |      3,000,000     |
|    RUNE    |             0.50%             |          8.30          |             0.36            |     4,000,000     |      500,000      |      2,000,000     |
|    PYTH    |             0.50%             |          0.50          |             0.37            |     14,437,500    |     3,700,000     |      1,000,000     |
|     CRV    |             0.50%             |          0.60          |             0.33            |     50,000,000    |     10,000,000    |      3,000,000     |
|     TIA    |             0.50%             |          1.20          |             0.38            |     4,000,000     |      800,000      |      4,000,000     |
|     ADA    |             0.50%             |          3.20          |             0.33            |    150,000,000    |     12,000,000    |      4,000,000     |
|     BCH    |             0.50%             |          1.10          |             0.31            |       84,375      |       15,000      |      5,000,000     |
|    DYDX    |             0.50%             |          1.30          |             0.34            |     18,000,000    |     2,000,000     |      2,000,000     |
|     POL    |             0.20%             |          1.80          |             0.37            |     75,000,000    |     7,500,000     |      3,000,000     |
|     MKR    |             0.50%             |          1.20          |             0.33            |       9,000       |       1,200       |      2,000,000     |
|     XLM    |             0.50%             |          1.20          |             0.37            |    166,500,000    |     11,000,000    |      1,000,000     |

Aside from the above parameters , the perps markets will have the following configurations as well:
- TakerFeeRatio: 10 bp
- MakerFeeRatio: 0 bp
- maxFundingVelocity: 36
- flagRewardRatio: 3 bp
- minimumPositionMargin: 50
- lockedOiRatio: 0.5 
- maxLiquidationLimitMultiplier: 1.5
- maxLiquidationPD: 5 bp
- endorsedLiquidator: "0x11233749514Ab8d00C0A5873DF7428b3db70030f"


## Margins:

| **Margins** | **discountLower** | **discountUpper** | **maxCollateral** | **skewScale** |
|:-----------:|:-----------------:|:-----------------:|:-----------------:|:-------------:|
|     SOL     |       5.00%       |       15.00%      |       7,500       |   1,406,250   |
|     USDe    |       0.50%       |       0.51%       |     10,000,000    |   1 wei       |

Aside from the above parameters, the following parameters apply:
- the `discountScalar` would be set to 1 for all margins 
- the collateral liquidation penalty is 3 bp (`collateralLiquidateRewardRatioD18`)
- The `maxKeeperScalingRatio` would be set to 40%
- the [wormhole sol](https://arbiscan.io/address/0xb74da9fe2f96b9e0a5f4a3cf0b92dd2bec617124) token would be used 
- the [bridged usde](https://arbiscan.io/token/0x5d3a1ff2b6bab83b63cd9ad0787074081a52ef34) token would be used
- The tokens that could be used as margin would be the synth equivalent of the tokens noted above with no fee on wrapping being levied
- The synth fee to sell the synth to USDx (except on USDC) would be set to 30% to discourage swapping until [SIP-406](https://sips.synthetix.io/sips/sip-406/) is implemented

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
- flagRewardRatio is the reward paid to the flagger, capped at 100 snxUSD per account liquidated
- endorsedLiquidator is a liquidator address that can bypass the rate limit
- A discount rate is applied on the margin posted which scales based on it's size and is clamped between the lower and upper limit
- Max Collateral Amount is the maximum possible amount of margin that can be posted
- discountScalar helps increase or decrease the price impact on an account's margin holding 
- the collateral liquidation penalty is the penalty paid to the liquidator for executing a liquidation
- minReward/maxReward is used to clamp the reward paid to the keeper for settling an order or liquidating
- profitRatio is an additional profit rate added to the gas costs to increase the incentive to keepers to execute when gas costs rise.
- maxKeeperScalingRatio is the cap on the reward paid to keepers, as a function of the size of the margin. It is intended to limit the situation where accounts are liquidated because of gas price surges


# Motivation

The main motivation is to launch more markets on  perps v3 on arbitrum with high caps in order to showcase the feature set available with the v3 deploy.

# Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
