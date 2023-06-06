---
sccp: 251
network: Ethereum
title: Update Atomic Exchange Parameters - 1inch Integration
author: Kaleb (@kaleb-keny)
status: Deprecated
created: 2022-11-28
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0xb97c17a34289b76ccc19222ec4202dd268e159bf755a49e0f8124dedeca10932
type: Governance
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Lower the atomic exchange fee on trades into sETH, with respect to the 1inch integration addresses specified in [SIP-288](https://sips.synthetix.io/sips/sip-288/), to 15 bp from 20 bp.
Increase the `atomicMaxVolumePerBlock` to 5m sUSD from 3m sUSD on sETH and sUSD. 

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The parameters being changed are as follows:
- The `atomicExchangeFee` is the fee applied on trades into a certain synth.
- The `atomicMaxVolumePerBlock` check is done on the source  currency key.

Below are the `DirectIntegration` parameters of the 1inch addresses, specified in [SIP-288](https://sips.synthetix.io/sips/sip-288/):

```
{'currencyKey': 'sETH',
 'dexPriceAggregator': '0x9645C7de2DBe8AAda01868cAa393cB7e5253268c' (uses 30 bp uni pool),
 'atomicMaxVolumePerBlock': 5m$,
 'atomicVolatilityUpdateThreshold': 10,
 'atomicExchangeFeeRate': 15 bp}
```

```
{'currencyKey': 'sUSD',
 'dexPriceAggregator': '0x9645C7de2DBe8AAda01868cAa393cB7e5253268c' (uses 30 bp uni pool),
 'atomicMaxVolumePerBlock': 5m$,
 'atomicExchangeFeeRate': 0 bp}
```

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The primary motivation is to boost the atomic exchange volume, taking into account protection against latency attacks via the curve slippage. 

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).