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

The `collateralLeverage` is the number that helps determine market capacity


# Motivation

The parameters were originally configured to be at 1, but given that synths are only used for wrapping underlying and for margining to perps markets. the leverage number can be relaxed at the capacity is handled by the `oiCreditCapacity` multiplier number on the `PerpsMarketProxy`. 


# Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
