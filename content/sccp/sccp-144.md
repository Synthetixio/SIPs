---
sccp: 144
title: Increase L2 ETH Wrappr Max cap to 2,200 ETH
author: Kaleb (@kaleb-keny)
discussions-to: 'https://discord.gg/EWmYsH7X'
status: Implemented
created: 2021-11-04
type: Governance
---

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Increasing the L2 ETH Wrappr max capacity to 2,200 ETH.

## Abstract
<!--A short (~200 word) description of the variable change proposed.-->

The SCCP aims at increasing the ETH Wrappr max capacity to 2,200 ETH due to the surging demand for synth on optimism.

## Motivation
<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Currently the [stats](https://stats.synthetix.io/) page shows that the debt pool has 3,200 worth of long ETH exposure, raising the ETH wrappr cap will result in that exposure being reduced to 1,000 ETH helping the debt pool remain stable regardless of crypto-prices. The risk here, is that some of that sETH will be converted to sUSD as more protocols go live on L2 and demand for synth liquidity increases further resulting in a negative ETH skew. However, this can be mitigated by having a stable coin wrappr (with lower fees), expected in the coming week, which incentivize folks to mint sUSD with a stablecoin rather than sETH.
Furthermore, the size of the debt pool is expected continue to grow into the future, which might offset a net short ETH exposure on the debt pool.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
