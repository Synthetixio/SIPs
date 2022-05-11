---
sccp: 197
network: Ethereum & Optimism
title: Define Voting Strategy for Election Module
author: Andy T CF (@andytcf)
status: Draft
created: 2022-05-11
type: Meta-Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to define the Voting Strategy to be used in the [Election Module](https://sips.synthetix.io/sips/sip-207/) for the next epoch (1st July 2022)

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The Election Module will use the user's `balanceOf` from the Synthetix Debt Share (SDS) Contracts (listed below) to calculate their voting power

L1 - https://contracts.synthetix.io/SynthetixDebtShare
L2 - https://contracts.synthetix.io/ovm/SynthetixDebtShare

This is different from the existing implementation found in the [Snapshot Strategies](https://github.com/snapshot-labs/snapshot-strategies/tree/master/src/strategies/synthetix_1) which calculates the dollar value of each Synthetix Debt Share by comparing the ratio between the totalSupply of the SDS to the `currentDebt` in the system.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

When the Synthetix Protocol was upgraded to the SDS, the voting system was maintained to reflect how the existing debt was calculated for the user (i.e the sUSD dollar value of each wallet). This is suitable for off-chain calculations as done in Snapshot but when implemented in on-chain in the newly introduced Election Module, it may introduce unnecessary complexity and cost due to the need to read the `DebtCache` and perform further calculations on-chain when compared to only needing to read the `balanceOf` a contract.

When the Debt Shares Ratio is compared to the Debt Shares Raw Balance for a list of addresses as shown [here](https://docs.google.com/spreadsheets/d/1UzfCpJyZ48QMTDVkLajlbSy8Wwp9LdEcBDo94XSgGxA/edit?usp=sharing) we can see that the values still reflect an accurate representation of a user's debt share of the system (i.e the values are just scaled by a factor of X). Since L1 and L2 have different instances of SDS, the scaling factor is different for each network.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
