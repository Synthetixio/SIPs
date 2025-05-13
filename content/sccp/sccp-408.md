---
sccp: 408
title: Update low usage perp markets to close-only
network: Base & Optimism
status: Draft
type: Governance
created: 2025-05-13
author: Cavalier
---

# Simple Summary

This SCCP proposes that perpetual futures markets with less than $10,000 in open interest, or zero 24-hour trading volume on Base and Optimism at time of writing are changed to become close-only. 


# Abstract

Markets are moved into close-only mode by setting `maxMarketValue` to 0 for:

Base: AAVE, ADA, AERO, AVAX, AXS, BCH, BERA, BLUR, BOME, CAT, CHILLGUY, COMP, CRV, DEGEN, DOGE, DOT, DYDX, EIGEN, ENA, ETHBTC, ETHFI, FARMS, FIL, FLOW, FXS, GALA, GMX, GOAT, GRT, ICP, IMX, IO, JTO, KAITO, KMNO, LDO, MEW, MEME, MOODENG, MORPHO, NEAR, NOT, OM, OP, PENDLE, PNut, PYTH, RENDER, SAFE, SATS, SHIB, SLERF, SNX, SOLETH, STRK, SUI, SUSHI, TAO, TIA, TON, TRUMP, TRX, UNI, VELO, VIRTUAL, W, WIF, WLD, XMR, ZRO.

Optimism: AAVE, ADA, ALGO, APT, ARB, AVAX, AXS, BCH, BLUR, BNB, BONK, CRV, DYDX, EOS, ETHBTC, FIL, FLOW, INJ, LDO, LINK, MKR, NEAR, ORDI, PENDLE, PEPE, PYTH, RUNE, SEI, SHIB, SNX, STRK, SUSHI, TIA, TRX, USDT, WLD, XLM, XMR, XRP.

# Motivation

New markets are added to meet demand, but low-activity markets strain resources without significant revenue. Setting MMV to 0 enables close-only mode, rationalizing operations.

# Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
