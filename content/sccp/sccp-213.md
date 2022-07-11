---
sccp: 213
network: Ethereum
title: Change Oracle Source To 30BP ETH/USDC
author: Degen(@CasualDegen)
status: Draft
created: 2022-07-11
type: Governance
---

## Simple Summary

This SCCP proposes to revert the change of the oracle source for atomic swaps done in [SCCP-210](https://sips.synthetix.io/sccp/sccp-210/).
SCCP-210 changed the uni-v3 oracle source from the 30bp ETH/USDC pool to the 5bp one.

This SCCP proposes to implement the following:
- Update the fee tier of the wETH/wUSDC pool from the [5 bp pool](https://etherscan.io/address/0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640) to the [30 bp pool](https://etherscan.io/address/0x8ad599c3A0ff1De082011EFDDc58f1908eb6e6D8). This is done by calling the [`setPoolForRoute`](https://etherscan.io/address/0xf120f029ac143633d1942e48ae2dfa2036c5786c#writeContract), taking in arguments of the [wETH](https://etherscan.io/token/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2) and [USDC](https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48) addresses as well as the address of the [30 bp pool](https://etherscan.io/address/0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8).

## Abstract

Below is description of the parameters involved:
- The `setPoolForRoute` overrides the default route taken when trades take place for specific tokens.

## Motivation

After implementing [SCCP-210](https://sips.synthetix.io/sccp/sccp-210/) there is a significant drop in atomic swap volume (~90%+ less).
So instead of lowering the atomic swap fees, which could turn out unfavourable for stakers, an optimal alternative is to revert back to the old oracle source.
Furhter analysis would be done in order to find out the best outcome for stakers and traders as to changing atomic swap fee and oracle source pool.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).