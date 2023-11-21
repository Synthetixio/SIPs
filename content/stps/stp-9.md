---
stp: 9
title: Borrow against SNX
status: Draft
author: Cavalier (@cavalier_eth)
implementation-date: 
discussions-to: TC Discord Channel
created: 2023-11-21
---
<!--You can leave these HTML comments in your merged STP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new STPs. Note that  an STP number will be assigned by an editor. When opening a pull request to submit your STP, please use an abbreviated title in the filename, `stp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed change intends to achieve. This should be non-technical and accessible to a casual community member.-->
This proposal authorizes the Treasury Council (TC) to borrow sUSD against up to 4m SNX of collateral. The primary objective is to enable funding for initiatives and token buybacks, while preserving the potential upside of SNX, and avoiding downward price pressure.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what _will_ be done if the STP is implemented, not _why_ it should be done or _how_ it will be done. If the STP proposes sending X tokens to Y each week, write, "we propose to send X tokens to Y each week".-->

Use up to 4m SNX as collateral to borrow a USD stablecoin, for funding protocol initiatives and conducting SNX token buybacks. Borrow with a mechanism that avoids mark-to-market liquidations and prevents the borrowing (short-selling) of the SNX collateral.


## Motivation

<!--This is the problem statement. This is the *why* of the STP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the STP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the STP will address the issue!-->

The TC has sufficient stablecoin reserves to meet short and medium term needs, and currently earns more fee revenue than expenses. The TC could use further growth capital that does not compromise potential appreciation of SNX, or exert downward pressure on its price. 

## Specification

<!--The specification should describe the syntax and semantics of any new feature, there are five sections
1. Overview
2. Rationale
3. Financial Specification
4. Configurable Values
-->

### Overview

<!--This is a high level overview of *how* the STP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->
This proposal grants the TC the capacity to use up to 4M SNX as collateral to borrow up to 50% loan-to-value (LTV) ratio on Optimism. The borrowed amount will be subject to variable interest rates set by the market, capped at 30%.
The debt mechanism must be open source, and no third-party entities should be able to borrow or short-sell the SNX held as collateral. The debt can be tradeable on the open market, and should not be liquidated based on mark-to-market SNX/USD price - instead on the total debt notional accrued instead, set to 110%. 
TC will pay back 4% of issued notional debt once per quarter, and all activities will be overseen via a 3/4 multisig address. 


### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose this use of funds – what were the considerations. The rationale fleshes out the motivation and reasoning behind decisions that were made. It should describe any alternate ideas that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

Borrowing against SNX bridges the gap between short term initiatives and potential future appreciation of the SNX token. The TC is well positioned to repay debt, given existing stablecoin reserves and ongoing revenue. 
Alternatives to borrowing considered include:
- Leveraging liquidity from protocols like Aave isn't feasible due to the intertwined nature of collateral risks and restrictions on SNX deposits. There's excessive risk for the TC given mark-to-market liquidations and the potential to short SNX deposits.
- Seeking liquidity via OTC deals is not consistently viable due to the challenges of sourcing liquidity on an as-needed basis, the inefficiency in accessing credit promptly, and loss of potential upside.

### Financial Specification

<!--The financial specification should outline the the tokens, amounts, destinations, and schedule of funds to be moved. If appropriate, any technical considerations should also be included here – that is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->

1. Transfer up to 4M SNX to a dedicated USD debt pool on optimism
2. Borrow up to 50% LTV at interest rates determined by market dynamics, capped at 30%
3. Pay back minimum 4% of issued notional debt per quarter
4. Manage debt, repayments and and additional borrowing as needed


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
