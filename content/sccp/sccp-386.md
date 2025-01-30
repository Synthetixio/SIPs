---
sccp: 386
title: Enable sUSDC As Margin
network: Base
status: Implemented
type: Governance
created: 2025-01-23
proposal: >-
 https://snapshot.org/#/snxgov.eth/proposal/0xa683a7982d80db8bef1978953f6903e6b8b98a48169b5493946d448f4008196d
author: Kaleb
---

# Simple Summary

Currently the base deploy allows for the below margins to be used as margin:
- snxUSD
- scbBTC
- scbETH
- sWETH
- swstETH

This sccp proposes to add the ability to use sUSDC as margin on base.

# Abstract

The main configurations of this margin are as follows:
- maxCollateralAmount: 100m$
- synth_usdc_upper_limit_discount: 0
- synth_usdc_lower_limit_discount: 0
- synth_usdc_discount_scalar: 1

With the above configuration the margin would have no discount imposed.

# Motivation

This was requested by a partner integrator who wishes to use sUSDC for margining in order to avoid having the procure snxUSD via a buy/sell in their implementation. Note that snxUSD can be swapped into sUSDC and back without any fees atomically at parity on base, but using sUSDC can facilitate the onboarding as the implementation would not need to buy snxUSD when adding as margin. Nevertheless, the integrator would still have to deal with snx, as that is the only margin accepted to settle outstanding debt in order to withdraw a margin.

# Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
