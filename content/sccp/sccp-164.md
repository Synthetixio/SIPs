---
sccp: 164
network: Ethereum
title: Time lock on burning after minting 7 days
author: Kain Warwick (@kaiynne), Jackson Chan (@jacko125)
status: Draft
created: 2022-02-01
type: Governance
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Adjust Time lock on burning after minting from 24 hours to 7 days (168 hours).

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Proposing to adjust Time lock on burning after minting from 24 hours to 7 days (168 hours).</br>

minimumStakeTime = 604,800

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

To further hinder snapshotters who can take advantage of the system / fee periods claiming with the increase in weekly SNX rewards after the implementation of [SIP-202](https://sips.synthetix.io/sips/sip-202/). Also aligns the staking to weekly cycles with the duration of the fee period also being 7 days. This will increase debt exposure from 1/7 to 7/7. 

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

