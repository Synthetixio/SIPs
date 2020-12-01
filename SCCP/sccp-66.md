---
sccp: 66
title: Increase the price adjustment period to 7 minutes
author: Kaleb Keny (@kaleb-keny)
discussions-to: governance
status: Proposed
created: 2020-11-29
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Increasing the  price adjustment period to 7 minutes from 3 minutes.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Increasing the price adjustment period helps in closing a front-running window and correct for delays in the chainlink price push. 

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Analysis of on-chain data showed that front-running is possible on the sETH/iETH pair even with the recently enacted SIP-98 due to delay in chainlink price synch with market swings.
Raising the price adjustment period to 7 minutes, should help close that window.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).