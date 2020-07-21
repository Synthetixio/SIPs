---
sip: 73
title: Keeper Synths - Phase 1
status: WIP
author: Kain Warwick (@kaiynne), Justin Moses (@justinjmoses)
discussions-to: https://discord.gg/kPPKsPb

created: 2020-07-20
---

## Simple Summary
The current version of the iSynths (inverse price Synths) have price limits to protect the network, when these price limits are hit the Synth is frozen. [SIP-61](./sip-61/md) covers the roadmap for Keeper Synths. Phase 1 of the system will be allowing a public function to freeze iSynths.

## Abstract
This SIP will change the iSynths purge and update pricing functions to be public and incentivised. The first address to call freezeSynth will be paid SNX as an incentive.

## Motivation
The reason the price bands are required is that if the price of the underlying Synth doubles the price of the iSynth will go to 0. As the price of the iSynth tends to 0 the amount of leverage increases. For example if an ETH iSynth was instantiated at $200 and ETH went to $399 then the iSynth would go to $1, so you would get $1 of price movement for each $1 spent on iETH versus $1 of price movement for every $400 spent on sETH. This property reverses in the other direction such that as the price of ETH drops you must buy significantly more iETH to get the same level of price movement as sETH.

This leverage neccesitates tight price bands and increasing or removing them would add significant risk to the network. The solution proposed in this SIP therefore leaves the bands as is and instead improves the freezing process by incentivising anyone to call public functions to manage iSynth freezing.

## Specification

# Overview
Phase 1 of the Keeper synths will be creating a public function to freezeSynths.

1. FreezeSynth

FreezeSynth - Currently the oracle is responsible for freezing the iSynth when the price limits are hit, as an aside this is also problematic for our transition to chainlink as the CL oracles do not have the ability to call FreezeSynth based on a price limit being hit. Rather than relying on a centralised service to freeze iSynths we will instead make this a public function any address can call. This function will require that the current price of the underlying Synth is outside the defined price bands. If it is the synth will be frozen, if not the call will fail.

The fee in SNX for freezing an iSynth will initially be set to 25 SNX. This fee is deliberately set high to ensure there are sufficient incentives to ensure competition to quickly freeze iSynths. For Phase 1, the address that calls FreezeSynth successfully will be emitted as part of the `InversePriceFrozen()` event.

The protocol DAO will reimburse the address that

# Rationale
The first attack is possible because you can currently trade into a frozen synth. An attacker could repeatedly trade into a frozen iSynth and purge themselves providing the payment was higher than the gas cost to purge the address. The solution to this to introduce a check on exchange to disallow trading into a frozen iSynth.

The second attack relies on exchanging into iSynths then splitting the value across a number of accounts and then purging them to capture the SNX incentive. If there is no limit on the size of an address that can be purged and the SNX incentive was sufficiently large it could be profitable to exchange into thousands of accounts with dust as long as the marginal cost of the roundtrip exchange fees and gas costs of trade into and purge out of each wallet was less than the incentive. The current MinPurgeAmount is configurable (currently $0.01). It could still be profitable to split into addresses with values above $0.01 however this requires more funds at risk as another keeper could capture the incentive.

# Technical Specification
<!--The technical specification should describe the syntax and semantics of any new feature.-->
The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.

# Test Cases
<!--Test cases for an implementation are mandatory for SIPs but can be included with the implementation..-->
Test cases for an implementation are mandatory for SIPs but can be included with the implementation.

## Configurable Values (Via SCCP)
MinBalance - This is the minimum value measured in sUSD that can be purged (1c)

MaxValue - This is the maximum total value across all unpurged holders before resetPricing can be called ($10)

FreezeIncentive - The amount of SNX paid to the caller of FreezeSynth

PurgeIncentive - The amount of SNX paid to the caller of purge cycle

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
