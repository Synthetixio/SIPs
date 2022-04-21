---
sccp: 183
network: Optimism
title: Update Dynamic Fee Parameters
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2022-04-11
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/QmatpharRT57QmZZRgqcTfy7oq66SzvHPgNJYGDpKCRvWr
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes the following changes to Dynamic Fees parameters:

- Decrease the `exchangeDynamicFeeThreshold` to 25 bp from 35 bp
- Increase the `exchangeDynamicFeeRounds` to 6 rounds from 3 rounds
- Increase the `exchangeDynamicFeeWeightDecay` to 0.95 from 0.6
- Lower the `exchangeMaxDynamicFee` to 1.5% from 5%

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The parameters being updated are as follows:

- `exchangeDynamicFeeThreshold` is the minimum change in price above which dynamic fees are levied. A larger threshold leads to lower dynamic fees.
- `exchangeDynamicFeeRounds` is the length of the look-back window. The shorter the lookback window, the less is persistent the impact of historical price volatiltiy on dynamic fees.
- `exchangeDynamicFeeWeightDecay` is the coefficient applied on dynamic fees from the previous round. The lower the decay factor, the faster dynamic fees revert back to zero.
- `exchangeMaxDynamicFee` is the maximum fee that could be levied in a transaction. If dynamic fee exceed this level transactions revert.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The primary motivation is to lower the chance of oracle latency arbitrage without increasing the base fee on traders.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
