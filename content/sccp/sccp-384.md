---
sccp: 384
network: Base
title: Update Perps V3 Parameters
author: Kaleb (@kaleb-keny)
created: 2025-01-23
status: Vote_Pending
type: Governance
---

## Simple Summary

This SCCP proposes to update the perps v3 parameters as per the below:

### Skew Scale

| **market** |  **current**  |  **proposed** | **cex slippage** | **snx slippage** |
|:----------:|:-------------:|:-------------:|:----------------:|:----------------:|
|     sol    |    817,500    |   1,386,000   |         2        |         7        |
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


## Abstract


The parameter descriptions are as follows:
- The `skewScale` is the parameter that determines the slippage that is imposed on a market for a given skew.

## Motivation

The main motivation is to be better align outstanding markets offered on synthetix with the data available available on centralized exchanges. 

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
