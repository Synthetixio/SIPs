---
sccp: 195
network: Optimism
title: Increase Max Initial Leverage
author: Burt Rock (@BurtRock), Marko Roy (@Marko-roy)
status: Vote_Pending
created: 2022-05-09
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to increase `maxLeverage` for all markets to 25 from 10.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The initial futures rollout established with [SIP-80](https://sips.synthetix.io/sips/sip-80/) was done with 10x leverage to limit risk when offering leverage backed by the synthetix debt pool and allow time for optimizations.

`maxLeverage` is multiplied by initial margin to find the maximum absolute notional value of a position. In order to align current leverage offerings with other exchanges, this proposal seeks to increase this parameter, allowing for higher leverage.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Increasing the maximum initial leverage improves capital efficiency, improves the flexibility of the futures product, and is necessary to offer a comparable product to other exchanges, especially in the case of low volatility assets.

Current assets available for futures have undergone extreme scrutiny and have been vetted for liquidity, trading volume, and credibility. With OI (Open Interest) caps and recently introduced safety mechanisms, increasing the available leverage to 25x from 10x should be possible and make the product more appealing for users.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
