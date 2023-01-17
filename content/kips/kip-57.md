---
kip: 57
title: Remove fees for Cross Margin V1
status: Draft
author: Troy (@tburm)
created: 2023-01-16
---

## Summary

Set all fee parameters for Cross Margin V1 orders to 0 bps.

## Abstract

Limit and stop markets orders on the Cross Margin V1 implementation charge a 3 bps fee on each order. With the upcoming deprecation of these markets and considering other scaling limitations, these fees should be reduced to provide traders a more reliable frontend for trading.

## Motivation

1. Synthetix perps will be deprecated in the near future. Kwenta should provide traders who want to migrate positions to V2 with reduced fees in order to preserve their margin.
2. The frontend has experienced a limitation on the number of accounts that can be indexed quickly by the subgraphs. Lowering fees will allow for adjustments to be made to track fewer contracts and re-enable historical position tracking.

## Specification

Adjust the following parameters on the `MarginBaseSettings` contract [link](https://optimistic.etherscan.io/address/0x8954c7b1417e3de398c7f33520ebae142929ba2a):

| Parameter  | Old value | New Value |
| ----------- | ---------- | ---------- |
| `tradeFee` | 2 | 0 |
| `limitOrderFee` | 3 | 0 |
| `stopOrderFee` | 3 | 0 |

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
