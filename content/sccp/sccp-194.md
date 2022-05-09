---
sccp: 194
network: Optimism
title: Update Dynamic Fee Parameters
author: Kaleb (@kaleb-keny)
status: Vote_Pending
created: 2022-05-09
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes the following changes to Dynamic Fees parameters:

- Decrease the `exchangeDynamicFeeThreshold` to 35 bp from 25 bp
- Increase the `exchangeDynamicFeeRounds` to 3 rounds from 6 rounds
- Increase the `exchangeDynamicFeeWeightDecay` to 0.75 from 0.95

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The parameters being updated are as follows:

- `exchangeDynamicFeeThreshold` is the minimum change in price above which dynamic fees are levied. A larger threshold leads to lower dynamic fees.
- `exchangeDynamicFeeRounds` is the length of the look-back window. The shorter the lookback window, the less is persistent the impact of historical price volatiltiy on dynamic fees.
- `exchangeDynamicFeeWeightDecay` is the coefficient applied on dynamic fees from the previous round. The lower the decay factor, the faster dynamic fees revert back to zero.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The primary motivation is to lower fees on traders, given the effectiveness in [offchain circuit breakers](https://sips.synthetix.io/sips/sip-231/) in dealing with oracle latency.
The expected impact on fees can be found below, where the stats represent statistics on dynamic fees (in bp) observed during the last 2 weeks of trading.
The last 2 columns represent the number of seconds fees remain above a given threshold specified on average.


| **Ticker** 	| **Rounds** 	| **Decay** 	| **Threshold** 	| **mean** 	| **std** 	| **95%** 	| **99%** 	| **>50bp** 	| **>100bp** 	|
|------------	|------------	|-----------	|---------------	|----------	|---------	|---------	|---------	|-----------	|------------	|
| **aave**   	| **3**      	| **75%**   	| **35**        	| **3**    	| **9**   	| **17**  	| **40**  	| **261**   	| **301**    	|
| aave       	| 6          	| 95%       	| 25            	| 20       	| 23      	| 63      	| 94      	| 464       	| 382        	|
| **avax**   	| **3**      	| **75%**   	| **35**        	| **3**    	| **8**   	| **17**  	| **38**  	| **200**   	| **61**     	|
| avax       	| 6          	| 95%       	| 25            	| 21       	| 22      	| 60      	| 114     	| 468       	| 327        	|
| **btc**    	| **3**      	| **75%**   	| **35**        	| **1**    	| **9**   	| **6**   	| **21**  	| **91**    	| **91**     	|
| btc        	| 6          	| 95%       	| 25            	| 8        	| 18      	| 37      	| 52      	| 638       	| 1561       	|
| **eth**    	| **3**      	| **70%**   	| **45**        	| **1**    	| **7**   	| **0**   	| **16**  	| **390**   	| **390**    	|
| eth        	| 6          	| 95%       	| 25            	| 9        	| 21      	| 35      	| 85      	| 691       	| 870        	|
| **link**   	| **3**      	| **75%**   	| **35**        	| **3**    	| **9**   	| **18**  	| **38**  	| **56**    	| **46**     	|
| link       	| 6          	| 95%       	| 25            	| 21       	| 23      	| 64      	| 109     	| 610       	| 376        	|
| **matic**  	| **3**      	| **75%**   	| **35**        	| **3**    	| **10**  	| **16**  	| **39**  	| **201**   	| **328**    	|
| matic      	| 6          	| 95%       	| 25            	| 18       	| 22      	| 59      	| 93      	| 634       	| 329        	|
| **uni**    	| **3**      	| **75%**   	| **35**        	| **3**    	| **8**   	| **19**  	| **39**  	| **84**    	| **60**     	|
| uni        	| 6          	| 95%       	| 25            	| 22       	| 22      	| 67      	| 92      	| 440       	| 336        	|

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
