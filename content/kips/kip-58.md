---
kip: 58
title: Staking V2
status: Draft
author: Jeremy Chiaramonte (@JChiaramonte7)
created: 2023-01-05
---

## Summary

A migration of StakingRewards from V1 -> V2 to support new functionality. 

## Abstract

StakingRewards will be upgraded with an unstaking cooldown and the ability to look up staked amounts at older blocks. These features should facilitate future modules such as fee distribution, automated onchain voting, and onchain trading rewards. This upgrade will also support features mentioned in [KIP-42](./kip-42.md) and [KIP-45](./kip-45.md). A migration will be required from V1 -> V2. 

## Motivation

The StakingRewards contract cannot support onchain activity using staked balances without tolerating substantial gameability. 

Using current staked balances for, say, voting or fee distribution creates a system that can be easily manipulated by actors who decide to stake before a favorable voting or fee distribution event to gain higher share. Historical staked balances are much harder to manipulate especially when the future outcome is unknown (future proposals or fees to be generated that epoch). 

Staked amounts will also need to be locked for a meaningful amount of time to discourage the short term buying of votes, fee revenue, or locked inflationary rewards. 

## Specification

There are two major changes to current implementation of StakingRewards.

### Staking Cooldown

A cooldown (two weeks) timer will need to be implemented staking. This cooldown is reset whenever new amounts are staked. During this cooldown period users will not be able to unstake (but they are able to stake more).

```solidity
uint256 lastStakeTime; // reset to current block timestamp when KWENTA is staked
```

### Historical Staked Amounts (Checkpointing) 

Additionally, a checkpointing system will be added to StakingRewards to keep track of staked balances and total staked balances over time. The checkpointing system records whenever staked amounts change (ie. staking/unstaking). This also encompases staked escrow and the total staked amounts in the contract. The mechanism was inspired by the various [ve](https://curve.readthedocs.io/dao-vecrv.html) tokens. 

Each time a token holder stakes, a new entry is added to a list (array) of new **total** amount staked and the block height at which this change was made. The same is done when unstaking, but the total balance is subtracted from instead. This list is effectively an onchain changelog for the entire balance history of an account. 

```solidity
struct Checkpoint {
    uint128 block;
    uint128 value;
}

mapping(address => Checkpoint[]) private balances;

mapping(address => Checkpoint[]) private escrowedBalances;

Checkpoint[] private _totalSupply;
```
*Example data structure and relevant `balance` & `totalSupply` variables.*

To provide efficient balance lookups onchain, we implement a [binary search](https://en.wikipedia.org/wiki/Binary_search_algorithm) on the list for a given block height. And if the list is empty, we simply return 0.

```solidity
uint256 min = 0;
uint256 max = checkpoints.length - 1;

while (max > min) {
    uint256 midpoint = (max + min + 1) / 2;

    if (checkpoints[midpoint].block <= _block) {
        min = mid;
    } else {
        max = mid - 1;
    }
}
```
*Example algorithm where the resulting `min` value is the index of the checkpoint we want.*

Current `balanceOf()`, `escrowedBalanceOf()`, `totalSupply()` lookups will continue to function as they do in Staking V1, however, under the hood this is simply looking at the most recent addition to (or the end of) the list.

### Remaining Items

- [KIP-42: Implement getRewardOnBehalf and stakeEscrowOnBehalf methods to KWENTA staking contracts](./kip-42.md)
    - `getRewardOnBehalf(address)` will be added to allow 3rd party services to claim rewards on your behalf
- [KIP-45: Adjust allocation of KWENTA forfeited through early vesting](./kip-45.md)
    - faciliated by checkpointed balances

### Migration

A migration is required from Staking V1 -> Staking V2. Fully liquid KWENTA staked balances will have to be manually unstaked and then restaked on the V2 contract. There will be a UI flow to assist with this process. 

The mapping of staked escrowed balances will be copied over from the StakingRewards V1 contract to the StakingRewards V2 contract. During this process the V1 contract will be paused and the RewardEscrow `StakingRewards` address will be changed from the V1 contract to the V2 contract. This will ensure staked escrowed balances carry over smoothly onto the new StakingRewards contract. 

The V1 staking contract will continue to function, without rewards, to allow people to migrate or claim their remaining rewards at their own pace. Only the migration of staked escrowed balances will be automatic. 

Inflation will be directed to the new V2 staking contract incentivizing immediate migration. 

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
