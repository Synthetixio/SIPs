---
sccp: 309
title: Configure Base Andromeda
type: Governance
network: Base
author: Cavalier (@cavalier_eth)
status: Draft
created: 2023-10-27
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->
Configure the Andromeda Base deployment with V3 and Perps V3 in a conservative manner, for USDC collateral.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Markets require at least 125% collateralization
- `minimum_liquidity_ratio` = 125% 

minimum deposit time is 24 hours
- `account_timeout_withdraw` = 1 day

Enable USDC as collateral, $1 price, $1m cap, cratio 150%, 101% liquidation, minting disabled
- `usdc_address` = 0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913
- `registerNode` = CONSTANT NODE, 1
- `synthUsdcMaxMarketCollateral` = 1000000
- `issuanceRatioD18` = MaxUint256
- `liquidationRatioD18` = 1.01

Configure ETH and BTC Perps Markets
| Variable                          | ETH Market       | BTC Market       |
|----------------------------------------|------------------|------------------|
| PerpsMarketId                          | 100              | 200              |
| SkewScale                              | 1000000          | 1000000          |
| MaxFundingVelocity                     | 9                | 9                |
| MakerFeeRatio                          | 0.0002           | 0.0007           |
| TakerFeeRatio                          | 0.0005           | 0.0003           |
| MaxMarketSize                          | 100000           | 100000           |
| InitialMarginRatio                     | 1                | 1                |
| MaintenanceMarginScalar                | 0.5              | 0.5              |
| MinimumInitialMarginRatio              | 0.02             | 0.02             |
| LiquidationRewardRatioD18              | 0.01             | 0.01             |
| MaxLiquidationLimitAccumulationMultiplier | 1              | 0.5              |
| MaxSecondsInLiquidationWindow          | 30               | 30               |
| MinimumPositionMargin                  | 0                | 0                |
| LockedOiRatio                          | 0.5              | 0.5              |
| SynthMaxCollateralAmount               | <%= MaxUint256 %> | <%= MaxUint256 %> |
| MaxLiquidationPd                       | 0.0016           | 0.0016           |



## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->



## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
