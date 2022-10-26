---
sccp: 240
network: Ethereum & Optimism
title: Raising the target c-ratio to 400%
author: Gauntlet
status: Draft
created: 2022-10-25
type: Governance

---

## Simple Summary

A proposal to adjust one (1) risk parameter. We propose raising the target collateral ratio from 350% to 400% for both the Ethereum and Optimism markets.

The Spartan Council has indicated a potential interest in increasing c-ratio to 400% after the implementation of SIP-252. As such, this SCCP considers the risk and capital efficiency impacts of increasing c-ratio to 400% using the latest market data. 

Gauntlet runs simulation analysis on a daily basis. Simulation results can be found on the [Risk Dashboard](https://gov.gauntlet.network/synthetix). 

## Abstract



This set of parameter updates seeks to optimize risk and capital efficiency for the Synthetix protocol. Gauntlet recently published a [blog post](https://medium.com/gauntlet-networks/gauntlets-parameter-recommendation-methodology-8591478a0c1c) on our parameter recommendation methodology to provide more context to the community. 

Gauntlet's agent-based simulations use a wide array of varied input data that changes on a daily basis. This data includes but is not limited to user positions, asset volatility, asset correlation, asset collateral usage, DEX/CEX liquidity, trading volume, expected market impact of trades, and liquidator behavior. Our simulations tease out complex relationships between these inputs that cannot be simply expressed as heuristics.


| Parameter | Current Value | Recommended Value |
| -------- | -------- | -------- |
| SNX C-Ratio     | 350%     | 400%     |

## Motivation


The table below shows volatility and exchange volume data from 9/24 to 10/24. These are valuable metrics to build intuition but are not the only inputs our simulations take into account to make parameter recommendations. 

|Symbol| 9-24 Volatility| 10-24 Volatility| Volatility Change| Average Daily Volume Change (%)  |
| ------ | ---------------- | --------------- | ----------------- | ----------- |
| SNX   | 	  1.290     |  0.930  | 	-0.360   |   -41%   |

We provide parameter recommendations for both Optimism and Ethereum mainnet in this set of recommendations as they share the same debt pool. In simulation, Gauntlet's objective was to analyze the impact of the global debt pool and SNX stakers' positions as volatility increases. As we increased c-ratio from 350% to 400% in our simulations, we observed that the decrease in insolvencies and liquidations for equivalent volatility and liquidity scenarios was around 28% for insolvencies and about 86% for liquidations. More specifically, the 95th percentile of VaR decreases from $28.74M to $20.74M. With the significant VaR decrease and only a slight decrease in capital efficiency (mint usage) from 33.29% to 29.13%, we recommend raising the target c-ratio from 350% to 400%.

![](https://i.imgur.com/ra0XNU1.png)


The graph above shows the expected insolvent value of the protocol, given different market conditions and collateralization ratios. At the collateralization ratios of 350% and below, the insolvency risk is significantly higher than 400% and above.

![](https://i.imgur.com/keqpObk.png)



The graph above shows the total SNX liquidated with respect to collateralization ratio and market conditions. Liquidation risk is stable when the c-ratio is at 400% or above. 

![](https://i.imgur.com/kInELbv.png)

The above bar plots show the amount of sUSD that would need to be burned from stakers to claim rewards under different c-ratio values. The optimal parameters should be minimizing risk and maximizing staker benefits simultaneously. While there is a significantly higher sUSD burn amount of 32M across mainnet and Optimism associated with a c-ratio of 400% than the total burn amount of 18.5M for a c-ratio of 350%, the risk reductions to the protocol are significant.

SCCP-232 lowered the c-ratio from 400% to 350% temporarily with the intent to raise it back to 400% two weeks after the implementation of SIP-252. Since SIP-252 was implemented on October 20th, the c-ratio is currently scheduled to be raised on November 3rd. But due to the insolvency risk currently facing Synthetix based on current market conditions, we recommend that this change is made soon.

## Risk Dashboard



The community should use Gauntlet's [Synthetix Risk Dashboard](https://gov.gauntlet.network/synthetix) to understand better the updated parameter suggestions and general market risk in the Synthetix protocol. 

![](https://i.imgur.com/cJEID3k.png)

## Copyright



Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

*<sup>By approving this proposal, you agree that any services provided by Gauntlet shall be governed by the terms of service available at gauntlet.network/tos.<sup>*





