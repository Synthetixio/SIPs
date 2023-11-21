---
stp: 8
title: SNX incentives for integrators
status: Draft
author: Cavalier (@cavalier_eth), Kain Warwick (@kaiynne)
implementation-date: 
discussions-to: TC Discord Channel
created: 2023-10-12
---

## Simple Summary
<!--You can leave these HTML comments in your merged STP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new STPs. Note that  an STP number will be assigned by an editor. When opening a pull request to submit your STP, please use an abbreviated title in the filename, `stp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

Allocate up to 5m SNX from the Treasury to reward outstanding Synthetix integrators with escrowed SNX grants, increasing the role of long term partners in the protocol.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what _will_ be done if the STP is implemented, not _why_ it should be done or _how_ it will be done. If the STP proposes sending X tokens to Y each week, write, "we propose to send X tokens to Y each week".-->

This proposal introduces a structured incentive mechanism for Synthetix integrators through escrowed SNX grants. A total of up to 5 million SNX from the treasury will be earmarked for this program. This approach is designed to reward high-performing integrators, promoting long-term collaboration and enhancing the protocol's growth, without expanding the SNX circulating supply.


## Motivation

<!--This is the problem statement. This is the *why* of the STP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the STP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the STP will address the issue!-->

Robust and lasting integrations are key to the success of the Synthetix ecosystem. Building integrations is a commitment, and the absence of a well-defined incentive structure could impede the number and quality of integrators. Establishing a structured incentive mechanism is essential to cultivating the right calibre of lasting integrator partnerships.

## Specification

<!--The specification should describe the syntax and semantics of any new feature, there are five sections
1. Overview
2. Rationale
3. Financial Specification
4. Configurable Values
-->

### Overview

<!--This is a high level overview of *how* the STP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->
Award escrowed SNX grants to high-performing partners based on sustained volume targets. The targets should be designed to bring significant value to the platform, as well as fees to LPs.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose this use of funds – what were the considerations. The rationale fleshes out the motivation and reasoning behind decisions that were made. It should describe any alternate ideas that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

Establishing a direct financial incentive for integrators aligns their success with the broader Synthetix ecosystem. Sharing governance privileges and fee revenue ensures that significant fee contributors are duly rewarded, fostering a mutually beneficial relationship and protocol growth.

### Financial Specification

<!--The financial specification should outline the the tokens, amounts, destinations, and schedule of funds to be moved. If appropriate, any technical considerations should also be included here – that is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->

Beginning July 2024, partners achieving specified average daily volumes will be granted the following escrowed SNX grants:

| Tier   | Average Daily Volume | Months | Protocol Revenue | TC Revenue* | Marginal TC Revenue | SNX Grant | Marginal SNX Cost to TC**|
|--------|----------------------|--------|---------------|-------------|---------------------|-----------|-------------------------|
| Bronze | $250,000,000         | 3      | $9,000,000    | $1,530,000  | $1,530,000          | 1,000,000 | $1.5                    |
| Silver | $500,000,000         | 6      | $36,000,000   | $6,120,000  | $4,590,000          | 1,000,000 | $4.6                    |
| Gold   | $750,000,000         | 9      | $81,000,000   | $13,770,000 | $9,180,000          | 1,000,000 | $9.2                    |


*Fees to TC are based on current 4bps average fees, with the TC estaimted 17% of the debt pool, and fees.
**Marginal SNX price at grant is an estimate using cumulative fees earned by the Treasury Council for any prior tiers

Volume from lower tiers counts towards higher tiers, and each tier can only be achieved once. The grants will be escrowed for 24 months, with a 12-month cliff, followed by a 12-month linear monthly unlock.


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
