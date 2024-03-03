---
stp: 10
title: VIP perp trading fees
status: Draft
author: Cavalier (@cavalier_eth)
implementation-date: 
discussions-to: TC Discord Channel
created: 2023-11-21
---
<!--You can leave these HTML comments in your merged STP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new STPs. Note that  an STP number will be assigned by an editor. When opening a pull request to submit your STP, please use an abbreviated title in the filename, `stp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed change intends to achieve. This should be non-technical and accessible to a casual community member.-->
This proposal authorizes the Treasury Council (TC) to allocate up to 500,000 SNX for discretionary rebates to perp traders who exceed $300m monthly notional trade volume. The goal of the program is to reduce effective Maker fees by 1.5bps to 0.5bps, and Taker fees by 4bps to 2bps for qualifying traders.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what _will_ be done if the STP is implemented, not _why_ it should be done or _how_ it will be done. If the STP proposes sending X tokens to Y each week, write, "we propose to send X tokens to Y each week".-->

Allocate up to 500k SNX to rebate Maker fees by 1.5ps and Taker by 4bps for, approved traders with over $300m notional volume per month on eligible markets.


## Motivation

<!--This is the problem statement. This is the *why* of the STP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the STP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the STP will address the issue!-->

In order to maintain neutral skew with growing volume and open interest caps, large volume traders are needed. Large volume perp traders are typically programmatic and require incentives to justify the technical investment to trade Synthetix perps.

## Specification

<!--The specification should describe the syntax and semantics of any new feature, there are five sections
1. Overview
2. Rationale
3. Financial Specification
4. Configurable Values
-->

### Overview

<!--This is a high level overview of *how* the STP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->
This proposal seeks to allocate up to 500k SNX for fee rebates for qualifying traders. Traders expecting to trade more than $300m notional per month can apply to the TC. Upon reaching $300m notional trading volume per month, the TC will at its discretion rebate 1.5bps of Maker fees and 4bps of Taker fees in SNX to the trading address. Front ends will not be eligible to claim the rebate, but could do so on behalf of their qualifying users. Eligible markets are BTC, ETH, XRP, USDT, SOL, BNB, DOGE, ETHBTC.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose this use of funds – what were the considerations. The rationale fleshes out the motivation and reasoning behind decisions that were made. It should describe any alternate ideas that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

Reducing the effective fees will attract large volume traders and improve the return on investment to integrate with Synthetix Perps. Large traders increase volume and fees for the protocol, and are often interested in arbitrage which reduces skew. Improved skew balance reduces delta exposure and risk to LPs, and could enable larger OI caps and lower overall fees.
- Fees are currently 2bp Maker and 6bps Taker on popular markets like ETH and BTC
- Rebating fees down to 0.5bps on $100m Maker volume will cost 5,000 SNX (@$3) 
- Rebating fees down to 2bps on $100m Taker volume will cost 13,333 SNX (@$3) 
- Split evenly between Maker and Taker volume, 500k SNX will rebate $5.45b in notional volume to 0.5/2bps fees - approximately the total volume traded over the last month

### Financial Specification

<!--The financial specification should outline the the tokens, amounts, destinations, and schedule of funds to be moved. If appropriate, any technical considerations should also be included here – that is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->

1. Allocate up to 500k SNX for fee rebates for approved traders on eligible markets
2. Each month use the fee/volume tool to calculate trading volumes
3. Begin the first month a wallet trades more than $300m notional and continue until the 500k allocation is consumed
4. Use SNX 7 day TWAP price at UTC midnight of final night to rebate Maker/Taker fees 0.5/2bps for approved wallets that traded more than $300m in the month


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
