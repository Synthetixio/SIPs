---
sccp: 252
network: Ethereum
title: LUSD Unwrap
author: Kaleb (@kaleb-keny)
status: Vote_Pending
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x100febcc91c0282db007645cc535ffcbc603f2f6aa3868e0949273ef6016bb21
created: 2022-11-28
type: Governance
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->
This SCCP proposes that the following plan be implemented:
- Lower the `burnFeeRate`, currently at 5%, to zero.
- Burn `sUSD` funded by the Treasury Council, to release the LUSD.
- Increase the `burnFeeRate` back to the previous levels.
- Lower the `maxTokenAmount` to zero.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The `maxTokenAmount` is the max amount allowed to be used to issue a synth with a underlying specified in the wrapper contract, in this case it's LUSD.
The `burnFeeRate` determines the fee that is paid when burning sUSD to release the wrapped underlying.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The primary motivation allowing for gradual unwind of synths issued from wrappers in order to facilitate the transaition towards the Synthetix v3. 

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).