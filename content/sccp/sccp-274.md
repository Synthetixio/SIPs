---
sccp: 274
network: Ethereum
title: Add 1inch Direct Integration Cross Asset Swaps / Fusion Mode
author: Kaleb (@kaleb-keny)
status: Deprecated
created: 2023-01-20
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0xaf93b1a51f63d4f98c207beaf34e6a894ff67f90980c82ad47bfa21fb0c65ce2
type: Governance
---

# Simple Summary

Add the [fusion-enabled](https://1inch.io/fusion/) 1inch contract `0xa77c88abcaa770c54a6cfbfd0c586a475537bbc1` to Synthetix's DirectIntegration, with the following parameter set:

```
{'currencyKey': 'sBTC',
 'dexPriceAggregator': '0x228bCc970003Ca7588337604AFD9Fc5d92bF1C8B',
 'atomicMaxVolumePerBlock': 5m$,
 'atomicVolatilityUpdateThreshold': 10,
 'atomicExchangeFeeRate': 5 bp}

{'currencyKey': 'sUSD',
 'dexPriceAggregator': '0x228bCc970003Ca7588337604AFD9Fc5d92bF1C8B',
 'atomicMaxVolumePerBlock': 5m$}

{'currencyKey': 'sETH',
 'dexPriceAggregator': '0x228bCc970003Ca7588337604AFD9Fc5d92bF1C8B',
 'atomicMaxVolumePerBlock': 5m$,
 'atomicVolatilityUpdateThreshold': 10,
 'atomicExchangeFeeRate': 5 bp}
```

# Abstract

The DirectIntegration addresses are contracts setup by integrators, that are allowed to trade at specialized fees and parameters, given that they satisfy certain conditions. In 1inch's case, they abide by the CRV <> SNX <> CRV trading route. Below are the variables being configured in this SCCP:

- `dexPriceAggregator` is the uniswap aggregator in operation, it would be pointed towards the uniswap 5 bp pools.
- `atomicMaxVolumePerBlock` is the maximum sUSD volume allowed per block.
- `atomicExchangeFeeRate` is the fee rate paid on exchanges into a specific synth.

# Motivation

The main motivation is to boost volume, as fusion mode incorporates a small amount of latency, due to the trade being executed by 1inch keepers. Hence, we should be able to provide more competitive fees.

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
