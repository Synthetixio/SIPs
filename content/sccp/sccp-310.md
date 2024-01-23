---
sccp: 310
title: Increase Base OI limits to 1m USDC
type: Governance
network: Base
author: Cavalier (@cavalier_eth)
status: Approved
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x9f1ad9f65d64b929df0f379670c30dc1c65f633181d404a26a5028889a8ae77a
created: 2024-01-09
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Increase the maximum market size for ETH and BTC perp markets to $1m USDC each.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->
Increase maximum Open Interest (OI) caps on both ETH and BTC from $10k to $1m, by setting

- `perpsEthMaxMarketSize` = 385
- `perpsBtcMaxMarketSize` = 22

`MaxMarketSize` is denominated in native units and determines both long and short, so if both sides of ETH and BTC markets are full, the total OI is approx $4m. 

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Base Andromeda has been operating in since early December using the configuration from [SIP-348](https://sips.synthetix.io/sips/sip-348/) and is ready to be slowly scaled up. The LP limit has been increased to $1m by [SCCP-309](https://sips.synthetix.io/sccp/sccp-309/), and once at least 80% full, open interest caps can be increased accordingly.


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
