---
sccp: 269
network: Ethereum
title: Update Fees - Spot Exchanges
author: Kaleb (@kaleb-keny)
status: Approved
created: 2022-01-09
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0xaeafaf7c99d01b0f6a71bfec09777b9bd1179d24137b6011425db32b27d058eb
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Increase the `exchangeFeeRate` on forex synths (sEUR,sJPY,sCHF,SAUD,sKRW and sGBP) to 15 bp from 5 bp. Note this change does not affect atomic spot forex exchanges.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The `exchangeFeeRate` is the fee rate paid on exchanges into a given synths.
 

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The main reason is to lean against the economic arbitrage that results from  chainlink having a high threshold for which price updates are pushed, around 20 to 30 bp, relative to the low fee being charged of 5 bp.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
