---
sccp: 300
network: Optimism
title: Set councils minimumActiveMembers
author: Ethernaut
status: Draft
created: 2022-07-05
type: Meta-Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0xc9c6f73c61ae851cb486878ed9beca16a5e7e7e0c36d6de30d41c87beacff14d
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Set all council's `minimumActiveMembers` setting to n-2, where n represents each council's current seat count.
* Ambassador council: `2/3` (n-2 does not apply because we don't want to allow a single member)
* Grants council: `3/5`
* Spartan council: `6/8`
* Treasury council: `2/4`

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The current `minimumActiveMembers` setting is `1` on all councils. With the current code implementation, this setting basically controls, when an "emergency election" is triggered upon member dismissal by the council owner. At the moment, the owner of all councils is the pDAO, but in the future it may be other entities, such as the Spartan Council. An emergency election, for the time being, is simply a fast forward in the epoch's Administration period to the Nomination period, without modifying the epoch's schedule.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Even though this SCCP may trigger a lot of concerns and discussions about the concept of an emergency election, the idea is to leave such discussions for other SIPs, and simply focus on not leaving the parameter at `1` during this epoch. The emergency election feature is clearly pretty raw right now, but having a non `1` value for this setting is a slight step forward.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
