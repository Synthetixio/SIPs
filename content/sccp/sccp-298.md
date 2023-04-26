---
sccp: 298
network: Optimism
title: Increase Max Funding Velocity 
author: Fifa
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0xc843e455bac322436c46097982052442f14723d31fb2eb02506ad8b5ed8cc73d
status: Vote_Pending
created: 2023-04-26
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

With [SCCP-293](https://sips.synthetix.io/sccp/sccp-293/) set to be implemented on the 27th of April, this SCCP proposes to also increase the max funding velocity on ETH & BTC to 9.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->
`maxFundingVelocity` is the parameter that helps calibrate the speed by which funding rate changes for a given level of skew & skew scale.


## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The main motivation is to help promote arbitrages of the skew, by allowing funding to settle back into neutrality at a faster pace, when outsized positions are executed on the debt pool that flip the skew from short to long or vice-versa.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

