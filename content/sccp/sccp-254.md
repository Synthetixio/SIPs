---
sccp: 254
network: Ethereum
title: Update ETH Exchange Fee
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2022-11-30
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x36f8f17ce0f9e2a14b1a6f459b8f5c23347b9d23a392b194f5f11b4ce5383996
type: Governance
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

- Lower the `exchangeFeeRate` on sETH to 10 bp from 25 bp. 
- Increase the standard `atomicExchangeFeeRate` on trades to sETH  to 50 bp from 40 bp.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The `exchangeFeeRate` is the fee rate applied on swaps towards sETH which incorporate a fee reclamation adjustment.
The `atomicExchangeFeeRate` is the fee rate paid on swaps towards sETH which do not incorporate any fee reclamation adjustment. Note that the fee change here does not affect fees configured  on sETH in the `DirectIntegrationManager`.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The primary motivation is to facilitate arbitrage between the different Curve pools, especially after large atomic exchanges have taken place that tilt the imbalance between the components of the curve pools.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).