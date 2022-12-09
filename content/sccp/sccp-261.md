---
sccp: 261
network: Optimism
title: Increase Max Initial Leverage Slightly on All Markets
author: Burt Rock (@BurtRock)
status: Draft
created: 2022-12-08
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to increase `maxLeverage` on all markets by 1. For markets set at 25, the parameter would increase to 26, and all markets set at 10 would be set at 11.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

`maxLeverage` is multiplied by initial margin to find the maximum absolute notional value of a position. Since orders may fail due to price movements while setting or submitting orders, and adding to a position becomes impossible after opening a max leveraged position even if no price movement has occurred, this proposal suggests slightly raising the `maxLeverage` of all markets to 1% above what is allowed in the UI. 

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Providing a small buffer between the `maxLeverage` allowed by Synthetix and the leverage intended to be offered by partner front ends will reduce the number of delayed orders that fail, and allow more flexibility for users to modify their positions immediately after they're placed. Making this buffer relatively small compared with the overall amount of leverage offered ensures that the UX can be improved without significantly increasing risk to the system, or to traders.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
