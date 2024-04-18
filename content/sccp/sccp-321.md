---
sccp: 321
network: Base
title: Update Perps V3 Parameters - MakerFee
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2024-04-16
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x813bf38e25b729f1dcbeec649a6959a60153113af34160b9469e6bc9ab4d8c55
---

# Simple Summary

[SCCP-320](https://sips.synthetix.io/sccp/sccp-320/) specified that ETH and BTC perp markets makerFee be set to zero. However, setting that parameter to zero causes prevents users from executing orders that increase the skew. Therefore this SCCP alters [SCCP-320](https://sips.synthetix.io/sccp/sccp-320/) by specifying that maker fee be set to 1/100th of a bp for the ETH and BTC perp market.

# Abstract

`makerFee` is the fee paid to LP's when traders reduce the skew

# Motivation

The proposed parameter changes were performed by PDAO in coordination with the spartan council in an emergency action, in order to continue to facilitate users orders. This SCCP ratifies this decision with a governance vote.

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).


