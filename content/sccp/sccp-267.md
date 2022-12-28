---
sccp: 267
network: Ethereum
title: 1inch Integration - Cross Asset Atomic Swaps
author: Kaleb (@kaleb-keny
status: Draft
created: 2022-12-28
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x0a4b9002b8b76dee8e5f743d000d3e0489a8e1846f48dc304f2283521ac76254
---


## Simple Summary

Add the below addresses as 1inch integration contracts with the same parameters as those mentioned in [SCCP-263](https://sips.synthetix.io/sccp/sccp-263/):
- `0xcc0333574bac61e0d891053083465ef68f544d2e`
- `0x15a3c296eae49734bc467f95815f6dea9a3de233` 


## Abstract

The `DirectIntegration` addresses are contracts setup by integrators, that are allowed to trade at specialized fees and parameters, given that they satisfy certain conditions. In 1inch's case, they abide by the CRV <> SNX <> CRV trading route.

## Motivation

The new `DirectIntegration` contract addresses were requested by 1inch, as part of their planned release cycle.


## Copyright


Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

