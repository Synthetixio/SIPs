---
sccp: 105
title: Increase Cap on Wrappr to 50k ETH from 15k ETH
author: Kaleb Keny (@kaleb-keny)
discussions-to: governance
status: Implemented
created: 2021-05-18
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to increase the cap on the wrappr contract to 50k ETH from 15k wETH.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Increasing the cap to 50k ETH will allow arbitragers to futher tighten the sETH price to a premium of at most 1%.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The cap increase will allow arbers to take advantage of the wrappr contract in order to mint sETH with ETH and swap the resulting sETH on curve for ETH. This helps align the  pegs on different curve pools as well, and reinforces the pegs across the synth eco-system. 

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
