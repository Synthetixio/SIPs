---
sccp: 171
network: Optimism
title: Increase `BaseFee` on AVAX to 35 bp from 25 bp
author: Kaleb (@kaleb-keny)
status: Implemented
proposal: >-
  https://gov.synthetix.io/#/proposal/QmQFxkfsqSJdnHAc8NQTBe85MXrvT3NMUYe2S5gh5yiZNU
created: 2022-03-10
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to raise the `baseFee` on sAVAX to 35 bp from 25 bp.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The `baseFee` is a fixed fee paid upon trading into a particular synths.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The primary motivation is to offset excess oracle latency arbitrage related to sAVAX without increasing fees on the remaining synths. Should be mentioned that the configuration dynamic fees and base fees are still being analyzed and might be adjusted in future SCCP's depending on incoming data.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
