---
sccp: 215
network: Optimism
title: Lower `minKeeperFee` to 1 sUSD
author: Kaleb (@kaleb-keny)
status: Draft
created: 2022-07-13
type: Governance
---

## Simple Summary

This SCCP proposes to lower the `minKeeperFee` to 1 sUSD from 5 sUSD.


## Abstract

The `minKeeperFee` is used for two purposes:
1) It's the minimal fee paid for a liquidation to a keeper (for small positions).
2) It's the constant fee paid to a keeper for executing a next-price order. The fee is withheld from the user when submitting the order.
This means that small next-price orders aren't viable when executed by keepers (because of the imposed fixed fee).


## Motivation

The reason behind the decrease is because of the low cost of executing transactions on optimism, which results in keepers needing to be paid far less in order to fulfill next price orders and liquidations.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).