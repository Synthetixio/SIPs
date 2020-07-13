---
sip: 71
title: Binary Options v1.1
status: WIP
author: Anton Jurisevic <@zyzek>, Danijel <@dgornjakovic>
discussions-to: <Discord Channel>

created: 2020-07-13
---

## Simple Summary

This SIP proposes several enhancements to binary option markets intended to further incentivise market creators and to improve certainty for participants.

## Abstract

The binary option market manager and factory will be replaced, and existing markets migrated over to the new manager. This SIP seeks to accomplish the following:

* Allow market creators to disable bid withdrawals at market creation
* Fix a bug that prevents creators from exercising their options before expiry under certain circumstances
* Remove the pool fee charge for market creators
* Allow market creators to cancel a market if no bids have been placed on it yet
* Emit bid events upon market creation for the initial capital

Note that this supercedes [SCCP-33](../SCCP/sccp-33.md).

## Motivation

The launch of binary options was largely successful, however it is clear that the risks remain high for market creators, which is impeding the creation of new markets. The risky nature of the bidding period additionally dissuades users from
participating. This SIP aims to alleviate some of these risks and encourages binary option market volume.

## Specification

### Overview and Rationale

#### Allow Disabling Withdrawals

At market creation, the creator will be allowed to disabled bid withdrawals for that market's lifespan.

Some users have pointed out that allowing bids to be withdrawn disincentivises users from participating in binary option markets since it decreases the available pay out and can significantly change the odds late in the bidding phase. Decreasing the uncertainty confronting bidders enhances the market's utility, which should attract higher volume, derisking the market creator.

#### Fix Losing-Side Exercise Bug

If a user has bid on both sides of the market, they have not claimed their options before the maturity date, and their claimable supply of options on the losing side of the market exceeds the remaining sUSD deposited in the market, their funds will be trapped until expiry of the contract. This problem mainly affects market creators.

The problem lies inside the BinaryOption contract ([`BinaryOption.sol:L68`](https://github.com/Synthetixio/synthetix/blob/ea2f032e432516b13c49ba946994ae6253346821/contracts/BinaryOption.sol#L68)).
Whenever a user is owed more than the remaining claimable supply of sUSD, the transaction reverts on the supposition that this should be impossible; there is a minimum bid size which is vastly larger than the few wei worth of error that could ever be introduced due to rounding errors.

However, this supposition only holds on the winning side of the market, since the value of exercisable sUSD falls in proportion with the number of options on the winning side being exercised; but this logic breaks down on the losing side.

Most of the time this is harmless since it only results in a revert if the options being claimed are worthless. However, in the following case, funds can be trapped for certain users:

* The market is in the maturity phase;
* The user has bids on both sides of the market;
* The user has not already claimed their options;
* The user's owed balance of losing options exceeds their owed balance of winning options;
* Sufficiently-many other participants in the market have exercised winning options to bring the market's total sUSD deposited below the user's owed losing option balance.

When these conditions are satisfied, then such a user attempting to claim or exercise their options will find that the transaction reverts, so their funds will remain in the contract.

Since this only affects both-side bidders, and it's likelier to occur with larger bid sizes, it will predominantly affects market creators. However, the funds are recoverable once the option markets are
expired.

The intended fix will be as follows:

* Report the deposited exercisable value to the losing BinaryOption instance as zero when claimable balances are computed;
* Remove the assert statement that causes the transaction to revert;
* Only claim winning-side options when exercising.
* Once all unaffected options have been exercised, migrate any affected markets to a separate manager contract so that they can be expired in a controlled way to recover the funds.

In consequence of these changes, the claimable option balance of losing bids will fall to zero at maturity. This has no fiscal consequences, as these options pay out nothing when exercised in any case.

When this problem was discovered, market creation was immediately disabled on synthetix.exchange. Once the intended functionality is restored, market creation can be reenabled.

#### Remove Pool Fee Charge For Creators

At present, market creators still pay fees to the fee pool. Removing this charge will decrease the amount of volume their market must attract before it is profitable. This change will allow thinner markets to be viable; the decreased risk will encourage the creation of more binary option markets for a broader range of market settings. Although fewer fees will be generated by market creators, it is hoped that increased participation will compensate for this.

#### Allow Market Cancellation

Markets with no bids on them will be permitted to be destroyed by their creator, recovering the initial sUSD capital.

If a creator makes a market that attracts no interest, or if they misconfigure it, the creator currently has no way of recovering their funds until the market expires. Allowing a market to be destroyed if no bids have been made reduces the creator's outlay in case they make a mistake, without impacting any other users.

#### Emit Bid Events At Creation

The creator's initial bids aren't tracked by events. Emitting these events improves the usability of binary option markets on synthetix.exchange and other integrations.

### Technical Specification

TBD

### Test Cases

TBD

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
