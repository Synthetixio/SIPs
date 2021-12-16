---
sccp: 151
network: L1
title: Wrappr Parameter Changes (L1)
author: Kaleb (@kaleb-keny)
discussions-to: 'https://discord.gg/EWmYsH7X'
status: Implemented
created: 2021-11-22
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/QmWWipWzYohUVmCPrme7Gv5DUP7oWKSPv8WSiZS6ZVHqrc
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to implement the following:

- Decrease cap on ETH Wrappr to 75k ETH from 175k ETH

- Increase cap on the LUSD Wrappr to 50 million sUSD

- Decrease LUSD minting fee to 0 bp

- Decrease ETH Wrappr Burning Fee to 0 bp

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

This SCCP parameterizes the wrappr contracts as to allow the process of unwinding away some of the ETH locked in the ETH Wrappr, which resulted in a negative skew on the debt pool on L1, and enable external collateral cross-asset swaps on synthetix with the help of wrapprs.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Once these parameters are set, traders will be able to trade from ETH to LUSD on aggregators with the following route:

- Trade stables into LUSD (on 1inch)
- Trade LUSD to sUSD (with LUSD wrappr at 0 fee)
- Trade sUSD to sETH (with SNX Atomic contract at 25 bp fee)
- Trade sETH to ETH (unwrapping ETH at 0 fee)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
