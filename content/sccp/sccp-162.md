---
sccp: 161
network: Ethereum
title: Update Parameters of Atomic Swap
author: KALEB (@kaleb-keny)
status: Draft
created: 2022-02-22
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes the following updates to Atomic Exchange Contracts: 
- Reduce `atomicPriceBuffer` on trades pertaining to `ETH` and `BTC` to zero
- Reduce `atomicExchangeFee` on trades into of `EUR` to 20 bp
- Increase `atomicMaxVolumePerBlock` from sUSD 5 million to sUSD 15 million

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->
The parameters being updated as are as follows
- The `atomicPriceBuffer` is a parameter that worsens the chainlink price in the calculation of atomic exchange prices.
- The `atomicExchangeFee` is the fee applied on trades into a certain synth
-  The `atomicMaxVolumePerBlock` is the max volume allowed for trading per block


## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

This SCCP aims at improving the configuration of the atomic exchange function as to promote more exchange volume and integrations. Below are the main motiviations behind these parameters changes:
- To calibrate the `atomicExchangeBuffer`, we can see from the [BTC](https://ibb.co/ZmP1yKL) and [ETH](https://ibb.co/SfY5FMX) price charts that a 30 bp fee is mroe than enough to cover 90% of the delta observed between the AMM price and the cex price. Therefore, front-running oracle updates is considerably harder as the round trip with sUSD is 60 bp.
- To calibrate the fee applied on exchanges into `EUR`, we can look at the delta between the price observed purely from [chainlink against prices seen on cex](https://ibb.co/YhbgWX5) which reveals that a 20 bp fee covers most of the delta.
- Finally on the `atomicMaxVolumePerBlock` parameter, given the liquidity on `ETH` and `BTC` uni-v3 pools, and the large number of trades that occur throughout the day, it is too costly to take manipulate the pools in order to move the price, because of chainlink protection. Furthermore, trades on `EUR` can occur purely at chainlink prices with no issue. So raising the cap should not oracle manipulation  risks on snx stakers because of the limited number of synths offered with atomic exchanges.


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
