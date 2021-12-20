---
sccp: 153
network: Ethereum
title: Increase Volume Cap on Atomic Exchanges
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2021-11-24
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/QmXyGJWj9MCfWeXzpgqvNkL5CyHeuLcBndJVNWxNZcAZqV
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Increase the cap on the volume per block for Atomic Exchanges to 1 million sUSD.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

This SCCP proposes to increase the cap on the volume as to increase the competitiveness of the product and allow for larger trades to materialize.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The larger volume per block will allow for larger trades to happen, a necessary condition given the gas constraints on L1, the cap in place aims at limiting the damage from actors taking advantage of a latency in the price feed. Therefore, volumes generated with atomic swaps will be continuously monitored and the cap adjusted accordingly.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
