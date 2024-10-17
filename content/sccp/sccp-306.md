---
sccp: 306
title: Create the Kwenta Pool 
network: Optimism
author: Jeremy (@jchiaramonte7), Cavalier (@cavalier_eth)
status: Rejected
created: 2023-09-06
type: Governance
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->
Create a Kwenta Pool on Synthetix v3.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Create a new v3 Pool called “Kwenta”, controlled by Kwenta treasury, in line with SIP-302: 
1. Call `createPool(6,poolOwnerAddress)` on [PoolModule](https://github.com/Synthetixio/synthetix-v3/blob/main/protocol/synthetix/contracts/modules/core/PoolModule.sol)
2. Call `setPoolName(6, “Kwenta”)` on [PoolModule](https://github.com/Synthetixio/synthetix-v3/blob/main/protocol/synthetix/contracts/modules/core/PoolModule.sol)

> 6 is the next free `poolId`

The owner of the Kwenta pool will be the Kwenta treasuryDAO `oeth:0x82d2242257115351899894eF384f779b5ba8c695`


## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

As per [KIP-95](https://gov.kwenta.eth.limo/kips/kip-095/), Kwenta will directly bootstrap the Kwenta Pool, with the SNX earned through the Synthetix Volume Source Fee Program participation. There is currently ~165k SNX in Kwenta Treasury, this and future earnings will be directed to the new Kwenta Pool.

It is expected that the Kwenta Pool will initially delegate collateral to Perps v3, which Kwenta are integrating with.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
