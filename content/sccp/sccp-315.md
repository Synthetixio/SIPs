---
sccp: 315
title: Update Perps V3 Parameters
type: Governance
network: Base
author: Kaleb (@kaleb-keny)
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0xaba20c7f9c31d970cc3c313231368b62f27178c29a41b13f75c8f5c811659e7f
status: Implemented
created: 2024-04-04
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to update the perps v3 parameters as per the below:

## Skew Scale

| **Market** | **Current Scale** | **Proposed Scale** | **Current Slippage** | **Proposed Slippage** | **Cex Slippage** |
|:----------:|:-----------------:|:------------------:|:--------------------:|:---------------------:|:----------------:|
|     ETH    |      1000000      |       500000       |          1.5         |           3           |         1        |
|     BTC    |       100000      |        50000       |          1.5         |           3           |         1        |

*Slippage per 500k$ trade*

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

`skewScale` is the scaling factor of the relevant market in the underlying currency for computing PD and Funding Rates.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The proposed parameter changes on skew scale aim at increasing the incentive on arbitrageurs to arbitrage the skew.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).