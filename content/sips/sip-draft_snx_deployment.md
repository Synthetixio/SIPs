---
sip: 386
title: SIP Deploy Synthetix V3 Core on Mode
network: Mode
status: Draft
type: Governance
author: 'Med Amine (@med-amiine), Deez'
created: 2024-05-17
---

<!--You can leave these HTML comments in your merged SIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. -->


## Simple Summary

Deploy the SNX token on Mode via the Mode Bridge, enabling seamless transfer of SNX tokens between the Ethereum Mainnet and Mode.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the SIP is implemented, not *why* it should be done or *how* it will be done. If the SIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

Enable the bridging functionality for SNX tokens using the Mode Bridge, ensuring that SNX tokens can be moved efficiently between networks.

## Motivation

<!--This is the problem statement. This is the *why* of the SIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the SIP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the SIP will address the issue!-->

With the anticipated launch of Synthetix V3 on Mode, the availability of SNX tokens on the Mode network becomes essential. This deployment will allow for the use of SNX as collateral within the V3 system on Mode. Additionally, this action will support the Synthetix Treasury Council's efforts to enhance SNX liquidity on Mode.

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

This proposal involves deploying a wrapped version of the SNX token on the Mode mainnet using Mode’s recommended bridging protocols and standards akin to those used in the Optimism ecosystem.
**Deploy SNX Token on Mode**: Using an adapted version of the OptimismMintableERC20Factory, the SNX token will be deployed on Mode. This will ensure that the token mechanics are compatible with both Ethereum and Mode protocols.

**Submit Details for SNX Token**: Following the deployment, the details of the SNX token will be submitted for inclusion in the Mode Token List.

**Approval and Verification**: The proposal will be followed by a pull request to Mode for approval. Post-approval, the SNX token wrapper contracts will be verified and made ready for use on Mode.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

Deploying the SNX token on Mode aligns with Synthetix’s strategic goal of broadening its ecosystem across multiple Layer 2 solutions. Mode’s infrastructure offers reduced gas fees and enhanced transaction speeds, which are conducive to improving the user experience and operational efficiency of Synthetix on Layer 2 networks. Additionally, Mode’s focus on DeFi and its robust security model provide a conducive environment for SNX token operations.

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
NA

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
