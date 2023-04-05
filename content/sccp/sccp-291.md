---
sccp: 291
network:  Optimism
title: Increase Max `exchangeMaxDynamicFee`
author: Kaleb
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x9994cbb013235baa5638729f5e9036bde905d24906d0d880afb48c6dccca7bb8
status: Implemented
created: 2023-03-30
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to increase the `exchangeMaxDynamicFee` to 10% from 1.5%.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

- The `exchangeMaxDynamicFee` is the maximum fee that could be paid, after taking into consideration dynamic fees.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The `exchangeMaxDynamicFee` was initially lowered to 1.5% in order to avoid situation of charging too high of a fee on the futures v1 markets. However with dynamic fees long deprecated, with the help of the direct integration manager, the `exchangeMaxDynamicFee` can be increased without impacting the perps v2 & lyra vaults trading experience experience. 
It is necessary to raise the `exchangeMaxDynamicFee` as some volatile perps v2 markets, will throw a `rate too volatile` error when trying to fetch a position from perp contracts, while in reality, this fee is overridden by the `DirectIntegrationManager` upon initiation and execution of a given trade.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
