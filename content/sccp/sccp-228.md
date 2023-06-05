---
sccp: 228
network: Optimism
title: Unpause XMR Market
author: Kaleb (@kaleb-keny)
status: Implemented
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0xd4ffbcd61c75a9c7ecac5d621c59d8d3738cd34ea3cd6f44a9fe5fadad41d02c
created: 2022-09-05
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to unpause the XMR market with the following parameters:

|   **Parameter Name**   	| **Parameter** 	|
|:----------------------:	|:-------------:	|
|        takerFee        	|     40 bp     	|
|        makerFee        	|     35 bp     	|
|    takerFeeNextPrice   	|     35 bp     	|
|    makerFeeNextPrice   	|     30 bp     	|
|       maxLeverage      	|       10      	|
|     maxFundingRate     	|      10%      	|
|      skewScaleUSD      	|      10M      	|
|    maxMarketValueUSD   	|      100k     	|
| nextPriceConfirmWindow 	|       2       	|


## Abstract

<!--A short (~200 word) description of the variable change proposed.-->
The parameter descriptions are as follows:
- `makerFeeNextPrice` and `takerFeeNextPrice` are the fees paid by traders when filled for next price futures orders.
- `makerFee` and `takerFee` are the fees paid by traders when filled for immediate orders.
- `maxMarketValueUSD` is the maximum amount of open interest allowed on each side of a market.
- `maxFundingRate` is the maximum funding rate per day a position can take on.
- `skewScaleUSD` determines the funding rate, a lower skewScaleUSD means that funding will be more pronounced to changes in the skew, while a larger leads to buffered reaction.
- `nextPriceConfirmationWindow` is the number of chainlink rounds, by which a next price order needs to be confirmed.
- `maxLeverage` is the maximum leverage that can be assumed by a position.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The primary motivation is to launch the XMR market for trading.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
