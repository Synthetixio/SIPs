---
network: L2
sccp: 150
title: Wrappr Parameter Changes (L2)
author: Kaleb (@kaleb-keny)
discussions-to: 'https://discord.gg/EWmYsH7X'
status: Approved
created: 2021-11-18
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/QmcZhvsXe8GJrbs4cXMSBtXKsibwrGcixmCBc7fk5kQ9MM
---

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to implement the following:
 
 - Decrease cap on DAI wrappr to 0

 - Decrease DAI Wrappr Burn Fee to 0

 - Decrease LUSD minting fee to 0

## Abstract
<!--A short (~200 word) description of the variable change proposed.-->

In order to begin the process of unwinding away from the DAI Wrappr, this sccp proposes to decrease the cap on the DAI Wrappr to 0, effectively disabling minting, decrease the burn fee to 0 to allow arbers to burn DAI at the lowest cost possible and decrease the minting fee on the LUSD wrappr to 0 as to facilitate transitioning the external collateral pool from DAI to LUSD.

## Motivation
<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The primary motivation is to improve the censorship resistance of the protocol, by not relying on USDC wrapprers such as DAI in order to leverage up the debt pool with wrappers.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
