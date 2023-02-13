---
sccp: 280
network: Optimism
title: Increase the `rateStalePeriod`
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2023-02-13
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x0e26409b6e50ab74c8867341ef131cbe25ae6a32e2ddfeb73fc4a961f46c0a44
type: Governance
---

# Simple Summary

This SCCP proposes to increase the `rateStalePeriod` on optimism for 5400 seconds to 86400 seconds.

# Abstract

The `rateStalePeriod` is the number of elapsed seconds since the last chainlink price push which result in exchanges and perps interactions being disabled.

# Motivation

The main motivation is to accomodate perp markets that have a higher chainlink heartbeat. Note that the risk on the debt pool and traders is minimal due to the low deviations (20 bp) on most [chainlink feeds](https://docs.chain.link/data-feeds/price-feeds/addresses?network=optimism).

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
