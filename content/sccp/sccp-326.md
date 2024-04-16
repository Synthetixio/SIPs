---
sccp: 326
title: Update minDelegateTime
type: Governance
network: Base
author: Kaleb (@kalek-keny)
status: Draft
created: 2024-04-16
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to set the `minDelegateTime` on the perp supermarket to zero.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The `minDelegateTime` specified in [SIP-320](https://sips.synthetix.io/sips/sip-320/) causes friction when users wants to undelegate by repaying their debt with sold collateral. This is being addressed in [SIP-366](https://sips.synthetix.io/sips/sip-366/) which should be implemented in the coming few months. Until then, in order to ease the delegation friction, this SCCP proposes to set this parameter to zero. 

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The main motivation is to improve the ux on LP's until a better solution is implemented.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
