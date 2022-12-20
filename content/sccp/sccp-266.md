---
sccp: 266
network: Ethereum & Optimism
title: Update DAI Wrapper Parameters
author: Kaleb (@kaleb-keny)
status: Vote_Pending
created: 2022-12-20
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x9d1c9e0e3e893ec3df12abf0505ba54582c63e66600ea68443fe2bd18affc953
type: Governance
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Lower  the `mintFeeRate` on the DAI wrappr to 10 bp, from 25 bp.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

- The `mintFeeRate` determines the fee that is paid when minting sUSD by locking up ETH in the ETH wrapper.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The primary motivation is to encourage arbs that result in a positive skew on the debt pool. Having a 10 bp minting fee, help favor `DAI > sUSD > sETH > ETH` trades, over `ETH > sETH > sUSD > DAI`


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).