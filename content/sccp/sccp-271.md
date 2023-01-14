---
sccp: 271
network: Optimism
title: Increase PerpsV2 Keeper Incentives
author: David (@davidvuong)
status: Implemented
created: 2023-01-11
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0xa438a8474207688b7ee31fb3c5c437d7c97b907f3922affbc3e3360c9ce9e80d
---

# Simple Summary

Increase `minKeeperFee` from `1000000000000000000` (1 sUSD) to `2000000000000000000` (2 sUSD)

# Abstract

`minKeeperFee` defines the amount in sUSD to pay keepers for executing delayed orders (both on-chain and off-chain). This SCCP proposes to double the amount from 1 sUSD to 2 sUSD.

# Motivation

The current sUSD amount paid to keepers is exactly 1 sUSD. 1 sUSD barely covers the amount required in gas to execute an order, specifically off-chain delayed orders. Depending on network activity and the price of ETH, sometimes keepers even make a loss. The cause for this is largely due to the gas requirements needed for uploading and updating price data on-chain before executing an order.

This change should be made to ensure orders are executed in a timely manner by many individuals/entities. It directly improves protocol decentralisation, general protocol stability, and offers a better user experience for traders.

There are some caveats to consider when updating `minKeeperFee`:

- `minKeeperFee` is deducted from a trader's deposited margin.
- It's the same amount used for both off-chain and on-chain orders but on-chain orders have much lower gas requirements.
- It's also used to specify the minimum amount a keeper will receive upon successfully liquidating a position. That said, rewards received from liquidation tend to be far greater than this minimum.

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
