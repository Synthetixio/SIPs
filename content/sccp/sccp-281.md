---
sccp: 281
network: Ethereum
title: Update Atomic Swap Parameters
author: Kaleb (@kaleb-keny)
status: Vote_Pending
created: 2023-02-15
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x181adf0fb66ce98866e72494ce5a85426b5a7ebbe6c2f72d61aa76014eb5a205
type: Governance
---

# Simple Summary

This SCCP proposes to implement the following:
- Lower the default `atomicTwapWindow` from 600 seconds to 60 seconds.
- Lower the default `considerationWindow` to 0 seconds to 600 seconds.

# Abstract

The parameter descriptions is as follows:
- The `atomicTwapWindow` represents the length of time, where the relevant uniswap average price is fetched.
- The `considerationWindow` is the length of time, in which chainlink price updates are counted in order to trigger the circuit breaker


# Motivation

Currently the atomic price is quoted using the worse price between chainlink, uniswap-twap and uniswap-spot. Hence, lowering the `atomicTwapWindow` would result in better prices for traders being quoted in the atomic swap function.
The `atomicVolatilityUpdateThreshold` was originally set to 10 minutes, as a precautionary measure of having too much chainlink volatility and using prices with slight delay. However given the use case for atomic swaps that builds upong cowswap and 1inch, this measure can be lowered to zero safely. The impact of this change is it results in a significant saving in gas and hence allow for more smaller sized trades.

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
