---
sccp: 395
title: Disable Atomic Spot Trading on Spot Markets
network: Base
status: Vote_Pending
type: Governance
proposal: >-
 https://snapshot.org/#/snxgov.eth/proposal/0xb66691e8000fd7837f85825ded518803851eb0db6bb20ae2a6a89c8d4bb10df9
created: 2025-02-26
author: Kaleb
---

# Simple Summary

Following the implementation of [SIP-406](https://sips.synthetix.io/sips/sip-406/), this sccp proposes to disable atomic trading on `scbBTC`, `scbETH`, `sWETH` and `swstETH`.

# Abstract

Atomic trading fees have been set to 30% as per [SCCP-357](https://sips.synthetix.io/sccp/sccp-357/) given the lack of function to disable this kind of trading. This SCCP ensures that traders cannot atomically execute swap transaction, regardless of the fee imposed by switching `atomicOrdersEnabled` to a False state on these synths.

# Motivation

The main motivation is to ensure that traders who deposit cbBTC can always get back their margin when they want to exit the system, as all the `scbBTC` would be backed 1 to 1 by an underlying. 


# Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
