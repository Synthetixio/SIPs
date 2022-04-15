---
sccp: 186
network: Optimism
title: Increase Rate Stale Period
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

The `rateStalePeriod` is the minimum amount of time from the last oracle price push that leads to disabling exchanges, minting and Burning.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The primary motivation to lower the `rateStalePeriod` is the recent reduction in the chainlink hearbeat to 1 hour from 24 hours, which allows us to improve our protection against price feed inactivity.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
