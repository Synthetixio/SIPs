---
sccp: 384
network: Base
title: Update Perps V3 Parameters
author: Kaleb (@kaleb-keny)
created: 2025-01-23
status: Implemented
proposal: >-
 https://snapshot.org/#/snxgov.eth/proposal/0x16d9dfcfc7877bacee2adb5c81ad2f79dd1a6d4f6d8a61a279dae36fd29d8963
type: Governance
---

## Simple Summary

This SCCP proposes to update the perps v3 parameters as per the below:

### Skew Scale

| **market** |  **current**  |  **proposed** | **cex slippage** | **snx slippage** |
|:----------:|:-------------:|:-------------:|:----------------:|:----------------:|
|  fartcoin  |   5,094,000   |   8,710,600   |        49        |        198       |
|     imx    |   5,304,800   |   9,217,700   |        58        |        232       |
|   moodeng  |   28,071,600  |   50,595,000  |        83        |        332       |
|     jup    |   21,400,800  |   38,682,000  |        20        |        82        |
|     fxs    |    426,800    |    809,400    |        283       |       1,132      |
|    bome    | 3,750,000,000 | 7,314,837,000 |        21        |        83        |
|    pyth    |   19,044,900  |   39,271,400  |        51        |        203       |
|     tao    |     32,500    |     74,800    |        22        |        87        |
|   melania  |   1,500,000   |   3,730,900   |        58        |        232       |
|     xrp    |   32,263,500  |   82,774,400  |         2        |        10        |
|    aero    |   1,429,300   |   2,407,400   |      245.56      |        982       |
|    ordi    |   1,305,000   |   2,282,000   |       13.28      |        53        |
|    pnut    |   54,128,800  |   95,366,700  |       18.57      |        74        |
|     io     |   2,324,500   |   4,306,600   |       45.45      |        182       |
|     ltc    |    469,000    |    982,900    |       5.38       |        22        |
|    eigen   |   2,846,600   |   7,998,700   |       26.33      |        105       |
|    trump   |    750,000    |   3,138,300   |       3.84       |        23        |

*The slippage denoted above are on trades of size 500k$*

### Max Market Value

| **market** | **current m$** | **proposed m$** | **cex m$** |
|:----------:|:--------------:|:---------------:|:----------:|
|     cat    |      2.00      |        1        |    10.64   |
|    safe    |      0.41      |       0.25      |    2.02    |
|    degen   |      1.00      |       0.5       |    4.65    |
|    slerf   |      0.50      |       0.25      |    2.25    |


## Abstract


The parameter descriptions are as follows:
- The `skewScale` is the parameter that determines the slippage that is imposed on a market for a given skew.

## Motivation

The main motivation is to be better align outstanding markets offered on synthetix with the data available available on centralized exchanges. 

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
