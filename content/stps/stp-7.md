---
stp: 7
title: Create and fund the Innovation Pool
status: Draft
author: Cavalier (@cavalier_eth)
implementation-date: 
discussions-to: TC Discord Channel
created: 2023-10-03
---

## Simple Summary
<!--You can leave these HTML comments in your merged STP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new STPs. Note that an STP number will be assigned by an editor. When opening a pull request to submit your STP, please use an abbreviated title in the filename, `stp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

Establish the Innovation Pool to stimulate developer activity on the v3 platform, and fund it with 100,000 SNX from the Treasury. 


## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what _will_ be done if the STP is implemented, not _why_ it should be done or _how_ it will be done. If the STP proposes sending X tokens to Y each week, write, "we propose to send X tokens to Y each week".-->

Create the Innovation Pool, owned by the TC multisig, and fund it with 100,000 SNX from the Treasury. Notify the community that prospective protocols can request collateralization for their Market via the STP process.

## Motivation

<!--This is the problem statement. This is the *why* of the STP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the STP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the STP will address the issue!-->

v3 is ready for new Market proposals, but does not have appropriate liquidity. A dedicated Pool for newer, higher risk or delta exposed Markets is required to encourage development activity on v3.


## Specification

<!--The specification should describe the syntax and semantics of any new feature, there are five sections
1. Overview
2. Rationale
3. Financial Specification
4. Configurable Values
-->

### Overview

<!--This is a high level overview of *how* the STP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->
Once implemented, the Innovation Pool can offer liquidity to newer Markets at the discretion of the TC. The existence of liquidity intended for newer Markets lowers the barrier to launching, and encourages developer activity.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose this use of funds – what were the considerations. The rationale fleshes out the motivation and reasoning behind decisions that were made. It should describe any alternate ideas that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

The Spartan Council Pool is the default Pool for new LPs, and expected to take a conservative approach to backing Markets. The SC Pool is likely to back Markets which are established and delta neutral by design, and so is not suited to new or higher volatility Markets. The introduction of this dedicated Innovation Pool would enable LPs to allocate to novel or more volatile Markets, and participate in the wider ecosystem of new Markets.

Designed to support experimental markets, the Innovation Pool will function independently from the Spartan Pool. As the pool owner, the Treasury Council will have the authority to delegate liquidity from the Innovation Pool to any Market. Market developers can request liquidity for their Market from the Innovation Pool with an STP.

### Financial Specification

<!--The financial specification should outline the the tokens, amounts, destinations, and schedule of funds to be moved. If appropriate, any technical considerations should also be included here – that is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->

Allocate 100,000 SNX to the Innovation Pool. At $2 SNX, and 200% minimum liquidity ratio, this pool could provide $100,000 in liquidity - if the TC does not mint the permitted sUSD. If TC does mint sUSD @ 500%, the availalbe liquidity would be $60,000.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
