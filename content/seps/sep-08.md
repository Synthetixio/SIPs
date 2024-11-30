---
sep: 0008
title: Real Time Access Control
author: Devs Do Something
status: Proposed
type: Software
network: All
implementor: ArshaanB
release: V4.0
discussions-to: https://forum.thesoftdao.com/t/sep-0008-real-time-access-control
created: 2024-10-18
requires: x
---

## Simple Summary

There is a need for the contracts to move away from merkle root-based access lists. The following challenges exist with the current merkle root structure:

A list of 1,000 addresses may take up to ten minutes to generate and publish on chain
When a new address needs to be added, the merkle root needs to be regenerated and re-published to the network
These two issues make it such that the system cannot facilitate high-scale transactions.

There needs to be a way to publish the merkle root information to the smart contract in a manner that scales with new address additions.


## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the SEP is implemented, not *why* it should be done or *how* it will be done. If the SEP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

Merkle root-based access lists require multiple interactions with centralized and decentralized networks. The first being the merkle root generation which can take ten minutes to generate and instantiate onchain. The next bottleneck occurs when a new address needs to be added to the merkle root. This makes it prohibitive for high-scale, live applications. A decentralized, real-time solution can provide smart-contract based applications the desired solution at web-scale.

## Motivation

<!--This is the problem statement. This is the *why* of the SEP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the SEP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the SEP will address the issue!-->

Currently if servicing the number of users that Soft Protocol has serviced in the past, it can cost hundreds of thousands of dollars to register each address onchain as they come. This is not sustainable for airdrops or token sales as it inhibits the user experience. 

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

By enabling a centralized or decentralized system that can collect new addresses and provide a proof that can be submitted to the smart contract in real time. 

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

The contracts will be deployed on the Base network, including the Sale and Claims contracts, need a way to collect addresses on unique lists. Additionally, after an address is on a list, a proof needs to be generated for submission into the smart contract to prove its on the list. This proof needs to be based on ECDSA and also consumable by conventional smart contract libraries. 


### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Soft currently exposes or the creations of new ones.-->

TBD

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
