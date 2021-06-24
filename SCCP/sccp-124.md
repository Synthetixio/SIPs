---
sccp: 124
title: Rebalance and rename sCEX to sCEFI
author: Rubberduck (@rubberducketh)
status: Draft
discussions-to: #synths discord channel
created: 2021-06-13
---

<!--You can leave these HTML comments in your merged SIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to rebalance the sCEX and rename it to sCEFI

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The proposal would be a first rebalance of the sCEX index. Currently, the index tracks 7 centralized exchanges. 
This SCCP proposes 2 new additions, one of which is not an exchanges, but rather a centralized financial blockchain product offering similar services than what we see in DEFI. Also, some existing assets in the index are more than just exchanges, i.e. Crypto.com with its yield/lending or debit card products. It is thus fitting that the sCEX is renamed to sCEFI.

First addition is Celsius Network (CEL), a centralized lending and borrowing platform that is approaching its fourth year in business. By April 30th, Celsius' assets under management grew to more than $17 billion in digital assets, including over 100,000 Bitcoin and 1.3 million Ethereum. Most of Celsius liquidity resides on FTT and Uniswap. 

Second addition is NEXO (NEXO), which is also a centralized lending and borrowing platform predominantly, also approaching its fourth year in business. It currently manages more than $15 billion in digital assets. 
 
The new sCEFI embraces an open-arms approach. There will be 10 assets in this updated sCEFI, which is the most ever for the index. One of the reasons motivating this approach is that adding more assets makes the index more tamper resistant to price manipulation. A broader range of established assets also opens up the index to allow future exposure to newer, smaller CEFI.
Additionally, this SCCP proposes the sCEX index synth to be paused from trading during the rebalance and rename period. At the end of the rebalancing, the sCEFI will trade at roughly the same index price as it currently trades at. However, since this will effectively be a newly constructed product, some users may wish to exit the sCEFI prior to rebalancing.

The SCCP proposes the addition of the following assets:

* CEL
* NEXO

The SCCP proposes the following weightages for each constituent of the index*:

| % Weightage | Ticker  | 
| ----------- | ------- | 
|30.70%       | BNB     |
|9.61%        | OKB     |
|9.52%        | CRO     |
|9.28%        | CEL     |
|8.98%        | FTT     |
|8.46%        | HT      |
|7.96%        | LEO     |
|7.80%        | NEXO    |
|7.69%        | KCS     |

A combination of capitalization based weights were used, adjusted by decreasing the heavy bias towards BNB by a third and spreading it equally among the remaining assets.

*Note that the weights in here are indicative, and will be updated to reflect actual marketcaps at rebalance implementation. 

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The purpose of the updated sCEFI index synth is to attract traders wishing to gain exposure to the centralized finance sector attracting more and more retail to the world of cryptocurrencies. The asset inclusion criteria is whether or not a given project is considered by the Synthetix community to be among the most innovative projects in CEFI right now. It is quite possible for new and even smaller entrants to find a place in the index in the future. 

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
