---
sccp: 182
network: Optimism
title: Update Future Base Fees
author: Kaleb (@kaleb-keny)
status: Vote_Pending
created: 2022-04-11
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to update the base fees on futures as follows:

- On BTC

    a) Increase `makerFee` to 30 bp from 20 bp

    b) Increase `takerFee` to 35 bp from 25 bp

- On ETH

    a) Increase `makerFee` to 30 bp from 25 bp

    b) Increase `takerFee` to 35 bp from 30 bp

- On LINK

    a) Increase `makerFee` to 40 bp from 35 bp

    b) Increase `takerFee` to 45 bp from 40 bp

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The parameters being updated are as follows:

The `makerFee` and `takerFee` are the fee levied in order to establish a position in a FuturesMarket contract.


## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The primary motivation is to offset the latency arbitrage. 

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).