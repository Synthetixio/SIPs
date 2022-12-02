---
sccp: 255
network: Ethereum
title: Update Atomic Swap Parameters
author: Kaleb (@kaleb-keny)
status: Vote_Pending
created: 2022-12-02
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x3118bd14114a11e58b6a16232225031394eb64e0ca8b84b49aef35cbd24e52b5
type: Governance
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->
The below parameter changes are proposed:
- Update the fee tier of the wETH/wUSDC pool from the [30 bp pool](https://etherscan.io/address/0x8ad599c3A0ff1De082011EFDDc58f1908eb6e6D8) to the [5 bp pool](https://etherscan.io/address/0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640). This is done by calling the [`setPoolForRoute`](https://etherscan.io/address/0x9645C7de2DBe8AAda01868cAa393cB7e5253268c#writeContract#F3), taking in arguments of the [wETH](https://etherscan.io/token/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2) and [USDC](https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48) addresses as well as the address of the [5 bp pool](https://etherscan.io/address/0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640).
- Lower the sETH `atomicExchangeFeeRate` on 1inch integration addresses, mentioned in [SIP-288](https://sips.synthetix.io/sips/sip-288/) to 7 bp.

The above changes are to be implemented only following Curve implementing the changes requested [here](https://gov.curve.fi/t/update-seth-susd-curve-pool-parameters-atomic-swaps/4592). It is worth nothing that fees might be lowered further in the future depending on incoming data.


## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The parameters being changed are as follows:

- The `atomicExchangeFee` is the fee applied on trades into a certain synth.
- The `setPoolForRoute` overrides the default route taken when trades take place for specific tokens.


Below are the `DirectIntegration` parameters of the 1inch addresses, specified in SIP-288:

```
{'currencyKey': 'sETH',
 'dexPriceAggregator': '0x9645C7de2DBe8AAda01868cAa393cB7e5253268c',
 'atomicMaxVolumePerBlock': 5m$,
 'atomicVolatilityUpdateThreshold': 10,
 'atomicExchangeFeeRate': 7 bp}
```

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The primary motivation is to boost the atomic exchange volume, taking into account protection against latency attacks via the curve slippage.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).