---
sccp: 336
network: Arbitrum
title: Update Arbitrum LP caps
author: Cavalier, Millie
status: Implemented
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x2807ee25aa897dbca13e72d44e287bddcf54b5b096a8fbb9c655658842d1e077
---

# Simple Summary

This SCCP proposes to reconfigure the LP caps for Arbitrum as the system prepares to scale up; $10m for ARB, ETH, USDC and aUSDC as collateral and Wrapper asset, and remove DAI as collateral and Wrapper asset.

# Abstract

The parameters configurations description is as follows:

LP capacity in native units
- USDC 10m
- ETH 2700
- ARB 10m
- aUSDC (aaveUSDC) 10m
- Remove DAI by setting cap to 0

Wrappers
- USDC Wrapper capacity 10m 
- Disable DAI wrapper by setting to 0 

# Motivation

The Arbitrum deployment is ready to be configured for all collateral types as defined by [SIP-367](https://sips.synthetix.io/sips/sip-367), with the removal of DAI due to duplication with USDC market segment and replaced with yield-bearing aave wrapped USDC.

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
