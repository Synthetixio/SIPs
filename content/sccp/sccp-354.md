---
sccp: 354
title: Update Arbitrum Max Lp Amount - sUSDe
network: Arbitrum
status: Vote_Pending
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0xdf6585bf2337b4c4e1897669e51bb9d598c1833ba46cb3b90dd30b8b01197323
type: Governance
created: 2024-09-19
author: Matt
---

# Simple Summary

This SCCP proposes to lower the sUSDe max lp amount to 10 million USD from 50 million USD configured under [SCCP-339](https://sips.synthetix.io/sccp/sccp-339/).


# Abstract

The `maxMarketCollateralAmount` is the maximum amount that can be LP'd into the core system.


# Motivation

The initial parameters were initially configured with expectation that redemption based pricing would be feasible with the current v3 implementation. However reaching that state requires a bit more work that is yet to be completed from both Synthetix and Pyth side. Hence, it is recommended to lower the maximum amount that can be Lp'd until the redemption based pricing is possible. 


# Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
