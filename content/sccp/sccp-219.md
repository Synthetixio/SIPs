---
sccp: 219
network: Ethereum
title: Update Atomic Swaps
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2022-07-23
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0xcb00b93e631c8505b67763bbc19db4643dc0cbacf85dd43e8db4d87aca9a10a7
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Implement the following:
- Update the fee tier of the wETH/wUSDC pool from the [30 bp pool](https://etherscan.io/address/0x8ad599c3A0ff1De082011EFDDc58f1908eb6e6D8) to the [5 bp pool](https://etherscan.io/address/0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640). This is done by calling the [`setPoolForRoute`](https://etherscan.io/address/0xf120f029ac143633d1942e48ae2dfa2036c5786c#writeContract), taking in arguments of the [wETH](https://etherscan.io/token/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2) and [USDC](https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48) addresses as well as the address of the [5 bp pool](https://etherscan.io/address/0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640).
- Lower the `atomicExchangeFeeRate` on ETH to 17 bp from 25 bp. This is done by calling the [`setAtomicExchangeFeeRate`](https://etherscan.io/address/0x5ad055A1F8C936FB0deb7024f1539Bb3eAA8dc3E#writeContract) with the aguments `0x73455448` and `1700000000000000` 

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

- The `setPoolForRoute` overrides the default route taken when trades take place for specific tokens. Currently the default route is the 30 bp pool, hoping through ETH pairs when no direct route from the `sourceCurrency` to the `destinationCurrency` exists.
- The `atomicExchangeFeeRate` is the fee paid on trades into a particular synth.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The motivation is the recent volume due to latency arbitrages which have been seen on chain. Updating the uniswap pool to point to a lower fee tier pool helps lean against latency arbitrage and allows us to lower fees on synth exchanges.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
