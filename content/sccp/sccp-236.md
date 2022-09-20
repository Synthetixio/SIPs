---
sccp: 236
network: Optimism
title: Update Futures Markets Parameters
author: Kaleb (@kaleb-keny)
status: Vote_Pending
created: 2022-09-20
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to update the futures markets max open interest as per the below:

| **CurrencyKey** 	| **Proposed OI $M** 	| **Current OI $M** 	| **1% Slippage** 	|
|-----------------	|--------------------	|-------------------	|-----------------	|
|    **sMATIC**   	|          2         	|         3         	|       2.9       	|
|    **sAVAX**    	|          2         	|         3         	|       2.6       	|
|    **sLINK**    	|          2         	|         3         	|       2.55      	|
|     **sAPE**    	|          1         	|         2         	|       1.6       	|


## Abstract

<!--A short (~200 word) description of the variable change proposed.-->
The `maxMarketValueUSD` is the maximum amount of open interest allowed on each side of a market.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The primary motivation is to state of liquidity of these assets that can reduce significantly during weekends and times of low market activity. 

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
