---
stp: 12
title: Designated multisig for fiat expenses
status: Draft
author: Cavalier (@cavalier_eth)
implementation-date: 
discussions-to: TC Discord Channel
created: 2024-01-16
---

## Simple Summary
<!--You can leave these HTML comments in your merged STP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new STPs. Note that  an STP number will be assigned by an editor. When opening a pull request to submit your STP, please use an abbreviated title in the filename, `stp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

This STP allocates 100,000 USDC of budgeted 2024 funding to a dedicated multisig, that will be used to pay operational costs in fiat.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what _will_ be done if the STP is implemented, not _why_ it should be done or _how_ it will be done. If the STP proposes sending X tokens to Y each week, write, "we propose to send X tokens to Y each week".-->

Allocate a grant of up to 100,000 USDC per year to payment processor Skyline Digital AG, for operational costs. Use a 2/3 multisig with the signers being the CCC multisig, a Synthetix Operations Manager, and Skyline Digital AG.

## Motivation

<!--This is the problem statement. This is the *why* of the STP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the STP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the STP will address the issue!-->

Some operational costs require fiat payment.


## Specification

<!--The specification should describe the syntax and semantics of any new feature, there are five sections
1. Overview
2. Rationale
3. Financial Specification
4. Configurable Values
-->

### Overview

<!--This is a high level overview of *how* the STP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->

### Rationale
<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose this use of funds – what were the considerations. The rationale fleshes out the motivation and reasoning behind decisions that were made. It should describe any alternate ideas that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->
A 2/3 multisig enables a payment processor entity, and the CCC or Synthetix Operations Manager to execute transactions to pay for fiat expenses.


### Financial Specification
<!--The financial specification should outline the the tokens, amounts, destinations, and schedule of funds to be moved. If appropriate, any technical considerations should also be included here – that is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->

Once the CCC safe, Skyline AG and Synthetix Operations Manager are added to a dedicated 2/3 multisig at 0xbE6C8EE3cAd2E6DB7A423EA41dF8B0DA166F644F, transfer grant funds as needed.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
