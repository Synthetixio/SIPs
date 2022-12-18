---
sccp: 265
network: Ethereum & Optimism
title: Update ETH Wrapper Parameters
author: Kaleb (@kaleb-keny)
status: Vote_Pending
created: 2022-12-18
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0xbefe8e0526da71a865ab3eb16fd83dbee08c0be6395d945285b2f366c48d853b
type: Governance
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

- Increase the `maxTokenAmount` on the ETH Wrapper to 15k ETH on both Ethereum and Optimism, from 5000 and 3700 ETH respectively.
- Change the `burnFeeRate` on the ETH wrappr to 10 bp, from 5 bp on optimism and 5% on ethereum.
- Change the `mintFeeRate` on the ETH wrappr from the market rate to 25 bp in iterative steps.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

- The `maxTokenAmount` is the max amount allowed to be used to issue a synth with a underlying specified in the wrapper contract, in this case it's WETH.
- The `burnFeeRate` determines the fee that is paid when burning sUSD to release the wrapped underlying.
- The `mintFeeRate` determines the fee that is paid when minting sUSD by locking up ETH in the ETH wrapper.


## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The primary motivation allowing for gradual scaling of the debt pool with wrappers, as per [SCCP-264](https://sips.synthetix.io/sccp/sccp-264/), while ensuring the skew imbalance is minimized.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).