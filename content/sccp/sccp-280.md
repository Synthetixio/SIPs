---
sccp: 280
network: Optimism
title: Increase the rateStalePeriod
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2023-02-13
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x181adf0fb66ce98866e72494ce5a85426b5a7ebbe6c2f72d61aa76014eb5a205
type: Governance
---

# Simple Summary

This SCCP proposes to increase the `rateStalePeriod` on optimism from 5400 seconds to 86400 seconds.

# Abstract

The `rateStalePeriod` is the number of seconds since the last chainlink price push beyond which exchanges and perps interactions are disabled.

# Motivation

The main motivation is to accomodate the new perp markets that have a higher chainlink heartbeat. Note that the risk on the debt pool and traders is minimal due to the low deviations (20 bp) on all [chainlink feeds](https://docs.chain.link/data-feeds/price-feeds/addresses?network=optimism).

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
