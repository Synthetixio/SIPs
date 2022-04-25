---
sccp: 190
network: Ethereum & Optimism
title: Update Fees & Atomic Volatility Circuit Breakers Parameters 
author: Kaleb (@kaleb-keny)
status: Draft
created: 2022-04-25
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to update the parameters for the atomic and non-atomic exchanges in light of the release of [SIP-198](https://sips.synthetix.io/sips/sip-198/) and [SIP-222](https://sips.synthetix.io/sips/sip-222/).

### Atomic Exchanges on Ethereum

#### Base Fees

| **Ticker** 	| **Proposed Fees** 	| **Current Fees** 	|
|------------	|-------------------	|------------------	|
| ETH        	| 25                	| 30               	|
| BTC        	| 25                	| 30               	|
| USD        	| 0                 	| 30               	|
| EUR        	| 15                	| NA               	|
| CHF        	| 15                	| NA               	|
| JPY        	| 15                	| NA               	|
| AUD        	| 15                	| NA               	|
| GBP        	| 15                	| NA               	|
| KRW        	| 15                	| NA               	|

#### Ethereum Atomic Exchange Circuit Breakers

| **Ticker** 	| **Proposed Circuit Breakers Parameters** 	| **Existing Circuit Breaker Parameters** 	|
|------------	|------------------------------------------	|-----------------------------------------	|
| ETH        	| 3 Answers / 10 Minutes                   	| 3 Answers / 10 Minutes                  	|
| BTC        	| 3 Answers / 10 Minutes                   	| 3 Answers / 10 Minutes                  	|
| USD        	| NA                                       	| NA                                      	|
| EUR        	| 2 Answers / 10 Minutes                   	| NA                                      	|
| CHF        	| 2 Answers / 10 Minutes                   	| NA                                      	|
| JPY        	| 2 Answers / 10 Minutes                   	| NA                                      	|
| GBP        	| 2 Answers / 10 Minutes                   	| NA                                      	|
| KRW        	| 2 Answers / 10 Minutes                   	| NA                                      	|
| AUD        	| 2 Answers / 10 Minutes                   	| NA                                      	|


#### Other Parameters

- The max volume per block would remaind at 15m$ per block
- USD, ETH and BTC would be using ['USDC'](https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48), [wETH](https://etherscan.io/token/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2) and [wBTC](https://etherscan.io/token/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599) as their respective uniswap-v3 equivalents. 
- The rest of the feeds, being EUR, CHF, JPY, GBP, AUD and KRW, would trade at the pure chainlink price.
- The `CL_BUFFER` will be set to zero on all assets.

#### Non-Atomic Exchanges on Ethereum

#### Base Exchange Fee

| **Ticker** 	| **Proposed Fees** 	| **Previous Fees** 	|
|------------	|-------------------	|-------------------	|
| ETH        	| 25                	| 25                	|
| BTC        	| 25                	| 30                	|
| USD        	| 0                 	| 30                	|
| EUR        	| 5                 	| 25                	|
| CHF        	| 5                 	| 25                	|
| AUD        	| 5                 	| 25                	|
| JPY        	| 5                 	| 25                	|
| GBP        	| 5                 	| 25                	|
| KRW        	| 5                 	| 25                	|
| AAVE       	| 70                	| 100               	|
| DOT        	| 70                	| 100               	|
| DEFI       	| 70                	| 100               	|
| LINK       	| 50                	| 85                	|

#### Atomic Exchanges on Optimism

#### Base Exchange Fee

| **Ticker** 	| **Proposed Fees** 	| **Previous Fees** 	|
|------------	|-------------------	|-------------------	|
| ETH        	| 25                	| 25                	|
| BTC        	| 25                	| 25                	|
| USD        	| 0                 	| 25                	|
| LINK       	| 35                	| 35                	|
| EUR        	| 5                 	| 25                	|
| AAVE       	| 55                	| 70                	|
| SOL        	| 55                	| 70                	|
| AVAX       	| 55                	| 70                	|
| MATIC      	| 55                	| 70                	|
| UNI        	| 55                	| 70                	|

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The parameters are as follows:

- `feeRateForExchange` is the fee that is paid by traders computed by adding the `baseFee` of the source and destination currencies after [SIP-222](https://sips.synthetix.io/sips/sip-222/).  Previously that fee is based purely on the destination currency.
- `atomicMaxVolumePerBlock` is the max volume in sUSD per block.
- The `atomicVolatilityConsiderationWindow` is the the time window to evaluate whether a synth is too volatile to atomically exchange, specified in number of seconds
- The `atomicVolatilityUpdateThreshold` is the maximum number of Chainlink updates in the consideration window before a synth is deemed too volatile to atomically exchange, specified in number of updates.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The base fees were primarily calibrated by considering the historical volatility of the assets as to limit the latency arbitrage. The atomic exchange circuit breakers were set by looking at the number of historical oracle prices pushes during different time intervals under different volatility environments with the aim of limiting trading disruption.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
