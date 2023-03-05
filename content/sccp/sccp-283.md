---
sccp: 283
network: Optimism
title: Update Perp Markets Skew Scale
author: Kaleb (@kaleb-keny)
status: Rejected
created: 2023-02-18
type: Governance
---

# Simple Summary

This SCCP proposes to update the skew parameters on the perp markets as per the below:

| **PerpMarket** 	| **Proposed** 	| **Existing** 	|   **CEX**  	|
|:--------------:	|:------------:	|:------------:	|:----------:	|
|    **sLINK**   	|  10,000,000  	|  20,000,000  	| 22,255,000 	|
|    **sSOL**    	|   7,000,000  	|  10,000,000  	| 13,673,000 	|
|    **sAVAX**   	|   4,000,000  	|   8,000,000  	|  9,726,000 	|
|    **sAPE**    	|   5,000,000  	|  15,000,000  	| 11,492,000 	|
|    **sDYDX**   	|   2,500,000  	|  10,000,000  	|  5,855,000 	|
|    **sBNB**    	|    250,000   	|    750,000   	|   459,000  	|
|    **sATOM**   	|   4,000,000  	|   7,500,000  	|  8,145,000 	|
|    **sAXS**    	|   1,600,000  	|   5,000,000  	|  3,306,000 	|
|    **sFTM**    	|  25,000,000  	|  150,000,000 	| 48,558,000 	|
|    **sNEAR**   	|   6,000,000  	|  25,000,000  	| 12,549,000 	|

# Abstract

The SkewScale is the primary scaling parameter, that normalizes the skew of the market in order to determine the prevailing premium/discount as well as it's funding rate velocity.
Note that the cex parameters shown in the table above are an estimate obtained using the combined orderbooks of major exchanges.

# Motivation

The main motivation is help promote and drive arbitrages that balance out a skew originating from large positional swings.

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
