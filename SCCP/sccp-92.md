---
sccp: 92
title: Distribute 16k SNX to sBTC shorting reward incentives
status: Implemented
author: Jackson Chan (@jacko125)
discussions-to: https://discord.gg/8Br87gxm
created: <2021-04-06>
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Distribute to [sBTC short incentives](http://contracts.synthetix.io/ShortingRewardssBTC) 16K SNX from inflationary supply.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Now that traditional shorting mechanism is available with sBTC shorts on [kwenta.io/shorts](https://kwenta.io/shorting), I propose to distribute 16K SNX weekly inflationary supply to the [ShortingRewardssBTC](http://contracts.synthetix.io/ShortingRewardssBTC) contract.

- sDAO funded sBTC Short incentives emmision ends on Wednesday, 14 April 2021 16:01:35.

A single transaction by the protocolDAO to the [RewardsDistribution](http://contracts.synthetix.io/RewardsDistribution) contract to add rewardDistributions to destination address `0xCed4055b47cfD0421f3727a35F69CE659c8bAF7a` and amount `16000000000000000000000` (16k SNX) to the distributions list.

- Set `RewardsDuration` to `604800` seconds (7 days) on sBTC ShortingRewards contract.

- Setting `RewardDistribution` on the [sBTC short incentives](http://contracts.synthetix.io/ShortingRewardssBTC) contract to the distributions contract `0x29C295B046a73Cde593f21f63091B072d407e3F2`.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

iBTC Synths have upper and lower bounds and freeze when the price hits them. This requires the pDAO to manually reset the inverse synth. The protocol should not have manual maintenance or intervention and the new multi-collateral shorts achieve this with a shorting mechanism that is self maintaining also a rewards incentive mechanism that self enrolls and never needs to be reset, purged and redeployed. It is a much better mechanism for the protocol.

Since iBTC is incentivised with SNX to help balance the debt pool there is currently an inflation funded incentive via a [iBTC StakingRewards](https://contracts.synthetix.io/StakingRewardsiBTC) contract.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
