---
sccp: 382
network: Base
title: Update Perps V3 Parameters
author: Kaleb (@kaleb-keny)
created: 2025-01-20
status: Implemented
proposal: >-
 https://snapshot.org/#/snxgov.eth/proposal/0x5209677161e659317ace75338b4cc23c57566f7ef720de6c63a62c002ef92a5b
type: Governance
---

## Simple Summary

This SCCP proposes to update the perps v3 parameters as per the below:

### Funding Rate Velocity
- Increase the funding rate velocity on ETH and BTC to 9 from 4
- Increase the velocity on other markets to 36, except for the ratio markets

### Maker Fees
Increase the maker fees to 2 bp from 0 bp on eigen, io, mew, mkr, not, people, pol, popcat, render, sats, wld, zro, safe, goat, moodeng, pnut, cat, degen, slerf, morpho, chillguy, aero, pengu, virtual, kmno and fartcoin

### Skew Scale

| **currency** |     **Current**    |    **Proposed**   | **Cex Slippage** | **Proposed Slippage** |
|:------------:|:------------------:|:-----------------:|:----------------:|:---------------------:|
|     kmno     |      5,000,000     |     7,685,300     |        598       |         2,392         |
|     aero     |       500,000      |     1,429,300     |        357       |         1,428         |
|    popcat    |     20,250,000     |     31,084,200    |        44        |          176          |
|       w      |     59,062,500     |     31,523,600    |        80        |          321          |
|      bal     |      1,125,000     |      137,300      |       1,615      |         6,459         |
|      fxs     |      2,104,687     |      426,800      |        467       |         1,870         |
|      yfi     |        2,125       |        600        |        130       |          512          |
|      gmx     |       250,000      |       78,700      |        333       |         1,331         |
|     pyth     |     60,000,000     |     19,044,900    |        97        |          388          |
|     comp     |       241,876      |       78,300      |        93        |          374          |
|      snx     |     10,200,000     |     3,627,800     |        101       |          404          |
|     blur     |     100,000,000    |     36,652,500    |        81        |          326          |
|    pendle    |      6,000,000     |     2,475,800     |        62        |          247          |
|      ldo     |     21,000,000     |     9,370,600     |        38        |          150          |
|      grt     |     112,500,000    |     57,799,000    |        51        |          203          |
|     algo     |     103,875,000    |     54,100,700    |        25        |           99          |
|      jto     |      8,000,000     |     4,172,900     |        50        |          198          |
|      axs     |      4,218,750     |     2,218,700     |        46        |          182          |
|     ethfi    |     16,500,000     |     9,022,000     |        35        |          141          |
|     sushi    |     16,000,000     |     9,058,200     |        47        |          187          |
|      axl     |     10,125,000     |     6,019,400     |        163       |          651          |
|      imx     |      8,400,000     |     5,304,800     |        95        |          382          |
|      jup     |     33,750,000     |     21,400,800    |        28        |          113          |
|      icp     |      3,000,000     |     1,918,600     |        32        |          127          |
|     strk     |     40,000,000     |     29,585,200    |        52        |          209          |
|     slerf    |      5,000,000     |     23,843,900    |        160       |          642          |
|   chillguy   |      8,000,000     |     24,005,300    |        308       |         1,230         |
|    virtual   |      2,000,000     |     4,931,300     |        46        |          184          |
|      mew     |    2,500,000,000   |    911,660,400    |        120       |          479          |
|     eigen    |      4,000,000     |     2,846,600     |        75        |          299          |
|      crv     |     240,000,000    |     36,240,800    |        19        |           76          |
|      xlm     |     333,000,000    |    103,981,000    |        13        |           51          |
|      io      |      6,000,000     |     2,324,500     |        83        |          334          |
|      ena     |     102,000,000    |     39,767,500    |        17        |           69          |
|     atom     |     11,250,000     |     4,402,900     |        22        |           89          |
|     dydx     |     45,000,000     |     18,601,500    |        27        |          109          |
|      etc     |      3,375,000     |     1,492,400     |        15        |           62          |
|      eos     |     72,000,000     |     35,750,100    |        20        |           81          |
|      inj     |      2,250,000     |     1,128,300     |        24        |           95          |
|      uni     |      4,500,000     |     2,725,500     |        16        |           64          |
|      zro     |      4,250,000     |     2,632,900     |        53        |          211          |
|      stx     |     22,500,000     |     15,022,400    |        28        |          110          |
|    morpho    |      2,000,000     |     1,380,100     |        130       |          521          |
|      arb     |     82,000,000     |     60,186,800    |        14        |           56          |
|      tia     |      6,000,000     |     4,501,100     |        28        |          112          |
|    render    |      2,250,000     |     3,244,500     |        27        |          107          |
|     degen    |     100,000,000    |    228,283,200    |        329       |         1,314         |
|     pepe     | 12,600,000,000,000 | 4,152,595,936,800 |         9        |           35          |
|     pnut     |     10,000,000     |     54,128,800    |        27        |          109          |
|      xrp     |     400,000,000    |     32,263,500    |         6        |           24          |
|     doge     |    1,578,000,000   |    408,170,800    |         4        |           16          |
|      trx     |     806,250,000    |    220,979,900    |        12        |           47          |
|      sui     |     55,000,000     |     15,109,000    |         9        |           34          |
|      ada     |     300,000,000    |     82,468,000    |         7        |           28          |
|      ltc     |      1,687,500     |      469,000      |        11        |           44          |
|     aave     |       360,000      |      103,900      |        17        |           69          |
|      dot     |     15,000,000     |     7,268,400     |        13        |           51          |
|     bonk     |  1,600,000,000,000 |  802,983,764,800  |        23        |           91          |
|      bch     |       168,750      |       84,900      |        16        |           64          |
|     link     |      5,625,000     |     3,054,000     |         8        |           32          |
|      ton     |     12,000,000     |     6,586,100     |        19        |           74          |
|      apt     |      6,075,000     |     3,475,200     |        20        |           80          |
|     near     |     11,718,750     |     6,973,600     |        16        |           66          |
|      bnb     |       375,000      |      233,000      |         4        |           15          |
|     avax     |      2,500,000     |     1,580,100     |        10        |           41          |
|      fil     |     12,750,000     |     8,723,100     |        13        |           54          |
|     shib     |  3,750,000,000,000 | 2,572,944,297,100 |        11        |           45          |
|   fartcoin   |      7,000,000     |     5,094,000     |        58        |          230          |
|      cat     |   100,000,000,000  |  307,372,493,500  |        92        |          367          |
|     goat     |     20,000,000     |     41,245,100    |        56        |          222          |
|    moodeng   |     50,000,000     |     28,071,600    |        138       |          550          |
|      pol     |     75,000,000     |     44,472,400    |        30        |          119          |
|     pengu    |     300,000,000    |    684,462,100    |        36        |          142          |
|      sol     |      2,812,500     |      817,500      |         3        |           12          |

### Leverage Parameters

| **ticker** | **Existing IMS** | **Existing minIMR** | **Existing MMS** | **Proposed minIMR** | **Proposed minIMR** | **Proposed MMS** |
|:----------:|:----------------:|:-------------------:|:----------------:|:-------------------:|:-------------------:|:----------------:|
|     bnb    |       10.72      |         0.02        |       0.35       |        4.933        |         0.02        |       0.401      |
|    flow    |       9.28       |         0.1         |       0.28       |        1.669        |         0.1         |       0.265      |
|    avax    |       9.08       |         0.02        |       0.36       |         2.88        |         0.02        |        0.4       |
|    link    |       6.73       |         0.02        |       0.37       |        3.921        |         0.02        |       0.415      |
|    rune    |       5.39       |         0.05        |       0.36       |        1.325        |         0.05        |       0.333      |
|    algo    |       5.19       |         0.05        |       0.36       |        2.173        |         0.05        |       0.343      |
|     sei    |       5.13       |         0.05        |       0.39       |        0.405        |         0.05        |       0.365      |
|     sol    |        4.9       |         0.02        |       0.33       |        3.592        |         0.02        |       0.391      |
|    pepe    |       4.88       |         0.04        |       0.43       |        1.874        |         0.04        |       0.345      |
|    pnut    |       4.688      |         0.05        |       0.317      |        0.443        |        0.0333       |       0.38       |
|    arkm    |       4.43       |         0.05        |       0.44       |         0.89        |         0.05        |       0.334      |
|     ada    |       4.35       |         0.05        |       0.33       |        2.632        |        0.0333       |       0.355      |
|     arb    |       4.16       |       0.033333      |       0.38       |        1.537        |       0.033333      |       0.388      |
|      w     |       3.87       |         0.05        |       0.35       |         1.41        |         0.05        |       0.35       |
|     ena    |       3.46       |         0.05        |       0.38       |         1.08        |         0.05        |       0.344      |
|    near    |       3.35       |         0.05        |       0.36       |         0.6         |         0.05        |       0.337      |
|     jup    |       3.35       |         0.05        |       0.37       |        0.977        |         0.05        |       0.346      |


## Abstract


The parameter descriptions are as follows:
- The `maxFundingRateVelocity` determines the speed at which market's funding rate change for a given level of skew.
- The `makerFee` is the fee paid when balancing out the skew in a given market
- The `skewScale` is the parameter that determines the slippage that is imposed on a market for a given skew.
- `IMS` is the `initialMarginRatio` the proportion of the size of the position that is held as the initial margin.
- `minIMR` is the minimum initial margin ratio, the minimum proportion of one's position that is held as margin.
- `MMS` is the maintenanceMarginScalar, the scalar multiplied by the initial margin in order to obtain the maintenance margin.


## Motivation

The main motivation is to be better align outstanding markets offered on synthetix with the data available available on centralized exchanges. 

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
