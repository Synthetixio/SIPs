---
sccp: 296
network:  Optimism
title: Temporary Max Market Value increases
author: Burt Rock (@burtrock)
created: 2023-04-18
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to increase the `maxMarketValue` as per the following:

| currency 	|  Existing 	|  Proposed  	|
|:--------:	|:---------:	|:----------:	|
|   ETH   	| 10,000   	  |  12,500  	  |
|   BTC   	| 1,000  	    |  1,250   	  |
|   OP    	| 300,000 	  |  400,000   	|
|   ARB   	| 1,500,000 	|  2,000,000 	|

This SCCP does not replace the proposed values in SCCP-293, but will replace the existing values until SCCP-293 can be implemented as proposed.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

- The `maxMarketValue` is the maximum amount of open interest allowed on the short or long side of a perp market.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Traders on Synthetix Perps are unable to trade on the most popular offerings due to high demand for OI. Although an increase in OI is scheduled to take place soon, a smaller increase could allow traders to use the markets with a shorter turnaround time.

Given that open interest on the above pairs is full, or nearly full, the launch of $OP rewards will attract attention from many smaller traders, reducing the chance that any single trader controls OI, and OI on these markets is scheduled to change in the same direction `maxMarketValue` can be raised to allow some trading in these markets during the interim period before larger OI increases can go in to effect.

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
