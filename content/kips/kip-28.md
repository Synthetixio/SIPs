---
kip: 28
title: Trading Incentives 
status: Draft
author: Andrew Trudel (@Andrew-Synthetix)
created: 2022-08-17
---

## Summary

A method to reward Kwenta users with KWENTA.

## Abstract

Traders on Kwenta would earn KWENTA for meeting criteria described below. 

## Motivation

By rewarding long-term users of the Kwenta platform, governance decision-making weight will gravitate towards the people who are most invested in seeing the product improve. 

## Specification

Rewards will follow the below outline. 

**New Users** 

Wallets that have never interacted with Kwenta before will be eligible for a one time KWENTA reward if they do each of the following, all must be completed to qualify: 

Deposit a minimum of 1k sUSD the cross margin wallet.
Traders must make 10 trades with open interest for a minimum of 24 hours, 2 of which must be stop losses or limit orders, with minimum position size of $100 sUSD. 
Have a PnL of 10% on their total portfolio (minimum of 1k sUSD) in either direction.
(Eventually, Copy Trade someone for 100 sUSD for minimum of 24 hours)
Join Discord and verify authenticity.

The current bounty is 1 KWENTA for completing this list however note that this checklist and the reward can be freely updated by a majority vote in the Elite Council at any time. Withdrawing from the 1k sUSD deposit erases their progress from completing the above list. withdrawal nulls this score. Min expectation is a deposit of 1k, 10 trades, 10% gain or loss. 1 KWENTA will be available for each trader within a cap of 1% of all monthly inflation, once this cap is reached all traders will be diluted proportionally to all the users who joined in the affected month. If a Discord account is flagged as a bot or malicious, the incentives will be halted for that address. 

**Continual Users**

Once the above bounty has been collected, users will qualify for continual rewards. 

Stream 5% of inflationary rewards to traders weighted across a Cobbs-Douglas Function. The equation would follow the rewards model outlined in KIP-3. 

All users of Kwenta prior to the launch of this initiative will immediately qualify for power user/continual rewards. 

Note: All KWENTA distributed during this program is locked for a period of one year as per KIP-4’s vesting model. 

## Copyright 

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

