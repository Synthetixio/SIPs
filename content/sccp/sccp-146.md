---
sccp: 146
title: Disabling New Shorts From Being Open Mainnet
author: Kaleb (@kaleb-keny)
discussions-to: 'https://discord.gg/EWmYsH7X'
status: Vote_Pending
created: 2021-11-02
type: Governance
---

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Disallowing new shorts from being opened on mainnet by setting the `setCanOpenLoans` to False.

## Abstract
<!--A short (~200 word) description of the variable change proposed.-->

With the expected release of the shorting contracts on optimism, this sccp aims at sunseting shorts on mainnet by disabling opening of new shorts. The trading experience is far superior on optimisim, due to the low latency on the oracle feed, which allows us to drop the interaction delay. This allows traders to open shorts and interact with them without having to wait out an interaction delay.

## Motivation
<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

In order to enhance the user experience, this sccp disables opening of new shorts on mainnet. Important to note that users with existing short positions can still interact with their positions and are not affected by this parameter change.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).