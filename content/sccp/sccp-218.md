---
sccp: 218
network: Optimism
title: Update ETH Wrapper Parameters
author: Burt Rock (@BurtRock)
status: Draft
created: 2022-07-19
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Implement the following:
- Increase the ETH wrappr `maxTokenAmount` from 3700 ETH to 5700 ETH
- Decrease the ETH wrappr `mintFeeRate` from 20 bp to 5 bp

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The `maxTokenAmount` is the maximum amount of ETH that can be wrapped to mint sETH.
The `mintFeeRate` is the fee levied when minting sETH with ETH.


## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The motivation is the recent premium seen on the sUSD peg, and the debt increase incurred by stakers due to short exposure to ETH. Currently the debt pool is $31.9MM long ETH. Increasing the wrapper capacity by 2k ETH should lead to a decrease in this skew by an equivalent amount, as the sETH is sent over to sUSD, helping relieve pressure on the peg, and reducing the impact of ETH price movements on stakers debt.

ETH wrapper expansion was originally proposed with SCCP-206, but was separated from changes to the LUSD wrapper. Since LUSD wrapper changes, changes in loan fee structure, and the sUSD bridge have not been sufficient to restore the peg and stakers have seen increasing debt, changes to the ETH wrapper should be considered in isolation.
## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
