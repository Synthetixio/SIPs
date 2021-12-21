---
sccp: 156
network: Optimism
title: Update LUSD Wrappr Parameters
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2021-12-07
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/QmP5jS937kpYJWFiDgiakZLvJxoMgy9UU199LNFdQxAp2h
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to update the following parameters on the LUSD wrappr on L2:

- Increase the minting fee to 10 bp
- Increase the capacity by 25 million sUSD to 75 million sUSD

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The minting fee is paid upon minting sUSD with LUSD and helps somewhat restrict the supply of sUSD. The LUSD cap sets the maximum amount of sUSD that can be minted by the wrappr.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Raising the minting fee will compensate minters for the leverage increase in the debt pool. Raising the LUSD wrappr capacity is recommended, given the small skew of 10m dollars worth of sETH on L2, which is more than offset by the negative ETH skew on L1, once debt pool Synthesis is implemented. At the time of writing this SCCP LUSD Wrappr has around 9 million worth of capacity left, which could be absorbed by new volume as Thales launches on L2 and Lyra's next round is initiated, especially that access to the LUSD wrappr is now possible using [1inch](https://app.1inch.io/#/10/swap/LUSD/sUSD)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
