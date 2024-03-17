---
sccp: 311
title: Increase Base LP limit to 10m USDC
type: Governance
network: Base
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x9f1ad9f65d64b929df0f379670c30dc1c65f633181d404a26a5028889a8ae77a
author: Cavalier (@cavalier_eth)
status: Vote_Pending
created: 2024-02-15
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Increase the maximum amount of liquidity that can be provided to Base Andromeda to 10m USDC.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->
Increase maximum USDC LP cap from $1m to $10m by setting

- `system.CoreProxy.configureMaximumMarketCollateral(uint128 marketId,address collateralType,uint256 amount)` = [1, 0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913, 10000000000000000000000000]
- `spotFactory.SpotMarketProxy.setWrapper(uint128 marketId,address wrapCollateralType,uint256 maxWrappableAmount)` = [1, 0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913, 10000000000000000000000000]


## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Base Andromeda has been operating in since early December and is ready to be scaled up further. The current $1m USDC LP cap has been filled and stable. With increasing LP, the OI caps can be increased.


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
