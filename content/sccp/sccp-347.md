---
sccp: 347
title: Deploy Multicollateral Perps Arbitrum
network: Arbitrum
status: Approved
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x2e2528343ec51eb6385a2922f6f7ec08a804bec0afdafff7c97d606ec539e44f
created: 2024-08-06
author: Kaleb
---

# Simple Summary

This SCCP proposes to deploy multi-collateral [Perps V3](https://sips.synthetix.io/sips/sip-383/), on Abitrum with following configurations:

## Markets:

| **Market** | **minimumInitialMarginRatio** | **InitialMarginRatio** | **maintenanceMarginScalar** | **skewScale** | **maxMarketSize** | **maxMarketValue** | **takerFeeRatio**   |
|:----------:|:----------------------:|:-----------------------------:|:---------------------------:|:-------------:|:-----------------:|:------------------:|:-------------------:|
|     ETH    |          2.00%         |             0.744             |            0.333            |    350,000    |       15,000      |     40,000,000     |        5  bp        |
|     BTC    |          2.00%         |              1.07             |            0.333            |     35,000    |       1,200       |     50,000,000     |        5  bp        |
|     SOL    |          2.00%         |             5.503             |            0.333            |   1,406,250   |      270,000      |     40,000,000     |        8  bp        |
|     WIF    |          4.00%         |              1.00             |             0.5             |   15,000,000  |     2,500,000     |      3,000,000     |        10 bp        |

Aside from the above parameters , the perps markets will have the following configurations as well:
- MakerFeeRatio: 0 bp
- maxFundingVelocity: 9 (36 for WIF)
- flagRewardRatio: 3 bp
- minimumPositionMargin: 50
- lockedOiRatio: 0.25 (0.5 for WIF and SOL)
- maxLiquidationLimitMultiplier: 1.5
- maxLiquidationPD: 5 bp
- endorsedLiquidator: "0x11233749514Ab8d00C0A5873DF7428b3db70030f"


## Margins:

| **Margin** | **Discount Lower** | **Discount Upper** | **Max Collateral Amount** |
|:----------:|:------------------:|:------------------:|:-------------------------:|
|     ETH    |        1.00%       |       10.00%       |           1,000           |
|     BTC    |        1.00%       |        7.50%       |             75            |
|     USD    |          0         |          0         |             NA            |

Aside from the above parameters, the following parameters apply:
-  the `discountScalar` would be set to 1 for all margins 
-  the collateral liquidation penalty is 3 bp (`collateralLiquidateRewardRatioD18`).

## Assymetric Interest Rate:
The assymetric  interest rate parameters would be disabled by setting the relevant parameters to zero.


## Account Caps:
Accounts would be set to allow for 3 collaterals and 10 simultaneous positions

## Keeper Reward Parameters:

|     **Parameter**     | **Value** |
|:---------------------:|:---------:|
|       minReward       |     1     |
|      profitRatio      |    30%    |
| maxKeeperScalingRatio |    3 bp   |
|       maxReward       |     30    |
|      l1SettleGas      |   30k     |
|      l2SettleGas      |    2M     |
|       l1FlagGas       |   5,500   |
|       l2FlagGas       |   850k    |
|     l1LiquidateGas    |   5,500   |
|     l2LiquidateGas    |  550k     |

## Wrappers:

The below wrappers would be setup with no fees, in order to allow traders to acquire xETH, xBTC and xUSD which could be used as margin:

| **Token** |  **Cap**   |
|:---------:|:----------:|
|    wETH   |   1,000    |
|    BTC*   |     75     |
|    USDC   | 10,000,000 |

* The specification of the representative BTC token (wBTC or tBTC) which would be used in wrapping will be decided upon in a different vote. 

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
- maxKeeperScalingRatio is the reward paid to keepers for liquidating accounts that only have margin and debt (asking to the flagRewardRatio of 3 bp)


# Motivation

The main motivation is to launch perps v3 on arbitrum as specified in [SIP-367](https://sips.synthetix.io/sips/sip-367/).

## Release notes:

Markets would be launched to mainnet with 0 caps on position sizes and would be raised once a integrator gives the green light on their readiness to provide an interface for traders.
Furthermore, the wETH and wBTC caps would be set to zero initially upon release and raised after the necessary fork tests are performed that ensure that liquidation rewards from the wETH and wBTC margins are distributed fairly on all LP's that provide liquidity.

# Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
