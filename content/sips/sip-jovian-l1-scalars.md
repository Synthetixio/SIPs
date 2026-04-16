---
sip: <to be assigned>
title: Update Perps V3 L1Block Scalars for Jovian
network: Base & Optimism
status: Draft
type: Governance
author: Lesedi37 (@0x1db618e6bfc35bd48b91431a55c4948b27e7a539)
created: 2026-04-16
---

## Simple Summary
Update the Perps V3 GasPriceOracle to utilize the Jovian-era dual L1 fee scalars.

## Abstract
This proposal updates the L1 data fee calculation within the Synthetix Perps V3 markets to support the OP Stack 'Jovian' upgrade. It transitions from a single scalar to a dual-scalar model (baseFeeScalar and blobBaseFeeScalar).

## Motivation
Post-Jovian, L1 data costs are split between standard calldata and EIP-4844 blobs. Failure to update the scalars will result in inaccurate transaction pricing for traders on Base and Optimism, potentially leading to protocol revenue leakage.

## Specification
The oracle integration must be updated to read from the L1Block contract (`0x4200000000000000000000000000000000000015`):
- `baseFeeScalar` (Slot 3)
- `blobBaseFeeScalar` (Slot 4)

Formula: `L1_Fee = (L1_Base_Fee * baseFeeScalar + L1_Blob_Base_Fee * blobBaseFeeScalar) / 10^12`

## Financial Specification
- **Reward Amount:** $1,500.00 USDC
- **Payee Address:** `0x1db618e6bfc35bd48b91431a55c4948b27e7a539`
- **Network:** Base
