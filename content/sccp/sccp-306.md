---
sccp: 306
title: Thales - Create Pool and register Market
type: Governance
network: Optimism
author: Cavalier (@cavalier_eth)
status: <Draft>
created: 2023-09-07
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Create a Thales Pool and Thales Market on Synthetix v3, so SNX LPs can choose exposure to Thales and Overtime AMMs and their yield.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Create a new v3 Pool called “Thales”, controlled by Thales treasury, in line with [SIP-302](https://sips.synthetix.io/sips/sip-302/):  
- createPool(7,[ThalesPoolOwnerAddress])
- setPoolName(7, “Thales Pool”)*

Register a new v3 Market called “Thales”, to be collateralized by the Thales Pool:
- registerMarket([addressOfNewThalesMarket])
- setMarketMinDelegateTime = 2 weeks
- minimumCredit = capital utilization rate of underlying AMM * amount deposited to the AMM by the v3 market

The Thales Market will take sUSD credit against the Thales Pool collateral and deposit it into the underlying AMMs as an LP position on behalf of the stakers, and periodically when available, distribute any yield or loss back to the Thales Pool.


## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Creating the Thales Pool and Market will allow Synthetix v3 LPs to access the Thales parimutuel and Overtime sport markets AMMs: 
- Thales AMM backs the Thales markets trading with a lifetime yield of 9.27% based on its 16 week history. 
- Overtime Singles AMM backs Overtime trades with a single market position with lifetime yield of +51.89% with a 25 week history. 
- Overtime Parlays AMM backs Overtime trades with multiple market positions with  lifetime yield of 7.89% in its 11 week history. 

Thales and Overtime AMMs are existing products, so the Thales v3 Market will act as an interface between Synthetix v3 Thales Pool and the Thales and Overtime AMMs. The Thales Market will distribute the collateral to all existing Thales and Overtime AMMs in configurable weights. Collateral in the Thales will be exposed to all of Thales and Overtime AMMs to disincentivize front running of yields on certain markets. 

At any given time, a keeper can call a `rebalance` function that will:
- Check for any delta in available credit capacity, and either signal to the thales AMM an intent to deposit or withdraw.
- Check if any yields need to be collected, withdraw from thales AMM, call `depositMarketUsd` on the core system and deposit the yield.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
