---
sccp: 277
network: Optimism
title: Enable Perps V2 Markets / Update Parameters
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2023-02-07
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x28217f9baa471f9498ee0e671600e3f867cdc3b87baf39eab1d3d653877b6e3a
type: Governance
---

# Simple Summary

This SCCP proposes unpause the new perp markets and specify/update their parameters as per the below configuration:

| Ticker | makerFeeBp | takerFeeBp | takerFeeDelayedOrderBp | makerFeeDelayedOrderBp | takerFeeOffchainDelayedOrderBp | makerFeeOffchainDelayedOrderBp | maxMarketValue | skewScale      |
| ------ | ---------- | ---------- | ---------------------- | ---------------------- | ------------------------------ | ------------------------------ | -------------- | -------------- |
| AAVE   | 100        | 100        | 20                     | 20                     | 12                             | 8                              | 3,000          | 300,000        |
| APE    | 100        | 100        | 20                     | 20                     | 12                             | 8                              | 150,000        | 15,000,000     |
| ATOM   | 100        | 100        | 50                     | 50                     | 12                             | 8                              | 75,000         | 7,500,000      |
| AUD    | 50         | 50         | 20                     | 20                     | 2                              | 1                              | 3,000,000      | 25,000,000,000 |
| AVAX   | 100        | 100        | 20                     | 20                     | 12                             | 8                              | 80,000         | 8,000,000      |
| AXS    | 100        | 100        | 50                     | 50                     | 15                             | 10                             | 50,000         | 5,000,000      |
| BNB    | 100        | 100        | 20                     | 20                     | 12                             | 8                              | 7,500          | 750,000        |
| BTC    | 75         | 75         | 15                     | 15                     | 10                             | 5                              | 500            | 100,000        |
| DOGE   | 100        | 100        | 20                     | 20                     | 15                             | 10                             | 5,000,000      | 500,000,000    |
| DYDX   | 100        | 100        | 20                     | 20                     | 15                             | 10                             | 100,000        | 10,000,000     |
| ETH    | 75         | 75         | 15                     | 15                     | 10                             | 5                              | 5,000          | 1,000,000      |
| EUR    | 50         | 50         | 20                     | 20                     | 2                              | 1                              | 2,000,000      | 10,000,000,000 |
| FLOW   | 100        | 100        | 50                     | 50                     | 12                             | 8                              | 50,000         | 5,000,000      |
| FTM    | 100        | 100        | 50                     | 50                     | 15                             | 10                             | 1,500,000      | 150,000,000    |
| GBP    | 50         | 50         | 20                     | 20                     | 2                              | 1                              | 1,600,000      | 10,000,000,000 |
| LINK   | 100        | 100        | 20                     | 20                     | 12                             | 8                              | 200,000        | 20,000,000     |
| MATIC  | 100        | 100        | 20                     | 20                     | 12                             | 8                              | 1,250,000      | 125,000,000    |
| NEAR   | 100        | 100        | 50                     | 50                     | 15                             | 10                             | 250,000        | 25,000,000     |
| OP     | 100        | 100        | 20                     | 20                     | 15                             | 10                             | 300,000        | 30,000,000     |
| SOL    | 100        | 100        | 20                     | 20                     | 12                             | 8                              | 100,000        | 10,000,000     |
| UNI    | 100        | 100        | 20                     | 20                     | 12                             | 8                              | 40,000         | 4,000,000      |
| XAG    | 50         | 50         | 20                     | 20                     | 2                              | 1                              | 95,000         | 500,000,000    |
| XAU    | 50         | 50         | 20                     | 20                     | 2                              | 1                              | 1,000          | 5,000,000      |

Aside from these changes, the perps markets will have the following configurations:
- liquidationBufferRatio: 100 bp
- liquidationRatioMultiplier: 1
- nextPriceConfirmWindow: 2
- delayedOrderConfirmWindow: 120 seconds
- minDelayTimeDelta: 60 seconds
- maxDelayTimeDelta: 6000 seconds
- offchainDelayedOrderMinAge: 15 seconds
- offchainDelayedOrderMaxAge: 120 seconds
- maxFundingVelocity: 3%
- offchainPriceDivergence: 2%
- dynamicFeeRounds: 1
- maxDynamicFeeRate: 10%


# Abstract

The parameters configurations description is as follows:
- makerFee/takerFee fees pertain to fees for atomic trades at chainlink price
- maker/taker delayed fees pertain to fees for trades at the next chainlink price
- maker/taker offchain delayed orders pertain to fees charged with the pyth offchain route
- maxMarketValue is the max market value of the relevant market in the underlying currency
- skewScale is the scaling factor of the relevant market in the underlying currency for computing PD and Funding Rates
- liquidationBufferRatio and liquidationRatioMultiplier consists of the safety buffer on liquidations
- nextPriceConfirmWindow is the window, in chainlink rounds, in which next price delayed orders can be triggered
- delayedOrderConfirmWindow is the minimum number of seconds after which next price delayed orders can be triggered if no new chainlink rounds are available
- minDelayTimeDelta is the minimum period after which delayed orders can be executed
- maxDelayTimeDelta is the maximum period before which delayed orders can be executed
- offchainDelayedOrderMinAge is the minimum delay before which offchain orders can be executed
- offchainDelayedOrderMaxAge is the maximum delay after which offchain orders cannot be executed
- maxFundingVelocity is the main parameter that allows to nudge funding rates
- offchainPriceDivergence is the maximum allowable delta between chainlink and pyth prices
- setting dynamicFeeRounds and maxDynamicFeeRate to the above specified parameters, via DirectIntegrationManager, effectively disables dynamic fees on perp markets



# Motivation

The main motivation is to finalize the launch of the markets specified in [SIP-295](https://sips.synthetix.io/sips/sip-295/) and [SIP-2000](https://sips.synthetix.io/sips/sip-2000/).


# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
