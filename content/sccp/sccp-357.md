---
sccp: 357
title: Support New Margins on Perps V3
network: Base
status: Draft
type: Governance
created: 2024-10-08
author: Kaleb
---

# Simple Summary

This SCCP proposes to add the below margins to Perps V3 Implementation:

| **Margin** | **Discount Lower** | **Discount Upper** | **Max Collateral Amount** | **SkewScale** |
|:----------:|:------------------:|:------------------:|:-------------------------:|:-------------:|
|    cbBTC   |        1.00%       |        7.50%       |            100            |     35,000    |
|   cbETH    |        1.00%       |       10.00%       |           1,750           |    350,000    |
|   wstETH   |        1.00%       |       10.00%       |           1,750           |    350,000    |
|   WETH     |        1.00%      |       10.00%       |           2,500           |    350,000    |

- the `discountScalar` would be set to 1 for all margins
- the collateral liquidation penalty is 3 bp (collateralLiquidateRewardRatioD18).
- The caps would be set to allow for 3 simultaneous margins and 10 positions in any given account
- The synth representation of the above margins would have a atomic swap fee of 30%, as a disincentive on swapping until [SIP](https://sips.synthetix.io/sips/sip-406/) is implemented

# Motivation

The main motivation is to add more margins on perps v3 base, which was recently deployed as per [SIP-383](https://sips.synthetix.io/sips/sip-383/).


# Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
