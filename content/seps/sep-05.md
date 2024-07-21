---
sep: 0005
title: Fee Switch - Sales
network: Cross-Chain
status: Proposed
type: Software
author: masonicgit
implementor: TBD
release: N/A
implementation-date:
discussions-to: https://forum.thesoftdao.com/t/activate-protocol-fee-switch
proposal: <snapshot.org proposal link> (*optional)
created: 2024-07-21
requires: x
---

## Simple Summary

A protocol fee switch will help to generate transaction fees into the DAO. This can open the door to substantiating the economic value of the DAO so it can be measured in comparable ways to Layer 1 blockchains and Layer 2 app-chains. This SEP concerns only the sales that occur using the contracts. A customer may fundraise a given quantity in various coins such as Ethereum and USDC, this SEP outlines a manner in which a portion of the fundraiser can be routed into the DAO smart contract to provide economic value to the protocol in exchange for use of the software. Just like Bitcoin!

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the SEP is implemented, not *why* it should be done or *how* it will be done. If the SEP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

This SEP proposes a DAO controlled configuration which sets the number of payment or native tokens to pull into the DAO per purchase. The Flat Price Sale will reference the DAO-controlled configuration and the SOFT Staking contract at purchase-time to determine the percentage of purchase amount that is sent to the configured recipient, in this case the Governor.

The percentage is a combination of the total percentage, determined by the configuration, and the "fee switch" which determines a fee discount corresponding to the user's amount of staked SOFT.

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


### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->



### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Soft currently exposes or the creations of new ones.-->

<!--
- **Unified Interface**: Simplifies interactions with blockchain contracts, enhancing user experience and developer productivity.
- **Contract Deployment Tools**: Streamlines the process of deploying `Satellite.sol` and `CrosschainTrancheVestingMerkle.sol` contracts, making them accessible to a wider audience.
- **Airdrop Configuration and Management**: Provides customizable templates and management tools for airdrop campaigns, reducing the operational complexity.
- **Cross-Chain Token Claiming**: Facilitates a user-friendly process for claiming tokens on different chains, improving accessibility for non-technical users.
- **Comprehensive Documentation**: Offers detailed guides and examples, enabling developers to leverage the SDK's full potential.
-->
### High-Level SDK Workflow


### Milestones

## Conclusion


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
