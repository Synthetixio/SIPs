---
sccp: 368
title: Enable sUSDC to be used as margin on Arbitrum 
network: Arbitrum
status: Vote_Pending
type: Governance
created: 2024-11-22
author: Kaleb
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x5db509f67489f8b0193629f19d4b4a36966a44ad07c06aff9b30abe30f8c20e5
---

# Simple Summary

This SCCP proposes to enable `sUSDC` to be used as margin on Perps v3 with no discount being applied on the margin or slippage.

# Abstract

Enabling USDC margin to be used on Perps V3 Arbitrum is done with the `setCollateralConfiguration` under PerpsMarketProxy, implemented under this [PR](https://github.com/Synthetixio/synthetix-deployments/pull/558).

# Motivation

Originally due to the USDx peg issues, this was not implemented in order to ensure that traders could get back their USDC margin after having wrapped the token to mint sUSDC. However, since LP's minting USDx had been restricted in [SCCP-352](https://sips.synthetix.io/sccp/sccp-352/) and the peg state of USDx is constrained to the point of allowing margining of USDC with low risk of wrapper liquidity being depleted by LPs.


# Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
