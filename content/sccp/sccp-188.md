---
sccp: 188
network: Optimism
title: Update Open Interest Limits
author: Kaleb (@kaleb-keny)
status: Rejected
created: 2022-04-21
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/QmZRFa3Ebx1sv6ZY19ChykcM63GCeYYffrZaWNLt6wXWXf
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to lower the sETH futures market `MaxMarketValueUSD` to sUSD 10 million from sUSD 25 million. 

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The `MaxMarketValueUSD` is the maximum amount of open interest available for a certain Futures Market, it is the limit per long/short. So if have 3m$ worth of longs and 3m$ worth of shorts, the open interest limit is set to 10m$, users can assume 7m$ worth of longs and 7m$ worth of shorts.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The primary motivation to lower the open interest limit until the centralized circuit breaker described in [SIP-231](https://sips.synthetix.io/sips/sip-231/) helps prevent latency arbitrage.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
