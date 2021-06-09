---
sip: 147
title: sMATIC
status: Draft
author: MiLLiE
discussions-to: https://research.synthetix.io
created: 09 June 2021

---

<!--You can leave these HTML comments in your merged SIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SIPs. Note that an SIP number will be assigned by an editor. When opening a pull request to submit your SIP, please use an abbreviated title in the filename, `sip-draft_title_abbrev.md`. The title should be 44 characters or less.-->


## Simple Summary
  
<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->
This proposal aims to introduce an sMATIC synth. MATIC is the native token of Polygon, an ethereum side chain which uses a combination of a plasma bridge/PoS-bridge to enable transfers between Ethereum and Polygon. Polygon is an EVM compatible sidechain which can support most dapps built on ETH. The Market cap of MATIC is $9B as of this writing with a daily trade volume of over $2B across exchanges such as Binance, Coinbase, OKEx, Huobi and Kraken and others.
Chainlink already supports a price feed for MATIC, thus the deployment of sMATIC be completed in the same way as any traditional crypto synth.
  
## Abstract
<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the SIP is implemented, not *why* it should be done or *how* it will be done. If the SIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->
Deploy sMATIC for trading on Kwenta with 100 bps fee, using the MATIC chainlink price feed.

## Motivation
<!--This is the problem statement. This is the *why* of the SIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the SIP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the SIP will address the issue!-->
The Polygon sidechain has gained significant popularity in recent months thanks to extremely low transaction fees, liquidity mining incentives and adoption among well known defi brands. As a result of increased adoption the MATIC token has seen tremendous growth in both price and volume on major exchanges putting it in the top 20 crypto assets by market cap and top 15 by volume (as per CoinGecko). The Polygon team has already collaborated with Curve.fi in liquidity mining and coupled with high trade volumes, $MATIC may be a great candidate for cross asset swaps via virtual synths, if Synthetix were to offer an sMATIC. 

## Specification
<!--The specification should describe the syntax and semantics of any new feature, there are five sections
1. Overview
2. Rationale
3. Technical Specification
4. Test Cases
5. Configurable Values
-->

### Overview
<!--This is a high level overview of *how* the SIP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->
The deployment of an sMATIC using its chainlink price feed would be in the same form any traditional synth would be deployed as well as with a 100 bps trading fee.

### Rationale
<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->
The Matic token does a lot of volume on CEXs' such as CoinBase and Binance (over $2B in average daily volume over the past 30 days), putting it at a relatively low risk of manipulation. ref: https://www.coingecko.com/en/coins/polygon#markets  
  
Chainlink already supports a MATIC oracle: https://data.chain.link/ethereum/mainnet/crypto-usd/matic-usd

It should be noted that in light of its market cap and very large trade volumes, the MATIC token is highly volatile and some times has significant daily price swings, and the Polygon sidechain, as with all sidechains, comes with its own security implementations. With those points in mind, all crypto assets saw extreme volatility over the past months and MATIC was subject to the same conditions. Naturally all sidechains/bridges carry some risk in crypto and yet it did not impede the deployment of sRUNE (the native token for Thorchain) for trading on kwenta. 

SNX stakers would stand to benefit from the introduction of synthetic MATIC and its daily trade volumes. The risk of manipulation in particular is minimal, and any existential risks related to the sidechain are not isolated to Polygon but are a part of crypto and defi in its entirety. 
  
### Technical Specification
<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->
Reference previous newly deployed synths.

### Test Cases
<!--Test cases for an implementation are mandatory for SIPs but can be included with the implementation..-->
Reference to similar deployemnts. 

### Configurable Values (Via SCCP)
<!--Please list all values configurable via SCCP under this implementation.-->
n/a

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
