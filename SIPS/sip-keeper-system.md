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
2. Settle fee reclamation for Synth exchanges
3. Resolving Binary option markets
4. Requesting the next price update from Chainlink Oracles
5. Executing / clearing virtual Synth tokens

### Keeper Incentives

Keepers would be able to consume emitted events and different technologies off-chain to check which keeper functions can be processed and manage the system efficiently.

The keeper contract would be able to allocate an amount of SNX / token rewards cap for each action to prevent abuse of the incentives.

Rewards paid in SNX will utilise the `exchangeRates` contract to get the USD value of SNX and the rewards paid will be based in USD value. This will ensure that a fair amount of SNX reward is given to keepers to compensate them.

The keeper rewards would target a specific gas price (in gwei) that the keeper actions will be executed at. When the gas price fluctuates above the target gas price then we would expect keepers to cap their gas price for executing the keeper functions.

If it is observed that the USD rewards allocated is sufficient / insufficient to have keeper actions completed within a specific time frame, then it would be possible to update the USD rewards to ensure actions are completed. If the reward is more than the marginal gas cost + running costs of completing the action, then in an efficient market keepers would continue performing the actions.

### Settlement of Exchange Entries

Chainlink could upgrade their Aggregators and RoundIDs will not be chronologically ordered. Fee reclamation / exchanging would be blocked if the RoundID’s were wiped and the trades are not settled.

- Ensure keeper system to incentivise `Exchange.settle()` is called to settle fee reclamation in a timely manner.

- Unsettled trades cause an in-determinate effect on the debt pool.

SNX incentive to be paid out proportional to the `trade amount size and exchange fees` paid to make it not economically profitable to create multiple small exchanges for settlement to drain the incentives pool. The optimal balance would be that the USD value of the keeper rewards would be less than the `exchange fees paid + gas cost cost of an exchange transaction`, so this would discourage gaming of the keeper's rewards.

| Action   | Gas Cost |
|----------|----------|
| Exchange | 405,865  |
| Settle   | 51860    |

An `exchange` transaction costs ~8x the amount of gas of `settle`, so given that the keeper's reward for settling exchange entries is less than multiples of the gas costs for `settle()`, it would incentivise genuine keepers to settle exchanges.

Refer to configurable SCCP values for proposed USD amount reward for calling `settle()` function.

An edge case where the keeper reward is less than the cost of settling exchange entries (due to gas price costs and congestion) then this could be covered by the protocol which can settle the remaining entries.

### Freeze Inverse Synths

The reward for freezing inverse synths at their upper or lower limits can be higher than the actual transaction cost to encourage faster execution. This is also because Inverse synths are expected to be frozen less frequently than other common keeper functions such as settling exchange entries.

### Requesting / pulling next price update from Chainlink Oracles

When Next Price Fullfilment for fee reclamation is introduced in [SIP-52](./sip-52.md)), it would be possible to have a hybrid price oracle model for Synthetix where Chainlink oracles continue pushing price updates based on 0.5% / 1.0% price deviation metrics and also support a pull mechanism where a keeper requests for a price to be updated (and is paying for the gas costs / LINK tokens).

This would allow price updates to be less than 0.5% / 1.0% for Synthetix exchanges and futures that require faster updates and less slippage if the notional value of settlements / exchanges that are waiting for the next price update can be requested from the Chainlink oracles.

For example, if there is a $1m exchange into sXAU that is waiting for settlement (next price update), rather than waiting for the next Chainlink price update when a 1.0% deviation is detected, the keeper could request for a price update earlier.

The current Chainlink oracles work on a 0.5% / 1.0% deviation due to practical limitations such as block time, gas costs of multiple nodes publishing prices on chain and the cost of LINK required to pay for smaller deviations. Covering the costs of pulling a next price update on chain would allow for a quicker price updates. The price update can also be consumed by other consumers of the Chainlink oracles as per normal update.

### Resolving Binary option markets

Binary options would allow market resolution and market expiry maintenance to be executed by keepers to help maintain the binary options markets.

- `BinaryOptionMarketManager.resolveMarket()`
- `BinaryOptionMarketManager.expireMarkets()`

### Executing and Claiming Virtual Tokens

Virtual Tokens are a proposed mechanism for representing ownership of a synth exchange that is waiting for the fee relcamation to be settled and swapped.

Virtual tokens representing a claim on un-settled synths after an exchange would benefit from keepers executing them and claiming them for the end user.

This would improve the UX of users who trade with virtual tokens such that if they hold vDAI after exchanging from `sETH -> sUSD -> vDAI`, that the keeper can execute the `vDAI` exchange after the fee relcamation waiting period into DAI directly. For the user they would not have to worry about finalising the redemption of the `vDAI` into DAI as that will be completed by keepers and the gas paid for.

### Reward Claiming

The SNX / token rewards keepers will get for executing each keeper function will be recorded in the `Rewards Keeper contract` as a balance against their address for withdrawal.

The total rewards can be withdrawn by the keeper at anytime instead of having the rewards transferred each time to reduce the gas costs of the actual operation. Keepers can also claim and withdraw their reward balance within the same transaction if they wish to utilise the reward as soon as possible.

The gas costs of transferring the SNX rewards to the keeper per action can become prohiitively expensive and add to the costs of the keeper system.

# Rationale


# Technical Specification
<!--The technical specification should describe the syntax and semantics of any new feature.-->

### Synthetix Keeper System Contract

List of Synthetix internal contracts have permission to notify the Keeper Incentives contract to record the keeper's address and what the performed function was to calculate and record the correct amount of token rewards.

The Keeper system contract will be upgradeable to allow for fine-tuning and upgrading how the rewards will calculated for each keeper function.

This will mean that the accumulated rewards of each keeper will be stored separetlely from the keeper contract and the reward tokens held separately from the Synthetix keeper contract.

Each keeper action will have an `allocation` of SNX / token rewards that will be allocated and topped up by the funding address or contract that provides the incentives for the keepr system. When the allocation for an action is depleted it will no longer be incentivising the particular action.

# Test Cases
<!--Test cases for an implementation are mandatory for SIPs but can be included with the implementation..-->
Test cases for an implementation are mandatory for SIPs but can be included with the implementation.

## Configurable Values (Via SCCP)

Each action that a keeper could perform will have a configurable amount of USD value / SNX / token rewards that are paid to cover gas costs and running a keeper system.

`gas: currency/eth rate` : 235.00 usd/eth

| Action | Est Gas Cost | Gas Price | $USD Cost | $USD Reward |
|--------|--------------|-----------|------------|------------|
| 1. FreezeSynths for iSynths | 42000| 35 gwei/gas | 0.34545 | 5.0 |
| 2. Settle Exchange 1x entry | 51860 | 35 gwei/gas | 0.4265485 | 0.80 |
| 2a. Settle Exchange 2x entries | 98886 | 35 gwei/gas | 0.81333735 | 1.60 |
| 3. Requesting next price update from Chainlink | TBA - X of LINK | 35 gwei/gas | N/A | N/A |
| 4. Binary Options ResolveMarket | 242194 | 35 gwei/gas | 1.99204565 | 4.0 |
| 5. Binary Options expireMarkets | 114098 | 35 gwei/gas | 0.93845605 | 4.0 |
| 6. Executing virtual Synth tokens | TBA | 35 gwei/gas | TBA | TBA |

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
