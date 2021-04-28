---
sccp: 98
title: Rebalance sDEFI and iDEFI
author: Farmwell (@farmwell), CryptoToit (@CryptoToit)
status: Proposed
discussions-to: https://research.synthetix.io/
created: 2021-04-22
---

<!--You can leave these HTML comments in your merged SIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to rebalance the sDEFI and iDEFI index synths. 

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The proposal is to keep with a quarterly cadence of updating the index. The last re-balance occurred in late January, when SUSHI, 1INCH and BNT joined the index. sDEFI index gained 21% since the last rebalancing, trading at $16,391.95 as of time of writing. 

This SCCP proposes for several new additions to sDEFI. 

One of the most inspiring projects to have emerged includes Alchemix, which introduces the concept of automated, self-paying loans using your initial collateral for yield farming and funneling the returns to pay back the loan principle. 

The new sDEFI embraces an open-arms approach. There are 20 assets in sDEFI v5, which is the most ever for the index. One of the reasons motivating this approach is that adding more assets makes the index more tamper resistant to price manipulation. A broader range of assets also gives more exposure to newer, smaller DeFi protocols like Alchemix, Cream and Alpha Finance. 

The SCCP proposes the addition of the following assets: 

- Terra’s LUNA
- Thorchain’s RUNE
- 0x’s ZRX
- Alpha Finance’s ALPHA
- Alchemix’s ALCX
- Cream’s CREAM

Additionally, this SCCP proposes the sDEFI index synth to be paused from trading during the rebalance period. At the end of the rebalancing, the sDEFI will trade at roughly the same index price as it currently trades at. However, since this will effectively be a newly constructed product, some users may wish to exit the sDEFI prior to rebalancing.

The SCCP proposes the following weightages for each constituent of the index:

| % Weightage | Ticker | Units   |
| ----------- | ------ | ------- |
| 12.50%      | UNI   | 56.53   |
| 10.00%      | LUNA   | 107.78   |
| 10.00%      | AAVE    | 4.09  |
| 10.00%      | MKR    | 0.37    |
| 5.00%        | RUNE    | 55.26    |
| 5.00%        | COMP    | 1.37 |
| 5.00%        | SNX  | 47.95   |
| 5.00%        | SUSHI   | 60.25    |
| 5.00%        | YFI    | 0.02   |
| 5.00%        | UMA    | 680.59  |
| 5.00%        | ZRX    | 254.95  |
| 5.00%        | BNT    | 334.06  |
| 2.50%        | CRV  | 133.55 |
| 2.50%        | 1INCH | 80.78 |
| 2.50%        | REN | 495.80 |
| 2.00%        | BAL    | 5.41   |
| 2.00%        | KNC  | 111.68   |
| 2.00%        | ALPHA    | 213.68   |
| 2.00%        | ALCX | 0.22 |
| 2.00%        | CREAM | 3.02 |

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The purpose of the updated sDEFI and iDEFI index synth is to attract traders wishing to gain exposure to the burgeoning DeFi sector. The asset inclusion criteria is whether or not a given project is considered by the Synthetix community to be among tge most innovative projects in DeFi right now. As the DeFi space continues to move quickly it is quite possible for previously excluded assets to rejoin the index, as well as new entrants to find a place in the index.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
