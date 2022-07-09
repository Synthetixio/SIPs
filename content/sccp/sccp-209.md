---
sccp: 209
network: Ethereum
title: Update Synth Loans Backed by ETH
author: Kaleb Keny (@kaleb-keny)
status: Implemented
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/bafkreigojnxfiud2yfw3zeu7zh3gedyxuthxef2legvraffndjlgvrl2du
created: 2022-07-05
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to implement the following on sUSD and sETH loans backed by ETH:
- Lower the `baseBorrowRate` to 1 bp from 300 bp
- Lower the `issueFeeRate` to 0 from 25 bp
- Lower the `utilizationMultiplier` to the lowest possible number of 1 wei instead of 1 (1e18)

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Below is description of the parameters involved:
- The `baseBorrowRate` determines the annual interest rate applied on sUSD/sETH borrowing against ETH.
- The `issueFeeRate` is the fee paid on new loans taken and drawdowns.
- The `utilizationMultiplier` is used for increasing the interest paid on loans based on the skew, however, since wrappers were introduced this no longer functions as originally designed and currently increases the interest rate on loans beyound what is necessary.


## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

This SCCP aims at improving the sUSD/sETH liquidity on ethereum, given the acute shortage of `LUSD` on the ethereum network and the sETH/ETH wrappr being at max capacity with little headroom to raise it further due to the composition of the debt pool.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
