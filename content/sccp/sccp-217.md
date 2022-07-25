---
sccp: 217
network: Ethereum
title: Lower Atomic Twap Window
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2022-07-18
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/bafkreifjfpqag7spyytkzrjeliik43ze4lxicvecty2yypizfmn27g3eju
type: Governance
---

## Simple Summary

This sccp proposes to lower `atomicTwapWindow` to 60 seconds.

## Abstract

The `atomicTwapWindow` is the twap window used when fetching the uniswap price.

## Motivation

Lowering the `atomicTwapWindow` reduces the twap impact on the traders price as it converges towards the spot exchange. This is necessary until [SIP-258](https://sips.synthetix.io/sips/sip-258/) is implemented.
It is worth noting that Twap protection is not needed to protect against flash attacks, given that the uniswap price used is that set at the begining of the block. Furthermore, chainlink protection limits the amount of upside exploiters can earn by moving the uniswap-v3 pool price  for several consecutive blocks and makes such an attack unprofitable due to the cost of moving the univ3 pools.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).


