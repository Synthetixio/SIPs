---
sccp: 249
network: Ethereum & Optimism
title: Raising the target c-ratio to 425%
author: Gauntlet
status: Rejected
created: 2022-11-22
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x3979d7c84aefa3197204ef488dce1c6832a6c29a6680259b785f3abdb485358c
type: Governance

---

## Simple Summary

A proposal to adjust one (1) risk parameter. We propose raising the target collateral ratio from 400% to 425% for both the Ethereum and Optimism markets.

Gauntlet runs simulation analysis on a daily basis. Simulation results can be found on the [Risk Dashboard](https://gov.gauntlet.network/synthetix). 

## Abstract

This set of parameter updates seeks to optimize risk and capital efficiency for the Synthetix protocol. Gauntlet recently published a [blog post](https://medium.com/gauntlet-networks/gauntlets-parameter-recommendation-methodology-8591478a0c1c) on our parameter recommendation methodology to provide more context to the community. 

Gauntlet's agent-based simulations use a wide array of varied input data that changes on a daily basis. This data includes but is not limited to user positions, asset volatility, asset correlation, asset collateral usage, DEX/CEX liquidity, trading volume, expected market impact of trades, and liquidator behavior. Our simulations tease out complex relationships between these inputs that cannot be simply expressed as heuristics.


| Parameter | Current Value | Recommended Value |
| -------- | -------- | -------- |
| SNX C-Ratio     | 400%     | 425%     |

## Motivation


The table below shows volatility and exchange volume data from 10/21 to 11/21. These are valuable metrics to build intuition but are not the only inputs our simulations take into account to make parameter recommendations. 

|Symbol| 10-21 Volatility| 11-21 Volatility| Volatility Change| Average Daily Volume Change (%)  |
| ------ | ---------------- | --------------- | ----------------- | ----------- |
| SNX   | 	  0.940     |  1.403  | 	+0.463   |   +40.5%   |



We provide parameter recommendations for both Optimism and Ethereum mainnet in this set of recommendations as they share the same debt pool. In simulation, Gauntlet's objective was to analyze the impact of the global debt pool and SNX stakers' positions as volatility increases. As we increased c-ratio from 400% to 425% in our simulations, we observed that the decrease in insolvencies and liquidations for equivalent volatility and liquidity scenarios was around 90% for insolvencies and about 91% for liquidations. More specifically, the 95th percentile of VaR decreases from $4.96M to $513k. With the significant VaR decrease and only a slight decrease in capital efficiency (mint usage) from 36.13% to 34.00%, we recommend raising the target c-ratio from 400% to 425%. Our simulation analysis also considered raising the target c-ratio to 450%, but found that it provided little marginal benefit with VaR decreasing to $396k and LaR decreasing to $1.99M.

![insolvency heatmap](https://imgur.com/bbUGzTb.png)


The graph above shows the expected insolvent value of the protocol, given different market conditions and collateralization ratios. At the collateralization ratios of 400% and below, the insolvency risk is significantly higher than 425% and above.

![liquidations heatmap](https://imgur.com/7d46NNb.png)


The graph above shows the total SNX liquidated with respect to collateralization ratio and market conditions. Liquidation risk is stable when the c-ratio is at 425% or above. 

![sUSD burn](https://imgur.com/HLKQz5s.png)

The above bar plots show the amount of sUSD that would need to be burned from stakers to claim rewards under different c-ratio values. The optimal parameters should be minimizing risk and maximizing staker benefits simultaneously. In order for stakers to claim rewards, there would need to be an additional 3.5M burned on Mainnet (a 13% increase) and an additional 1.3M burned on Optimism (a 24% increase).


## Risk Dashboard



The community should use Gauntlet's [Synthetix Risk Dashboard](https://gov.gauntlet.network/synthetix) to understand better the updated parameter suggestions and general market risk in the Synthetix protocol. 

![dash 1](https://imgur.com/uxIDoqF.png)
![dash 2](https://imgur.com/hHYgkI9.png)
![dash 3](https://imgur.com/3zEACHq.png)

## Copyright



Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

*<sup>By approving this proposal, you agree that any services provided by Gauntlet shall be governed by the terms of service available at gauntlet.network/tos.<sup>*





