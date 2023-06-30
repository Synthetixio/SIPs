---
stp: 6
title: Partial Repayment of Fees for CryptoMoonKing
status: Implemented
author: Carrot Anderson (@carrotanderson)
implementation-date: 2023-07-29
discussions-to: TC Discord Channel
created: 2023-06-30
---

## Simple Summary

"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposal intends to achieve. This should be accessible to a casual community member.

The TC proposes to pay a 25% reimbursement of the 76,582.44 sUSD in trading fees incurred by CryptoMoonKing after the trader called the sunsetted PerpsV2 `ModifyPosition` function several times on the 10th of June, 2023.


## Abstract
On the 10th of June, 2023, Kwenta trader CryptoMoonKing paid 76,582.44 sUSD in trading fees by directly calling the sunsetted ModifyPositon function instead of the SubmitOffChainDelayedOrder function that is now used by PerpsV2 integrators.

Synthetix is [currently paying](https://sips.synthetix.io/sips/sip-2003/) 300,000 OP tokens per week to PerpsV2 traders based on trading fees spent. CryptoMoonKing claimed he had mistakenly called the wrong function, and asked for his trades to be included in the calculations.

The Treasury Council investigated his story and came to the decision to reimburse 25% of the fees spent (denominated in SNX) and update the language in the blog post outlining the trading program to explicitly include OffChainDelayedOrders submitted through integrators only.

## Motivation
Upon investigating the story, corrorborating with the Kwenta team, and CryptoMoonKing's Kwenta and Binance transactions, no evidence of an attempt to game the system was found.

The decision was therefore to repay a portion of the fees, denominated in SNX, resulting in an immediate net loss to the trader, while also updating the language in the [blog post](https://blog.synthetix.io/synthetix-perps-op-incentives/) to make the rules more explict.

## Specification

### Overview

* The TC had to be conscious to not make a decision that could give others an incentive to game the system by the same means.

* sUSD fees spent totalling $76,582.4398775562
* x0.25 = $19,145.60997
* = 9205 SNX at $2.08

### Rationale
The TC initiated an investigation into the incident to gather the timeline of facts.

* Some Kwenta traders were unable submit orders at around 6:00 AM UTC on the 10th of June (as evident in the [discord](https://discord.com/channels/852273007370960937/1077732440472297512/1116947574398652426)).
* CryptoMoonKing was submitting trades prior to this via the Kwenta SDK, making levered cross-venue basis arbitrage trades with Binance as the other venue.
* The market fell sharply and some of CryptoMoonKing's positions moved close to liquidation. After experiencing errors submitting orders via the SDK and the frontend, he turned to the contracts, and [called ModifyPosition](https://optimistic.etherscan.io/tx/0x6ed0edabedc3c6dbaa96eaa333c6961e2c42343ccb540d43330e4dc92ce503a6) at 6:15 AM UTC.
* CryptoMoonKing called ModifyPosition four more times over the course of an hour.
* At 9:04 AM UTC, CryptoMoonKing reaches out to the Kwenta team asking why he had incured $75k in fees.

These facts were corroborated across interviews with CryptoMoonKing and the Kwenta team, and cross-checked with his on-chain transactions and Binance fills. 

After careful examination, the TC found no solid evidence of foul play and concluded that the fees were spent due to a mistake, rather than an attempt to exploit the OP rewards. It was decided that a repayment of 25% of the notional amount lost would be appropriate.

### Financial Specification
* 29th of June, 7:37:59 AM UTC: 9,205 SNX [sent](https://etherscan.io/tx/0x0f6594cc6cf16c664d41cfad42aa4688d9dcf4b7bc110f00f6af66c787a7f276) from the TC to CryptoMoonKing's [EOA](https://etherscan.io/address/0x4dd5d939486b23Aabcfd08A063811e42F7c2B6A9).

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
