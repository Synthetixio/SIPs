---
sccp: 245
network: Optimism
title: Update SOL perp parameters
author: Afif (@aband1)
status: Implemented
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0xc8fa08d577d297a8affd2fa6d3a65152e75bb12a103e203f09a400f0d1bf69d3
created: 2022-11-11
type: Governance
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

For SOL perp: (1) reduce `skewScaleUsd` from 50M to 10M sUSD, and (2) increase `maxMarketValueUsd` from 200k to 1M sUSD

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

This SCCP proposes parameter adjustments to the SOL perp market to better align with market conditions. 

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

SOL liquidity has materially deteriorated pushing external funding rates significantly higher. Reducing `skewScaleUsd` can rectify this discrepancy while temporarily increasing `maxMarketValueUsd` can expand arb capacity and allow for a more targeted/progressive unwinding of SOL perp OI. 

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
