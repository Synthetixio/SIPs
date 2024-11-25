---
sccp: 365
title: Update Keeper Settlement Reward
network: Arbitrum & Base
status: Implemented
type: Governance
created: 2024-11-19
author: Kaleb
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x2b464037de9824e79774dd122e87ffc938ba9cd0315bd777033394c2927172a7
---

# Simple Summary

This SCCP proposes to decrease the settlement reward for settling perp trades from 1 USD to 40 cents per trade.

# Abstract
The settlement reward is configured in the settlement strategy of the perp market and is currently configured to 1 USD. The reward represents the minimum reward paid to keepers on top of gas costs.

# Motivation

The parameter updates are in light of the recent review of profitability of keepers vis-a-vis transaction costs. The recently implemented [SCCP-364](https://sips.synthetix.io/sccp/sccp-364/) should help guarantee that keepers are compensated at all times for settling trades. This along with the compensation that scales as gas prices spike should ensure that keepers compensation increases as the cost of settle trades rises.


# Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
