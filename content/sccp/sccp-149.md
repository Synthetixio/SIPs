---
network: L1
sccp: 149
title: Update Atomic Swap Parameters
author: Kaleb (@kaleb-keny)
discussions-to: 'https://discord.gg/EWmYsH7X'
status: Draft
created: 2021-12-04
type: Governance
---

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to lower fees on atomic swaps to 20 bp and increase the volume per block on all atomic exchanges to sUSD 5 million per block.

## Abstract
<!--A short (~200 word) description of the variable change proposed.-->

Lowering the atomic swap exchange fee to 20 bp and increasing the cap on the volume per block will help bring more volume to the synthetix exchange.

## Motivation
<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The primary motivation is to improve the attractiveness of the atomic exchange product, as fees in the space for large block trades are in the 30 bp range. Therefore, lowering the fee to below that threshold will lead to aggregators routing volumes directly through the snx exchange as to offer the best pricing to their customers. Furthermore, analysis done shows that is relatively safe to increase the volume per block without increasing the risk on the snx stakers significantly. 

It goes without saying, that volumes will be continuously monitored  and the parameters will be recalibrated best on analysis of empirical data. 


## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
