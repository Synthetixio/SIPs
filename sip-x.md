---
sip: <to be assigned>
title: Create a global stock market synth
status: Draft
author: Accelerated Capital (@accelerated-capital)
discussions-to: https://research.synthetix.io/t/sip-create-a-global-stock-market-synth/410

created: 2021-05-22
---

<!--You can leave these HTML comments in your merged SIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SIPs. Note that an SIP number will be assigned by an editor. When opening a pull request to submit your SIP, please use an abbreviated title in the filename, `sip-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->
Add a Synth for the iShares MSCI All Country World Index ETF (ACWI).

## Abstract
<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the SIP is implemented, not *why* it should be done or *how* it will be done. If the SIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->
This SIP proposes to add 1 new Synth: sACWI.

## Motivation
<!--This is the problem statement. This is the *why* of the SIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the SIP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the SIP will address the issue!-->
Synthetix has recently been expanding the list of product offerings within traditional equity markets. Synths currently exist (or are being implemented) for U.S. indicies (SPY, QQQ, IWM), international indicies (Nikkei, FTSE), and a handful of U.S. stocks (e.g. TSLA, FAANG, MSFT). It makes sense to offer these types of products since it provides risk management and speculation benefits to crypto investors looking to get exposure to traditional markets on-chain. 
  
However, these options are still lacking. As an institutional investor, I would be unable to design a global equity porttfolio with the options available. Wide swaths of the market are still missing, such as emerging and international developed markets outside of Europe and Japan. 

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
This Synth would be implemented similarly to the other long equity Synths. 

Trading will be halted outside of market hours or when a valid price feed is not otherwise available. Similar to SIP-125, a privileged keeper with a feed to market opening, closing times and holidays will be able to suspend the synth for trading during that period. Secondary markets would be created on external AMMs. 

### Rationale
<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->
The MSCI All Country World Index is MSCI's flagship global equity index designed to represent performance of the full opportunity set of large cap and mid cap companies across 23 developed and 27 emerging markets. It is comprised of 3,000 constitutents across 11 sectors and accounts for 85% of the free float-adjusted market cap in each of these markets. The iShares MSCI ACWI ETF (ACWI) is the most commonly used investable product using the MSCI All Country World Index's methodology.

  ![image](https://user-images.githubusercontent.com/83479596/119246752-efc28f00-bb38-11eb-8e75-3983208993c4.png)

  
The primary rationale for creating this Synth is to make the MSCI All Country World Index available on-chain as a crypto-native product. The MSCI All Country World Index is a common benchmark for global equity in traditional finance. Having one-click diversified equity exposure will allow crypto investors to allocate toward traditional capital markets without ever having to migrate assets off-chain.
  
This SIP comes at an interesting time for the crypto ecosystem. DeFi protocols are beginning to examine their growing treasuries and realize there is a need to diversify away some of the idiosyncratic risk of their own governance tokens. The sACWI Synth addresses this need by providing a product in line with the institutional investor mindset.
  
I expect this Synth to increase trading volume as I could see many DAOs and institutional investors willing to hold an asset like this on-chain. In addition, it would allow traders to speculate on the movements of the entire global market. While Synthetix continues to work to expand its product offerings in traditional equities, sACWI will ensure Synthetix can always provide full global equity exposure to anyone looking for it.
  
Finally, I believe this Synth would be extremely beneficial for DeFi as a whole. Having the global stock market as a composable asset on-chain could lead to some interesting opportunities not possible with traditional investment vehicles. 
  
### Test Cases
<!--Test cases for an implementation are mandatory for SIPs but can be included with the implementation..-->
N/A

### Configurable Values (Via SCCP)
<!--Please list all values configurable via SCCP under this implementation.-->
N/A

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
