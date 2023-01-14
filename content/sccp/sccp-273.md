---
sccp: 273
network: Ethereum
title: Update 1inch Direct Integration Cross Asset Swaps / Fusion Mode
author: Kaleb (@kaleb-keny)
status: Draft
created: 2023-01-14
type: Governance
---

# Simple Summary

Switch the 1inch Direct Integration addresses to utilize the [Fusion](https://1inch.io/fusion/) offering and lower the fee on exchanges to `sETH` and `sBTC` to 5 bp from 7 bp and 10 bp respectively:

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

The DirectIntegration addresses are contracts setup by integrators, that are allowed to trade at specialized fees and parameters, given that they satisfy certain conditions. In 1inch's case, they abide by the CRV <> SNX <> CRV trading route.

The new full set of 1inch DirectIntegration addresses is as follows:
-  `ADDRESS_HERE`

# Motivation

The main motivation is that fusion mode is a better UX overally, as it offers MEV protected, zero gas fee transactions to users. Furthermore, putting the transaction execution in the hands of the 1inch solvers and settlement bots incorporates a small but important amount of latency which allows us to lower fees further.

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
