---
sccp: 223
network: Optimism
title: Increase Max Initial Leverage on Traditional Markets
author: Burt Rock (@BurtRock)
status: Vote_Pending
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x034db5ded913dfd717cbc83e6383711bec1a917f611acecedd51fb362c1fc238
created: 2022-08-19
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to increase `maxLeverage` on the EUR-PERP, XAU-PERP, and XAG-PERP markets to 25 from 10.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

`maxLeverage` is multiplied by initial margin to find the maximum absolute notional value of a position. In order to align current leverage offerings with other exchanges, this proposal seeks to increase this parameter, allowing for higher leverage.

Traditional markets were initially launched with a maxLeverage of 10 to limit risk to the Synthetix debt pool, and have now been live for a sufficient amount of time to monitor risk of front-running and manipulation.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Traditional assets typically experience lower volatility, and have much better liquidity than crypto assets. These assets are currently offered with lower fees than cryptocurrency offerings, which make them particularly attractive for higher leverage since fees are one of the most significant limitations from a user perspective when increasing leverage.

Forex pairs in particular are typically offered with leverage well above 10x, even above 100x due to their low volatility. With current OI caps and an exceptionally low likelihood of manipulation, assets such as gold, silver, and forex pairs should be able to support the same level of leverage offered on major cryptocurrency pairs.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
