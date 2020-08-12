---
sip: TBA
title: Incentivizing an sForex Liquidity Pool 
status: WIP
author: MoonRocks <@MoonRocks>
discussions-to: <https://research.synthetix.io/>

created: 2020-08-11
---

<!--You can leave these HTML comments in your merged SIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SIPs. Note that an SIP number will be assigned by an editor. When opening a pull request to submit your SIP, please use an abbreviated title in the filename, `sip-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

Most stable coins are pegged to the US Dollar, current market sentiment is not favourable for the USD going into the presidential election and there is a lacking in stable coins pegged to most currencies. Synthetix is in a unique position to create an on ramp to the exchange and offer infinite liquidity in soft pegged sFiats, to anyone who wishes to hold their assets in non-USD stables. 


## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the SIP is implemented, not *why* it should be done or *how* it will be done. If the SIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

Incentivize a BAL pool with a basket of Forex synths and a combination of USD-peg stable coins to offer liquidity in an under represented asset class.
i propose the following synths be included in the pool:
[sEUR, sAUD, sGBP, sCHF, sJPY]
The USD stable coins could be any combination of the following:
[USDC, USDT, DAI, sUSD, mUSD]


## Motivation

<!--This is the problem statement. This is the *why* of the SIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the SIP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the SIP will address the issue!-->

Forex synths could be swapped for any other synth offered on the exchange at a 1:1 sUSD:USD ratio making them functionally no different from sUSD for trading purposes. $USD has lost value against other currencies and may continue to do so, many stable coin holders could lose value on their assets in this case and could reduce this exposure by holding other Forex synths. Synthetix is the most reputable Defi project offering this type of asset class, accordingly its in position to get the lions share of market interest (in non-USD soft-pegs), creating brand exposure all the while driving potential trade volume on synthetix.exchange and generating fees. 
An incentivized Pool would bootstrap synth liquidity and fill a void in the market.

## Specification  

<!--The specification should describe the syntax and semantics of any new feature, there are five sections

Overview 

<!--This is a high level overview of *how* the SIP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->

 A liquidity pool in Balancer with Forex synths; would encourage those who are weary of the USD to hold these synths, and in order to do so they must interact with the synthetix.exchange. 

Rational 

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

Liquidity pools are valued based on factors related to their stability and rewards. Forex synths are ideally stable enough to hold longterm and provide infinite liquidity for those interested in a) holding and farming with these synths, b) trading with these synths and filling unforeseen arbitrage opportunities that may arise as a result of the pool. 
currently if i want to obtain an sForex i would have to first acquire sUSD then swap for the fiat, creating an unnecessary step for a synth that could be swapped interchangeably with all other synths on its own.  A pool with [USDC, USDT, DAI, mUSD] as well as Forex synths would give easy access to anyone holding these stable coins to trade between them. 

There are a few things to be considered before directing incentives for an sForex  Liquidity pool.
firstly; it was mentioned by a community member in discord that such a pool could potentially encourage trading outside the exchange which would go against the synthetix.exchange purpose. It could be argued; the fact that these synths can be swapped for all other synths without sUSD conversion, makes them a viable on ramp and thus outweighs the downsides associated with synth trading outside the exchange.
secondly; it should be debated whether sUSD is to be included in the liquidity pool or not. An sForex pool without sUSD would create a more neutral USD peg representation; since sUSD is either traded at a premium or under-peg outside of synthetix.exchange but would be traded 1:1 sUSD to USD  inside the exchange. Generally all usd pegged stablecoins are traded either above or below peg outside their native platforms so swapping between stable coin and sForex in a liquidity pool wont offer the true spot price of the trading pair but it would remove an extra step of converting to sUSD just to make the swap. Adding sUSD in the pool would not add any extra functionality and thus shouldn't be included.
thirdly; an interesting case of arbitrage opportunities could arise if any sForex assets were to deviate from their underlying peg within the liquidity pool or outside the synthetix.exchange. Arb opportunities should be considered when deciding on ratios of the synths amongst the pool as well as synth : stable coin ratio. Ultimately any arbing would generate volume in Synthetix.exchange which is good sentiment.


## Technical Specifications

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->

Specifications to be decided: 
-amount of rewards allocated to the pool
-ratio of forex synths to stable coin for the LP
-issue of fee reclamation 

## Test cases 

<!--Test cases for an implementation are mandatory for SIPs but can be included with the implementation..-->

Similar in Cases such as Balancer SNX pool, sBTC curve pool

### Configurable Values (Via SCCP)

Similar in Cases such as Current Staking Pools
<!--Please list all values configurable via SCCP under this implementation.-->

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
