---
sccp: 263
network: Ethereum
title: Cross Asset Swap Parameters / 1inch Integration
author: Kaleb (@kaleb-keny)
status: Vote_Pending
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x8f3098d5d3d723bbaef5b8e674cc6ca8e3b814d4c341249e8ba7dfc05bf1c5af
created: 2022-12-14
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to lower the `atomicTwapWindow` on 1inch's atomic exchange integration [addresses](https://sips.synthetix.io/sips/sip-288/) to 60 from 1800 seconds.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

`atomicTwapWindow` represents the length of time window, where the relevant uniswap average price is fetched. 

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The TWAP window was lengthened as a security precaution, in order to lean agaisnt latency attacks in [SCCP-227](https://sips.synthetix.io/sccp/sccp-227/), however, with the 1inch / Crv integration in full swing, the twap window can be reduced safely to provide more accurate pricing which encourages more arbitrage between the different curve pools.

```
{'currencyKey': 'sBTC',
 'dexPriceAggregator': '0x228bCc970003Ca7588337604AFD9Fc5d92bF1C8B',
 'atomicMaxVolumePerBlock': 5m$,
 'atomicTwapWindow': 60,
 'atomicVolatilityUpdateThreshold': 10,
 'atomicExchangeFeeRate': 10 bp}

{'currencyKey': 'sUSD',
 'dexPriceAggregator': '0x228bCc970003Ca7588337604AFD9Fc5d92bF1C8B',
 'atomicTwapWindow': 60,
 'atomicMaxVolumePerBlock': 5m$}

{'currencyKey': 'sETH',
 'dexPriceAggregator': '0x228bCc970003Ca7588337604AFD9Fc5d92bF1C8B',
 'atomicTwapWindow': 60,
 'atomicMaxVolumePerBlock': 5m$,
 'atomicVolatilityUpdateThreshold': 10,
 'atomicExchangeFeeRate': 7 bp}

```



## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
