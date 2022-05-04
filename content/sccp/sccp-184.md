---
sccp: 184
network: Optimism
title: Update Open Interest Limits
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2022-04-14
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/QmQEYgoZrTn2ii9yVMGnn1YA4ziiB4U39fsMYo9gJX2end
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to increase the sETH futures market `MaxMarketValueUSD` to sUSD 15 million from sUSD 7 million. 

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The `MaxMarketValueUSD` is the maximum amount of open interest available for a certain Futures Market.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The primary motivation to increase the open interest limit gradually until dynamic fees are calibrated well enough to offset the oracle latency gap.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
