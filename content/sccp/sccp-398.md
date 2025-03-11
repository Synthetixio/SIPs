---
sccp: 398
title: Update Perps V3 Parameters
type: Governance
network: Base
author: Kaleb (@kaleb-keny)
status: Vote_Pending
created: 2025-03-11
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to update the max market value parameter as per the below:


| **ticker** | **current** | **proposed** | **cex** |
|:----------:|:-----------:|:------------:|:-------:|
|     fxs    |     0.50    |     0.25     |   2.66  |
|     vvv    |     1.00    |      0.5     |   4.30  |
|    slerf   |     0.25    |      0.1     |   0.97  |
|     cat    |     1.00    |     0.25     |   3.58  |
|    degen   |     0.50    |     0.15     |   1.58  |
|   morpho   |     1.00    |     0.25     |   2.66  |

*in dollar millions*

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

`maxMarketValue` is the main parameter for configuring the maximum value of potential open interest on a given market (long or short).

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The proposed parameter change aims at aligning the open interest with that observed on major centralized exchanges.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).