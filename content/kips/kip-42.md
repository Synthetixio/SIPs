---
kip: 42
title: Implement getRewardOnBehalf and stakeEscrowOnBehalf methods to KWENTA staking contracts
status: Draft
author: cyberduck (@acyberduck)
created: 2022-11-17
---

## Simple Summary

This KIP proposes to implement the getRewardOnBehalf and stakeEscrowOnBehalf methods to the Kwenta staking contracts so individual stakers are able to automate their claims and stakingo of escrowed of KWENTA staking rewards.

## Abstract

Currently KWENTA staking rewards need to be claimed manually with the opportunity loss of efficient reward compounding. This KIP proposes to implement the getRewardOnBehalf and stakeEscrowOnBehalf methods on the KWENTA staking contracts that will allow KWENTA stakers to individually enable a third-party solution to trigger those method for them in regular intervals and thus automate the claiming and staking process for optimal compounding.

## Motivation

Manual claiming and staking escrowed KWENTA is bad user experience with the opportunity cost of inefficient compounding. This KIP's proposal to implement the getRewardOnBehalf and stakeEscrowOnBehalf methods will make it possible for individual stakers to explore automating their claiming and staking and thus improve their UX and compounding significantly.

After these methods are implemented, each staker wanting to automate claiming and staking would have to manually create a task for auto claiming via a third party service such as Gelato.

## Specification

This KIP calls for the implementation of getRewardOnBehalf and stakeEscrowOnBehalf methods to the relevant KWENTA staking contracts.

Both methods are to additionally support an address input parameter that allows stakers to whitelist addresses to enable them to trigger the claim of rewards and stake of escrow on their behalf.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
