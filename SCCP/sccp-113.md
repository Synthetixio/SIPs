---
sccp: 113
title: Decrease SNX Inflationary Rewards on Curve to 6k SNX
author: Kaleb Keny (@kaleb-keny)
discussions-to: governance
status: Approved
created: 2021-05-25
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to decrease the SNX reward paid to LP stakers on Curve to 6k SNX from 8k SNX per week.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Given the relative stability sUSD peg and the availability of an on-ramp with deep frictionless liquidity (wrappr), snx inflation paid to the sUSD pool on curve can be decreased with no consequence on the state of the peg.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

SNX incentives paid to Curve LP providers can be significantly decreased because of the following reasons:
- Trading fees and CRV Governance inflation are more than enough to incentivize stakers to continue provide to curve.
- Users can now unlock an unlimited supply of synths with the least amount of friction possible all the while reducing the skew on minters with wrappr.
- The sUSD peg will remain, despite the small decrease in snx inflationary rewards, due to the arbitrage possible with the ETH locked in the wrappr contract.

However, it is worth mentioning, given the close relationship between the  Synthetix and Curve protocols, this sccp proposes to only cut the rewards marginally.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
