---
sccp: 241
network: Ethereum & Optimism
title: Distribute owed SNX liquidation rewards to L2 stakers following SIP 252
author: Matt
status: Draft
created: 2022-10-26
type: Governance

---

## Simple Summary

A proposal to reduce inflation on L1 by the amount of SNX rewards owed to L2 stakers after the implementation and subsequent liquidation of escrow SNX over a 1-week period.

## Abstract

The total amount of SNX liquidation rewards owed to L2 stakers is 383,177 SNX as of Oct 24th, this proposal proposes to distribute these rewards to L2 inflation in the next staking rewards distribution.

## Motivation

Liquidation rewards aren’t bridged to L1 and L2 stakers, while liquidated debt is distributed to all stakers. During times of mass liquidations, which is what occurred during the implementation of SIP 252, stakers on L2 were assigned a large amount of debt without proper rewards.

The reasoning for distributing this under inflationary rewards is because it reduces the technical workload of distributing these rewards, and reduces the chance for errors.

Here is some of the data that Kaleb has prepared for me on the subject of liquidated SNX following the implementation of SIP 252. The data below shows that the total SNX rewards owed to Optimism stakers is 398,722 minus the rewards owed to OP stakers from L1, which is 15,544 SNX. Net rewards owed to L2 is 383,177 SNX

{'favorOf': 'optimism',
'netRewards': 383177,
'ethereumToOptimismRewards': 398722,
'optimismToEthereumRewards': 15544,
'optimismAverageDebtWeight': 0.3432,
'ethereumAverageDebtWeight': 0.65677}

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
