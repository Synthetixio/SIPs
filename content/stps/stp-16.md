---
stp: 16
title: Research grant for delta neutral traders
status: Implemented
author: ml_sudo (@michlai)
implementation-date: 
discussions-to: TC Discord Channel
created: 2024-03-13
---
<!--You can leave these HTML comments in your merged STP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new STPs. Note that  an STP number will be assigned by an editor. When opening a pull request to submit your STP, please use an abbreviated title in the filename, `stp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed change intends to achieve. This should be non-technical and accessible to a casual community member.-->
This proposal authorizes the Treasury Council (TC) to allocate up to USDC 100,000 to delta neutral traders who assist Synthetix with product research on the Synthetix v3 system.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what _will_ be done if the STP is implemented, not _why_ it should be done or _how_ it will be done. If the STP proposes sending X tokens to Y each week, write, "we propose to send X tokens to Y each week".-->

Delta neutral traders will trial an integration with Synthetix's v3 system and generate a written report. The report is intended to help Synthetix refine its technical architecture and economic design. 

Each trader that is accepted by the Synthetix TC for this program will stand to earn up to USDC 20,000 each as incentive.

## Motivation

<!--This is the problem statement. This is the *why* of the STP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the STP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the STP will address the issue!-->

Synthetix has ambitions that its v3 system will enable it to scale to large institutional traders, especially delta neutral ones. However, certain design features in the v2 and v3 systems constrain this goal. 

To date, it has not been made sufficiently clear what these growth contraints are. This exercise is an attempt to disambiguate those constraints. 

## Specification

<!--The specification should describe the syntax and semantics of any new feature, there are five sections
1. Overview
2. Rationale
3. Financial Specification
4. Configurable Values
-->

### Overview

<!--This is a high level overview of *how* the STP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->

Upon attempting to integrate with the Synthetix v3 system, each application will submit a report with details including:

1) Expectations on what the trading firm can trade realistically, on a 3, 6 and 12 month time frame, with supporting rational

2) Data analytics, trade impact measurement & microstructure analysis

3) Barriers to trading (technical, economic or otherwise)

4) Short term and long term wishlist for integration support, including specifics of what the trading firm needs from our SDK 

Note: Perps v3 is in limited Beta on Base and its contracts are currently accessible through (a) direct onchain access, (b) an SDK or (c) the public Kwenta Beta. The applicant can trade on (integrate with) any of these interfaces.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose this use of funds – what were the considerations. The rationale fleshes out the motivation and reasoning behind decisions that were made. It should describe any alternate ideas that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

See Motivation section.

### Financial Specification

<!--The financial specification should outline the the tokens, amounts, destinations, and schedule of funds to be moved. If appropriate, any technical considerations should also be included here – that is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->

The research grant is expected to take no longer than 1 month to complete, subject to mutual agreement to extend if more time is required.

The full amount will be paid upon satisfactory delivery of the written report.


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
