---
sccp: 289
network: Ethereum & Optimism
title: Update Wrapper Parameters
author: KALEB (@kaleb-keny)
status: Rejected 
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x97f7259bd25e0dd267b53c4c19eb584af709fdba61560a9022bb818559afa317
created: 2023-03-09
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to implement the following on both the Ethereum and Optimism networks:
1) Lower the maxTokenAmount  on the DAI wrapper to zero (from 20m DAI)
2) Lower the burnFeeRate on the DAI wrapper to zero (from 5 bp)
3) Lower the mintFeeRate on the ETH wrapper to zero (from 10 bp)
4) Increase the ETH Wrapper maxTokenAmount to 18,000 ETH (from 15,000 ETH)

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

- The maxTokenAmount is the maximum amount of synth that could be minted against a deposited a designated underlying
- The burnFeeRate is the fee rate paid when burning a synth to extract a designated underlying
- The mintFeeRate is the fee rate paid when minting a synth by depositing a designated underlying

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Currently the wrappers are at full capacity on optimism and near full capacity on Ethereum, hence the need to increase the `maxTokenAmount`. The primary reason behind the changes proposed in the `burnFeeRate` and `mintFeeRate` is to facilitate a gradual unwind in the skew as well as promote an increase in sUSD liquidity, needed for the continued scaling of perps v2 product line.
It is worth mentioning that should the entire mintable capacity of sETH be utilized and swapped to sUSD, the debt pool would still be skewed by around 38% long.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
