---
sccp: 123
title: Remove SNX Inflationary Rewards on ETH shorts
author: Kaleb Keny (@kaleb-keny)
discussions-to: governance
status: Implemented
created: 2021-06-10
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to remove SNX inflationary rewards paid on ETH shorts.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Removing the inflationary rewards paid on ETH shorts will help boost the weekly snx inflation paid to minters and reduce wastage, as a the debt pool is currently negatively skewed in ETH following the complete rollout of the wrapper contract.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

SNX inflation dedicated towards ETH shorts were being done because of the persistent skew on ETH, where the collateralization ratio of minters was largely driven by the movement of ETH price. Therefore, it was common practice to incentivize external stakeholders who would take on a short ETH position  in order to assist minters in their debt management. However, with the introduction of wrapper, that ETH skew is currently  negative as a large portion of the minted sETH was swapped to stables. Therefore, it is possible to reduce the incentive paid on ETH shorts without taking on any risk of increasing the net ETH skew on the debt pool.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
