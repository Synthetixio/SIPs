---
sep: 0004
title: SoftSDK
network: Cross-Chain
status: Proposed
type: Meta-Governance
author: 0xAtomic
implementor: 0xAtomic
release: SoftSDK v1
implementation-date:
discussions-to: https://forum.thesoftdao.com/t/rfp-softsdk-v1-development/10722
proposal: <snapshot.org proposal link> (*optional)
created: 2024-03-08
requires: x
---

## Simple Summary

A TypeScript SDK facilitating the deployment and management of airdrops and token claims on all supported chains.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the SEP is implemented, not *why* it should be done or *how* it will be done. If the SEP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

This SEP proposes the authoring of an official SOFT Protocol SDK, in TypeScript, that enables end users and developers to interact with the SOFT Protocol contracts on all supported networks. The SDK will provide all necessary tools for launching sales, airdrops and claims.

## Motivation

<!--This is the problem statement. This is the *why* of the SEP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the SEP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the SEP will address the issue!-->

SOFT Protocol's existing contract offerings leave much to be desired regarding documentation and usability. Using our contracts today requires extensive technical knowledge. This SEP seeks to address these issues by introducing an SDK that makes the process more canonized. With less guess-work for the end-user, the process becomes more accessible and efficient.

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

SOFT Protocol SDK, will be a TypeScript SDK that includes "helper functions" that facilitate the most commons operations that are needed for interacting with the protocol. Operations include: launching a sale, launching a distributor (also known as an "airdrop"), purchasing from a sale and claiming tokens from a distributor.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Soft currently exposes or the creations of new ones.-->

- **Merkle Tree Tools**: Facilitates generating a canonical merkle tree that can be used for SOFT Protocol contracts.
- **Contract Deployment Tools**: Streamlines the process of deploying `FlatPriceSale`, `TrancheVestingMerkleDistributor` and `ContinuousVestingMerkleDistributor` contracts. This requires the deployer to provide a merkle tree of participants, and possibly the supply of to-be-distributed tokens.
- **Sale Participation**: Facilitates purchasing from a `FlatPriceSale` contract. This requires the participant to provide their merkle proof fragment, and either native tokens or payment tokens (usually USDC).
- **Token Claiming**: Facilitates claiming from a `TrancheVestingMerkleDistributor` or a `ContinuousVestingMerkleDistributor`. This requires the claimer to provide their merkle proof fragment.
- **Comprehensive Documentation**: Offers detailed guides and examples, enabling developers to leverage the SDK's full potential.

### High-Level SDK Workflow

1. **Configuration**: Developers initialize the SDK configuration with a network provider (in Ethers.js) and network ID (if necessary).
2. **Deployment**: When using the deployment functions, the SDK will use the SOFT Protocol contract factories on-chain in order to reduce gas costs. The merkle root will be uploaded, along with timing and other configuration details for deployed contracts. This includes deploying sales and both types of supported distributors.
3. **Sale Participation**: Developers can provide the address of a sale, their merkle proof fragment and an amount of native tokens or payment tokens, and the SDK will send the corresponding transaction to the configured network.
4. **Token Claiming**: Similar to sale participation, developers can provide the address of a distributor and their merkle proof fragment, and the SDK will send the corresponding transaction to the configured network.

### Milestones

- Milestone 1:
  - Establishment of core patterns necessary for configuring the network and interoperating with Ethers.js.
  - Establishment of core functions for deploying new contracts (`FlatPriceSale`, `ContinuousVestingMerkleDistributor`, `TrancheVestingMerkleDistributor`)
  - Establishment of core functions for interacting with new contracts (`FlatPriceSale#buyWithNative`, `FlatPriceSale#buyWithToken`, `Distributor#claim`)
- Milestone 2:
  - Establishment of helper functions for generating merkle trees
  - Effective unit tests
- Milestone 3:
  - Establishment of high-quality documentation with step-by-step usage examples
- Milestone 4:
  - Integrating the SDK with platforms and replacing existing improvised usage of SOFT Protocol contracts
  - Thorough testing of integrations
- Milestone 5:
  - Successful launch of the SDK.
  - Provision of post-launch support to address any immediate issues, gather user feedback, and confirm the stability of the SDK.

## Conclusion

The SDK represents a significant leap forward in making SOFT Protocol's contract offerings more accessible. By approving this proposal, the community will enable a new wave of innovation and participation, strengthening the ecosystem's foundation and fostering a more interconnected DeFi landscape.

This enhancement proposal includes a broad overview, highlighting the SDK's features and benefits.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
