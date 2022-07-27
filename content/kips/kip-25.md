---
kip: 25
title: Automated Voting Mechanism
status: Draft
author: Andrew Trudel (@Andrew-Synthetix)
created: 2022-07-26
---

## Summary

A system for the DAO to manage elections in the various scenarios in which they are needed. 

## Abstract

An automated system that facilitates scheduled and unscheduled elections. 

## Motivation

By providing the Kwenta DAO with an automated elections system, the DAO will gain a degree of resiliency that will enable it to operate smoothly in the event an epoch ends, or an Elite Council member must step down/be removed. 

## Specification

The automated voting system will handle four scenarios without the need for intervention from Core Contributors: 

**Scheduled Elections** - A vote would automatically be triggered at the end of an epoch.

**An Elite Council member steps down** - Elite Council members will gain access to a UI within Kwenta via their council address, where they can step down, burning their right to vote and triggering an election for a community member to replace them. 

**An Elite Council member is removed via the Elite Council** - Elite Council members will gain access to a UI via their council address within Kwenta, enabling them to vote to remove an Elite Council member. If a majority ruling is reached amongst Elite Council members, the impacted Elite Council member will have their voting rights burned, triggering an election for a community member to replace them. 

**An Elite Council member is removed via a CKIP** - Stakers will gain access to a UI within Kwenta where an election can be triggered at any time. If quorum amongst stakers is reached, all Elite Council members will have their ability to vote burnt, and a new election will be triggered for stakers to vote in a new council. 

During a scheduled election, Elite Council members will continue to have the right to vote while the election takes place. In the event of an unscheduled election, the impacted Elite Council member will lose their ability to vote on DAO proceedings immediately, and they will not be able to vote during an election. 

Elections will be surfaced inside the Kwenta UI, where anyone can submit an Ethereum address for nomination. Stakers will use their staked Kwenta to submit votes. The Ethereum addresses that receive the most support for the positions available (5 for a scheduled election, 1 for an unscheduled election, 5 for an unscheduled CKIP election) will be added to the Elite Council multi-sig, enabling them to vote on DAO proceedings. 

If there are multiple overlapping elections, the UI will display individual unscheduled elections separately, while all ongoing elections will be wiped out and replaced in the event a scheduled election goes into effect. 

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

