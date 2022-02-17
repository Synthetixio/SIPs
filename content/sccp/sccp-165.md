---
sccp: 165
network: Ethereum
title: Update LUSD Wrappr Parameters
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2022-02-09
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/QmTnUD21ipXw4SPivkBpRJ8KwQ21ts65x49aKHEamjj1bo
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to update the following parameters on the LUSD wrappr on Ethereum:

- Increase the `maxTokenAmount` to 100 million sUSD
- Increase the `burnFeeRate` to 5%

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The LUSD `maxTokenAmount` is the maximum amount of sUSD that can be minted by the LUSD wrappr, the `burnFeeRate` specifies the fee levied in order to release the LUSD from the wrappr.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Given recent events where `OlympusDAO` is [rebalancing](https://etherscan.io/tx/0x2ecfc1420f3d8a00b67df6b1bc5b2f4829738d6a13bc26eba55ce3beaaf5eba2) the LUSD CRV pool, we should expect the LUSD supply to increase in the coming weeks. In order to take advantage of this, and ramp up the available supply of sUSD on Ethereum as much as possible, this SCCP proposes to increase the `maxTokenAmount` to 100m sUSD and raise the `burnFeeRate` to 5%.
This will allow up to gradually unwind the LUSD wrappr on L2, in favor of a wrappr on L1 which doesn't hamper the liquidation process of liquity. As a positive side-effect, the increase in sUSD supply, will help incentivize trades from sUSD to sETH, which helps lower the negative ETH skew on L1.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
