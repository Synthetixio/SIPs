---
sccp: 299
network: Ethereum
title: Update 1inch Cross Asset Swap Direct Integration
author: Kaleb (@kaleb-keny)
status: Deprecated
created: 2023-04-27
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0xdf6ce3aba80af607207c88c9132cfe49dfa1384b13d51241f8bcdbe7c3399ba6
type: Governance
---

# Simple Summary

This SCCP proposes to apply the below `DirectIntegration` parameters on the new 1inch Cross-Asset Swap contract `0x62C9c2AcE3e86eee3016c7e73Df70eDd8a45AcE9`:

```
{'currencyKey': 'sUSD',
 'dexPriceAggregator': '0x228bCc970003Ca7588337604AFD9Fc5d92bF1C8B',
 'atomicMaxVolumePerBlock': 15m$,
 'atomicExchangeFeeRate': 0}

{'currencyKey': 'sETH',
 'dexPriceAggregator': '0x228bCc970003Ca7588337604AFD9Fc5d92bF1C8B',
 'atomicMaxVolumePerBlock': 15m$,
 'atomicExchangeFeeRate': 10 bp}

{'currencyKey': 'sBTC',
 'dexPriceAggregator': '0x228bCc970003Ca7588337604AFD9Fc5d92bF1C8B',
 'atomicMaxVolumePerBlock': 15m$,
 'atomicExchangeFeeRate': 10 bp}
```

# Abstract

The DirectIntegration addresses are contracts setup by integrators, that are allowed to trade at specialized fees and parameters, given that they satisfy certain conditions. In 1inch's case, they abide going throught the fusion offering which incorporates around a block delay for filling an order which leads to fresh uniswap prices being used:
- `dexPriceAggregator` is the uniswap aggregator in operation, it would be pointed towards the uniswap 5 bp pools.
- `atomicMaxVolumePerBlock` is the maximum sUSD volume allowed per block.
- `atomicExchangeFeeRate` is the fee rate paid on exchanges into a specific synth.


# Motivation

The primary purpose is to help boost cross-asset swap volume on ethereum and switch over to the new 1inch addresses, with the old ones being deprecated.


# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
