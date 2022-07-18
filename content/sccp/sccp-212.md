---
sccp: 212
network: Optimism
title: Raise the skew scale
author: Burt Rock (@BurtRock)
status: Implemented
created: 2022-07-09
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/bafkreifx7sbskry6tql36yqndzxmawsihd6wfk7dfzae627xh62r4aicye
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Update the `skewScale` of the futures markets as per the below (in dollar millions):

|       	| **Current Skew Scale** 	| **Propose Skew Scale** 	| **current 1h normalized funding** 	| **current dydx 1h funding** 	|
|-------	|:----------------------:	|:----------------------:	|:------------------------:	          |:------------------------:
| BTC   	| 50                    	| 300                    	| 0.010104%            	              | -0.002247%
| ETH   	| 50                    	| 300                    	| 0.006144%                	          | 0.000202%
| LINK  	| 20                    	| 300                    	| 0.017516%                	          | 0.000366%
| SOL   	| 20                     	| 50                     	| 0.010601%                	          | -0.001427%
| AAVE  	| 20                     	| 50                     	| 0.002244%                	          | 0.001197%
| UNI   	| 20                     	| 50                     	| 0.004271%                           | -0.003826%
| AVAX  	| 20                     	| 50                     	| 0.003707%                	          | 0.000757%
| MATIC 	| 20                     	| 50                     	| 0.000152%                           | 0.000595%
| APE   	| 10                     	| 10                     	| -0.000603%                	        | N/A

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The `skewScale` determines the funding rate for a given level of skew, as per the function `maxFunding*skew/skewScale`, raising the skewScale will result in a lower funding rate.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

skewScale was recently lowered by a significant amount due to the state of the markets, resulting in extremely high funding. This was originally done due to the high volatility and consistent price movement in a single direction. This situation seems to have abated, leaving Kwenta futures traders exposed to extremely unfavorable funding rates, which concerned users have noted are 100x higher than competing exchanges, and which many users have expressed cause normal trading strategies to be impossible on Kwenta. This proposal returns these parameters to their state before sccp-202 to alleviate issues with the UX.


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
