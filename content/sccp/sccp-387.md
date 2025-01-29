---
sccp: 387
network: Base
title: Update Perps V3 Parameters
author: Kaleb (@kaleb-keny)
created: 2025-01-29
status: Vote_Pending
type: Governance
---

## Simple Summary

This SCCP proposes to update the perps v3 parameters as per the below:

### Max Market Value

| **Market** | **current m$** | **proposed m$** | **cex m$** |
|:----------:|:--------------:|:---------------:|:----------:|
|    safe    |      0.25      |       0.1       |    1.70    |
|     bal    |      0.50      |       0.1       |    3.40    |
|   moodeng  |      3.00      |         1       |    17.28   |

## Abstract

The parameter descriptions are as follows:
- The `maxMarketValue` is the parameter that determines the oi of a given market, specified in US Dollars.

## Motivation

The main motivation is to be better align outstanding markets offered on synthetix with the data available available on centralized exchanges. 

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
