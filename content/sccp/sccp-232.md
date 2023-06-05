---
sccp: 232
network: Ethereum & Optimism
title: Lower Target Collateralization Ratio 350% from 400% temporarily
author: Burt Rock (@BurtRock)
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0xa0be66e03a62ac47287b870bee12b73ce5b18e4cab4bd05d33e347755f717b72
status: Implemented
created: 2022-09-11
type: Governance
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Decrease the target collateralization ratio for SNX stakers to 350%. Raise the collateralization ratio to 400% if SIP-252 is implemented once two weeks have passed from the initial round of escrow liquidations, or raise the collateralization ratio back to 400% if SNX price reaches $3.50 or higher.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The target collateralization ratio is the ratio stakers must maintain in order to claim staking rewards. If a staker's collateralization ratio falls below the target, stakers must either provide additional collateral or pay back debt in order to reach the target ratio or forfeit all weekly rewards. SIP-252 allows SNX held in escrow to be liquidated, which is expected to lower the active collateralization ratio, and is cited as motivation for implementing the 350% c ratio, and one of the contitions for raising the c ratio back to 400%.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Due to an active collateralization ratio on L1 still under 350%, the increased debt which stakers will take on as a result of escrow liquidations, and recent weakness in the SNX price, this SCCP proposes to reduce the target c ratio to 350%. This will allow more stakers to continue claiming rewards, helping them to continue paying down debt and maintaining their positions. This proposal will also prevent some pressure on the sUSD peg which would be caused by stakers buying additional sUSD on the market to pay their debt.

By providing stakers a bit of breathing room and the opportunity to continue collecting sUSD fees during this shock to staker debt, stakers should be better equipped to evaluate how they will handle the debt increase and liquidate or move assets if necessary.

Clear conditions for raising the collateralization ratio back to 400% should minimize the risks associated with a lower c ratio with minimal burden on stakers since the c ratio is raised either once the value of collateral has increased sufficiently to offset the additional debt from escrow liquidation, or once stakers have had sufficient time to liquidate other assets to manage their positions.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
