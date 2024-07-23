---
sep: 0005
title: Fee Collection - Sales
author: masonicgit
status: Proposed
type: Software
network: Cross-Chain
implementor: TBD
release: TBD
discussions-to: https://forum.thesoftdao.com/t/activate-protocol-fee-switch
proposal: <snapshot.org proposal link> (*optional)
created: 2024-07-21
requires: x
---

## Simple Summary

A protocol fee collection will help to generate transaction fees that give back to the DAO. This can open the door to substantiating the economic value of the DAO so it can be measured in comparable ways to Layer 1 blockchains and Layer 2 app-chains. This SEP concerns only the sales that occur using the contracts. A customer may fundraise a given quantity in various coins such as Ethereum and USDC, this SEP outlines a manner in which a portion of the funds can be routed into the DAO smart contract to provide economic value to the protocol in exchange for use of the software. Just like Bitcoin!

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the SEP is implemented, not *why* it should be done or *how* it will be done. If the SEP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

This SEP proposes a DAO-controlled configuration which sets the number of payment or native tokens to pull into the DAO per-purchase. The Flat Price Sale contract will reference the DAO-controlled configuration at purchase-time to determine the percentage of purchase amount that is sent to the configured recipient, in this case the DAO Governor.

The percentage is determined by the configuration, initialized to 1% (100 bps).

## Motivation

<!--This is the problem statement. This is the *why* of the SEP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the SEP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the SEP will address the issue!-->

Every piece of software should contain an economic incentive layer in order to foster the development and growth of the software. This SEP outlines one of many ways that this can occur.

## Specification

<!--The specification should describe the syntax and semantics of any new feature, there are five sections
1. Overview
2. Rationale
3. Technical Specification
4. Test Cases
5. Configurable Values
-->

### Overview

<!--This is a high level overview of *how* the SEP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->

As Soft Protocol continues to support new launches onchain, it’s critical to incorporate an economic incentive layer. This can ensure sustained protocol operations & longevity of the Soft treasury. By implementing the changes outlined below, Soft can capture fees and continue to thrive. New contracts will be deployed, with corresponding interface changes to reflect the new feature.


### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

In order to make fee collection robust and transparent, it's necessary to implement at the contract layer, rather than the application layer. Integrating fee collection at the application layer would allow savvy users to bypass fee collection by merely writing directly to a sale contract.



### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Soft currently exposes or the creations of new ones.-->

This proposal includes a new contract, called a `NetworkConfig` (also referred to as the "network configuration") which will be a Governor-owned configuration contract, which can later be changed through the use of a SOFT Configuration Change Proposal. Our first iteration of the `NetworkConfig` will include the official address of our SOFT Staking Contract, as well as the official address of our DAO Governor Contract (referred to as the "fee recipient"), which is where the fees are sent. Additionally, the `NetworkConfig` will include the global fee amount, stored as a quantity of "bips" (basis points) that reflect a percentage of the purchase volume for purchases from `FlatPriceSale` contracts.

This proposal will require us to author a new version of our `FlatPriceSale` contract, which will include the network configuration. With this proposal, during a purchase from a `FlatPriceSale`, the contract will charge a fee set by the configured global fee amount. Using the fee amount, the contract will know the percentage of the purchase amount that will become a fee payment. The contract will finally send this amount of the purchase to the configured fee recipient before sending the remaining purchase amount to the sale itself.


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
