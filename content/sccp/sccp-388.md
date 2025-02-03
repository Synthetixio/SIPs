---
sccp: 388
title: Support sUSDS and stataBasUSDC as Margin on Perps V3
network: Base
status: Draft
type: Governance
created: 2025-01-30
author: Robin
---

# Simple Summary

This SCCP proposes to enable sUSDS and stataBasUSDC as margin options on Perps V3 Base: 
- sUSDS is Spark's Savings USDS, a non-rebasing representation of USDS in the Sky Savings Rate Module (SSR). sUSDS is redeemable for USDC via the Spark Peg Stability Module (PSM), which is currently integrated into 1inch on Base. Information on sUSDS and the Spark PSM can be found [here](https://docs.spark.fi/dev/savings/susds-token) and [here](https://docs.spark.fi/dev/savings/spark-psm), respectively.
- stataUSDC is a non-rebasing wrapper for Aave's USDC lending market. stataUSDC holders earn yield from Aave based on the USDC market's variable lending rate. 

# Abstract


sUSDS and stataBasUSDC would be added as margin to Perps V3 on Base with the following implementation parameters:

| **Margin** | **Discount Lower** | **Discount Upper** | **Max Collateral Amount** | **SkewScale** |
|:----------:|:------------------:|:------------------:|:-------------------------:|:-------------:|
|    [sUSDS](https://basescan.org/address/0x5875eee11cf8398102fdad704c9e96607675467a)   |        100 bp       |        101 bp       |             2m            |     1 wei     |
|  [stataBasUSDC](https://basescan.org/address/0x4ea71a20e655794051d1ee8b6e4a3269b13ccacc) |        100 bp       |        101 bp       |            10m            |     1e36      |


- the `discountScalar` would be set to 1 for all margins
- `skewScale` would be set significantly high on `stataBasUSDC` as to allow perp traders to exit their margins and unwind using `stataBasUSDC` that are LP'd
- `skewScale` would be set to 1 wei on sUSDS as no trading would be feasible 
- the collateral liquidation penalty is 3 bp (collateralLiquidateRewardRatioD18).
- The synth representation of the above margins would have a atomic swap fee of 30%, as a disincentive on swapping until [SIP](https://sips.synthetix.io/sips/sip-406/) is implemented.
- Atomic trading fees would be set to zero on `stataBaseUSDC` but would be set to 30% on `sUSDS`.

## Price Feeds: 
- The price feed that would be used for sUSDS would be the sUSDS to USDS redemption rate, multiplied by the USDS/USD price. These can be obtained from pyth.
- The price feed use on stataBasUSDC would be the same currently used for LP'ing that utilizes the erc-4626 to be able to evaluate the price in USDC.

# Motivation

The main motivation is to add the first yield-bearing stablecoin options as margin on Perps v3 Base, so that users can earn yield while trading.


# Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
