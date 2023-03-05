---
sccp: 256
network: Ethereum
title: Update Atomic Swap Parameters
author: Kaleb (@kaleb-keny)
status: Implemented
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0xc336aec051699eccaa2d5ed45b79abdc36452cf1a181c30ab5065742dac9698d
created: 2022-12-05
type: Governance
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->
The below parameter changes are proposed:
- Switch to the a new [dex price aggregator](https://etherscan.io/address/0x228bCc970003Ca7588337604AFD9Fc5d92bF1C8B), which automatically routes throught 5 bp uniswap pools.
- Increase the standard sBTC `atomicExchangeFeeRate` to 50 bp from 35 bp.
- Increase the atomic exchange volume to sUSD 5 million from sUSD 100k 


## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The parameters being changed are as follows:

- The `dexPriceAggregator` is the contract used to get the relevant uniswap prices from the chain.
- The `atomicExchangeFeeRate` is the fee levied on trades into or from a certain synth.
- The `atomicMaxVolumePerBlock` is the maximum volume possible to trade atomically within a single block.



## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The primary motivation is to improve the user experience around trades taking place with forex synths, as convex forex farmers are having to break down trades into sUSD 100k batches. This is considered to be safe to do as the risk of latency attacks is minimized at 50 bp standard (non Direct Integration) fees.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).