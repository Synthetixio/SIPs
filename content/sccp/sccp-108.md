---
sccp: 108
title: Reduce Issue Fee Rate on ETH backed loans to 50 bp from 200 bp
author: Kaleb Keny (@kaleb-keny)
discussions-to: governance
status: Implemented
created: 2021-05-20
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to reduce the minting fee (`issueFeeRate`) on new ETH backed loans to 50 bp on the multi-collateral loan contract (`0x5c8344bcdC38F1aB5EB5C1d4a35DdEeA522B5DfA`).

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Setting the minting fee at 50 bp will effectively lower the cost of minting of new sUSD and sETH with ETH collateral.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The primary motivation is to align the wrappr `mintFeeRate` with the loans `issueFeeRate` which allow borrowers to take our synth loans helping with the skew without hampering the gradual rollout of the wrappr.


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
