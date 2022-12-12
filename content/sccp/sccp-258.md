---
sccp: 258
network: Optimism
title: Update Debt-PERP Market Parameters
author: troy (@tburm)
status: Implemented
created: 2022-12-05
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x4a29228ff79bdfa1da74ce4c2fd79a7981764830f6c405d988c3a86fa9ea2d30
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to update the DEBT-PERP market max open interest as per the below:

| **CurrencyKey**  | **Proposed OI**  | **Current OI**  |
|----------------- |-------------------- |------------------- |
|    **DebtRatio**    |          6000          |         0          |

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Raise the open interest cap for the DEBT-PERP market to $6000 to allow traders to close short positions. With the current OI cap of $0 these traders are prevented from closing by a smart contract bug.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

A recently discovered bug in the futures market smart contracts prevents traders with open short positions to use the `closePosition` or `closePositionWithTracking` functions when the OI is above the open interest caps. The same bug does not affect open long positions. Kwenta implemented a workaround to open a small long position using `modifyPosition` _then_ call `closePosition`. The current OI cap of $0 prevents opening those small long position. Raising the cap to a value above the current long open interest would enable Kwenta to implement this workaround, and allow users to exit their positions.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
