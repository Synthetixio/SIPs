---
sccp: 367
title: Temporarily Lower the locked OI Ratio to 0.20
network: Arbitrum
status: Implemented
type: Governance
created: 2024-11-22
author: Kaleb
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x2a190db6b1c38d2a5930f1efb4cec4af602e0eb8b697579edb6fe005543f60ad
---

# Simple Summary

This SCCP proposes to temporarily reduce the locked oi ratio on all perp markets on arbitrum from 0.5 to 0.20.

# Abstract

The locked oi ratio determines the size of of oi allowed for a given LP backing. A ratio of 0.50 means that for each dollar of oi needs to be backed by 0.5 dollars of LP.

# Motivation
The change is in light of upcoming changes to the core that better account for the amount of LP backing markets in the system. When Core is updated next week, the changes in this SCCP will be reverted back to the original state. 


# Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
