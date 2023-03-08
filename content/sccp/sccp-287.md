---
sccp: 287
network: Optimism
title: Increase Max Initial Leverage on BTC and ETH Markets
author: William87, Alpha003, poilk
status: Draft
created: 2023-03-08
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to increase `maxLeverage` on the BTC-PERP and ETH-PERP markets from 25 on both to 50 and 33 respectively.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

`maxLeverage` is multiplied by initial margin to find the maximum absolute notional value of a position. This proposal seeks to increase this parameter on BTC and ETH, allowing for higher leverage on two major markets.

Given the maturity of the BTC and ETH markets and their comparative lack of volatility, there will be limited risk to the Synthetix debt pool at these higher levels of 50x for BTC and 33x for ETH.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

It is arguably the case based on the volume recorded across markets that there is an appetite for higher leverage trading theough Synthetix perps. As the protocol possesses the capacity to offer higher levels of leverage on the comparatively safe BTC and ETH markets, offering this is both possible and will likely help draw futher volume and leverage-using traders to to the protocol.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
