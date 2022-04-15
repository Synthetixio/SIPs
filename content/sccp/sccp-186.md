---
sccp: 186
network: Optimism
title: Lower Rate Stale Period
author: Kaleb (@kaleb-keny)
status: Vote_Pending
created: 2022-04-15
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to lower the `rateStalePeriod` to 90 minutes. 

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The `rateStalePeriod` represents the minimum amount of time elapsed since the last oracle price push that would lead to disabling exchanges, minting and burning.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The primary motivation to lower the `rateStalePeriod` is the recent reduction in the chainlink EUR feed hearbeat to 1 hour from 24 hours, which allows us to improve protection against the risk of price feed inactivity.
If any feed is not updated within 90 minutes, the system would be suspended until a fresh price is pushed. This shouldn't take place with a chainlink heartbeat of 60 minutes that ensures that at least 1 price push takes place every hour.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
