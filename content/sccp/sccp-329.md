---
sccp: 329
network: Base
title: Increase Max Perp Positions Per Accounts - Perps V3
author: Kaleb (@kaleb-keny)
status: Vote_Pending
type: Governance
---

# Simple Summary

This SCCP proposes to implement following:
- Increase the max number of positions per account from 4 to 10
- Increase the l2 gas units from 1.7m to 2.45m gas units

# Abstract

The max number of perp positions per account is a limitation put in place in order to limit the gas consumption per trade settlement.
The l2 gas units represents the compensation paid the keeper for executing pending orders. The larger is the number of potential positions, the higher is the gas paid in order to process a single transaction.

# Motivation

The motivation is to improve the user experience by allowing more positions to be opened per single account.

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).


