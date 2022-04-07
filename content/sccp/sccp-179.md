---
sccp: 179
network: Optimism
title: Update Futures Fees
author: Kaleb (@kaleb-keny)
status: Draft
created: 2022-04-07
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Increase the `makerFeeNextPrice` and `takerFeeNextPrice` to 5 and 10 bp on ETH and BTC futures. 

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The `makerNextPrice` and `takerNextPrice` are the fees paid by traders when they are filled for next price futures orders, they do affect fees paid by traders when they execute immediately.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Activity seen on chain, where traders are using next price orders in order to cancel latency arbitrages were seen on chain, given the low fees levied on immediate execution of ETH and BTC futures trades. Raising next price orders fees helps lean against those arbitrage patterns.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).