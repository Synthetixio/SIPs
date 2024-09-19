---
sccp: 353
title: Update Arbitrum Keeper Gas Costs
network: Arbitrum
status: Vote_Pending
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0xdf6585bf2337b4c4e1897669e51bb9d598c1833ba46cb3b90dd30b8b01197323
type: Governance
created: 2024-09-19
author: Kaleb
---

# Simple Summary

This SCCP proposes to update the keeper gas parameters, initially outlined in [SCCP-347](https://sips.synthetix.io/sccp/sccp-347/) to the below:

## Keeper Reward Parameters:

|     **Parameter**     | **Value** |
|:---------------------:|:---------:|
|      l1SettleGas      |   30k     |
|      l2SettleGas      |    4M     |
|       l1FlagGas       |   5.5k    |
|       l2FlagGas       |   3.6M    |
|     l1LiquidateGas    |   34k     |
|     l2LiquidateGas    |  2.5M     |


# Abstract

The parameters configurations above pertain to the gas compensation paid to keepers for settling orders and for executing liquidations.


# Motivation

The initial parameters were configured based on Arbitrum Sepolia testing, however, given the recent mainnet launch, the parameters were reviewed base on mainnet tests.

# Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
