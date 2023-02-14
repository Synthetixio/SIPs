---
sccp: 279
network: Ethereum
title: Increase ETH Wrapper Capacity
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2023-02-13
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x1cf48f2e059c02d1cbad3bbce3e0c3af38ba7025bb34b86bdf4268f008e9326b
type: Governance
---

# Simple Summary

This SCCP proposes to increase the maxTokenAmount on the [ETH wrapper](https://etherscan.io/address/0xCea392596F1AB7f1d6f8F241967094cA519E6129) from 15k ETH to 20k ETH.

# Abstract

The `maxTokenAmount` is the max amount allowed to be used to issue a synth with a underlying specified in the wrapper contract, in this case it's WETH.

# Motivation

The main motivation is to lean against the positive skew ETH on the debt pool, which is around 45%. It is worth noting that currently ETH and DAI wrappers are at full capacity on the ethereum network and the sUSD/sETH pegs at a slight premium. Note that if the 5K ETH get wrapped and sent to sUSD the skew would be lowered to around 40%.

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
