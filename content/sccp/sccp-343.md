---
sccp: 343
network: Ethereum
title: Update Liquidation Ratio
author: Cavalier, Kaleb
status: Draft
created: 2024-07-25
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to decrease the SNX `liquidationRatio` from 160% to 120% on the ethereum network.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Since the implementation of [SIP-306](https://sips.synthetix.io/sips/sip-306/) on the ethereum network, accounts that are below the `liquidationRatio` ratio, are immediately liquidated with the snx and debt socialized among stakers on v3. The liquidated snx is unlocked and immediately available for distribution.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Treasury is the sole staker on v3 connected to v2x at the moment, and they have the ability to absorb the liquidated snx with a significantly lower penalty. Hence, this SCCP proposes to lower the liquidation penalty in order to improve the system health by allowing for gradual liquidations to materialize. 

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
