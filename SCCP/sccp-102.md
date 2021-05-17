---
sccp: 102
title: Increase Cap on Wrappr from 5k ETH to 15k ETH
author: Kaleb Keny (@kaleb-keny)
discussions-to: governance
status: Implemented
created: 2021-05-14
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to increase the cap on the wrappr contract from 5k ETH to 15k wETH.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

With the contract currently being saturated with eth, this sccp proposes to increase the cap by 10k wETH.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The cap increase is to allow for arbers to take advantage of the wrappr contract in order to mint sETH with ETH. However, the cap is being increased in incremental steps because of the following reasons:

- Minimizing peg volatility, as a large influx of synths will result in shocks of synth supply, which might cause more harm than good.

- Given that it is a new contract, having a gradually increasing cap in incremental steps adds another level of protection.

That said, we expect the cap to be raised significantly over the coming weeks and fees lowered to the minimum of 5 bp in order to ensure that arbers take advantage of the contract and fix the peg with the least amount of friction possible in the smallest delay possible.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
