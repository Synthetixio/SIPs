---
sccp: 399
title: Update Minimum Liquidity Ratio
type: Governance
network: Ethereum & Optimism
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2025-03-13
proposal: >-
 https://snapshot.org/#/snxgov.eth/proposal/0xc813b3586e2aa63fe83ae50329fb36895c772b122ba14e6352b436cb00f1a74a
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to lower the global minimum liquidity ratio on the v3 staking system to 110% from 150%.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The minimum liquidity ratio is the minimum ratio that is allowed in the staking system. When the vault goes below the minimum liquidity ratio, users who deposited snx are prevented from withdrawing from the vault.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The main motivation is to allow users who recently deposited into the 420 vault to withdraw snx early and repay their debt.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).