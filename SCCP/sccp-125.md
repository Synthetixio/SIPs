---
sccp: 125
title: Remove SNX Inflationary Rewards on BTC shorts
author: Kaleb Keny (@kaleb-keny)
discussions-to: governance
status: Vote_Pending
created: 2021-06-16
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to remove SNX inflationary rewards paid on BTC shorts.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Removing the inflationary rewards paid on BTC shorts will help reduce the pressure on the peg as shorts are closed, as sUSD is being locked in the shorting contract as collateral.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The main motivations of this SCCP  are as follows:
- To relieve the peg pressure  as sUSD is being locked in the contract in order to open short positions at increased collateralization ratio.
- To reduce the negative sETH skew on the debt pool as depicted in this (chart)[https://ibb.co/yh5j8VZ], due to the correlation between ETH and BTC. It is important to mention, that as investors acquire sBTC to burn it to close their short positions, the net sBTC skew will remain unchanged, however, the supply of free floating sUSD should increase helping with the peg. As some of that supply goes to sETH as arbs, the negative skew should decrease.
- To increase efficiency of the use of SNX inflation, as the currently SNX would be going to minters as part of the weekly claim escrowed for a year.    




## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
