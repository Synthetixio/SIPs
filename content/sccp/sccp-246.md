---
sccp: 246
network: Ethereum & Optimism
title: Update staking liquidation parameters 
author: Afif (@abanda1)
status: Implemented
created: 2022-11-11
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x3c1ae8f64c436d8492bd684bd4fcb2d15c424f070bae1c75bd61cda624b9ea63
type: Governance
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Increase `liquidationPenalty` to 45% from 30% and `selfLiquidationPenalty` to 40% from 20%. Also reduce `liquidationDelay` from 12 hours to 8 hours. 

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

This SCCP proposes adjustments to SNX staking liquidation parameters to better align staking incentives towards repayment of debt and increase the robustness of the protocol. 

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The incentives to repay debt are currently weakened by insufficiently punitive liquidation penalties. While volatility is heightened, lengthy flagging periods also can impose excess risk on healthy accounts and result in incongruences between liquidation rewards and debt assumed via socialized liquidations. 

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
