---
sccp: 196
network: Ethereum & Optimism
title: Pause Increase in Base Inflation
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2022-05-10
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/QmSTPMiYyoFEHgRvr6BFJ6JYtrMwz5S3NkkMULmNYkhhCB
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to pause the growth in `baseInflation` and keep it at it's current level of 2.23m snx per week.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

`baseInflation` is currently being increased every week by 10%, as per condition laid out in [SIP-202](https://sips.synthetix.io/sips/sip-202/) that aims at raising the staking ratio.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The recent trend in staking ratio numbers show lackluster growth in staked SNX. Therefore, this sccp proposes to halt inflation at it's current levels. 
The table below show cases the staking ratio, with the numerator being the SNX staked and denominator total SNX in escrow and circulation. SNX Staked is the total amount of SNX held by wallets that have at least 1 sUSD worth of debt. Worth noting that similar numbers, but more volatile, are seen when looking at the real amount of snx staked  (i.e. excludes those that can transferred out from individual addresses).

| Date      	| ethereum 	| optimism 	| total 	|
|-----------	|----------	|----------	|-------	|
| 01-Mar-22 	| 63%      	| 96%      	| 68%   	|
| 07-Mar-22 	| 63%      	| 96%      	| 68%   	|
| 14-Mar-22 	| 63%      	| 97%      	| 68%   	|
| 20-Mar-22 	| 65%      	| 97%      	| 70%   	|
| 26-Mar-22 	| 66%      	| 97%      	| 71%   	|
| 05-Apr-22 	| 65%      	| 97%      	| 71%   	|
| 13-Apr-22 	| 62%      	| 98%      	| 68%   	|
| 06-May-22 	| 67%      	| 97%      	| 73%   	|
| 11-May-22 	| 67%      	| 97%      	| 73%   	| 

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
