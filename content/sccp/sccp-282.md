---
sccp: 282
network: Ethereum
title: Update Atomic Swap Parameters
author: Kaleb (@kaleb-keny)
status: Vote_Pending
created: 2023-02-16
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0xee957aa073f08675ee8a4a08e628065f23aa28dc45b784bfff3989aaeb46c551
type: Governance
---

# Simple Summary

This SCCP proposes to apply the below `DirectIntegration` parameters on the new 1inch Cross-Asset Swap contract `0xDEcf04cA46D287b3cb99692AD512E568Ba276140`:

```
{'currencyKey': 'sUSD',
 'dexPriceAggregator': '0x228bCc970003Ca7588337604AFD9Fc5d92bF1C8B',
 'atomicMaxVolumePerBlock': 10m$,
 'atomicExchangeFeeRate': 0}

{'currencyKey': 'sETH',
 'dexPriceAggregator': '0x228bCc970003Ca7588337604AFD9Fc5d92bF1C8B',
 'atomicMaxVolumePerBlock': 10m$,
 'atomicExchangeFeeRate': 10 bp}

{'currencyKey': 'sBTC',
 'dexPriceAggregator': '0x228bCc970003Ca7588337604AFD9Fc5d92bF1C8B',
 'atomicMaxVolumePerBlock': 10m$,
 'atomicExchangeFeeRate': 10 bp}
```

# Abstract

The DirectIntegration addresses are contracts setup by integrators, that are allowed to trade at specialized fees and parameters, given that they satisfy certain conditions. In 1inch's case, they abide going throught the fusion offering which incorporates around a block delay in order to fill:
- `dexPriceAggregator` is the uniswap aggregator in operation, it would be pointed towards the uniswap 5 bp pools.
- `atomicMaxVolumePerBlock` is the maximum sUSD volume allowed per block.
- `atomicExchangeFeeRate` is the fee rate paid on exchanges into a specific synth.


# Motivation

The main motivation is to re-enable the cross-asset exchange functionality on 1inch fusion after it was disabled in [SCCP-276](https://sips.synthetix.io/sccp/sccp-276/).


# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
