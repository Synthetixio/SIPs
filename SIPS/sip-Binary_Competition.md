---
sip: <to be assigned>
title: Binary Market Competition
status: WIP
author: @FarmerT, @Danijel
discussions-to: https://discord.gg/gYqvG7

created: 2020-07-25
requires (*optional): <SIP number(s)>
---

<!--You can leave these HTML comments in your merged SIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SIPs. Note that an SIP number will be assigned by an editor. When opening a pull request to submit your SIP, please use an abbreviated title in the filename, `sip-draft_title_abbrev.md`. The title should be 44 characters or less.-->


## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->
So far binary market creators and bidders had to rely and strike price in sUSD to create their market or place their bids.  
By allowing markets to be created with two coins, betting one against the other, we increase the number of options for creators, and make markets more attractive to a wider range of bidders. 

## Abstract
<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the SIP is implemented, not *why* it should be done or *how* it will be done. If the SIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

## Motivation
<!--This is the problem statement. This is the *why* of the SIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the SIP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the SIP will address the issue!-->
Sometimes we might not want to bet on a strike price but rather that one coin would outperform another.  
E.g. We could bet that SNX will outperform LINK on 01.01.2021.  

While for some coins it makes sense to compare them 1 to 1, for others that would be meaningless due to different supply, market cap, etc...  
That's why we should include a weight factor on a market creation. This actually allows as to replace the strike price in sUSD with options such as: Will 30 SNX be worth more than 1 ETH at 09.01.2021?

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
The sip would allow users to bet that one coin will outperform the other at a certain date without thinking about strike prices.
### Rationale
<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->
As betting only on a strike price has its limitation, because the whole crypto market is still driven by BTC and ETH marketcaps, it would be useful to let bidders bet on how one coin will perform against another.  
With this someone can simultaneously long one coin while shorting the other.  

Some popular choices were already thrown in discord, e.g. Will YFI outperform BTC 1 to 1?
Of course YFI would have to be added as an BO options first. New assets for Binary Options were proposed in a SIP by @PSYBULL

### Technical Specification
<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->
The implementation should not require much overhead as the price feeds are already there. Changes to the contracts are intended to be minimal.  
UI should support users to choose whether they want an asset to bet against a strike priced or against another asset with a provided weight factor, defaulting to 1.  
UI charts would need to be adapted to show both coins in the market.

### Test Cases
<!--Test cases for an implementation are mandatory for SIPs but can be included with the implementation..-->
Some ideas would be:  
SNX>LINK @01.01.2021.  
BTC>YFI @01.09.2020.   
2xCOMP>ETH @01.10.2020.   
5xLEND>SNX @01.01.2021.

### Configurable Values (Via SCCP)
<!--Please list all values configurable via SCCP under this implementation.-->
As comparing coins 1 to 1 may be limited to only coins with similar values, we could allow a much broader usage by included a weight factor.    
This means the market created would need to specify weight for one coin, e.g.:  
5*ETH>BTC@01.01.2021.

One more option is to not compare value of the coins 1 to 1, but allow their marketcaps to be compared, either 1 to 1, or with weight factors as explained in the aforementioned example.  


## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
