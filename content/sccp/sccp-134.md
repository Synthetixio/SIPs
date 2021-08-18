---
sccp: 134
title: Reduce L2 Target C-Ratio To 900% 
author: Spreek (@Spreek)
discussions-to: https://discord.gg/e9c5Cs
status: Implemented
created: 2021-08-11
---

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Lower target c-ratio on L2 from 1000% to 900%

## Abstract
<!--A short (~200 word) description of the variable change proposed.-->

As laid out in SCCP 96, we intend to steadily reduce c-ratio as needed to minimize pain to stakers.

## Motivation
<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

We observe that the peg on uniswap is ~1.04 synth-non synth. Furthermore, L2 debt has increased approximately 7% since the beginning of trading on L2. It is therefore desirable to provide a bit more synths to the system.

900% is chosen because there are still several significant risks in this early stage of the trading rollout. We are not yet ready for extremely high liquidity or synth supply on L2.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
