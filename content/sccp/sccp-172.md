---
sccp: 172
network: Optimism
title: Decrease `minInitialMargin` for futures markets from 100 to 40 sUSD
author: Arthur (@artdgn)
status: Approved
created: 2022-03-21
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/QmYVN8i2f5EMtf3nUrEcnBani79tEg9n79M5bNiK1ciq2f
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to reduce the `minInitialMargin` on on perpetual futures markets from 100 sUSD to 40 sUSD.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

`minInitialMargin` is enforced both for the initial deposit, and on trades to prevent a situation where a position needs to be liquidated but the remaining margin doesn't cover the liquidation incentive. The minimal liquidation incentive is 20 sUSD, so the minimal initial margin can be safely reduced to 40, in order to allow better UX for smaller accounts in the initial phase of futures rollout.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The main reason for this change is to improve the UX during the initial rollout of futures markets. Due to how checks are currently performed when modifying positions, margin for an open position has to be at least `minInitialMargin`, however closing position uses the same flow, so closing a losing position if a user deposited exactly 100 sUSD is impossible, even though the position is not yet liquidatable.

If this parameter is updated to 40, users who deposit e.g. 100 sUSD, or even 50 sUSD would not encounter that problem, and a trading UI can guide them to deposit at least 50 or 100 (to allow for more price movement on high leverage) amount to prevent that issue.

## Miniamal value

Setting `minInitialMargin` to the `minKeeperFee` (20 sUSD currently) would **not** be safe, since this will create a situation in which a losing position will be liquidatable immediately on opening due to exchange fees being paid out of the margin, and it falling below the maintenance margin. In this situation the incentive will be paid out of the debt pool, which has to be prevented.

With 40 sUSD as min initial margin, and a 50 sUSD margin deposit that backs a 10x position. It will be possible to close the position up to a loss of 1.5% in baseAsset price (because at that point the remaining margin after closing will be at 40).

Details of calculation:

- Exchange fee opening (500 sUSD position, 30 bips) => 1.5. Remaining margin 48.5.
- Exchange fee closing (500 sUSD position, 20 bips) => 1. This needs to be subtracted when closing the position.
- 47.5 - 40 = 7.5; 7.5 loss relative to (roughtly 500 value position) ~= 1.5%
- Maintenance margin => 21.25 (min fee + buffer of 25 bips). At this margin the position will be liquidatable if no additional margin is added.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
