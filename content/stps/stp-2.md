---
stp: 2
title: Data Analytics Working Group
status: Draft
author: Carrot Anderson (@carrotanderson), Kain Warwick (@kaiynne)
implementation-date: TBA
discussions-to: TC Discord channel
created: 2023-06-07
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed change intends to achieve. This should be non-technical and accessible to a casual community member.-->

This STP proposes spending up to $250k to fund a data analytics working group. This group will be responsible for ensuring all important data about the Synthetix protocol is available, up to date, and displayed on a custom dashboard.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what _will_ be done if the STP is implemented, not _why_ it should be done or _how_ it will be done. If the STP proposes sending X tokens to Y each week, write, "we propose to send X tokens to Y each week".-->

This STP proposes spending $250k over three months to fund a dedicated working group tasked with handling Synthetix data analytics initiatives.

The responsibilities of the working group will be as follows:

1. **Data sources and APIs**
   Managing the subgraph and APIs that are upstream of any data analytics artefacts. This data layer must be available and up to date after each protocol upgrade. It will become the source of truth for any analytics artefacts (Synthetix live dashboards, third party platforms, and direct data consumption) in turn ensuring information about Synthetix corroborates across the internet.
2. **Official Synthetix artefacts**
   Creating and maintaining Synthetix branded data analytics artefacts (like live dashboards and key metrics displayed on [synthetix.io](https://synthetix.io/dashboard)) as has previously been done by CCs and community members.

3. **Third party analytics**
   It will be the responsibility of the working group to coordinate with any third-party analytics providers that currently report on Synthetix (e.g. Token Terminal), or that should report on Synthetix but do not (e.g. CoinGecko [derivatives exchanges](https://twitter.com/kaiynne/status/1653784645006155781?s=20)). The working group should ensure these third parties are provided any data or endpoints needed to display accurate information about Synthetix.

## Motivation

<!--This is the problem statement. This is the *why* of the STP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the STP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the STP will address the issue!-->

Taken from Kain's [blog post](https://mirror.xyz/kain.eth/EB9DQldVEb0F74-LmrVau6YbjEtr8dsj1qVn6muYuXw):

> "I propose is an analytics group, which will be responsible for ensuring that all data about the protocol is available and up to date. As well as ensuring we have live dashboards for all key metrics. Historically this has failed due to low prioritisation as well as technical complexity."

By the nature of building with upgradable contracts, any changes made to the Synthetix protocol mean subgraph and downstream analytics artefacts need to be updated. Low prioritisation has meant that emitted events haven't been designed specifically for data analytics. Without resources dedicated to managing these changes it is difficult to build reliable artefacts and consume information about Synthetix.

Additionally, there is currently no canonical source of truth. Different applications ([dune](https://dune.com/synthetix_community/synthetix-stats), [synthetix.io](https://synthetix.io/), [defilama](https://defillama.com/protocol/synthetix)) display different numbers for key metrics such as TVL.

## Specification

<!--The specification should describe the syntax and semantics of any new feature, there are five sections
1. Overview
2. Rationale
3. Technical Specification
4. Test Cases
5. Configurable Values
-->

### Overview

<!--This is a high level overview of *how* the STP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->

A working group will be allocated a $250k budget solely for the responsibilities detailed above.

- The first task would be to build a data layer (APIs, subgraph) that can be used for any data analytics projects.
- Once we have reliable up-to-date data, the working group can begin building artefacts on top of the data layer – for example, a Synthetix branded dashboard to display key metrics on synthetix.io.

An application process will be defined by the TC enabling interested teams and individuals to apply for the working group. The working group will need close access to the CCs and/or come from within the Synthetix community to have the requisite contextual understanding of these challenges and previous attempts at solving them.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose this use of funds – what were the considerations. The rationale fleshes out the motivation and reasoning behind decisions that were made. It should describe any alternate ideas that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

Data analytics has been challenging for Synthetix in the past, due to technical complexity and low prioritisation. Various dashboards have been built, however the upstream data itself has not been given sufficient attention.

- By the nature of upgradable contracts, re-indexing the subgraph to access historical data requires understanding of past state of the Synthetix contracts and how they have evolved – this is complex work for anyone who is not dedicated to the task full-time.
- When upgrades are designed, data analytics is often not the top consideration for emitting events. A dedicated working group can work with the CCs to ensure their perspective is considered in new releases.

### Financial Specification

<!--The financial specification should outline the the tokens, amounts, destinations, and schedule of funds to be moved. If appropriate, any technical considerations should also be included here – that is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->

- $250k will be transfered into a pool to be allocated to the working group over a three-month trial period.

- This budget has been established to ensure there is sufficient interest from potential working group members. Ideally the budget should be more than sufficient to cover any anticipated costs during this period.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
