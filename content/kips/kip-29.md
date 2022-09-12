---
kip: 29
title: Establish $OP Incentive Program 
status: Draft
author: Burt Rock (@BurtRock)
created: 2022-09-09
---

## Summary

Reallocate 600,000 $OP tokens from those outlined in KIP-16 toward a tiered onboarding incentive system, and introduces $KWENTA token incentivized reward tiers.

## Abstract

Kwenta has received 900,000 $OP tokens, and has earmarked 600,000 $OP tokens for platform migration incentives. This proposal nullifies and replaces the original distribution structure of platform migration incentives with a new, tiered onboarding incentive for traders. 
This proposal suggests splitting the 600,000 $OP allocation into 2 tiers of off-chain and on-chain tasks, and 2 actions which give users additional rewards for completing the 2 primary bounties.

This proposal only impacts the 600,000 OP allocated toward platform migration incentives, and leaves in place the allocation for competition prizes and DAO contributors as described in KIP-16.

## Motivation

While targeting traders of DYDX offers a strong narrative, implementation may be difficult, Kwenta has very limited channels to communicate with the cohort being targeted, and the friction of bridging to Optimism may lead to an underwhelming response from those who are successfully made aware of the plan.

A draft of KIP-28 lays out a bounty similar to the platform migration incentive described in KIP-16, and presents an opportunity to design complimentary incentives which will offer traders lower friction, incentivized tasks to familiarize themselves with Kwenta. We will also be able to leverage the Optimism Quests program to increase the reach of marketing and communications about the program.

By offering lucrative first steps which lower trading requirements, we can increase the number of users who begin interacting with Kwenta, both on-chain and on social media. Since both required actions and rewards from different incentive programs will be cumulative, users who complete introductory tasks will be more likely to complete subsequent tasks for incentives. For example, a trader who has never deposited to Kwenta may see making 10 trades as too difficult, but 1 trade may seem achievable. However once a trader already has money deposited in Kwenta and has made 1 trade, they may find it worthwhile to make more.

## Specification

**Tier 1 - Onboarding**

Amount: 200,000 $OP

Reward per wallet for full completion: 100 $OP

Required actions:

- Deposit at least $1,000 in a cross margin account
- Open a position worth at least $100 notional volume using a limit order
- Verify authenticity in the Kwenta Discord

**Tier 2 - Test Drive**

Amount: 200,000 $OP

Reward per wallet for full completion: 100 $OP

Required actions:

- Complete Tier 1 requirements
- Make at least 4 additional trades of at least $100 notional volume each trade
- At least 2 total trades must be triggered stop loss or limit orders
- Generate a realized PnL of at least $100 in either direction

**Bonus A - DYDX Trader Boost**

Amount: 100,000 $OP

Max reward per wallet: 50 $OP

Required actions:

- Complete Tier 1 requirements using a wallet which interacted with DYDX prior to September 1st, 2022 to earn 25 $OP. 
- Complete Tier 2 requirements from a wallet which interacted with DYDX prior to September 1st, 2022 to earn 25 additional $OP.
*September 1st, 2022 will be defined as beginning with ETH mainnet block 15449618.

**Bonus B - Optimism Quest Boost**

Amount: 100,000 $OP

Max reward per wallet: 50 $OP

Required actions:

- Complete Tier 1 requirements using a wallet which completed the Optimism Quest and received the NFT to earn 25 $OP
- Complete Tier 2 requirements from a wallet which completed the Optimism Quest and received the NFT to earn 25 additional $OP

# Additional Specifications

**Dependencies**

All on-chain actions will be dependent on the launch of Kwenta cross margin functionality, currently scheduled for launch in mid-October, and users may begin completing on-chain actions immediately following this launch.

Users will be able to claim $OP tokens at a later date, which is dependent on the $KWENTA token launch and completion of the token claim UI.

**Disqualification**

The following actions may result in resetting a wallet’s progress on the tiered incentive program:

- Withdrawing from the cross margin wallet.
- Leaving the Kwenta Discord server. 

The following actions may result in a wallet being permanently disqualified from the $OP incentives program:

- Removal from Discord due to being flagged as a bot or malicious user.

**Maximum eligible users**

Rewards from each tier will be distributed to the first 2,000 unique users to complete each individual bounty, or collect each bonus. In the case that $OP tokens have not been claimed 180 days after the launch of the incentive program, tokens may be clawed back and used at the discretion of the treasury for future incentive programs or marketing initiatives.

## Copyright 

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
