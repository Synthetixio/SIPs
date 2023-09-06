---
sccp: 305
title: BetSwirl - Create Pool and register Market
network: Ethereum
author: Romauld Hog (@RomauldH), Cavalier (@cavalier_eth)
status: Draft
type: Governance
created: 2023-09-01
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->
Create a BetSwirl Pool and register a BetSwirl Market, so that Betswirl can launch on Synthetix v3.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Create a new v3 Pool called “Betswirl”, controlled by Betswirl treasury, in line with [SIP-302](https://sips.synthetix.io/sips/sip-302/): 

- *createPool(5,* [0x9f72820ee00d54330F9Ba31ff6006116D7ddFE67](https://etherscan.io/address/0x9f72820ee00d54330F9Ba31ff6006116D7ddFE67) *)*
- *setPoolName(5, “Betswirl Pool”)*

Register a new v3 Market called “Betswirl”

- *registerMarket(*[addressOfNewBetswirlMarket]*)*

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Synthetix v3 is ready to support third-party protocols willing to self-collateralize their Pools. BetSwirl, a decentralized GambleFi platform seeks to integrate with Synthetix v3 to tap into new liquidity, expand its user base, and consolidate fragmented collateral. Live for more than a year, BetSwirl has generated $32 million in wagered volume, $900k in annualized fees, and consumed 2.7k $LINK on Chainlink VRF. 

The proposal seeks to launch a BetSwirl Market on Synthetix v3, and backed exclusively by a newly created BetSwirl Pool. Betswirl will deposit the initial SNX into the Betswirl Pool. BetSwirl is committed to demonstrating the performance of its Market against their Protocol Owned Liquidity in their v3 Pool, as well as offering Synthetix LPs the option to delegate to the BetSwirl Pool. Given that Market and Pool creation on v3 isn't currently permissionless, this proposal seeks Spartan Council's approval.

By integrating with v3, BetSwirl seeks to become a part of the Synthetix ecosystem, without adding any risk to the Spartan Pool.

Links: [Dune iGaming Dashboard](https://dune.com/betswirl/analytics), [TokenTerminal](https://tokenterminal.com/terminal/projects/betswirl), [DefiLlama Fees](https://defillama.com/fees/betswirl), [DeFiLlama dashboard](https://defillama.com/protocol/betswirl), [Dune Staking](https://dune.com/betswirl/staking).

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
