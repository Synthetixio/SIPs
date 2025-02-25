---
sccp: 392
title: Update Perps V3 Parameters
type: Governance
network: Base
author: Kaleb (@kaleb-keny)
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x3c4bcef5d5e004d525ee6e4502bf31888576459c1c5cc4b25ec153e6ed3f73eb
status: Implemented
created: 2025-02-21
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to update the perps v3 parameters as per the below:

## Skew Scale

|        **Market**       |     **Current**     |     **Proposed**    | **Cex Slippage** | **Snx Slippage** |
|:-----------------------:|:-------------------:|:-------------------:|:----------------:|:----------------:|
|      Axie Infinity      |      2,218,700      |      3,341,000      |        42        |        169       |
|       Melania Meme      |      3,730,900      |      5,806,000      |        85        |        340       |
|           Aave          |       103,900       |       163,000       |        15        |        58        |
|         Polkadot        |      7,268,400      |      11,460,000     |        11        |        43        |
|        Meme coin        |    1,300,000,000    |    2,053,463,000    |        71        |        285       |
|         Ordinals        | 100,000,000,000,000 | 158,703,939,009,000 |        31        |        126       |
|         Algorand        |      54,100,700     |      86,271,000     |        27        |        107       |
|           Bonk          |   802,983,764,800   |  1,294,569,458,000  |        30        |        120       |
|        Shiba Inu        |  2,572,944,297,100  |  4,162,312,435,000  |        10        |        38        |
|        Injective        |      1,128,300      |      1,838,000      |        21        |        85        |
|           Sui           |      15,109,000     |      24,967,000     |         7        |        28        |
|         Starknet        |      29,585,200     |      49,609,000     |        53        |        214       |
|       Bitcoin Cash      |        84,900       |       147,000       |        13        |        52        |
|         Compound        |        78,300       |       136,000       |        82        |        327       |
|      Near Protocol      |      6,973,600      |      12,491,000     |        14        |        57        |
|           Wif           |      30,000,000     |      54,873,000     |        17        |        70        |
|         Filecoin        |      8,723,100      |      16,007,000     |        11        |        44        |
|        Chainlink        |      3,054,000      |      5,770,000      |         6        |        24        |
|        Curve Dao        |      36,240,800     |      68,741,000     |        17        |        68        |
| Synthetix Network Token |      3,627,800      |      7,161,000      |        88        |        352       |
|        THORChain        |      6,000,000      |      12,135,000     |        41        |        166       |
|         Dogecoin        |     408,170,800     |     885,716,000     |         3        |        11        |
|   Cat in a dogs world   |     911,660,400     |    2,062,547,000    |        105       |        418       |
|    Virtuals Protocol    |      4,931,300      |      11,285,000     |        48        |        190       |
|          Ethena         |      39,767,500     |     101,293,000     |        15        |        59        |
|         Cardano         |      82,468,000     |     221,196,000     |         4        |        14        |
|           Pepe          |  4,152,595,936,800  |  11,169,613,416,000 |         6        |        23        |
|         Fartcoin        |      8,710,600      |      30,980,000     |        56        |        224       |

*Slippage per 500k$ trade*

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

`skewScale` is the scaling factor of the relevant market in the underlying currency for computing PD and Funding Rates.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The proposed parameter changes on skew scale aim at increasing the incentive on arbitrageurs to arbitrage the skew.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).