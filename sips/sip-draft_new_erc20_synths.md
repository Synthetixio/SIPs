---
sip: 120
title: New ERC-20 Synths
status: WIP
author: Kain Warwick (@kaiynne)
discussions-to: Discord
created: 2021-03-01

---

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->
As virtual Synths and other cross-asset swaps become more viable it is important the protocol continues to add liquid in-demand assets. There are a number of highly liquid assets not yet supported by Synthetix, this SIP proposes to add four of them sCRV, s1INCH, sRUNE and sKP3R.

## Abstract
<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the SIP is implemented, not *why* it should be done or *how* it will be done. If the SIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->
This SIP will add the four new ERC-20 assets as Synths, sCRV, s1INCH, sRUNE and sKP3R. It does not propose adding inverse Synths of these assets.

## Motivation
<!--This is the problem statement. This is the *why* of the SIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the SIP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the SIP will address the issue!-->
There are two main reasons for adding additional ERC-20 asset support, the first is the growing usage of virtual Synths for cross-asset swaps. The second and more important reason is that as Synthetix transitions to OE many ERC-20 assets will have low liquidity initially, so Synthetix will be able to support exchanges of these assets helping to bootstrap liquidity. 

## Specification
<!--The specification should describe the syntax and semantics of any new feature, there are five sections
1. Rationale
2. Technical Specification
3. Test Cases
4. Configurable Values
-->

### Rationale
<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->
The Synths proposed were chosen as they are some of those most in demand by the comunity over the last few months. sCRV specifically supports the Curve ecosystem creating deeper connectivity between the two protocols. The reasoning behind only proposing the sSynths and not the iSynths is to allow avoid the need for depreacting them when iSynths are eventually depracated. Once thye have been live for a reasonable amount of time a SIP will be required to enable shortinbg of these assets.

### Technical Specification
<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->
N/A

### Test Cases
<!--Test cases for an implementation are mandatory for SIPs but can be included with the implementation..-->
TBC

### Configurable Values (Via SCCP)
<!--Please list all values configurable via SCCP under this implementation.-->
N/A

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
