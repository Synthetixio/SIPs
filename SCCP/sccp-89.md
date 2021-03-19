---
sccp: 89
title: Redirect iETH rewards to sETH Shorting Rewards
status: Proposed
author: Clinton Ennis (@hav-noms)
discussions-to: https://discord.gg/B3PtpY
created: <2021-03-15>
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Redirect current [iETH 16K SNX incentives](https://etherscan.io/address/0x3f27c540adae3a9e8c875c61e3b970b559d7f65d) to [sETH short incentives](http://contracts.synthetix.io/ShortingRewardssETH)

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Now that traditional shorting mechanism is available with sETH shorts on [kwenta.io/shorts](https://kwenta.io/shorting), I propose to redirect the 16K SNX incentive from the weekly inflationary supply to the [ShortingRewardssETH](http://contracts.synthetix.io/ShortingRewardssETH) contract instead of the [iETH Staking Rewards](https://etherscan.io/address/0x3f27c540adae3a9e8c875c61e3b970b559d7f65d) contract. 

sDAO Funded sETH Short incentives emmision ends on Friday, 2 April 2021 05:49:59. The plan is to cut over in the next week to allow 1 week of rollover which will boost the incenvitves for a week. Encouraging iETH stakers to move over to the sETH short rewards.


A single transaction by the protocolDAO to the [RewardsDistribution](http://contracts.synthetix.io/RewardsDistribution) contract to change distributions[1].address from 
[0x3f27c540ADaE3a9E8c875C61e3B970b559d7F65d](https://etherscan.io/address/0x3f27c540ADaE3a9E8c875C61e3B970b559d7F65d) 
to  
[0x12DC1273915A16ab8BD47bA7866B240c253e4c12](https://etherscan.io/address/0x12DC1273915A16ab8BD47bA7866B240c253e4c12)

![image](https://user-images.githubusercontent.com/1251099/111264773-3c42a780-867c-11eb-8034-e313fe5f2fbd.png)

Call RewardsDistribution.editRewardsDistriubtion() with these args

![image](https://user-images.githubusercontent.com/1251099/111266487-bbd17600-867e-11eb-9f88-7b4d69a55e9a.png)


## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

iETH Synths have upper and lower bounds and freeze when the price hits them. This requires the pDAO to manually reset the inverse synth. The protocol should not have manual maintenance or intervention and the new multi-collateral shorts achieve this with a shorting mechanism that is self maintaining also a rewards incentive mechanism that self enrolls and never needs to be reset, purged and redeployed. It is a much better mechanism for the protocol.

Since iETH is incentivised with SNX to help balance the debt pool there is currently an inflation funded incentive via a [iETH StakingRewards](https://etherscan.io/address/0x3f27c540adae3a9e8c875c61e3b970b559d7f65d) contract. When iETH freezes and needs to be reset the process of resetting is massively cumbersome with many steps and room for human error. 

These steps are;

- Purge all iETH holders into sUSD
- Recover sUSD from staking contract
- Calculate all iETH stakers iETH to sUSD conversion amounts
- Disperse the sUSD back to all iETH owners
- Deploy new iETH stakingRewards Contract
- Update Dapps 
- Update Rewards Distribution to send SNX to new iETH StakingRewards contract

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
