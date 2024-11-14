---
sccp: 364
title: Update Keeper Gas Units
network: Arbitrum & Base
status: Implemented
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x9998aeb7cf3ea0cf077ae1b7b9f99c80b04ac60e47dc6aa68d93c0d90edffc75
type: Governance
created: 2024-11-14
author: Kaleb
---

# Simple Summary

This SCCP proposes to update the keeper gas units as per the below:


|      **Base**     | **Previous** | **New** |
|:-----------------:|:------------:|:-------:|
|     l1 settle     |      23k     |   22k   |
|     l2 settle     |     5.5m     |   7.2m  |
|      l1 flag      |     4.5k     |    3k   |
|      l2 flag      |     0.45m    |   7.2m  |
|    tx size flag   |      3k      |   0.9k  |
|    l1 liquidate   |     26.6k    |  28.5k  |
|    l2 liquidate   |     2.3m     |   1.2m  |
| tx size liquidate |     5.05k    |   5.5k  |



| **Arbitrum** | **Previous** | **New** |
|:------------:|:------------:|:-------:|
|   l2 settle  |      4m      |    7m   |
|    l2 flag   |     3.6m     |   7.5m  |
| l1 liquidate |      34k     |   5.5k  |
| l2 liquidate |     2.5m     |    2m   |



# Motivation

The parameter updates are in light of the recent changes to the contract implementations on arbitrum and base, which incorporate multicollateral perps. The new implementations require the above update to the gas parameters in order to ensure that keepers continue to be incentivized to settle orders and execute liquidations.


# Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
