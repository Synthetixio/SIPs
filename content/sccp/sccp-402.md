---
sccp: 402
network: Base
title: Update Perps V3 Parameters
author: Kaleb
status: Draft
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0xa51f8998b77609107d995cb41d8194233775e402688a394770157ecadf2313d8
created: 2025-03-28
type: Governance
---

## Simple Summary

This sccp proposes to update the `maxMarketSize` and `maxMarketValue` of the below markets:

| **Market** |    **New Size**    | **New MMV*** | **Old OI*** | **New OI*** | **Cex OI*** |
|:----------:|:------------------:|:------------:|:-----------:|:-----------:|:-----------:|
|     arb    |      5,586,592     |       1      |     0.72    |     1.00    |      33     |
|    arkm    |      1,703,578     |      0.5     |     0.23    |     0.50    |      12     |
|     bal    |       144,092      |      0.1     |     0.10    |     0.10    |      2      |
|    blur    |      8,719,156     |      0.5     |     0.38    |     0.50    |      5      |
|    bome    |     695,894,224    |      0.5     |     0.33    |     0.50    |      10     |
|     cat    |   67,842,605,156   |     0.25     |     0.25    |     0.25    |      4      |
|  chillguy  |     36,764,706     |      0.5     |     0.16    |     0.50    |      5      |
|    degen   |     95,026,924     |     0.15     |     0.15    |     0.15    |      2      |
|    eigen   |      1,901,502     |       1      |     0.28    |     1.00    |      13     |
|   ethbtc   |     268,096,515    |       3      |     1.62    |     3.00    |      30     |
|    ethfi   |      3,169,572     |       1      |     0.19    |     1.00    |      11     |
|     io     |      1,210,214     |      0.5     |     0.39    |     0.50    |      11     |
|     jup    |     10,309,278     |      0.5     |     0.44    |     0.50    |      7      |
|    kaito   |       886,211      |      0.5     |     0.20    |     0.50    |      20     |
|     ldo    |      2,098,416     |       1      |     0.50    |     1.00    |      35     |
|   melania  |      3,120,125     |       1      |     0.64    |     1.00    |      10     |
|   moodeng  |     26,497,085     |      0.5     |     1.00    |     0.50    |      6      |
|   morpho   |       350,385      |     0.25     |     0.25    |     0.25    |      3      |
|     op     |      2,353,495     |       1      |     0.64    |     1.00    |      29     |
|    ordi    |       226,475      |       1      |     0.73    |     1.00    |      30     |
|    pengu   |     305,343,511    |       1      |     3.00    |     1.00    |      17     |
|    pnut    |     10,662,117     |       1      |     0.75    |     1.00    |      52     |
|    pyth    |      6,411,900     |      0.5     |     0.36    |     0.50    |      8      |
|    rune    |       847,458      |      0.5     |     0.35    |     0.50    |      12     |
|    sats    | 44,247,787,610,619 |       2      |     0.30    |     2.00    |      51     |
|     sei    |     10,167,768     |       1      |     0.69    |     1.00    |      31     |
|    slerf   |      3,184,713     |      0.1     |     0.10    |     0.10    |      1      |
|     snx    |      1,179,245     |      0.5     |     0.42    |     0.50    |      7      |
|    strk    |      6,157,635     |      0.5     |     0.31    |     0.50    |      9      |
|     stx    |      2,958,580     |       1      |     0.57    |     1.00    |      10     |
|     tao    |        7,886       |       1      |     0.62    |     1.00    |      31     |
|    trump   |       571,265      |       3      |     1.10    |     3.00    |     103     |
|   virtual  |      1,464,343     |      0.5     |     0.34    |     0.50    |      12     |
|      w     |     21,510,002     |       1      |     0.19    |     1.00    |      13     |
|     wif    |      4,126,264     |       1      |     0.73    |     1.00    |      45     |
|     wld    |      6,861,848     |       3      |     0.37    |     3.00    |      63     |
|     xlm    |      7,247,952     |       1      |     1.00    |     1.00    |      39     |
|     xrp    |      1,793,079     |       2      |     2.00    |     2.00    |     503     |

## Abstract

The oi cap determined in the market is based on the minimum of the below;
- The max market size is the cap on the oi in the underlying market in the markets' native currency.
- The max market value is the cap on the oi in a given market in us dollars.


## Motivation

Given the recent price action, many of the markets have had their oi in dollar terms decrease significantly leading to tighter oi limit. This SCCP aligns the `maxMarketSize` and `maxMarketValue` limits with the liquidity available in the most liquid exchange venues.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
