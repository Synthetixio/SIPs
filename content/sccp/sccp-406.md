---
sccp: 406
network: Base
title: Update Perps V3 Parameters
author: Kaleb
status: Vote_Pending
created: 2025-04-28
type: Governance
---

## Simple Summary

This sccp proposes update the perps v3 parameters as per the below:

### Skew Scale 

| **ticker** | **Current SkewScale** | **Proposed Skew Scale** | **Current Slippage** | **Proposed Slippage** | **Cex Slippage** |
|:----------:|:---------------------:|:-----------------------:|:--------------------:|:---------------------:|:----------------:|
|    sats    |  158,703,939,009,000  |    30,000,000,000,000   |          332         |         1,754         |        662       |
|     om     |       4,000,000       |        12,000,000       |         1,179        |          393          |        49        |
|   melania  |       5,806,000       |        8,500,000        |          942         |          643          |        159       |
|    pnut    |       95,366,700      |        47,000,000       |          141         |          287          |        180       |
|     vvv    |       1,000,000       |         300,000         |          682         |         2,274         |        826       |
|    arkm    |       11,000,000      |        3,000,000        |          373         |         1,369         |        353       |
|     uni    |       2,725,500       |        5,000,000        |          165         |           90          |        16        |
|  chillguy  |       24,005,300      |        60,000,000       |         2,717        |         1,087         |        265       |
|      s     |       12,000,000      |        36,000,000       |          389         |          130          |        47        |
|    bonk    |   1,294,569,458,000   |     500,000,000,000     |          92          |          237          |        62        |

*Slippage above in bp, on 500k$ worth of volume*


## Abstract

The parameters being updated are described below;
 - `skewScale` is the scaling factor of the relevant market in the underlying currency for computing price impact and funding rates

## Motivation

The skew scale parameters, which determine the slippage on trading, are proposed to be updated in order to align our offering with the slippage observations with those seen on the most liquid centralized perp markets.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
