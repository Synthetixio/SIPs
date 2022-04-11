---
sccp: 179
network: Optimism
title: Update Futures Fees
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2022-04-07
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/Qmb6ae8xThXPRvwsy3uAz78SBHAtZRkQV8iodZF6CrrNwP
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Increase the `makerFeeNextPrice` and `takerFeeNextPrice` to 20 bp on LINK, ETH and BTC futures. 

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The `makerFeeNextPrice` and `takerFeeNextPrice` are the fees paid by traders when filled for next price futures orders, they do not affect fees paid by traders when they execute immediately.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Traders can use next price orders in order to hedge arbitrage of trades with  immediate execution orders. Raising fees on next price orders fees helps lean against those arbitrage patterns.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).