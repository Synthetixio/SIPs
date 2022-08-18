---
sccp: 222
network: Optimism
title: Unpause Futures Markets - DebtRatio ,DOGE & BNB
author: Kaleb (@kaleb-keny)
status: Vote_Pending
created: 2022-08-18
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to unpause the DebtRatio, DOGE and BNB markets. 
The DOGE and BNB markets would take on the following parameters, while the DebtRatio parameters would be the ones specified in [SIP-257](https://sips.synthetix.io/sips/sip-257/).

| **Ticker** 	|      **Parameter**     	| **Proposed Value** 	|
|:----------:	|:----------------------:	|:------------------:	|
|   **BNB**  	|        makerFee        	|        30 bp       	|
|   **BNB**  	|        takerFee        	|        35 bp       	|
|   **BNB**  	|    makerFeeNextPrice   	|        20 bp       	|
|   **BNB**  	|    takerFeeNextPrice   	|        25 bp       	|
|   **BNB**  	|    maxMarketValueUSD   	|         4m$        	|
|   **BNB**  	| nextPriceConfirmWindow 	|          2         	|
|   **BNB**  	|       maxLeverage      	|         25         	|
|   **BNB**  	|     maxFundingRate     	|         10%        	|
|   **BNB**  	|      skewScaleUSD      	|        50m$        	|
|  **DOGE**  	|        makerFee        	|        35 bp       	|
|  **DOGE**  	|        takerFee        	|        40 bp       	|
|  **DOGE**  	|    makerFeeNextPrice   	|        25 bp       	|
|  **DOGE**  	|    takerFeeNextPrice   	|        30 bp       	|
|  **DOGE**  	|    maxMarketValueUSD   	|         4m$        	|
|  **DOGE**  	| nextPriceConfirmWindow 	|          2         	|
|  **DOGE**  	|       maxLeverage      	|         10         	|
|  **DOGE**  	|     maxFundingRate     	|         10%        	|
|  **DOGE**  	|      skewScaleUSD      	|         50m$      	|

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

- The `makerFeeNextPrice` and `takerFeeNextPrice` are the fees paid by traders when filled for next price futures orders.
- The `makerFee` and `takerFee` are the fees paid by traders when filled for immediate orders.
- The `maxMarketValueUSD` is the maximum amount of open interest allowed on each side of a market.
- The `maxFundingRate` is the maximum funding rate per day a position can take on.
- The `skewScaleUSD` determines the funding rate, a lower `skewScaleUSD` means that funding will be more pronounced to changes in the skew, while a larger leads to buffered reaction.
- The `nextPriceConfirmationWindow` is the number of chainlink rounds, by which a next price order needs to be confirmed.
- The `maxLeverage` is the maximum leverage that can be assumed by a position.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

### maxMarketValueUSD

The oi parameters were set based on the slippage one would inccur by trading these tokens on centralized exchanges. This can be seen in this [chart](https://www.dropbox.com/s/3dm1c6pjknjzrf7/futures.csv?dl=0) under the `1%_slip` column, which represents the $ million volume required to push a price by 1%.

### makerFee and takerFee
The fees are calibrated by looking at the spread between centralized exchanges prices and those seen on chain for [BNB](https://ibb.co/SnBTZKc) and [DOGE](https://ibb.co/rZznHyr). A wider delta requires more significant fees to lean against latency bots, **for now but not for long**.


## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
