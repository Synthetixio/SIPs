---
sip: <to be assigned>
title: Formalising the protocolDAO
status: WIP
author: Kain Warwick (@kaiynne)
discussions-to: <Create a new thread on https://research.synthetix.io and drop the link here> 

created: 2021-03-19

---

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->
The protocolDAO is one of the most critical governing bodies within the Synthetix protocol, however, the current process for assigning a new member to the protocolDAO is fairly informal and at the discretion of the other pDAO members. This worked well historically, but as the governance of Synthetix has progressiveky decentralised a more formal and trasparent process for assigning members to the pDAO is required.

## Abstract
<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the SIP is implemented, not *why* it should be done or *how* it will be done. If the SIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->
This SIP proposes to establish a clear inclusion criteria for a Core Contributor to be added as a signer to the protocolDAO. This will be based on a number of considerations and will ensure the Spartan Council is aware of each member of the protocolDAO to ensure clear communication between two of the most critical aspects of Synthetix Governance.

## Motivation
<!--This is the problem statement. This is the *why* of the SIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the SIP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the SIP will address the issue!-->
Currently a new members are added to the protocolDAO by existing members of the protocolDAO in an informal fashion, this process does not have a clear structure and results in a level of ambiguity outside the pDAO as to who is able to sign pDAO transactions. This is not ideal given the level of control the pDAO has over protocol changes. In the past the membership of the pDAO has not been publicly disclosed for opsec reasons. By establishing a transparent framework for inclusion into the pDAO the members of the pDAO can be reveleaed to the Spartan Council to ensure that if there is a breakdown in governance the Council will be able to communicate the issue to the wider community.

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
The SIP proposes that in order to be included in the pDAO a person must meet *all* of the following criteria, and that once met a person must be included as soon as practicable into the pDAO.

1. A prospective pDAO member must be a Core Contributor 
2. A prospective pDAO member must be a member of the protocol engineers or front-end engineers
3. A prospective pDAO member must have been a Core Contributor for a minimum of six months
4. A prospective pDAO member must put up a bond of 10k SNX in order to be included in the pDAO

Once the above criteria are met the pDAO must add the qualifying member to the pDAO as soon as possible.

Once a Core Contributor has qualified for inclusion into the pDAO they must present themsemslves to the Spartan Council and provide a signing address. Once the Spartan Council has validated their inclusion the Soartan Council will instruct the synthetixDAO to deposit the pDAO bond into the bond contract on behalf of the signer. This bond becomes the property of the signer and will be sent back to them if they no longer meet the eligibility requirements due to resigning as a core contributor provided they have not been slashed by the Spartan Council for malicious behaviour. 

### Rationale
<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

The criteria above are deliberately minimal to ensure the pDAO has sufficient membership around the world to reduce the risk of capture or censorship. Based on the above criteria the pDAO would expand to at least nine members with several additional Core Contributors eligible within the next few months. The reasoning behind requiring signers to be core contributors is to ensure anyone signing for the pDAO is paid a monthly grant from the synthetixDAO and working on the project full time and exclusively. The requirement of an engineering background is to ensure that each signer is capable of inspecting all transaction payloads an validating the execution of each transaction. The requirement of minimum six months tenure is to ensure that only long standing core contributors are onboarded into the pDAO to reduce overhead in managing the composition of the pDAO. The final requirement of a 10k SNX bond is there to ensure that each pDAO member has skin in the game. This SNX bond will be handled by the SPartan Council and they will have discretion to slash this bond if at their discretion a pDAO member has acted maliciously or had bypassed the legitimate goivernance process.

### Technical Specification
<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->
A new contract will be established that will accept adn store the SNX bond for each pDAO member, this contract will be managed by the Spartan Council. The SNX will only be returned to a pDAO member if they exit the pDAO voluntarily for a legitimate reason at the sole discretion of the Spartan Council.

### Test Cases
<!--Test cases for an implementation are mandatory for SIPs but can be included with the implementation..-->
TBC

### Configurable Values (Via SCCP)
<!--Please list all values configurable via SCCP under this implementation.-->
The SNX bond is configurable via SCCP and can be raised or lowered by the Spartan Council.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
