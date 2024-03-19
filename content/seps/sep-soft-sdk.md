---
sip: 0003
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

An SDK facilitating the deployment and management of cross-chain airdrops and token claims, offering user-friendly interfaces for both developers and end-users.


## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the SEP is implemented, not *why* it should be done or *how* it will be done. If the SEP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

This SEP proposes the creation of a Cross-Chain Distributor SDK designed to enable simple and efficient management of airdrops and token claims across various blockchain networks. The SDK will provide tools for deploying contracts, configuring airdrops, managing token claims, and ensuring seamless interoperability between chains. By implementing this SEP, we aim to deploy a toolkit that simplifies cross-chain distributions, enhancing accessibility and user engagement within the DeFi ecosystem.



## Motivation

<!--This is the problem statement. This is the *why* of the SEP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the SEP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the SEP will address the issue!-->

The rapid growth of the decentralized ecosystem has highlighted significant challenges in interoperability and the user experience, particularly regarding cross-chain transactions and airdrop participation. Current solutions are often cumbersome, requiring extensive technical knowledge and manual intervention. This SEP seeks to address these issues by introducing an SDK that simplifies the process, making it more accessible and efficient. The motivation is to lower barriers to entry, encourage broader participation, and foster innovation by streamlining cross-chain interactions within the DeFi space.


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

This proposal introduces the Cross-Chain Distributor SDK, a comprehensive toolkit designed to revolutionize the way airdrops and token claims are managed across multiple blockchain networks. It aims to drastically reduce the technical barriers for protocol interaction, fostering innovation and broader access to decentralized finance (DeFi) opportunities.


### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

The decentralized ecosystem's expansion has accentuated the need for seamless interoperability and user-friendly tools for cross-chain transactions. The Cross-Chain Distributor SDK addresses this by offering an integrated solution to deploy, manage, and participate in token distributions across various chains, leveraging the capabilities of `Satellite.sol` and `CrosschainTrancheVestingMerkle.sol` contracts.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Soft currently exposes or the creations of new ones.-->

- **Unified Interface**: Simplifies interactions with blockchain contracts, enhancing user experience and developer productivity.
- **Contract Deployment Tools**: Streamlines the process of deploying `Satellite.sol` and `CrosschainTrancheVestingMerkle.sol` contracts, making them accessible to a wider audience.
- **Airdrop Configuration and Management**: Provides customizable templates and management tools for airdrop campaigns, reducing the operational complexity.
- **Cross-Chain Token Claiming**: Facilitates a user-friendly process for claiming tokens on different chains, improving accessibility for non-technical users.
- **Comprehensive Documentation**: Offers detailed guides and examples, enabling developers to leverage the SDK's full potential.

### High-Level SDK Workflow
1. **Initialization**: Developers initiate the SDK, selecting the target chains and configuring the necessary contracts.
2. **Deployment**: The SDK simplifies contract deployment, abstracting away the complexities of interacting with smart contracts.
3. **Airdrop Setup**: Developers can configure airdrops, specifying distribution parameters and schedules through the SDK's interfaces.
4. **Claim Process**: Users interact with a straightforward interface to claim tokens, supported by the SDK's cross-chain capabilities.


This UML diagram serves as a high-level representation of how the SDK facilitates interaction with the underlying contracts, streamlining the process of deploying and managing cross-chain airdrops and token claims.

### Milestones

- Milestone 1: 
	- SDK Initialization and Core Architecture (20% of total remuneration).
	- Completion of the SDK setup with the ability to select target chains.
	  Establishment of the core architecture and interfaces based on the UML diagram.
- Milestone 2:
	- Contract Deployment and Airdrop Configuration (20%)
	- Completion of the Contract Deployment Module, facilitating easy deployment of Satellite.sol and CrosschainTrancheVestingMerkle.sol contracts.
	- Development of the Airdrop Configuration Module to enable project owners to set up airdrops with custom parameters.
- Milestone 3: 
	- Cross-Chain Functionality and Token Claiming Process (20%)
	- Implementation of cross-chain communication capabilities that support token claims across different blockchains.
	- Development of the Token Claiming Module with a user-friendly interface for claiming tokens.
- Milestone 4: 
	- Comprehensive Documentation and User Guides (20%)
	- Creation of detailed documentation, guides, and examples that help developers understand and leverage the SDK's full potential.
	- Provision of clear examples and operational guides based on the SDK's architecture and workflow.
- Milestone 5: 
	- Final Testing, Bug Fixes, and Optimization (15-20%)
	- Conducting a final thorough testing phase across different scenarios to ensure all components work harmoniously.
	- Refinement of the SDK for performance, security, and user experience.
	- Successful launch of the SDK.
	- Provision of post-launch support to address any immediate issues, gather user feedback, and confirm the stability of the SDK.

## Conclusion

The Cross-Chain Distributor SDK represents a significant leap forward in making cross-chain functionalities more accessible and user-friendly. By approving this proposal, the community will enable a new wave of innovation and participation, strengthening the ecosystem's foundation and fostering a more interconnected DeFi landscape.


This enhanced proposal includes a detailed overview, highlighting the SDK's features, benefits, and a simplified UML diagram to illustrate the architecture. You can further refine the UML diagram based on the specific technical architecture of the SDK.


Please list all values configurable via SCCP under this implementation.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).