---
stp: 16
title: Partial Repayment of Fees for CryptoMoonKing
status: Implemented
author: Cavalier (@cavalier_eth)
implementation-date: TBA
discussions-to: TC Discord Channel
created: 2024-02-28
---

## Simple Summary

Pay a 5,000 SNX as a good faith compensation towards 9,475 SNX that appears to have been lost to a scam.


## Abstract

One of the founders of Zapper is related to the victim, and has offered to 

## Motivation
In circumstances where we have a reasonable degree of confidence that someone has ben scammed, a good faith

The transaction where it took place is https://optimistic.etherscan.io/tx/0x584830377ae2fddd66005c61469681bf881d4adcaef2e95bff952d33372f8561

## Specification

### Overview



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



## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
