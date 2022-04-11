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

This SCCP proposes to lower the `MaxMarketValueUSD` on futures markets as follows:

- On BTC to 3 million USD 
- On ETH to 7 million USD 
- On LINK to 3 million USD 

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The `MaxMarketValueUSD` is the maximum amount of open interest available for a certain Futures Market.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The primary motivation is to limit the possibility of latency arbitrage. 

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).