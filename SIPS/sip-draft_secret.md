---
sip: <to be assigned>
title: <secret for now>
author: Nocturnalsheet (@nocturnalsheet)
discussions-to: https://discord.gg/CDTvjHY
status: WIP
created: 2019-06-14
---


## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SIP.-->
In order to mint or burn Synthetix needs the user's debt, this requires a call to each synth contract to request the synth balance in that contract. We propose to read the balances and insert it via the oracle. This change would significantly reduce the gas required for a mint or burn.

## Abstract
<!--A short (~200 word) description of the technical issue being addressed.-->
Reducing the gas consumption of minting and burning will result in a significantly improved user experience.

## Motivation
<!--The motivation is critical for SIPs that want to change Synthetix. It should clearly explain why the existing protocol specification is inadequate to address the problem that the SIP solves. SIP submissions without sufficient motivation may be rejected outright.-->
The gas consumption of a mint/burn transactions is ~2m, this creates a bottleneck in the system as each additional synth adds computational complexity to the transaction. By reading the information from the contract and inserting the precalculated total balances and system debt we can significantly reduce the gas consumption of these calls. This immediately raises a concern of further centralisation, but our view is that given the current implementation of the oracle this does not increase the risks to the system. 

## Specification
<!--The technical specification should describe the syntax and semantics of any new feature.-->
The technical specification should describe the syntax and semantics of any new feature.

## Rationale
<!--The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->
The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

## Test Cases
<!--Test cases for an implementation are mandatory for SIPs but can be included with the implementation..-->
Test cases for an implementation are mandatory for SIPs but can be included with the implementation.

## Implementation
<!--The implementations must be completed before any SIP is given status "Implemented", but it need not be completed before the SIP is "Approved". While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.-->
The implementations must be completed before any SIP is given status "Implemented", but it need not be completed before the SIP is "Approved". While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
