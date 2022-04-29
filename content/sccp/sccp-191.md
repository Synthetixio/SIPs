---
sccp: 191
network: Optimism
title: Update Futures Fees Parameters
author: Kaleb (@kaleb-keny)
status: Draft
created: 2022-04-29
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to update the fees parameters of the futures contracts as follows:

| **ticker** 	| **current maker/taker next price** 	| **proposed maker/taker next price** 	| **current maker/taker** 	| **proposed maker/taker** 	|
|------------	|------------------------------------	|-------------------------------------	|-------------------------	|--------------------------	|
| eth        	| 20/20                              	| 20/20                               	| 25/30                   	| 25/30                    	|
| btc        	| 20/20                              	| 20/20                               	| 20/30                   	| 25/30                    	|
| link       	| 20/20                              	| 25/25                               	| 35/40                   	| 30/35                    	|
| sol        	| 30/30                              	| 30/30                               	| 70/80                   	| 35/40                    	|
| aave       	| 30/30                              	| 35/35                               	| 70/80                   	| 40/45                    	|
| uni        	| 30/30                              	| 30/30                               	| 70/80                   	| 35/40                    	|
| avax       	| 30/30                              	| 25/25                               	| 70/80                   	| 35/40                    	|
| matic      	| 30/30                              	| 30/30                               	| 70/80                   	| 35/40                    	|

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The parameters in the table above represent the following:
- `makerFeeNextPrice` and `takerFeeNextPrice` are the fees paid by traders when filled for next price futures orders.
- `makerFee` and `takerFee` are the fees paid by traders when filled immediately..

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The base fees were primarily calibrated by considering the historical volatility of the assets as to limit the latency arbitrage. The off-chain circuit breakers allows us to lower those fees with minimal  risk to latency arbitrage.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
