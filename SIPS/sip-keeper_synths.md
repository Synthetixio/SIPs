---
sip: <to be assigned>
title: Keeper Synths
status: WIP
author: Kain Warwick (@kaiynne)
discussions-to: https://discord.gg/kPPKsPb

created: 2020-05-21
---

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SIP.-->
The current version of the iSynths (inverse priced Synths) have price limits to protect the network, when these price limits are hit the Synth is frozen and must be restarted. Currently the protocolDAO is the only address that can call these functions. This results in delays and frustration for users. By making these functions public and paying a fee in SNX for anyone who resets an iSynth we can signficantly improve the user experience.

## Abstract
<!--A short (~200 word) description of the technical issue being addressed.-->
This SIP will change the iSynths purge and update pricing functions to be public and incentivised. The first person to call each function will be paid SNX as an incentive.

## Motivation
<!--The motivation is critical for SIPs that want to change Synthetix. It should clearly explain why the existing protocol specification is inadequate to address the problem that the SIP solves. SIP submissions without sufficient motivation may be rejected outright.-->
This is the problem statement. This is the *why* of the SIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the SIP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the SIP will address the issue!
While the iSynths are extremely useful and somewhat differentiated among DeFi assets, they have significant friction for users as the price bands required to prevent them becoming over or under leveraged mean that they regularly freze and must be reset. This reset process also requires that all holders of the Synth are purged into sUSD. The reason the price bands are required is that if the price of the underlying Synth doubles the price of the iSynth will go to 0. As the price of the iSynth tends to 0 the amount of leverage increases. For example if an ETH iSynth was instantated at $200 and ETH went to $399 then the iSynth would go to $1, so you would get $1 of price movement for each $1 spent on iETH versus $1 of price movement for every $400 spent on sETH. This property reverses in the other direction such that as the price of ETH drops you must buy significantly more iETH to get the same level of price movement. These property neccesitate the price bands and means that increasing or removing them adds significant risk to the system. The solution proposed in this SIP therefore leaves the bands as is and instead improves the purging and reset process by incentivising anyone to call a public function when an iSynth freezes. 

## Specification
<!--The specification should describe the syntax and semantics of any new feature, there are five sections
1. Overview
2. Rationale
3. Technical Specification
4. Test Cases
-->

# Overview
<!--This is a high level overview of *how* the SIP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->
There are three core functions required to reset an iSynth.
1. FreezeSynth
2. Purge
3. ResetPrice

Currently the oracle is responsible for freezing the iSynth when the price limits are hit, as an aside this is also problematic for our transition to chainlink as the CL oracles do not have the ability to call freeze based on a price limit being hit. Rather than relying on a centralised service to freeze a synth we will instead open this up to be a public function that any address can call. This function will require that the current price of the underlying Synth is outside the defined price bands. If it is the synth will be frozen, if not the call will fail. The fee in SNX for freezing an iSynth will initially be set to 50 SNX. This fee is deliberately set high to ensure there are sufficient incentives for bots to operate on these Synths.
Curnetly once a Synth is frozen the pDAO must call purge on all the addresses that hold this Synth. This will also be made a public function and any address will be able to pass an array of addresses holding these Synths and they will be purged into sUSD. There are two attack vectors that this incentive opens, however, the first is that it is possible now to trade into a frozen synth. This would mean that an attacker could repeatedly trade into a frozen iSynth and purge themselves provide the payment was higher than the gas cost to purge the address. The solution to this to introduce a check on exchange to disallow trading into a frozen iSynth. The second attack vector is pre-exchanging into iSynths with a low value into a number of accounts and then purging them to get the SNX incentive. If there is no limit on the size of the holding and the SNX incentive was sufficiently large it could be profitbale to exchange into thousands of accounts as long as the marginal cost of the roundtrip exchnage fees and gas costs of trade into and purge out of each wallet was less than the incentive paid. There is another limiting factor to this incentive which is that if accounts with small values are ignored completely an attack is possible by again sybil attacking the system and moving into many accounts with small balances that in sum are sufficiently large to be meaningful. To illustrate the issue, imagine we allow any wallet with less than $1 of an iSynth to not be purged, then we instantiate iETH when ETH is @ $200 if ETH hits $300 iETH will be @ $100 and frozen, if someone were to exchange $50k worth of sUSD into iETH and then split this into 50,001 wallets they would be below the threshold set of $1 and we would not purge them and all of their iETH would triple in price when iETH was reset to $300. Clearly we must have a global limit on the amount of a Synth before the price can be reset, and if it is not below this level the Synth price can not be reset. The issue we are now at a stalemate where there is a significant balance of iSynths spread across many wallets and the cost to purge would significantly exceed the SNX incentive. So we have a stalemate. There is too much value in total to reprice and there is too high a cost to purge. This essentially transitions from a potentially profitbale attack to a griefing attack somewhere below the value of the SNX incentive. To define the boundaries of this problem, the current cost of a purge of 12 addresses at 10 gwei is around $25. The cost of a transfer of a synth is about 1/4 the cost of an exchange, so you can split your balance into three wallets even with a large balance create a significant burden on the system.

# Rationale
<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->
Move the attackvector and risk mitigations above into this section.

# Technical Specification
<!--The technical specification should describe the syntax and semantics of any new feature.-->
The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones. 

# Test Cases
<!--Test cases for an implementation are mandatory for SIPs but can be included with the implementation..-->
Test cases for an implementation are mandatory for SIPs but can be included with the implementation.

## Configurable Values (Via SCCP)
<!--Please list all values configurable via SCCP under this implementation.-->
Please list all values configurable via SCCP under this implementation.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
