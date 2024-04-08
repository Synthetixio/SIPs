---
sccp: 318
network: Base
title: Increase Max Perp Positions Per Account - Perps V3
author: Kaleb (@kaleb-keny)
status: Implemented
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x710f81f959abe075e1697762e386af7ca4bd2c7c6fff1abf5198e1a5c89f867a
created: 2024-04-05
type: Governance
---

# Simple Summary

This SCCP proposes to increase the max number of positions per account from 2 to 3.

# Abstract

The max number of perp positions per account limits is a limitation put in place in order to limit the gas consumption per trade settle. With [SCCP-317](https://sips.synthetix.io/sccp/sccp-317/) in place, the cap can be lifted with no issue on the keeper compensation.

# Motivation

The motivation is to improve the user experience by allowing more positions to be opened per single account

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).


