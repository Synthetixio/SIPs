---
sccp: 253
network: Ethereum & Optimism
title: Update ETH Wrapper Parameters
author: Kaleb (@kaleb-keny)
status: Draft
created: 2022-11-28
type: Governance
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

- Lower the `maxTokenAmount` on the ETH Wrapper to 0 on both Ethereum and Optimism, from 5000 and 3700 ETH respectively.
- Lower the `burnFeeRate` on the ETH wrappr to 0, from 5 bp on optimism and 5% on ethereum.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The `maxTokenAmount` is the max amount allowed to be used to issue a synth with a underlying specified in the wrapper contract, in this case it's WETH.
The `burnFeeRate` determines the fee that is paid when burning sUSD to release the wrapped underlying.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The primary motivation allowing for gradual unwind of synths issued from wrappers in order to facilitate the transaition towards the Synthetix v3.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).