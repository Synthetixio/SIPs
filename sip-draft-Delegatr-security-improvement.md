---
sip: <to be assigned>
title: <Request to add increased functionality to Delegatr for added user security>
status: WIP
author: <Twitter @Gasman404 , Name - Luke777 , Discord - Lynch96#8434

created: <2020-07-02>
requires (*optional): <SIP number(s)>
---

<!--You can leave these HTML comments in your merged SIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SIPs. Note that an SIP number will be assigned by an editor. When opening a pull request to submit your SIP, please use an abbreviated title in the filename, `sip-draft_title_abbrev.md`. The title should be 44 characters or less.-->


## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

This SIP is proposing 2 features to implement into Delegatr that would allow users to store their SNX on a highly secure wallet, without the need to access it every week to transfer out minted sUSD to be hedged externally, or to burn sUSD to fix the c-ratio

## Abstract
<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the SIP is implemented, not *why* it should be done or *how* it will be done. If the SIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->
The suggested improvement is for the inclusion of an option for delegators to 
a) have sUSD that is minted in Delegatr sent directly to the delegator wallet without the need to unlock the main SNX wallet -
b) be able to burn sUSD that is stored in the delegator wallet to fix c-ratio without the need to send it to the SNX wallet - this is less essential - as users can always send sUSD to the main wallet and use the remote burn feature - but may provide a better UX for users who hedge externally 


## Motivation
<!--This is the problem statement. This is the *why* of the SIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the SIP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the SIP will address the issue!-->
The current delegatr feature is cool, but not adequate to manage minting without having to unlock the main SNX wallet. 
For users with large holdings, I see this as a security risk
It would be great to manage the whole process without having to access the SNX cold wallet at all besides the initial setup process.
This also encourages users to sell their sUSD into the market & hedge externally, something that can not be done currently without unlocking the main SNX wallet












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


### Rationale
<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->
This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.

### Technical Specification
<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->
The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones. 

### Test Cases
<!--Test cases for an implementation are mandatory for SIPs but can be included with the implementation..-->
Test cases for an implementation are mandatory for SIPs but can be included with the implementation.

### Configurable Values (Via SCCP)
<!--Please list all values configurable via SCCP under this implementation.-->
Please list all values configurable via SCCP under this implementation.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
