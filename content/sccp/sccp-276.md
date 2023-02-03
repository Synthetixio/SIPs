---
sccp: 276
network: Ethereum
title: Update 1inch Fusion Contracts
author: Kaleb (@kaleb-keny)
status: Vote_Pending
created: 2023-02-03
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x70c0f866dee5b94d6a0bac937e67bcd48c8f6a624ade3a0a06031750be10b2a2
type: Governance
---

# Simple Summary

This SCCP proposes to revert `0xa77c88abcaa770c54a6cfbfd0c586a475537bbc1` access the standard fees until 1inch updates their contracts, expected early next week.

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

The contract setup by 1inch is no longer suitable, as it does not have the necessary fusion-mode protections that enforce trade delay. A new contract is being created for the atomic exchange offering and is expected to be integrated the coming few days.

# Motivation

The main motivation is to lean against latency attacks where the proposed low fees were proposed with the assumption that fusion trades would be performed. Without the latter assurances, the protocol could be exposed to latency attacks.


# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
