---
stp: 9
title: Issue Treasury debt
status: Draft
author: Cavalier (@cavalier_eth)
implementation-date: 
discussions-to: TC Discord Channel
created: 2023-11-21
---
<!--You can leave these HTML comments in your merged STP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new STPs. Note that  an STP number will be assigned by an editor. When opening a pull request to submit your STP, please use an abbreviated title in the filename, `stp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed change intends to achieve. This should be non-technical and accessible to a casual community member.-->
This proposal seeks to empower the Treasury Council (TC) to issue debt using up to 4 million SNX tokens as collateral. The aim is to fund growth initiatives and buy back SNX tokens in a way that preserves the value of SNX and avoids negatively impacting its market price.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what _will_ be done if the STP is implemented, not _why_ it should be done or _how_ it will be done. If the STP proposes sending X tokens to Y each week, write, "we propose to send X tokens to Y each week".-->

This STP proposes sending up to 4 million SNX tokens as collateral to an appropriate debt issuance mechanism. The funds raised, in USD, will be allocated for funding protocol development and buying back SNX tokens. This mechanism will be structured to prevent mark-to-market liquidations and restrict the borrowing or short-selling of the SNX collateral.

## Motivation
<!--This is the problem statement. This is the *why* of the STP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the STP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the STP will address the issue!-->

The TC has sufficient stablecoin reserves to meet short and medium term needs, and currently earns more fee revenue than expenses. The TC could use further growth capital that does not compromise potential appreciation of SNX, or exert downward pressure on its price. 

While the TC has adequate stablecoin reserves and a positive fee revenue balance, there is are opportunities to deploy additional growth capital. This capital should not undermine the potential for SNX value appreciation or exert a downward pressure on its market price.

## Specification

<!--The specification should describe the syntax and semantics of any new feature, there are five sections
1. Overview
2. Rationale
3. Financial Specification
4. Configurable Values
-->

### Overview

<!--This is a high level overview of *how* the STP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->

The proposal allows the TC to use up to 4 million SNX tokens as collateral to issue debt. The loan-to-value (LTV) issuance ratio is capped at 50%, with variable interest rates determined by market conditions, but not exceeding 30%. The debt issuance mechanism should be transparent, open-source, and prevent third-party borrowing or short-selling of the SNX collateral. The debt can be tradeable in the open market, and should be issued on Optimism. Liquidation criteria should be based on the *current* total debt notional, set at 110% *of total debt notional at time of issuance*, rather than the market-to-market price of SNX. The TC is committed to repaying at least 4% of the issued debt every quarter, managed through a 3/4 multisig address.


### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose this use of funds – what were the considerations. The rationale fleshes out the motivation and reasoning behind decisions that were made. It should describe any alternate ideas that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

Issuing debt against SNX is a strategic approach to deploy growth funding while preserving the long-term potential of the SNX token. The TC’s financial stability, backed by existing reserves and revenue streams, supports the ability to manage and repay this debt. 

Alternative sources of growth capital like leveraging liquidity from protocols like Aave or seeking OTC liquidity. However, these options pose higher risks, including mark-to-market liquidations, limitations on using SNX, and challenges in securing consistent and efficient credit.

### Financial Specification

<!--The financial specification should outline the the tokens, amounts, destinations, and schedule of funds to be moved. If appropriate, any technical considerations should also be included here – that is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->

1. Transfer up to 4M SNX to a dedicated USD debt mechanism on optimism
2. Borrow up to 50% LTV at interest rates determined by market dynamics, capped at 30%
3. Pay back minimum 4% of issued notional debt per quarter
4. Manage debt, repayments and and additional borrowing as needed

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
