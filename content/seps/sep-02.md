---
sep: 0002
title: SEP Purpose and Guidelines
author:  けつばん
network: Unknown
comments-uri: https://forum.softdao.ch/t/softprovement-proposal-ideas
type: Request for Enhancement
status: Implemented
created: 2017-11-07T00:00:00.000Z
proposal: 
note: This document has been translated from Japanese, please pardon any typos or grammatical errors.
---

## Simple Summary:

Projects seeking to distribute tokens in a fair and distributed manner will need a blockchain-based rules system to use.

## Abstract:

Launching a fixed-price token sale for a blockchain asset carries several challenges. These include Sybil attacks, economic attacks, DDOS (or similar style of bot) and a fair playing field when it comes to participation. A smart-contract based system that can help navigate these challenges or attacks is a net positive to the ecosystem and can enable greater trust, fairness and transparency.

## Specification:

The proposed set of smart contracts should meet the following specification:
* The ability to interface with an access list to enable Sybil-resistance or an opt-in compliance layer. The access list should have a toggle.
* The ability to enforce contribution limits per address to enable a fair distribution per user.
* The ability to enforce an overall limit on the amount of funds coming in or the allocation of token to be sold.
* The ability to allow incoming payments in various formats based on a price oracle.
* The ability to queue users in order to prevent on-chain DDOS attacks that can result in increased transaction fees.
* The ability to shut off incoming transactions based on time.

## Motivation

The following issues may occur on-chain which have led to the prescribed specification:
* Bots can easily be setup to game token sales or token claims. If the cost of the attack is sufficiently low relative to the perceived gain, it can result in a large number of bots participating, making it untenable economically for real users to participate.
* If user A participates alongside users B-Z. If the allocation of users B-Z is α. If user A sends in a payment that is >> α. If all the tokens unlock at the same time. Then user A can have an adverse economic effect on the token when parting with the purchased token.
* A token project may seek to sell tokens, at the same time they may have planned to sell a specific number. Selling over a certain amount may negatively impact the  
* A high demand token project may see a large influx of users. This can result in a surge in blockchain network transaction fees. 
* In order to be inclusive to the entire userbase, it can be advantageous to enable a broad set of payment methods.
* In order to provide predictability in an event it may be advantageous to provide a time bound on the event.


* **License**: <INSERT> 


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
