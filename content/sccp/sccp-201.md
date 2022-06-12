---
sccp: 201
network: Optimism
title: Equalise maker and taker fee for all futures markets  
author: Arthur (@artdgn)
status: Vote_Pending
created: 2022-06-08
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/QmZLxrx2sCUqUJazBMrBY4rjEDAiSmiwu3h7nLaxYNvGDX
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

For all futures markets which have `makerFee` different (lower) from `takerFee`, set the makerFee to be equal. 

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Raising the `makerFee` will make front running even less likely to be profitable, while keeping next-price (and `takerFee`) fees
unchanged.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The fee parameters need to be adjusted in accordance with the price-feeds' susceptibility to front-running.


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
