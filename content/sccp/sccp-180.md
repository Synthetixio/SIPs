---
sccp: 180
network: Optimism
title: Unpause Futures Markets
author: Kaleb (@kaleb-keny)
status: Vote_Pending
created: 2022-04-08
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to unpause the SOL, AVAX, MATIC, AAVE and UNI Futures Markets.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

[SIP-217](https://sips.synthetix.io/sips/sip-217/) implemented these markets but they were launched as paused. This SCCP proposes to unpause these markets.


## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The primary motivation is to launch these markets for trading with parameter configurations that offset latency , the proposed parameters at launch are as follows:
- makerFee: 70 bp
- takeFee: 80 bp
- maxMarketValueUSD : 1m$
- takerFeeNextPrice: 30 bp
- makerFeeNextPrice: 30 bp
- maxFundingRate: 10%
- skewScaleUSD: 50m


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).