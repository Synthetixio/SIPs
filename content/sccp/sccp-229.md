---
sccp: 229
network: Ethereum & Optimism
title: Lower Target Collateralization Ratio 350% from 400%
author: Burt Rock (@BurtRock)
status: Rejected
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x1017e8aea24bf8ed407384e411673b1e697bcfbfc4a309a00ba003ed2d7c12c8
created: 2022-09-07
type: Governance
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Decrease the target collateralization Ratio for SNX stakers to 350%.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The target collateralization ratio is the ratio stakers must maintain in order to claim staking rewards. If a staker's collateralization ratio falls below the target, stakers must either provide additional collateral or pay back debt in order to reach the target ratio or forfeit all weekly rewards.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Due to an active collateralization ratio on L1 still under 350%, the increased debt which stakers will take on as a result of escrow liquidations, and recent weakness in the SNX price, this SCCP proposes to reduce the target c ratio to 350%. This will allow more stakers to continue claiming rewards, helping them to continue paying down debt and maintaining their positions. This proposal will also prevent some pressure on the sUSD peg which would be caused by stakers buying additional sUSD on the market to pay their debt.

By providing stakers a bit of breathing room and the opportunity to continue collecting sUSD fees during this shock to staker debt, stakers should be better equipped to evaluate how they will handle the debt increase and liquidate or move assets if necessary. Once sufficient time has passed, or the SNX price has increased sufficiently to bring the network collateralization ratio up without requiring any significant buying of sUSD, then the Spartan Council should consider a move back toward a 400% target collateralization ratio.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
