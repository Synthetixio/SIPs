---
sccp: 218
network: Ethereum
title: Update ETH Wrapper Parameters
author: Burt Rock (@BurtRock)
status: Vote_Pending
created: 2022-07-19
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x4eb0da002a306157e0312023f270c27b40c43a2510470a2b9fc710b4998d98dd
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Implement the following:
- Increase the ETH wrappr `maxTokenAmount` from 5000 ETH to 7500 ETH
- Increase the ETH wrappr `mintFeeRate` from 5 bp to 50 bp

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The `maxTokenAmount` is the maximum amount of ETH that can be wrapped to mint sETH.
The `mintFeeRate` is the fee levied when minting sETH with ETH.


## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The motivation is the low liquidity of synths, and the debt increase incurred by stakers due to short exposure to ETH. Currently the debt pool is $31.9MM long ETH. Increasing the wrapper capacity by 2k ETH should lead to a decrease in this skew by an equivalent amount, as the sETH is sent over to sUSD, allowing synth liquidity to diffuse accross L1 and L2, and reducing the impact of ETH price movements on stakers debt.


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
