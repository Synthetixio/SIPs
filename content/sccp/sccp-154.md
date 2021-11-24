---
network: L2
sccp: 154
title: Include sEUR to Atomic Exchanges
author: Kaleb (@kaleb-keny)
discussions-to: 'https://discord.gg/EWmYsH7X'
status: Draft
created: 2021-11-24
type: Governance
---

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Include sEUR to Atomic exchanges with the following configuration:
- An exchange fee of 30 bp
- Using the uni-v3 feed of [EURT/USDC pool](https://info.uniswap.org/#/pools/0x1754b94a3e63be72efe44a1828cd81c4782a46c4)
- With a 30 min TWAP window

## Abstract
<!--A short (~200 word) description of the variable change proposed.-->

This SCCP proposes to include sEUR into atomic exchanges, which will allow users to exchange EURT to ETH, USD or BTC atomically through Synthetix on L1.

## Motivation
<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Adding sEUR will increase the attractiveness of the atomic exchange product and allow for cross-asset exchanges and arbitrages to materialize across the different curve pools that contain sEUR. This adds low risk to the protocol, given that:
- An oracle push threshold of 15 bp
- The low volatility of the synth relative to USD
- The significant volume available on Uniswap V3 

That said, the atomic exchange volume will be monitored and parameters will be recalibrated based on findings.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
