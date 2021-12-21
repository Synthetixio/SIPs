---
sccp: 158
network: Optimism
title: Update sETH/ETH Wrappr Parameters
author: Kaleb (@kaleb-keny)
status: Vote_Pending
created: 2021-12-21
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to update the following parameters on the sETH wrappr on L2:

- Decrease the minting fee to 20 bp

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The minting fee is paid upon minting sETH with ETH and helps control the supply of the synth.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Lowering the minting fee to 20 bp will allow an easier and less costly on-ramp towards sETH and increase the trading activity on Optimism via the lyra contracts. It is important to mention that proposed increase in the supply of sETH from wrapprs should be kept in check in order to not over-shoot the positive ETH skew on the debt pool which currently stands at around 2,400 ETH.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
