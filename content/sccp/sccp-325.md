---
sccp: 325
title: Update Perps V3 - L1 and L2 Gas Units
type: Governance
network: Base
author: Kaleb (@kalek-keny)
status: Draft
created: 2024-04-16
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to update the L2 gas unit parameter from 1.65m to 1.7m.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The L2 gas unit is configured  in order to covers keepers' cost of executing transactions, as described in detail under [SIP-362](https://sips.synthetix.io/sips/sip-362/). The units represent the base gas units that usually are used in order to perform trade settlement, flagging of accounts for liquidation and eventually executing the liquidation that closes the users' liquidated position.  

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The parameters are updated due to the increase in gas consumption due to [SCCP-324](https://sips.synthetix.io/sccp/sccp-324/) which allows a user to have 4 simultaneous positions opened.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
