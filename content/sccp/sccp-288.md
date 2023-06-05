---
sccp: 288
network: Optimism
title: Update Issue Fee Rate - Shorts
author: KALEB (@kaleb-keny)
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0xd500020e901321d7fe9ab281e027c09d3f068a5108b3c0b8f6f5a65c28d42b7f
status: Implemented 
created: 2023-03-09
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Lower the `issueFeeRate` on the collateral short contract to 10 bp from 40 bp.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The `issueFeeRate` is the rate paid on opening or drawing on a short position.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Currently shorts are exclusively used by the lyra contracts, although the lyra protocol will switch over to the perps implementation in the coming months, the proposed parameter changes will help reduce the cost on lyra users and improve the user experience.


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
