---
sccp: 193
network: Optimism
title: Lower LUSD Wrapper Burn Fee
author: Spreek (@Spreek)
status: Implemented
created: 2022-05-05
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/QmX1nSosisGN7eXgmDoynk7YDLw9GsKZxwqXQQkeq7bTCi
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes the following updates to LUSD:

- Reduce `burnFeeRate` on LUSD wrappr to 10 bps

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The parameters being updated as are as follows

- The `burnFeeRate` is a parameter that determines the fee to be paid in order to release the underlying, when a synth is burned

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The goals of increasing the burn fee in SCCP 168 have been achieved. Furthermore, L2 sUSD is currently off peg (trading at ~0.99), which suggests that this fee increase should be reverted.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
