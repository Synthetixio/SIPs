---
sip: 2014
title: Adding PEPE, SUI, and BLUR to Synthetix Perps V2
network: Optimism
status: Draft
type: Governance
author: Westie (@WestieCapital)
implementor: TBD
release: TBD
implementation-date: TBD
created: 2023-05-05
---

## Simple Summary

Create Synthetix Perps V2 markets for PEPE, SUI, and BLUR

## Abstract

This is a proposal to offer PEPE, SUI, and BLUR perps markets under Perps V2.

## Motivation

This proposal is a step in ensuring that traders continue to have access to a large number of markets on Perps V2. Many community members, partners, and so on have requested to increase the number of supported markets. These three assets are the next logical step in onboarding more assets for users to trade. 

These assets in particular are all extremely popular in today’s trading environment, but have minimal sources of perpetual futures trading onchain despite adequate spot liquidity. This presents a unique opportunity for Synthetix to capture volume from traders looking for a venue to trade these assets using perps. PEPE in particular has seen the third most trading volume behind BTC and ETH for the last week, volume numbers that could prove lucrative for Synthetix.

## Rationale

PEPE, SUI, and BLUR are some of the most traded spot markets across centralized and decentralized exchanges. Adding them will allow Synthetix Perps to onboard many more traders who will now be able to experience the quality of Synthetix’ perps product. In addition, the popularity of these assets will bring about a large amount of volume, benefitting SNX stakers.

## Specification

Data was obtained on May 5th via Coingecko from the following exchanges: Binance, OKX, Digifinex, KuCoin, Upbit, Coinbase Exchange, Huobi Global, Gate.io, BKEX, Uniswap and Bitfinex.

| Coin Name 	|  24 Hour Volume  |
|-----------	|----------------	|
| PEPE       	| $1,405,625,436	|
| SUI       	|  $532,323,272 	|
| BLUR   	|  $66,642,499	            | 

This 24 hour volume shows that there is ample volume traded, which points to an appetite for traders, subsequent data will be shown in SCCPs as reasoning for particular configurable values.

Upon approval, markets will be paused, and SCCPs must be created to unpause the market and set configurable variables after feeds have been properly tested. 

## Technical Specification

Implementation requires implementing off-chain oracle price feeds from Pyth Network and backup on-chain oracles from Chainlink.

Configurable values (read below) will be set in a subsequent SCCP for each market.

## Test Cases

n/a

## Configurable Values (Via SCCP)

All Perps V2 configurable values will be set in subsequent SCCPS for each market.

    "makerFee": "",
    "takerFee": "",
    "takerFeeDelayedOrder": "",
    "makerFeeDelayedOrder": "",
    "takerFeeOffchainDelayedOrder": "",
    "makerFeeOffchainDelayedOrder": "",
    "maxLeverage": "",
    "maxMarketValue": "",
    "maxFundingVelocity": "",
    "skewScale": "",

    "nextPriceConfirmWindow": "",
    "delayedOrderConfirmWindow": "",
    "minDelayTimeDelta": "",
    "maxDelayTimeDelta": "",
    "offchainDelayedOrderMinAge": "",
    "offchainDelayedOrderMaxAge": "",
    "offchainPriceDivergence": "",

Please list all values configurable via SCCP under this implementation.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
