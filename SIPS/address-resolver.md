---
sip: <to be assigned>
title: Address Resolver
status: Implemented
author: Justin J Moses (@justinjmoses)
discussions-to: <Discord Channel>

created: 2020-02-28
---

<!--You can leave these HTML comments in your merged SIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SIPs. Note that an SIP number will be assigned by an editor. When opening a pull request to submit your SIP, please use an abbreviated title in the filename, `sip-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SIP.-->

Add a new `AddressResolver` contract for smart contract lookups.

## Abstract

<!--A short (~200 word) description of the technical issue being addressed.-->

Add an `AddressResolver` contract stores the addresses of all interoperable smart contracs within the Synthetix protocol, and provide access to this resolver in all smart contracts that need to communicate with the others.

## Motivation

<!--The motivation is critical for SIPs that want to change Synthetix. It should clearly explain why the existing protocol specification is inadequate to address the problem that the SIP solves. SIP submissions without sufficient motivation may be rejected outright.-->

The Synthetix protocol is supported by a fairly complicated network of smart contracts. However, due to the limits put on smart contracts sizes by the EVM (see [EIP-170](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-170.md)) only so much logic and state can fit into a single contract. Moreover, to reduce the need to upgrade key contracts and to provide better adherence to the single-responsiblity-principle, having more smaller, single-purpose contracts is preferable.

In order to facilitate this intercontract communication, a contract respository (based on the Service Locator pattern) is the most robust and bytecode efficient solution.

## Specification

<!--The technical specification should describe the syntax and semantics of any new feature.-->

The `AddressResolver` needs a mechanism with which to `import` mulitple addresses, and this needs to be restricted to the `owner`. This import should be mutative, such that any subsequent imports of the same `name` will simply overwrite previous versions.

It will be the responsibility of the deployment (and eventually migration contracts) to ensure that new addresses are imported after they are deployed.

The keys of this repository will be `bytes32` encoding of the existing contract names, which are all described in our [list of addresses](https://docs.synthetix.io/addresses/) in the documentation.

Every contract that wishes to use the `AddressResolver` will need to inherit from `MixinResolver` (by leveraging multiple inhertance, we an think of this functionality as being a mixed into the target contract).

## Rationale

<!--The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

We analyzed how others have approached this task - in particular Colony's implementation of an address lookup system. Ours is somewhat different in that it simply needs to store contract names and allow simple lookup. Seeing as we already have a system in place to uniquely identify contracts by a `string` name - converting these to `bytes32` seems the most straightforward and gas efficient.

## Test Cases

<!--Test cases for an implementation are mandatory for SIPs but can be included with the implementation..-->

See https://github.com/Synthetixio/synthetix/pulls/383

## Implementation

<!--The implementations must be completed before any SIP is given status "Implemented", but it need not be completed before the SIP is "Approved". While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.-->

See https://github.com/Synthetixio/synthetix/pulls/383

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
