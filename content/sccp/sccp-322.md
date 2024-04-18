---
sccp: 322
network: Base
title: Update Perps V3 Parameters
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2024-04-16
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0xe0d5debaddc6606b0c7d7e4facf57941c8f5e1434093f0cbf5afb549028b4b81
---

# Simple Summary

This SCCP proposes to updates the Perps V3 MaxMarketValue (in Dollars) and MaxMarketSize (in the markets' native currency), as per the below: 

| **Markets** | **Current MMS** | **New MMS** | **Current MMV** | **New MMV** |
|:-----------:|:---------------:|:-----------:|:---------------:|:-----------:|
|     btc     |    UNCHANGED    |  UNCHANGED  |        0        |  5,000,000  |
|     eth     |    UNCHANGED    |  UNCHANGED  |        0        |  7,000,000  |
|     wif     |     152,000     |   750,000   |     500,000     |  1,500,000  |
|     sol     |      2,900      |    5,000    |    UNCHANGED    |  UNCHANGED  |

# Abstract

The cap is determined by the minimum between the `maxMarketValue` (in USD) and the value of `maxMarketSize` in USD, as per SIP-361. 

# Motivation

This sccp introduces that `maxMarketValue` feature on ETH and BTC, which was kept at the default value of zero when [SIP-361](https://sips.synthetix.io/sips/sip-361/) was implemented.  
The cap on WIF was bumped following increased utilization of this markets and it's high turnover, while the cap on SOL was also increased due to the recent price action that resulted in a significant portion of the open interest (500K$) being reduced.


# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).


