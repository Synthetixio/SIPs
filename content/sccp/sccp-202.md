---
sccp: 202
network: Optimism
title: Lower the skew scale
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2022-06-13
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/QmcrmewLnX6QBsSGEmv4HVywfMmqhawWFsrRJsYxAT23k1
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Update the `skewScale` of the futures markets as per the below (in dollar millions):

|       	| **Current Skew Scale** 	| **Propose Skew Scale** 	| **current hourly funding in bp** 	|
|-------	|:----------------------:	|:----------------------:	|:------------------------:	|
| BTC   	| 300                    	| 50                     	| 3                        	|
| ETH   	| 300                    	| 50                     	| 1                        	|
| LINK  	| 300                    	| 20                     	| 27                       	|
| SOL   	| 50                     	| 20                     	| 26                       	|
| AAVE  	| 50                     	| 20                     	| 35                       	|
| UNI   	| 50                     	| 20                     	| 25                       	|
| AVAX  	| 50                     	| 20                     	| 25                       	|
| MATIC 	| 50                     	| 20                     	| 30                       	|
| APE   	| 10                     	| 10                     	| 32                       	|

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The `skewScale` determines the funding rate for a given level of skew, as per the function `maxFunding*skew/skewScale`, the lower the skewScale the higher the funding rate.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The main motivation is the state of crypto markets, where short positions undertaken by traders should compensate snx stakers for the risk underwriting.


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
