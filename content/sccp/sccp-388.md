---
sccp: 388
title: Support sUSDS and stataUSDC as Margin on Perps V3
network: Base
status: Draft
type: Governance
created: 2025-01-30
author: Robin
---

# Simple Summary

sUSDS is Spark's Savings USDS, which is an ERC-4626 representation of USDS in the Sky Savings Rate Module (SSR). sUSDS is redeemable for USDC via the Spark Peg Stability Module (PSM), which is currently integrated into 1inch on Base.

Information on sUSDS and the Spark PSM can be found [here](https://docs.spark.fi/dev/savings/susds-token) and [here](https://docs.spark.fi/dev/savings/spark-psm), respectively.

stataUSDC is a non-rebasing wrapper for Aave's USDC lending market. stataUSDC holders earn yield from Aave based on the USDC market's variable lending rate. 

This SCCP proposes to add each collateral option as margin to Perps V3 on Base with the following implementation parameters:

| **Margin** | **Discount Lower** | **Discount Upper** | **Max Collateral Amount** | **SkewScale** |
|:----------:|:------------------:|:------------------:|:-------------------------:|:-------------:|
|    sUSDS   |        TBD       |        TBD       |            TBD            |     TBD    |
|  stataUSDC |        TBD       |        TBD       |            TBD            |     TBD    |

sUSDS 
- the `discountScalar` would be set to 1 for all margins
- the collateral liquidation penalty is 3 bp (collateralLiquidateRewardRatioD18).
- The caps would be set to allow for 3 simultaneous margins and 10 positions in any given account
- The synth representation of the above margins would have a atomic swap fee of 30%, as a disincentive on swapping until [SIP](https://sips.synthetix.io/sips/sip-406/) is implemented

# Motivation

The main motivation is to add the first yield-bearing stablecoin options as margin on Perps v3 Base, so that users can earn yield, both while they trade and while they have no open positions.


# Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
