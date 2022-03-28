---
sccp: 173
network: Optimism
title: Update Base Fees
author: Kaleb (@kaleb-keny)
status: Draft
created: 2022-03-26
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to update the following base fee parameters:
- raise sSOL baseFee to 40 bp from 25 bp
- raise sUNI baseFee to 40 bp from 25 bp
- raise sAAVE baseFee to 40 bp from 25 bp
- raise sLINK baseFee to 40 bp from 25 bp
- raise sAVAX baseFee to 40 bp from 35 bp
- raise sMATIC baseFee to 40 bp from 25 bp
- raise futures makerFee on LINK shorts/longs to 40 bp and on takerFee to 45 bp

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The `baseFee` is the fee charged for exchange into a particular synth, or establishing a position in the `FuturesMarket` contract.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The main reason for this change is to decrease the likelihood of latency arbitrage attacks. Given that futures provide significant liquidity efficiency advantages to traders, raising fees on sLINK is needed to lean against the higher risk of latency arbitrage. Futhermore, trading with sSOL and sAVAX, having larger amount of volatility requires that fees be raised enough as to counter any consistent price advantage traders can appropriate from the exchange.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
