---
sip: 72
title: Synthetix Keeper System
status: WIP
author: Justin Moses (@justinjmoses), Jackson Chan (@jacko125)
discussions-to: https://discord.gg/kPPKsPb

created: 2020-07-07
---

## Simple Summary
A generalised Synthetix keeper contract will be able to incentivise certain functions in the Synthetix protocol to be managed in a decentralised manner. The rewards, which can be SNX or other tokens / ether will be held in the keeper contract and the rewards schedule managed by the keeper contract.

## Abstract
This SIP proposes a generalised Synthetix keeper contract to reward keeper functions like Exchange settlement, iSynth freezing, Chainlink pull request for prices and Binary option market resolutions.

## Motivation
The reason for a generalised keeper system / contract is to provide reward incentives for decentralised keepers to help manage the Synthetix protocol. The generalised keeper system will be able to set the amount of incentive and rewards for each function in the platform that requires keepers to manage.

As the platform moves towards using decentralized oracle feeds from Chainlink, it will require keepers to manage the freezing and purging of iSynths (as per [SIP-61](./sip-61.md)).

Another important function that requires keepers is to settle fee reclamation Exchange entries if they are not settled during the oridinary exchange process of a user's trading. Unsettled fee reclamations create an in-determinate state on the system's debt pool once they can be settled after the waiting period or next price is available.

Fee clamation can also be broken in the case that Chainlink's aggregators upgrade their contracts and the `roundID` values are reset, so that the efficient settlement of exchanges ensure that the debt pool is up to date and won't cause

The reward incentives should cover the gas costs of executing the transaction in an efficient timely manner, ie using a 'fast' gas price to execute the transaction and be profitable for the keeper to continue operating.

## Specification

# Overview
There are a number of core functions on Synthetix protocol that require keepers to perform and execute in a decentralised manner. In order to incentivise these keeper functions and cover the gas costs for the on-chain transactions, a generalised keeper rewards contract will provide reward incentives to keepers.

### Actions

1. FreezeSynths for Inverse Synths
2. Settle fee reclamation for synth exchanges
3. Requesting / paying the next price update from Chainlink oracles
4.

### Keeper Incentives

In order to incentivise keepers to call these functions

The keeper contract would be able to allocate an amount of SNX / token rewards cap for each action to prevent abuse of the incentives.

### Settlement of Exchange Entries

Chainlink could upgrade their Aggregators and RoundIDs will not be chronologically ordered. Fee reclamation / exchanging would be blocked if the RoundID’s were wiped and the trades are not settled.

- Ensure keeper system to incentivise `Exchange.settle()` is called to settle fee reclamation in a timely manner.

- Unsettled trades cause an in-determinate effect on the debt pool.

SNX incentive to be paid out proportional to the `trade amount size and exchange fees` paid to make it not economically profitable to create multiple small exchanges for settlement to drain the incentives pool. The `exchange fees` and `exchange amount` in sUSD is already stored for each exchange entry and will be used to determine the rebate a keeper will get. As the keeper rewards for settling small trades will not cover gas costs of creating small trades (about 400,000 gas currently) this would discourage gaming of the keeper's rewards.

Also the larger an exchange amount that is unsettled, they will have a larger effect on the debt pool. Having a proportional reward amount for settling these larger exchange entries allows keeper's to use a higher gas price to ensure they are settled in a timely manner (ie fast gas price) whilst smaller trades that pay a proportionally lower amount of SNX rewards can be settled at a lower gwei.

### Reward Claiming

The SNX / token rewards keepers will get for executing each keeper function will be recorded in the `Rewards Keeper contract` as a balance against their address for withdrawal.

The total rewards can be withdrawn by the keeper at anytime instead of having the rewards transferred each time to reduce the gas costs of the actual operation. Keepers can also claim and withdraw their reward balance within the same transaction if they wish to utilise the reward as soon as possible.

The gas costs of transferring the SNX rewards to the keeper per action can become prohiitively expensive and add to the costs of the keeper system.

# Rationale


# Technical Specification
<!--The technical specification should describe the syntax and semantics of any new feature.-->

### Keeper Incentives Contract

List of internal contracts have permission to notify the Keeper Incentives contract to record the keeper's address and what the performed function was to calculate and record the correct amount of token rewards.

# Test Cases
<!--Test cases for an implementation are mandatory for SIPs but can be included with the implementation..-->
Test cases for an implementation are mandatory for SIPs but can be included with the implementation.

## Configurable Values (Via SCCP)

Each action that a keeper could perform will have a configurable amount of SNX / token rewards that are paid to cover gas costs and running a keeper system.



## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
