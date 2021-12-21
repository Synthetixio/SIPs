---
sccp: 143
network: Optimism
title: Increase L2 ETH Wrappr Max cap to 1,500 ETH and Lower Minting Fee to 5 bp
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2021-10-31
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/QmQRRVjFqS3p4zCzMGSCyNvRfB3eG8FUmGRdPq23WAd48y
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

The SCCP aims at increasing the ETH Wrappr max capacity and the lowering the minting fee in order to offset the positive ETH skew and align the price of sUSD against other stables.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Increase the L2 ETH Capacity to 1,500 ETH and lower the minting fee to 5 bp, starting from 3.5% and changing it by 50 bp incremental steps, done every few hours, or ideally whenever the sUSD peg price can't be arbed profitable (when the peg is below the wrappr minting fee + synth exchange fee).

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Currently there is a 3 to 4m sUSD shortfall on the [uniswap pools](https://info.uniswap.org/#/optimism/tokens/0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9), this sccp aims at closing that gap while earning minters a substantial amount of fees and lowering the ETH skew on the debt pool.
The proposed minting fee change schedule is as follows:

- Change from 3.5% to 3%
- Change from 3% to 2.5%
- Change from 2.5% to 2%
- Change from 2% to 1.5%
- Change from 1.5% to 1%
- Change from 1% to 0.5%
- Change from 0.5% to 5 bp

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
