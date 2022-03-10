---
sccp: 168
network: Optimism
title: Update Parameters of Layer 2 Wrapprs
author: Kaleb (@kaleb-keny)
status: Implemented
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/QmSg9AgsXsq3mGksLk4zpXU43By2JZJLtuQPMabtRXw2Yu
created: 2022-03-01
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes the following updates to Layer 2 Wrapprs:

- Increase `burnFeeRate` on LUSD wrappr to 1%
- Increase the `maxTokenAmount` on the ETH Wrappr by 500 ETH to 3,700 ETH

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The parameters being updated as are as follows

- The `burnFeeRate` is a parameter that determines the fee to be paid in order to release the underlying, when a synth is burned
- The `maxTokenAmount` determines the max amount of a synth that can be minted with a given wrappr

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

This SCCP aims at improving the sETH/ETH liquidity on L2 and negate arbitrage activities that reduce the supply of sETH. The arbitrage involves buying LUSD on optimism using the freshly minted sETH:

- Mint sETH with ETH (20 bp)
- Swap sETH to sUSD (25 bp)
- Burn sUSD to release LUSD (5 bp)
- Send LUSD back to ethereum
- Swap LUSD back to ETH (~80 bp profit)

The current debt pool composition on optimism is around 1,500 long ETH.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
