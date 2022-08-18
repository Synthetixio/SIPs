---
sccp: 221
network: Ethereum & Optimism
title: Update Futures & Spot Price Parameters
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2022-08-14
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0xe4d1534adef5739b980b8570714fe887f85a8fdc14b529c20b5aaeb2811d9177
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to implement the following changes:

| **Ticker** 	| **Parameter**      	| **Proposed Value** 	| **Previous Value** 	| **Change** 	| **Network** 	|
|------------	|--------------------	|--------------------	|--------------------	|------------	|-------------	|
| **Dydx**   	| makerFee           	| 65 bp              	| 55 bp              	| +10 bp     	| Optimism    	|
| **Dydx**   	| takerFee           	| 75 bp              	| 65 bp              	| +10 bp     	| Optimism    	|
| **Dydx**   	| makerFeeNextPrice  	| 55 bp              	| 45 bp              	| +10 bp     	| Optimism    	|
| **Dydx**   	| takerFeeNextPrice  	| 60 bp              	| 45 bp              	| +15 bp     	| Optimism    	|
| **Dydx**   	| maxMarketValueUSD  	| 100k$              	| 2m$                	| -1.9m$     	| Optimism    	|
| **Uni**    	| makerFee           	| 65 bp              	| 35 bp              	| + 30 bp    	| Optimism    	|
| **Uni**    	| takerFee           	| 75 bp              	| 40 bp              	| + 35 bp    	| Optimism    	|
| **Uni**    	| makerFeeNextPrice  	| 55 bp              	| 30 bp              	| + 20 bp    	| Optimism    	|
| **Uni**    	| takerFeeNextPrice  	| 60 bp              	| 30 bp              	| + 30 bp    	| Optimism    	|
| **Uni**    	| maxMarketValueUSD  	| 100k$              	| 1m$                	| -0.9m$     	| Optimism    	|
| **Uni**    	| feeRateForExchange 	| 100 bp             	| 55 bp              	| +45 bp     	| Optimism    	|
| **Aave**   	| makerFee           	| 65 bp              	| 40 bp              	| +25 bp     	| Optimism    	|
| **Aave**   	| takerFee           	| 75 bp              	| 45 bp              	| +30 bp     	| Optimism    	|
| **Aave**   	| makerFeeNextPrice  	| 55 bp              	| 35 bp              	| + 20 bp    	| Optimism    	|
| **Aave**   	| takerFeeNextPrice  	| 60 bp              	| 35 bp              	| + 25 bp    	| Optimism    	|
| **Aave**   	| maxMarketValueUSD  	| 300k$              	| 1m$                	| -0.7m$     	| Optimism    	|
| **Aave**   	| feeRateForExchange 	| 100 bp             	| 55 bp              	| +45 bp     	| Optimism    	|
| **Aave**   	| feeRateForExchange 	| 100 bp             	| 70 bp              	| +30 bp     	| Ethereum    	|
| **Btc**    	| maxMarketValueUSD  	| 5m$                	| 3m$                	| +2m$       	| Optimism    	|
| **Sol**    	| maxMarketValueUSD  	| 3m$                	| 1m$                	| +2m$       	| Optimism    	|
| **Avax**   	| maxMarketValueUSD  	| 3m$                	| 1m$                	| +2m$       	| Optimism    	|
| **Matic**  	| maxMarketValueUSD  	| 3m$                	| 1m$                	| +2m$       	| Optimism    	|

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

- The `makerFeeNextPrice` and `takerFeeNextPrice` are the fees paid by traders when filled for next price futures orders.
- The `makerFee` and `takerFee` are the fees paid by traders when filled for immediate orders.
- The `maxMarketValueUSD` is the maximum amount of open interest allowed on each side of a market.
- The `feeRateForExchange` is the fee paid on trades into a particular synths.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The deteriorating situation on the liquidity on the Dydx, Uni and Aave tokens, which can be visualized [here](https://www.dropbox.com/s/3dm1c6pjknjzrf7/futures.csv?dl=0) has increased the risk of actors manipulating the spot token prices, in order to profit from the infinite liquidity and no slippage trades, with some suspicious activies seen on chain. Hence increasing fees and lowering the open interest leans against these risks. It is important to mention, that Futures V2, which includes a slippage parameter, helps better manage these risks without resorting to baseFee and open interest adjustment.

As for the BTC, SOL, AVAX and MATIC markets, liquidity is sufficient and utilization is high enough that an increase in open interest is deemed acceptable.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
