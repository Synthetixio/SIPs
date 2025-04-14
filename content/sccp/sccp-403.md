---
sccp: 403
network: Ethereum & Optimism
title: Update Liquidation Ratio Schedule
author: Kaleb
status: Approved
created: 2025-04-09
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x7b38742f5d455e0bba5a967bc965b7f1041bd983b1d057355d0da59dc2fecd2f
type: Governance
---

## Simple Summary

This sccp proposes to increase the liquidation ratio as per the below schedule:
- 11-Apr-2025: 250%
- 18-Apr-2025: 500%
- 21-Apr-2025: High enough to deprecate solo snx staking

## Abstract

The liquidation ratio is the ratio at which accounts on v3 ethereum and optimism are liquidated. The SNX and debt are allocated to treasury when a liquidation is enacted.

## Motivation

The motivation is to deprecate solo staking in favor of  [420 POL staking](https://sips.synthetix.io/sips/sip-420). Note that solo stakers having a collateralization ratios well above 160% are able to claim back their SNX and debt from Treasury within a 6 months period after the date of their liquidations  `(i.e. before 21-Oct-2025). However the accounts' collateralization ratio needs to remain above the 160% during the grace period in order to be eligible. If the ratio dips below 160% during the grace period, the accounts' SNX is considered to be forfeited, as per the standard liquidation rules outlines in [SCCP-401](https://sips.synthetix.io/sccp/sccp-401/).
Users who are liquidated are encouraged to open tickets in [Synthetix Discord](https://discord.gg/HSgeHuVs) in order to claim back that liquidated SNX.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
