---
sccp: 312
title: Increase Base ETH and BTC OI limits to $20m
type: Governance
network: Base
author: Cavalier (@cavalier_eth)
status: Draft
created: 2024-03-18
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Increase the maximum market size for ETH and BTC perp markets $10m USDC each (applies separately to longs and shorts on each market).

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->
Increase maximum Open Interest (OI) caps on both ETH and BTC from $1m to $10m long and short, by setting

- `perpsFactory.PerpsMarketProxy.setMaxMarketSize(uint128 marketId,uint256 maxMarketSize) = [100, 2777000000000000000000]` # 2777 ETH

- `perpsFactory.PerpsMarketProxy.setMaxMarketSize(uint128 marketId,uint256 maxMarketSize) = [200, 149000000000000000000]` # 149 BTC

`MaxMarketSize` is denominated in native units and applies separately to both long and short sides, so if both sides of ETH and BTC markets are full, the total OI is approx $40m. 

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Base Andromeda has been operating in since early December using the configuration from [SIP-348](https://sips.synthetix.io/sips/sip-348/) and is ready to be slowly scaled up. The LP limit has been increased to $10m by [SCCP-311](https://sips.synthetix.io/sccp/sccp-311/), and once at least 50% full, open interest caps can be increased accordingly.


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
