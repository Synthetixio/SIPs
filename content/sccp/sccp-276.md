---
sccp: 276
network: Ethereum
title: Update 1inch Fusion Contracts
author: Kaleb (@kaleb-keny)
status: Deprecated
created: 2023-02-03
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0xf6126518af4d3e91698935837e7c72cd99df684336e82bea34a39edb72b84025
type: Governance
---

# Simple Summary

This SCCP proposes to revert `0xa77c88abcaa770c54a6cfbfd0c586a475537bbc1` access the DirectIntegration fees mentioned below until 1inch updates their contracts, expected early next week.

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

The contract setup by 1inch is no longer suitable for atomic swaps, as it does not have the necessary fusion-only protections that enforce a trade delay. A new contract is being worked by the 1inch team, that incorporates those protections and is expected to be integrated the coming few days.

# Motivation

The main motivation is to lean against latency attacks where the proposed low fees are not appropriate for non-fusion based trades. Hence, reverting access to the previous contract would reduce the change of latency attacks on the protocol.


# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
