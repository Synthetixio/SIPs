---
sip: 82
title: Synthetix Keeper System
status: Rejected
author: Jackson Chan (@jacko125), Justin Moses (@justinjmoses)
discussions-to: https://discord.gg/kPPKsPb

created: 2020-07-14
---

## Simple Summary
A generalised Synthetix keeper contract will be able to incentivise certain functions in the Synthetix protocol to be managed in a decentralised manner. The rewards, which can be SNX or other tokens / ether will be held in the keeper contract.

## Abstract
This SIP proposes a generalised Synthetix keeper contract to reward keeper functions like Exchange settlement, iSynth freezing, fee period closing and resolving binary option markets.

## Motivation
The reason for a generalised keeper system / contract is to provide reward incentives for decentralised keepers to help manage the Synthetix protocol. The generalised keeper system will be able to set the amount of incentive and rewards for each function in the platform that requires keepers to manage.

As the platform moves towards using decentralized oracle feeds from Chainlink, it will require keepers to manage the freezing and purging of iSynths (as per [SIP-61](./sip-61.md)).

Another important function that requires keepers is to settle fee reclamation for exchange entries if they are not settled during the oridinary exchange process of a user's trading. Unsettled fee reclamations create an indeterminate state on the system's debt pool, once they can be settled after the waiting period or next price is available.

Fee reclamation can also be broken in the case that Chainlink's aggregators upgrade their contracts and the `roundID` values are reset, so that the efficient settlement of exchanges ensure that the debt pool is up to date and won't cause user's to have frozen exchanges (if settlement is broken).

The reward incentives should cover the gas costs of executing the transaction in an efficient timely manner, i.e using a 'fast' gas price to execute the transaction and be profitable for the keeper to continue operating.

## Specification

### Overview

There are a number of core functions on Synthetix protocol that require keepers to perform and execute in a decentralised manner. In order to incentivise these keeper functions and cover the gas costs for the on-chain transactions, a generalised keeper rewards contract will provide reward incentives to keepers.

### Actions

1. FreezeSynths for Inverse Synths
2. Settle fee reclamation for Synth exchanges
3. Resolving Binary option markets
4. Executing / clearing virtual Synth tokens
5. Feepool period closure

### Keeper Incentives

Keepers would be able to consume emitted events and different technologies off-chain to check which keeper functions can be processed and manage the system efficiently.

The keeper contract would be able to allocate an amount of SNX / token rewards for each action to prevent abuse of the incentives.

Rewards paid in SNX will utilise the `exchangeRates` contract to get the USD value of SNX and the rewards paid will be based in USD value. This will ensure that a fair amount of SNX reward is given to keepers to compensate them.

### Time Sensitive Keeper functions

Certain functions within the Synthetix ecosystem needs to be done in a timely manner and mined even when the gas prices are high.

Keeper functions that are time sensitive will have the `gas cost` rebated up to a `max of fast gas price` from [Chainlink's Fast gas oracle](https://feeds.chain.link/fast-gas-gwei) that the keeper actions will be executed at and reimbursed for (`USD value = Gas used * fast gas price * ETH price`), plus a keeper's reward fee for each specific action that is configurable via SCCP.

This ensures that the gas costs are covered and also an incentive is also available for running the keepers.

The `gas used` for each keeper function could be calcualted on the smart contract level by gas metering using `gasleft()` at the start of the keeper function plus a `21,000` gas stipend for iniating a transaction.

```
function keepable() {
    uint gasUsed = gasLeft();
    ...
    gasUsed -= gasLeft();

    _payKeeper(gasUsed);
}
```

- `MaxGasPrice`: A max gas price parameter that caps the highest fast gas price possible (overrides Chainlink fast gas price) in extreme scenarios and protection from oracle issues.

### Freeze Inverse Synths

https://research.synthetix.io/t/sip-72-freeze-inverse-synths/109

### Resolving Binary option markets

https://research.synthetix.io/t/sip-keeper-function-resolving-binary-option-markets/111

### Executing and Claiming Virtual Tokens

https://research.synthetix.io/t/sip-keeper-function-executing-and-claiming-virtual-tokens/112

### Feepool period closure

https://research.synthetix.io/t/sip-keeper-function-feepool-close-current-fee-period/122

**Non-time sensitive functions:**

### Settlement of Exchange Entries

https://research.synthetix.io/t/sip-keeper-function-settlement-of-exchange-entries/107

## Rationale

The rationale for a Central Keeper system contract is so that multiple contracts within the Synthetix platform requiring keepers can delegate the allocation of rewards and tracking to a single contract. Keepers also benefit from being able to track the reward payable from a single contract instead of checking all the Synthetix platform's contract for keeper functions.

The Keeper system contract will be upgradeable to allow for fine-tuning and upgrading how the rewards will calculated for each keeper function. To enable this, the accumulated rewards of each keeper will be stored separetlely in eternal storage from the keeper contract implementation and the reward tokens held separately from the Synthetix keeper contract.

Each keeper action will have an `allocation` of SNX / token rewards that will be allocated and topped up by the funding address or contract that provides the incentives for the keepr system. When the allocation for an action is depleted it will no longer be incentivising the particular action.

## Technical Specification
<!--The technical specification should describe the syntax and semantics of any new feature.-->

### Synthetix Keeper System Contract

The Keeper system contract will be upgradeable to allow for fine-tuning and upgrading how the rewards will calculated for each keeper function.

A list of Synthetix internal contracts will have permission to notify the Keeper Incentives contract to record the keeper's address and what the performed function was to calculate and record the correct amount of token rewards.

### Rollup Reward Claiming

The SNX / token rewards keepers get for executing each keeper function will be recorded in the `Rewards Keeper contract` and a balance rolledup against their address for withdrawal.

The total rewards can be withdrawn by the keeper at anytime instead of having the rewards transferred each time to reduce the gas costs of the actual operation. Keepers can also claim and withdraw their reward balance within the same transaction if they wish to utilise the reward as soon as possible.

The gas costs of transferring the SNX rewards to the keeper per action can become prohiitively expensive and add to the costs of the keeper system.

## Test Cases
<!--Test cases for an implementation are mandatory for SIPs but can be included with the implementation..-->
Test cases for an implementation are mandatory for SIPs but can be included with the implementation.

## Configurable Values (Via SCCP)

Each action that a keeper could perform will have a configurable amount of USD value / SNX / token rewards that are paid to cover gas costs and running a keeper system.

- `KeeperRewardFee`: USD value for the
- `MaxGasPrice`: A max gas price parameter that caps the highest fast gas price possible (overrides Chainlink fast gas price) in extreme scenarios / issues with the oracle.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
