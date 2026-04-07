---
sip: null
title: Update Perps V3 for Jovian L1Block Scalars
network: Optimism & Base
status: Draft
type: Governance
author: Lesedi37 (@Lesedi37)
discussions-to: https://research.synthetix.io/
created: 2026-04-07
---

## Simple Summary
Update the Perps V3 margin accounting to support the packed 32-byte L1Block scalar format introduced in the Jovian upgrade.

## Abstract
The Jovian upgrade for the OP Stack consolidates fee scalars into a single 32-byte word in the L1Block predeploy (0x4200...0015). This SIP proposes updating the `PerpsV3MarketProxy` to correctly parse these values using bit-shifting to ensure accurate gas cost recovery and prevent margin under-calculation.

## Motivation
Synthetix V3 on Base and Optimism relies on the `l1FeeScalar` to calculate the L1 portion of transaction fees. Post-Jovian, the legacy method of reading this value will return a packed word, leading to incorrect fee scaling. Failure to update will result in protocol revenue loss or failed transaction reverts for traders.

## Specification
The implementation must extract the 4-byte scalars from the `l1FeeScalar()` 32-byte return value:
- **Base Fee Scalar:** `(l1FeeScalar >> 192) & 0xFFFFFFFF`
- **Blob Base Fee Scalar:** `(l1FeeScalar >> 160) & 0xFFFFFFFF`

## rabby web address: 0x1db618e6bfc35bd48b91431a55c4948b27e7a539
