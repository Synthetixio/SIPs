---
sccp: 200
network: Ethereum
title: Adjust LUSD Wrappr Parameters
author: Kaleb (@Kaleb)
status: Implemented
created: 2022-05-16
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/QmcyFWXNgi5qs3teWba8JU5ZCpgnRUqtQRmwZZjEeCo1Qe
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Increase the `burnFeeRate` back to 5% and the `maximumTokenAmount` to sUSD 100 million.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The `burnFeeRate` is the fee paid to release LUSD by burning sUSD. The `maxTokenAmount` is the maximum amount of LUSD that can be wrapped to mint sUSD.


## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The parameters were adjusted last week in order to offset hightened market instablity and the sUSD peg discount. Given that those risks have decreased considerably and sUSD is at a premium on the ethereum network, this SCCP proposes to increase back the cap to previous levels and the burnFeeRate to 5%.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
