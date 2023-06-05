---
sccp: 210
network: Ethereum
title: Improve Pricing of Atomic Swaps
author: Kaleb Keny (@kaleb-keny), Afif Bandak (@aband1)
status: Implemented
created: 2022-07-06
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/bafkreiehl6dbtrjvgcygkqtm5a6wo22yssfv5hr2ikf7h2u57nvxyoq7g4
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to implement the following:
- Update the fee tier of the wETH/wUSDC pool from the [30 bp pool](https://etherscan.io/address/0x8ad599c3A0ff1De082011EFDDc58f1908eb6e6D8) to the [5 bp pool](https://etherscan.io/address/0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640). This is done by calling the [`setPoolForRoute`](https://etherscan.io/address/0xf120f029ac143633d1942e48ae2dfa2036c5786c#writeContract), taking in arguments of the [wETH](https://etherscan.io/token/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2) and [USDC](https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48) addresses as well as the address of the [5 bp pool](https://etherscan.io/address/0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640).
- Lower the `atomicTwapWindow` from 1800 seconds to 240 seconds. This is done by calling the [`setAtomicTwapWindow`](https://etherscan.io/address/0x5ad055A1F8C936FB0deb7024f1539Bb3eAA8dc3E#writeContract) with 240 argument.
- Lower the `atomicMaxVolumePerBlock` to sUSD 5 million from sUSD 15 million.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Below is description of the parameters involved:
- The `setPoolForRoute` overrides the default route taken when trades take place for specific tokens. Currently the default route is the 30 bp pool, hoping through ETH pairs when no direct route from the `sourceCurrency` to the `destinationCurrency` exists.
- The `atomicTwapWindow` is the twap window used when fetching the uniswap price.
- The `atomicMaxVolumePerBlock` is the maximum volume per block that can be executed atomically. 

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The main motivation of the first two actions is to improve the execution pricing and improve volume for the protocol. This is achieved with the following:
- Shortening the twap window aligns the atomic price with the spot price. 4 minute Twap protection is still considered to be safe and conservative since bad actors that want to take advantage would need to move the price on a pool and defend it for a prolonged period of time, since a lot of trading takes place on these concentrated liquidity pools. And the best improvement to the fill would be up to the chainlink price. Hence, the uniswap pool manipulation attack vector is improbable and can be defused if chainlink pushes a price during the attack.
- Switching the from the 30 bp pool to the 5 bp pool leads to utilizing the price available on a pool that is more reactive to changes in cex prices and therefore offers traders better execution.

The main motivation behind lowering the `atomicMaxVolumePerBlock` to sUSD 5 million per block is due to the fact that more than 95% exchanges did not exceed a couple million sUSD per block. This number can be revisted in case we see that the maximum is being hit frequently.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
