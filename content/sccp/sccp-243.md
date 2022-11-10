---
sccp: 243
network: Optimism
title: Update SOL-PERP
author: Burt Rock (@BurtRock)
status: Draft
created: 2022-11-9
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to update the SOL-PERP `maxMarketValueUSD` from 3M to 200k sUSD.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The `maxMarketValueUSD` sets the total open interest traders can have on a single market in a given direction. Changing the `maxMarketValueUSD` would prevent users from opening new positions until the open interest falls below this threshold, limiting risk to SNX stakers.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Due to recent developments in the cryptocurrency markets specifically impacting large investors in Solana, elevated volatility, and lower liquidity than when initially listed, it would be prudent to limit stakers' exposure and prevent potential frontrunning and market manipulation until market conditions normalize and the SOL asset can be properly evaluated.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
