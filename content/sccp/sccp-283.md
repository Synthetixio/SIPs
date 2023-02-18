---
sccp: 283
network: Optimism
title: Update Skew Scale
author: Kaleb (@kaleb-keny)
status: Draft
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
|    **sDYDX**   	|   2,000,000  	|  10,000,000  	|  5,855,000 	|
|    **sBNB**    	|    250,000   	|    750,000   	|   459,000  	|
|    **sATOM**   	|   3,000,000  	|   7,500,000  	|  8,145,000 	|
|    **sAXS**    	|   1,500,000  	|   5,000,000  	|  3,306,000 	|
|    **sFTM**    	|  25,000,000  	|  150,000,000 	| 48,558,000 	|
|    **sNEAR**   	|   5,000,000  	|  25,000,000  	| 12,549,000 	|

# Abstract

The SkewScale represents parameters helps determine the slippage a position takes on for a given trade size. The cex parameter shown in the table above is an estimate using order the respective combined orderbooks of major exchanges.

# Motivation

The main motivation is help promote and drive arbitrages that balance out a skew originating from large positional swings.

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
