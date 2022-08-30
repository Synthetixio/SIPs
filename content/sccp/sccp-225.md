---
sccp: 225
network: Ethereum & Optimism
title: Raising the target c-ratio to 450%
author: Gauntlet
status: Draft
created: 2022-08-29
type: Governance

---


## Simple Summary

A proposal to adjust one (1) risk parameter. We propose raising the target collateral ratio from 400% to 450% for both the Ethereum and Optimism markets.

## Abstract



This set of parameter updates seeks to optimize for risk and capital efficiency for the Synthetix protocol. Gauntlet recently published a [blog post](https://medium.com/gauntlet-networks/gauntlets-parameter-recommendation-methodology-8591478a0c1c) on our parameter recommendation methodology to provide more context to the community. This is Gauntlet's third set of parameter recommendations to Synthetix.

Gauntlet's agent-based simulations use a wide array of varied input data that changes on a daily basis. These data include but are not limited to user positions, asset volatility, asset correlation, asset collateral usage, DEX/CEX liquidity, trading volume, expected market impact of trades, and liquidator behavior. Our simulations tease out complex relationships between these inputs that cannot be simply expressed as heuristics.


| Parameter | Current Value | Recommended Value |
| -------- | -------- | -------- |
| SNX C-Ratio     | 400%     | 450%     |

## Motivation


The table below shows volatility and exchange volume data from 07/28 to 08/28. These are valuable metrics to build intuition but are not the only inputs our simulations take into account to make parameter recommendations. 

|Symbol| 08-28 Volatility| 07-28 Volatility| Volatility Change| Average Daily Volume Change (%)  |
| ------ | ---------------- | --------------- | ----------------- | ----------- |
| SNX   | 	  1.318     |  1.447  | 	-0.129   |  1.598    |

Unlike previous simulations, we provide parameter recommendations for both Optimism and Ethereum mainnet in this set of recommendations as they share the same debt pool. We also prolong the simulation time range from one to two days to allow for more liquidation events in our empirical analysis. In addition, the param recs shall lower the risk level ahead of the upcoming ETH merge event. In simulation, Gauntlet's objective was to analyze the impact of the global debt pool and SNX stakers' positions as volatility increases. As we increased c-ratio from 400% to 450% in our simulations, we observed that the decrease in liquidations and insolvencies for equivalent volatility and liquidity scenarios was around 20.5% for insolvencies and about 35% for liquidations. Furthermore, the 95th percentile of VaR decreases from $26.26M to $16.18M. With the significant VaR decrease and only a slight decrease in capital efficiency (mint usage), we recommend raising the target c-ratio from 400% to 450%.

![](https://i.imgur.com/ooXYgF4.png)



The graph above shows the expected insolvent value of the protocol, given different market conditions and collateralization ratios. At collateralization ratios of 250% to 400%, the insolvency risk is significantly higher than 450% and above.

![](https://i.imgur.com/I0RrTEU.png)



The graph above shows the total SNX liquidated with respect to collateralization ratio and market conditions. Liquidation risk is minimized and stable when the c-ratio is at 450% or above.  


![](https://i.imgur.com/etdGgyd.jpg)


## Risk Dashboard



The community should use Gauntlet's [Synthetix Risk Dashboard](https://gov.gauntlet.network/synthetix) to understand better the updated parameter suggestions and general market risk in the Synthetix protocol. 

## Copyright



Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

*<sup>By approving this proposal, you agree that any services provided by Gauntlet shall be governed by the terms of service available at gauntlet.network/tos.<sup>*



