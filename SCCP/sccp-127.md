---
sccp: 127
title: Lower Target Collateralization Ratio 450% from 500%
author: Kaleb Keny (@kaleb-keny)
discussions-to: governance
status: Vote_Pending
created: 2021-06-26

---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Decrease the target Collateralisation Ratio for SNX stakers to 450%.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Given the state of the peg, this sccp proposes to decrease the target collateralization ratio of SNX stakers to 450% from 500% currently.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The peg is increasingly pressured as can be seen [here](https://www.curve.fi/trade/susdv2/SUSD-USDC/4h), this is mostly due to the following reasons:
- The decrease in the capatlalization of synthetix due to the market downtrend. 
- The on-going liquidations that are resulting in further snx price pressure and peg premiums.

This SCCP proposes to provide minters who are close to liquidation some breathing room by allowing them to acquire synths more cheaply and having them need to burn less sUSD in order to start claiming again. That said, more longer-term solutions are being evaluated whether by putting in place structures for liquidations or having stable backed synths (stable-wrapper).


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
