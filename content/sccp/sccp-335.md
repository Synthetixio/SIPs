---
sccp: 335
network: Base
title: Update Perps V3 Parameters
author: Kaleb (@kaleb-keny)
status: Vote_Pending
created: 2024-05-27
type: Governance
---

# Simple Summary

This SCCP proposes to update the perps v3 parameters as per the below:

## Skew Scale:

| **Market** | **Current Scale** | **Proposed Scale** | **Current Slippage** | **Proposed Slippage** | **Cex Slippage** |
|:----------:|:-----------------:|:------------------:|:--------------------:|:---------------------:|:----------------:|
|     WIF    |     10,000,000    |     15,000,000     |        162.59        |         108.39        |       27.24      |


** Slippage figures in the table above are with respect to a trade size of USD 1 million **

## Maker Fee

Lower the SOL market maker fee to 0.01 bp from 2 bp

# Abstract

Below is a description of the parameter changes proposed in the SCCP:
- `skewScale` is the scaling factor of the relevant market in the underlying currency for computing PD and Funding Rates.
- `makerFee` is the fee applied when a trader decreases the skew taken on by liquidity providers.

# Motivation

The proposed parameter changes on maker fee aim at increasing the incentive for arbitraging the skew. While the parameter changes proposed on skew scale aim at improving the value offering on WIF, given the current market conditions.

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).


