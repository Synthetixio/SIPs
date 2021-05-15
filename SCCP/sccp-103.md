---
sccp: 103
title: Increase Issue Fee Rate on ETH backed loans to 2%
author: Kaleb Keny (@kaleb-keny)
discussions-to: governance
status: Proposed
created: 2021-05-15
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to increase the minting fee (`issueFeeRate`) on new ETH backed loans to 2% contract (`0x5c8344bcdC38F1aB5EB5C1d4a35DdEeA522B5DfA`).

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->
Setting the minting fee at 2% will effectively raise the cost of minting new sUSD and sETH with ETH as a collateral, no change in fees on closing loans or repaying existing loans. 

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->
The primary motivation is to control the supply of synths in expectation of ramping up the cap of the wrappr and a significant reduction on `mintFeeRate`. Increasing minting fee on ETH backed loans will allow us to implement [SCCP-99](https://sips.synthetix.io/SCCP/sccp-99) and allow participants to continue to open up new short positions without opening up a gap that allows arbitragers to front-run the wrapper paramater update.
That said, the minting fee on ETH backed loans will be reduced back to the original fee of 10 bp, once wrappr is fully deployed.


## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
