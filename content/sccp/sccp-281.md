---
sccp: 281
network: Ethereum
title: Update Atomic Swap Parameters
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2023-02-15
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0xee957aa073f08675ee8a4a08e628065f23aa28dc45b784bfff3989aaeb46c551
type: Governance
---

# Simple Summary

This SCCP proposes to implement the following:
- Lower the default `atomicTwapWindow` from 600 seconds to 60 seconds.
- Lower the default `considerationWindow` from 600 seconds to 0 seconds on both `sETH` and `sBTC`.

# Abstract

The parameters are described as follows:
- The `atomicTwapWindow` represents the length of time, during which the relevant uniswap average price is computed.
- The `considerationWindow` is the length of time, during which chainlink price updates are counted in order to determine whether the volatility circuit breaker is broken.


# Motivation

Pertaining to the first parameter change, currently the atomic price is quoted using the worse price between chainlink, uniswap-twap and uniswap-spot. Hence, lowering the `atomicTwapWindow` would result in better execution for traders overall.

While `atomicVolatilityUpdateThreshold`, was originally set to 10 minutes, as a precautionary measure in order to lean against extreme market volatility and latency. However given the emerging use case for atomic swaps, that builds on top of cowswap and 1inch-fusion offerings, this precautionary measure can be disabled.  

The impact of both these changes leads to a significant [saving in gas](https://github.com/Synthetixio/synthetix/blob/develop/contracts/ExchangeRatesWithDexPricing.sol#L225) and allows smaller sized trades to be priced-in.

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
