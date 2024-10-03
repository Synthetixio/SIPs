---
sccp: 355
title: Update Leverage on Spot Synths
network: Arbitrum
status: Draft
type: Governance
created: 2024-10-03
author: Kaleb
---

# Simple Summary

This SCCP proposes to increase the leverage on Spot Synths to 10.

# Abstract

The `collateralLeverage` is the number that constrains the ability of liquidity providers to withdraw assets, depending on the size of the open interest of spot market synths.

# Motivation

The parameters were originally configured to be at `1` on all spot markets (i.e. sUSDC, swSOL, stBTC, sETH). Given that these synths would only be either stable coins backed or would be constrained to be only wrappable, the leverage number can be relaxed as the credit capacity would be catered for on the perp market by configuring the `lockedOiRatio`. 


# Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
