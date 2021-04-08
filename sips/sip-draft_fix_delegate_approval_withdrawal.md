---
sip: TBD
title: Revoke the "ALL" approval, if set, when withdrawing other approvals.
status: WIP
author: Mitchel Kelonye (@vbstreetz)
discussions-to: https://research.synthetix.io/t/sip-toggle-off-the-all-approval-if-set-when-withdrawing-other-delegate-approvals/373

created: 2021-03-29
requires (*optional): N/A
---

## Simple Summary

Revoke the "ALL" approval, if set, when withdrawing other delegate approvals.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the SIP is implemented, not *why* it should be done or *how* it will be done. If the SIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

Toggle off the "ALL" approval, if set, when withdrawing other delegate approvals. This will reduce the number of transactions required to downgrade from the "ALL" powers state to a more fine-grained configuration.

## Motivation

<!--This is the problem statement. This is the *why* of the SIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the SIP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the SIP will address the issue!-->

Currently, the `DelegateApprovals` contract withdrawal method calls are no-op, if the "ALL" approval is already set. This is because the "ALL" approval type overrides the other approval types. This SIP proposes that that "ALL" approval, if set, should also be withdrawn when withdrawing other approvals, to correctly effect the change.

## Specification

<!--The specification should describe the syntax and semantics of any new feature, there are five sections
1. Overview
2. Rationale
3. Technical Specification
4. Test Cases
5. Configurable Values
-->

TODO

### Overview

<!--This is a high level overview of *how* the SIP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->

Add logic to the `DelegateApprovals` contract withdrawal methods, to revoke the "ALL" approval if set.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

TODO

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->

Implemented at https://github.com/Synthetixio/staking/pull/385

### Test Cases

<!--Test cases for an implementation are mandatory for SIPs but can be included with the implementation..-->

TODO

### Configurable Values (Via SCCP)

<!--Please list all values configurable via SCCP under this implementation.-->

TODO

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
