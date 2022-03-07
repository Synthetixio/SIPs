---
sccp: 167
network: Optimism
title: Lower baseBorrowRate on Synth Loans to 0.25%
author: Kaleb Keny (@kaleb-keny)
status: Implemented
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/QmRtRvAwpuKnQj5upC3VBC6H7LquS3YVG2ZzdrDz31CbR6
created: 2022-03-01
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to lower the base borrowing rate to 0.25% from 3%.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The `baseBorrowRate` determines the annual interest rate applied on sUSD/sETH borrowing against ETH.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

This SCCP aims at improving the sUSD/sETH liquidity on optimism, given the acute shortage of `LUSD` on the ethereum network and the sETH/ETH wrappr being near max capacity with little headroom to raise it further due to the composition of the debt pool on optimism.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
