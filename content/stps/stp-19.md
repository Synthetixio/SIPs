---
stp: 19
title: Perp trading incentives on Base
status: Approved
author: Cavalier (@cavalier_eth)
implementation-date: 
discussions-to: TC Discord Channel
created: 2024-03-25
---
<!--You can leave these HTML comments in your merged STP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new STPs. Note that  an STP number will be assigned by an editor. When opening a pull request to submit your STP, please use an abbreviated title in the filename, `stp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed change intends to achieve. This should be non-technical and accessible to a casual community member.-->
This proposal allocates up to 500,000 SNX from the Treasury for perp trading incentives on Base. At the current SNX price, this proposal could rebate the trading fees of approximately $3.75b of volume.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what _will_ be done if the STP is implemented, not _why_ it should be done or _how_ it will be done. If the STP proposes sending X tokens to Y each week, write, "we propose to send X tokens to Y each week".-->

Allocate up to 500k SNX from the Treasury to rebate trading fees on eligible perp markets on Base. Trading fees will be retroactively rebated each week directly to the trading wallet, on eligible markets that include BTC and ETH.

## Motivation

<!--This is the problem statement. This is the *why* of the STP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the STP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the STP will address the issue!-->

Synthetx Perps v3 have been sufficiently proven in mainnet alpha, and are ready to be scaled up. The Treasury Council has sufficent SNX to be used for high ROI initiatives.

## Specification

<!--The specification should describe the syntax and semantics of any new feature, there are five sections
1. Overview
2. Rationale
3. Financial Specification
4. Configurable Values
-->

### Overview

<!--This is a high level overview of *how* the STP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->
This proposal allocates up to 500k SNX for fee rebates on eligible markets. The TC will at its discretion rebate trading fees in SNX to the trading address. Front ends will not be eligible to claim the fee rebate, but could do so on behalf of their qualifying traders. Eligible markets include BTC, ETH and others added at the TCs discretion.
### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose this use of funds – what were the considerations. The rationale fleshes out the motivation and reasoning behind decisions that were made. It should describe any alternate ideas that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

Reducing the effective fees attracts traders to try Synthetix perps on Base:
- Perp fees are currently 2bp Maker and 6bps Taker on popular markets like ETH and BTC
- Assuming an average of 4 bps fees per trade, $100m of trading volume can be fully rebated with 13.3k SNX @$3 
- 500k SNX @ $3 will rebate the fees on approximately $3.75b in trading volume, aproximately double the monthly volume currently traded on Optimism Perps v2

### Financial Specification

<!--The financial specification should outline the the tokens, amounts, destinations, and schedule of funds to be moved. If appropriate, any technical considerations should also be included here – that is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->

In total, this STP allows for up to 500k SNX for fee rebates. The maximum fee rebate to any trader will be the total cost of fees paid, using the SNX 7-day TWAP price at UTC midnight of final night of each rebate period.

The Treasury Council retains the right to unilaterally suspend or withholw fee rebates to traders determined to be putting at risk the integrity or stability of the Synthetix protocol.


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
