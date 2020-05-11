---
sip: 58
title: Emit list of individual fee reclamations and rebates during exchange settlement
status: Proposed
author: Jackson Chan (@justinjmoses)
discussions-to: <https://discord.gg/ShGSzny>

created: 2020-05-11
---

<!--You can leave these HTML comments in your merged SIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SIPs. Note that an SIP number will be assigned by an editor. When opening a pull request to submit your SIP, please use an abbreviated title in the filename, `sip-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SIP.-->

Emit list of individual fee reclamations and rebates during exchange settlement for Dapps and Synthetix Exchange. Fee reclamation was introduced since [SIP-37](./sip-37.md) but did not emit a breakdown of each individual trade's fee reclamation / rebate amounts.

## Abstract

<!--A short (~200 word) description of the technical issue being addressed.-->

Upgrade the Exchanger `settle()` function to emit individual fee reclaimation / rebate amounts for each trade.

Add an internal function `_calculateSettlementsOwing` that will emit an event `ExchangeEntriesSettled` when `Exchanger.settle()` is invoked.

Emit a list for each exchange entry with details about the `amountShouldHaveReceived`, the corresponding `amountReceived`, `reclaimAmount`, `rebateAmount`, and `timestamp` of the entry that is settled in the transaction.

## Motivation

<!--The motivation is critical for SIPs that want to change Synthetix. It should clearly explain why the existing protocol specification is inadequate to address the problem that the SIP solves. SIP submissions without sufficient motivation may be rejected outright.-->

We want to display on Synthetix exchange the corresponding fee reclamation amounts (if any) for each individual exchange made when exchange settlement is invoked.

Currently invoking `settle()` will only emit an event, if any, with the total sum of any fee reclamation or rebate amounts.

## Specification

<!--The technical specification should describe the syntax and semantics of any new feature.-->

### Exchanger.settle() ###

Add an internal function `_settlementsOwing` that will emit an event `ExchangeEntriesSettled` when `Exchanger.settle()` is invoked.

`Exchanger.settle()` will use `_settlementsOwing` to calculate the fee reclamation amounts.

**Event**

Emit an event `ExchangeEntriesSettled` when `Exchanger.settle()` is invoked within `_settlementsOwing`.

```solidity
event ExchangeEntriesSettled(address indexed from, bytes32 currencyKey, uint numEntries, uint[] amountReceived, uint[] amountShouldHaveReceived, uint[] reclaim, uint[] rebate, uint[] timestamp);
```

## Rationale

<!--The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

It is important that traders can see on each trade the fee reclamation and rebates that occur after they make another exchange that invokes `settle()`, for calculating trading profits and loses based on the amount and effective price they recieved on each individual trade.

## Test Cases

<!--Test cases for an implementation are mandatory for SIPs but can be included with the implementation..-->

- When `Exchanger.settle()` is invoked, the `_settlementsOwing` function is invoked and returns (uint reclaimAmount, uint rebateAmount, uint numEntries).
- When `Exchanger.settle()` is invoked, it emits `ExchangeEntriesSettled` event with details about each exchange entry settled.

## Implementation

<!--The implementations must be completed before any SIP is given status "Implemented", but it need not be completed before the SIP is "Approved". While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.-->

## Configurable Values (Via SCCP)

<!--Please list all values configurable via SCCP under this implementation.-->

(None)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
