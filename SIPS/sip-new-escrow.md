---
sip: 60
title: New Escrow Contract & Migration
status: WIP
author: Clinton Ennis (@hav-noms)
discussions-to: <https://discord.gg/ShGSzny>

created: 2020-05-11
---

<!--You can leave these HTML comments in your merged SIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SIPs. Note that an SIP number will be assigned by an editor. When opening a pull request to submit your SIP, please use an abbreviated title in the filename, `sip-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SIP.-->

Add new flexible escrow API to SNX escrow contract.

## Abstract

<!--A short (~200 word) description of the technical issue being addressed.-->

The current SNX [RewardEscrow](https://contracts.synthetix.io/RewardEscrow) contract is limited to escrowing SNX from the FeePool for the SNX rewards distribution from the inflationary supply. It was not designed to be used as a general purpose escrow contract.
New requirements require flexible escrow entries to be created by anyone as well as supporting the new terminal inflation.

## Motivation

<!--The motivation is critical for SIPs that want to change Synthetix. It should clearly explain why the existing protocol specification is inadequate to address the problem that the SIP solves. SIP submissions without sufficient motivation may be rejected outright.-->

Current limitations of the `RewardEscrow` contract

1. Only escrows SNX for 12 months.
2. Only `FeePool` has the authority to create escrow entries.
3. The escrow table `checkAccountSchedule` only supports returning up to 5 years of escrow entries from the initial inflationary supply.
4. `Vest` can only be called by the owner of the SNX.

Desired features for a general `SynthetixEscrow` contract

1. Ability to add arbitrary escrow periods. e.g. 3 months to 2 years.
2. Public escrowing. Allows any EOA or any contract to escrow SNX. Allowing SNX to be escrowed for protocol contributors, investors and funds or contracts that escrow some sort of incentive similar to the Staking Rewards.
3. Update `checkAccountSchedule` to allow for terminal inflation and an unlimited escrow navigation through paging.
4. Allowing anyone to `vest` an accounts escrowed tokens allows Synthetix network keepers to help support SNX holders and supports the [Liquidation system](sips.synthetix.io/sips/sip-59) to vest an under collateralised accounts vest-able SNX to be paid to the liquidator.

## Specification

<!--The technical specification should describe the syntax and semantics of any new feature.-->
TBD

## Test Cases

<!--Test cases for an implementation are mandatory for SIPs but can be included with the implementation..-->
TBD

## Implementation

<!--The implementations must be completed before any SIP is given status "Implemented", but it need not be completed before the SIP is "Approved". While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.-->

## Configurable Values (Via SCCP)

<!--Please list all values configurable via SCCP under this implementation.-->

TBD

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
