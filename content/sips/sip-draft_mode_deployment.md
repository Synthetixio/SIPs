---
sip: <to be assigned>
title: SIP Deploy Synthetix V3 Core on Mode
network: Mode
status: Draft
type: Governance
author: Med Amine (@med-amiine), Deez <deez@mode.network>
implementor:
release: 
implementation-date:
discussions-to: 
proposal: 
created: 2024-05-17
requires: 
---

<!--You can leave these HTML comments in your merged SIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. -->


## Simple Summary

"Deploy Synthetix V3 Core System on Mode, a modular L2 blockchain on the OP Superchain."

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the SIP is implemented, not *why* it should be done or *how* it will be done. If the SIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

The proposal seeks to implement the Synthetix V3 Core System on the Mode mainnet, utilizing upgraded contracts optimized for greater scalability, efficiency, and security. These contracts are specifically designed to integrate seamlessly with Mode's L2 solutions, offering an advanced framework for Synthetix users and developers.

## Motivation

<!--This is the problem statement. This is the *why* of the SIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the SIP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the SIP will address the issue!-->

The primary motivation for this proposal is to leverage Mode's advanced blockchain infrastructure and its focus on DeFi applications to improve the Synthetix protocol's performance and user experience. Mode's integration capabilities and incentives align with Synthetix's goals to expand its user base and increase total value locked (TVL) through innovative DeFi solutions.

## Specification

<!--The specification should describe the syntax and semantics of any new feature, there are five sections
1. Overview
2. Rationale
3. Technical Specification
4. Test Cases
5. Configurable Values
-->

### Overview

<!--This is a high level overview of *how* the SIP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->

The deployment plan includes migrating the essential components of the Synthetix V3 system to Mode, focusing on contracts related to staking, rewards, and synthetic asset exchanges.

Users on Mode will not yet be able to stake SNX or mint the V3 USD stablecoin until these contracts are unpaused.

This SIP does not divert any inflation to Mode stakers.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

Choosing Mode for Synthetix V3 deployment offers strategic benefits, such as reduced gas costs, faster transactions, and access to a curated DeFi ecosystem. Mode's unique features, like DevDrop and Sequencer Fee Sharing, provide additional incentives for developers, which can significantly contribute to Synthetix's growth and innovation.

**Increased Syntetix exposure to strategic assets**: Mode has attracted significant capital in the form of LRTs and synthetic Bitcoin (m-BTC). As these assets grow in TVL across EVM ecosystems, Synthetic can leverage Mode’s early focus and incubation of blue-chip synthetics.

**Exposure to the recent rapid growth of Mode**: Mode has grown over 300% in the past two months in total TVL, rising into the [Top 15 chains on DeFiLlama](https://defillama.com/chains "Top 15 chains on DeFiLlama") boasting over [670M in TVL](https://l2beat.com/scaling/projects/mode "670M in TVL"). The ecosystem has taken pride in building together and finding intra-chain solutions, fostering a collaborative, expansive environment.

**Optimized L2 Solution**: Mode operates as a modular Layer 2 (L2) blockchain within the	Optimism Superchain, offering reduced transaction costs and higher throughput compared to Ethereum mainnet. This environment is ideal for DeFi applications like Synthetix, which require efficient and cost-effective transaction processing to scale effectively and remain competitive.

**DeFi-Centric Ecosystem**: Mode is designed to be the DeFi hub of the OP Superchain, focusing on delivering a diverse and secure yield experience. By deploying on Mode, Synthetix can tap into a sophisticated ecosystem that is primed for DeFi innovations and integrations, potentially increasing the protocol's reach and utility.

**Developer Incentives**: Mode provides attractive incentives for early protocols through initiatives like DevDrop and Sequencer Fee Sharing. These incentives are designed to lower the barriers to entry for developers and encourage protocol innovation and growth. For Synthetix, these incentives can accelerate the user bootstrapping phase on Mode.

**Security and Governance**: Mode’s security model involves a collaboration with the Optimism Security Council and Optimism Foundation, ensuring a robust and secure operational framework. This multi-signature governance model offers quick adaptability to address potential security concerns without extensive delays, providing an added layer of security for Synthetix’s operations on Mode.

**Community and Integration Focus**: Mode emphasizes close collaboration with established protocols and community engagement, which aligns with Synthetix’s values of transparency and community-driven development. By deploying on Mode, Synthetix can leverage these synergies to enhance user engagement and integrate more deeply with other DeFi protocols in the ecosystem.

**Scalability and Interoperability**: With its focus on building smart economies, Mode supports scalable and interoperable blockchain solutions, which are crucial for Synthetix as it evolves to include more complex financial instruments and interactions with other chains and protocols within the OP Superchain.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->

**Contract Deployment**: Migrate Synthetix V3's core contracts to Mode mainnet, ensuring compatibility with Mode’s OP Stack configuration.

**Parameter Configuration**: Adjust contract settings to optimize performance on Mode, incorporating insights from deployments on other L2 solutions.

**Security Measures**: Implement enhanced security protocols and conduct thorough audits, in line with Mode's security guidelines and multisig governance.

### Test Cases

<!--Test cases for an implementation are mandatory for SIPs but can be included with the implementation..-->
TBD
### Configurable Values (Via SCCP)

<!--Please list all values configurable via SCCP under this implementation.-->
TBD
## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
