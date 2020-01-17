---
sip: <to be assigned>
title: Fee Reclamation and Rebate
status: Proposed
author: Justin J Moses (@justinjmoses)
discussions-to: https://discord.gg/3uJ5rAy

created: <date created on, in ISO 8601 (yyyy-mm-dd) format>
requires (*optional): <SIP number(s)>
---

<!--You can leave these HTML comments in your merged SIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SIPs. Note that an SIP number will be assigned by an editor. When opening a pull request to submit your SIP, please use an abbreviated title in the filename, `sip-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SIP.-->

Deduct profit or rebate losses occurred by exchanges made immediately prior to a market shift.

## Abstract

<!--A short (~200 word) description of the technical issue being addressed.-->

In order to prevent front-running the standard latency of Ethereum block processing, ensure that all synth exchanges take into account any imminent changes to market prices. We can do this by settling the owed funds in successive exchanges of that target synth, as long as the exchange happens after a waiting period of _N_ minutes (configurable by SCCP).

## Motivation

<!--The motivation is critical for SIPs that want to change Synthetix. It should clearly explain why the existing protocol specification is inadequate to address the problem that the SIP solves. SIP submissions without sufficient motivation may be rejected outright.-->

In effect, users who `exchange` in Synthetix are actually converting debt from one form to another at the current market price on-chain. If a user trades to take advantage of latency between prices detectable in the off-chain market (the SPOT rate) and the on-chain one, then they make profit at the expense of the entire SNX stakers (as each staker hold a debt position - a percentage of the entire debt pool.)

[SIP-12](./sip-12.md) was implemented as a mechanism to slow down any front-running, adding latency to their exchanges. However, while it prevents true front-running (anyone watching the Ethereum mempool for oracle updates and front-running the actual market prices), it doesn't help much with oracle latency when bandwidth is high. Consider that oracles can't constantly push prices, at the very least they need to wait for any previous prices to be committed on-chain, and it would be incredibly expensive (and arguably a waste of resources) to try to get an oracle update in each and every block. If Ethereum bandwidth is high (and thus gas prices are low), user exchanges can still get in quite quickly and the max gas limit doesn't help much. On top of that, the max gas limit can inhibit legitimate users who accidentally hit it when it adjusts down during regular adjustments.

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
