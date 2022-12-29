---
sccp: 268
network: Ethereum & Optimism
title: Update staking liquidation parameters 
author: Afif (@aband1)
status: Draft
created: 2022-12-29
type: Governance
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

- Reduce `liquidationPenalty` to 75% from 60%  
- Reduce `selfLiquidationPenalty` to 70% from 50%
- Reduce `liquidationRatio` from 175% to 160%
- Reduce `liquidationEscrowDuration` to 6 months from 12 months  

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

This SCCP proposes adjustments to SNX staking liquidation parameters in line with those proposed by Gauntlet in SCCP-266 with a modification to include changes to the liquidation escrow period which better align the value of escrowed rewards received with debt assumed. 

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The incentives to repay debt are weakened by insufficiently punitive liquidation penalties, but as Gauntlet's risk analysis has noted there is a balance to be struck between incentive alignment and liquidations at risk. Additionally, while volatility is heightened, lengthy flagging periods also can impose excess risk on healthy accounts and result in incongruences between liquidation rewards and debt assumed via socialized liquidations. This proposal seeks to find an optimal balance between these variables. 

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
