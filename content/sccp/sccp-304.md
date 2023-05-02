---
sccp: 304
network: Optimism
title: snxETH V3 Spot Market
author: Afif, Noah
created: 2023-05-01
type: Governance
status: Draft
---

# Simple Summary

This SCCP proposes to deploy a synthetic ETH spot market with a snxETH token to Optimism, integrated with the Synthetix V3 core system.

# Abstract

This deployment will use the spot market implementation specified in SIP-317, using the price provided by Chainlink for atomic orders and the price provided by Pyth for asynchronous orders. Wrappers and the skew fee will be enabled.

# Motivation

This should be considered an alpha release, to begin testing the V3 spot market and core system in a production environment.

# Technical Specification

Functions should be invoked on the spot market system unless otherwise noted.

- Invoke `registerSynth` with name _Synthetic ETH_ and symbol _snxETH_.
- Invoke `registerNode` (on the oracle manager) to generate an ID for a Chainlink Node which retrieves the price for ETH from the aggregator contract 0x13e3Ee699D1909E989722E753853AE30b17e08c5
- Invoke `updatePriceData` to use the resulting node ID for both buy and sell price feeds.
- Invoke `setAtomicFixedFee` to the maximum integer value (effectively disabling it for now).
- Invoke `addSettlementStrategy` with the following data:
  - Strategy Type: PYTH
  - Settlement Delay: 15 seconds
  - Settlement Window Duration: 60 seconds
  - Price Verification Contract: 0xff1a0f4744e8582DF1aE09D5611b887B6a12925C
  - Feed ID: 0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace
  - URL: https://api.synthetix.io/pyth-mainnet/api/get_vaa_ccip?data={data}
  - Settlement Reward: 0
  - Price Deviation Tolerance: 5%
  - Minimum USD Exchange Amount: bn(0.000001)
  - Max Rounding Loss: bn(0.000001)
  - Disabled: false
- Invoke `setAsyncFixedFee` with 0.1%
- Invoke `configureMaximumMarketCollateral` (on the core system) with 100 ETH.
- Invoke `setMarketSkewScale` with 100,000 ETH.
- Invoke `setWrapperFees` with 0.01% for wrap and unwrap.
- Invoke `setPoolConfiguration` with the new market ID on the preferred pool using a weight and maximum debt share value of 1.

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
