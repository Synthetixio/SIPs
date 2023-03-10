---
sccp: 290
network: Optimism
title: Update Perp Market Parameters
author: KALEB (@kaleb-keny)
status: Draft 
created: 2023-03-10
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to update the skew scale and maker fee parameters as per the below:

|        	|  Skew Scale 	|  Skew Scale 	| maker fee 	| maker fee 	|
|:------:	|:-----------:	|:-----------:	|:---------:	|:---------:	|
| Market 	|   Current   	|   Proposed  	|  Current  	|  Proposed 	|
|   ape  	|  15,000,000 	|  7,500,000  	|     8     	|     6     	|
|   sol  	|  10,000,000 	|  5,000,000  	|     8     	|     4     	|
|  matic 	| 125,000,000 	|  87,500,000 	|     8     	|     6     	|
|  atom  	|  7,500,000  	|  3,750,000  	|     8     	|     4     	|
|  link  	|  20,000,000 	|  10,000,000 	|     8     	|     6     	|
|   ftm  	| 150,000,000 	| 105,000,000 	|     10    	|     8     	|
|  avax  	|  8,000,000  	|  2,400,000  	|     8     	|     6     	|
|   op   	|  30,000,000 	|  15,000,000 	|     10    	|     8     	|

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

- The skew scale is the scaling parameter that determines the slippage incurred from executing a trade as well as the funding velocity.
- The maker fee is the fee paid when unwinding a skew in a given market.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The main motivation is to encourage arbitrages on these markets, taking into account the volatility of the token versus the liquidity of centralized exchange markets.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
