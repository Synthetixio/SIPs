---
sccp: 290
network:  Optimism
title: Increase Perp Max Market Value
author: William87, Alpha003, poilk
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0xa4ad9b8d92e4edaa64848895af5a3e38dd3a5e03e3d676ac9e0f0c93c084a326
status: Draft 
created: 2023-03-13
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to increase the `maxMarketValue` as per the following:

| currency 	|  Existing 	|  Proposed  	|
|:--------:	|:---------:	|:----------:	|
|   sXAU   	|   1,000   	|    5,000   	|
|   sXAG   	|   95,000  	|   475,000  	|
|   sEUR   	| 2,000,000 	| 10,000,000 	|
|   sAUD   	| 3,000,000 	| 15,000,000 	|
|   sGBP   	| 1,600,000 	|  8,000,000 	|

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

- The `maxMarketValue` is the maximum amount of open interest allowed on the short or long side of a perp market.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The `maxMarketValue` can be raised without concern on these markets given the large skew scale and the low volatility of commodities and stables.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
