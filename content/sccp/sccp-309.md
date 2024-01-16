---
sccp: 309
title: Increase Base LP limit to 1m USDC
type: Governance
network: Base
author: Cavalier (@cavalier_eth)
status: Draft
created: 2024-01-09
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Increase the maximum amount of liquidity that can be provided to Base Andromeda to 1m USDC.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->
Increase maximum USDC LP cap from $50k to $1m by setting

- `system.CoreProxy.configureMaximumMarketCollateral(uint128 marketId,address collateralType,uint256 amount)` = [1, 0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913, 1000000000000000000000000]
- `spotFactory.SpotMarketProxy.setWrapper(uint128 marketId,address wrapCollateralType,uint256 maxWrappableAmount)` = [1, 0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913, 1000000000000000000000000]

The Cannon transaction that will be executed is https://usecannon.com/deploy/txn/8453/0xbb63CA5554dc4CcaCa4EDd6ECC2837d5EFe83C82/12/0x6434899772bd9e0a903d1d08747a83567f5ac2436ac37406953574f5bcfbd82d?chainId=8453&address=0xbb63CA5554dc4CcaCa4EDd6ECC2837d5EFe83C82


## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Base Andromeda has been operating in since early December using the configuration from [SIP-348](https://sips.synthetix.io/sips/sip-348/) and is ready to be slowly scaled up. The current 50k USDC LP cap only enables OI limits of $10k on ETH and BTC, which limits trader activity. Once LP caps are increased, Perps v3 open interest caps can be raised.


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
