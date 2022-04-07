---
sccp: 170
network: Ethereum
title: Update Parameters of ETH Wrappr
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2022-03-18
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/QmYKJrCsUoiXRxLthS27fU1CmXn39SvZ3zqnzxLousGPr5
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to lower the `maxETH` in the ETH wrappr to 0.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The parameter determines the maximum amount of ETH that can be minted with the sETH wrappr.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Given that ETH skew continues to decrease as more ETH is unwrapped as sUSD is traded into sETH, this sccp proposes to lower the `maxETH` parameter on the ETH wrappr to 0, as to prevent the situation of more ETH being wrapped. Currently there is 105k ETH in the ETH wrappr, while `maxETH` is at 75k ETH. If the amount ETH being unwrapped goes below 75k ETH, it might prevent further unskew as arbers are able to mint ETH with sETH at a later date.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
