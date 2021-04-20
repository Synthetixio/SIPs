---
sccp: 96
title: Increase L2 Target C-Ratio To 1000%
author: Spreek (@Spreek)
discussions-to: governance
status: Proposed
created: 2021-04-21
---

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->
Raise c-ratio target on Layer 2 to 1000% to keep L2 synth supply and debt risks more manageable in early stages of L2 exchanges.

## Motivation
<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->
With SIP 117 and SIP 121, we will be starting Phase 1 of L2 rollout, which includes exchanges. Currently, stakers on L2 are not exposed to any debt changes, and hence they will always have sUSD equal to their debt. After exchanges start, debt and sUSD holdings may be different.

However, in the current state, L2 sUSD is not available for purchase or for migration, which is problematic. We have various workarounds to this on the way, but in the meantime it is desirable to 1) make it less likely that anyone gets liquidated or runs so low on sUSD that they are no longer able to claim and 2) lower the total synth supply on L2 such that subsidizing losses if necessary is easier.

The c-ratio is intended to be walked down if debt increases to allow people to continue claiming in the intervening time period. Once this stage is over, we should also plan on renormalizing c-ratio.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
