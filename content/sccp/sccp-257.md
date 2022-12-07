---
sccp: 257
network: Ethereum
title: Update Cross Asset Swaps - 1inch Integration
author: Kaleb (@kaleb-keny)
status: Vote_Pending
created: 2022-12-05
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0xc53fb10a7e2dc3effc19ae1352dc550faac5f5c56f45784e7000a08ee11625a1
type: Governance
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->
The below parameter changes are proposed on the  [1inch integration addresses](https://sips.synthetix.io/sips/sip-288/):
- Switch to the a new [dex price aggregator](https://etherscan.io/address/0x228bCc970003Ca7588337604AFD9Fc5d92bF1C8B), which automatically routes throught 5 bp uniswap pools
- Lower the atomic exchange fee from 35 bp to 10 bp on trade to/from sBTC
- Lower the atomic exchange fee from 15 bp to 7 bp on trade to/from sETH
- Increase the maximum atomic exchange volume between sBTC and sUSD to 5 million

Note that these changes are to be implemented once curve implements the curve fee and A coefficient proposals outlined [here](https://gov.curve.fi/t/update-seth-susd-curve-pool-parameters-atomic-swaps/4592/5). Also this SCCP supercedes the changes denoted in [SCCP-255](https://sips.synthetix.io/sccp/sccp-255/).

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The parameters being changed are as follows:

- The `dexPriceAggregator` is the contract used to get the relevant uniswap prices from the chain.
- The `atomicExchangeFeeRate` is the fee levied on trades into or from a certain synth.
- The `atomicMaxVolumePerBlock` is the maximum volume possible to trade atomically within a single block.

Below are the `DirectIntegration` parameters overrides applied on the 1inch integration addresses, specified in **SIP-288**:

```
{'currencyKey': 'sBTC',
 'dexPriceAggregator': '0x228bCc970003Ca7588337604AFD9Fc5d92bF1C8B',
 'atomicMaxVolumePerBlock': 5m$,
 'atomicVolatilityUpdateThreshold': 10,
 'atomicExchangeFeeRate': 10 bp}

{'currencyKey': 'sUSD',
 'dexPriceAggregator': '0x228bCc970003Ca7588337604AFD9Fc5d92bF1C8B',
 'atomicMaxVolumePerBlock': 5m$}

{'currencyKey': 'sETH',
 'dexPriceAggregator': '0x228bCc970003Ca7588337604AFD9Fc5d92bF1C8B',
 'atomicMaxVolumePerBlock': 5m$,
 'atomicVolatilityUpdateThreshold': 10,
 'atomicExchangeFeeRate': 7 bp}
```

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The primary motivation is to boost the atomic exchange volume, taking into account protection against latency attacks via the curve slippage.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).