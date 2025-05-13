---
sccp: 408
title: Update low usage perp markets to close-only
network: Optimism & Base
status: Draft
type: Governance
created: 2025-05-13
author: Cavalier
---

# Simple Summary

This SCCP proposes that perpetual futures markets with less than $20,000 in open interest, or zero 24-hour trading volume on Base and Optimism at time of writing are changed to become close-only. 


# Abstract

Markets are moved into close-only mode by setting `maxMarketValue` to 0 for:

Optimism:  AAVE, ADA, ALGO, APT, ARB, ATOM, AVAX, AXS, BCH, BLUR, BNB, BONK, CRV, DYDX, EOS, FIL, FLOW, FXS, GMX, GRT, IMX, INJ, JUP, LDO, LINK, LTC, MAV, MRK, NEAR, ORDI, PENDLE, PYTH, RUNE, SEI, SHIB, STRK, SUSHI, TIA, TRX, UNI, USDT, WLD, XLM, XMR, XRP.

Base: ADA, ALGO, APT, ARB, ARKM, ATOM, AVAX, AXL, AXS, BCH, BERA, BLUR, BNB, BOME, BONK, CAT, CHILLGUY, COMP, CRV, DEGEN, DOT, DYDX, EIGEN, ENA, EOS, ETC, ETHFI, FIL, FLOW, FTM, FXS, GALA, GMX, GOAT, GRT, ICP, IMX, INJ, IO, IP, JTO, JUP, KMNO, LDO, LTC, MELANIA, MEME, MEW, MKR, MOODENG, MORPHO, NEAR, NOT, OM, ORDI, PENDLE, PEOPLE, PNUT, POL, POPCAT, PYTH, RENDER, RUNE, S, SAFE, SATS, SEI, SHIB, SLERF, SNX, SOLETH, STRK, STX, SUSHI, TAI, TIA, TON, TRUMP, TRX, UNI, VELO, VIRTUAL, VVV, W, WLD, XLM, YFI, ZRO.

# Motivation

New markets are added to meet demand, but low-activity markets strain resources without significant revenue. Setting MMV to 0 enables close-only mode, rationalizing operations.

# Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
