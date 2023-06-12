---
stp: 3
title: Synthetix Ecosystem Fund
status: Draft
author: Kain (@kaiynne), SpartanGlory (@spartanglory)
implementation-date: TBC
discussions-to: TC Discord Channel
created: 2023-06-02
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed change intends to achieve. This should be non-technical and accessible to a casual community member.-->

This STP proposes a pool of funds allocated to funding ecosystem projects as well as buying liquid crypto tokens.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what _will_ be done if the STP is implemented, not _why_ it should be done or _how_ it will be done. If the STP proposes sending X tokens to Y each week, write, "we propose to send X tokens to Y each week".-->

The Treasury Council will establish a new discretionary multisig that is mandated to invest in both liquid crypto tokens as well as early stage projects within the Ethereum ecosystem, with a specific focus on the Synthetix ecosystem on Optimism. This fund will initially be seeded with 1m SNX and 1m sUSD.

## Motivation

<!--This is the problem statement. This is the *why* of the STP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the STP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the STP will address the issue!-->

The Synthetix treasury does not currently have a mechanism to invest directly in its own ecosystem. While there have been a handful of investments made by the DAO into projects like Kwenta, this has been done on an ad hoc basis, and the DAO is not percieved to be actively investing in the ecosystem. Current market conditions present an opportunity to diversify the treasury and create a diversified portfolio of both liquid and early stage investments to remove the concentrated risk posed by so much of the treasury being held in SNX.

## Specification

<!--The specification should describe the syntax and semantics of any new feature, there are five sections
1. Overview
2. Rationale
3. Financial Specification
-->

### Overview

<!--This is a high level overview of *how* the STP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->

A new multisig will be deployed on Ethereum, SNX and sUSD will be transferred into this multisig for the sole purpose of investing into the Ethereum ecosystem. The TC will meet on a monthy basis to review the current state of this fund and make decisions about any new opportunities.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose this use of funds – what were the considerations. The rationale fleshes out the motivation and reasoning behind decisions that were made. It should describe any alternate ideas that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

Historically the DAO has been extremely conservative with respect to allocating funds towards anything other the protocol expenditure. This defensive stance has ensured that the DAO has been sufficiently well capitalised to cover the continued operational expenditure of the DAO. However, other than the SNX token the DAO has very little expsoure to the success of the Synthetix ecosystem or the wider Ethereum ecosystem. It is an opportune time to correct this by begining to allocate capital towards liquid tokens and early stage opportunities to capture upside from the continued growth of the ecosystem. Given the depressed prices of many assets in the ecosystem a policy of cost averaging into liquid crypto will allow the Treasury to acquire assets at low valuations over time in the expectation that the market will eventually recover and many of these assets will experience significant price appreciation.

### Financial Specification

<!--The financial specification should outline the the tokens, amounts, destinations, and schedule of funds to be moved. If appropriate, any technical considerations should also be included here – that is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->

Assets to be transferred to a new 3/4 multisig controlled by the current Treasury Council:
1,000,000 SNX 
1,000,000 sUSD


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
