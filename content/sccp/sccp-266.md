---
sccp: 266
network: Ethereum & Optimism
title: Parameter Changes for the Liquidation Ratio, Liquidation Penalty, and Self Liquidation Penalty
author: Gauntlet
status: Rejected
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0xc9efec772370298862f9da70a3791f1565b8dc0bda23539c55f7d6b7839799c2
created: 2022-12-21
type: Governance

---


## Simple Summary

A proposal to adjust three (3) risk parameters:

* decrease the Liquidation Ratio from 175% to 160%
* decrease the Liquidation Penalty from 75% to 60%
* decrease the Self Liquidation Penalty from 70% to 50%

Gauntlet runs simulation analysis on a daily basis. Simulation results can be found on the [Risk Dashboard](https://gov.gauntlet.network/synthetix). 

## Abstract

This set of parameter updates seeks to optimize risk and capital efficiency for the Synthetix protocol. Gauntlet recently published a [blog post](https://medium.com/gauntlet-networks/gauntlets-parameter-recommendation-methodology-8591478a0c1c) on our parameter recommendation methodology to provide more context to the community. 

Gauntlet's agent-based simulations use a wide array of varied input data that changes on a daily basis. This data includes but is not limited to user positions, asset volatility, asset correlation, asset collateral usage, DEX/CEX liquidity, trading volume, expected market impact of trades, and liquidator behavior. Our simulations tease out complex relationships between these inputs that cannot be simply expressed as heuristics.


| Parameter | Current Value | Recommended Value |
| -------- | -------- | -------- |
| Liquidation Ratio     | 175%     | 160%     |
| Liquidation Penalty     | 75%     | 60%     |
| Self Liquidation Penalty     | 70%     | 50%     |

## Motivation


The table below shows volatility and exchange volume data from 11/20 to 12/20. These are valuable metrics to build intuition but are not the only inputs our simulations take into account to make parameter recommendations. 

|Symbol| 11-20 Volatility| 12-20 Volatility| Volatility Change| Average Daily Volume Change (%)  |
| ------ | ---------------- | --------------- | ----------------- | ----------- |
| SNX   | 	0.773    |  1.403  | 	-0.630   |   -58.6%  |



We provide parameter recommendations for both Optimism and Ethereum mainnet in this set of recommendations as they share the same debt pool. We note, however, that Optimism stakers are generally less risky: the Optimism positions in our simulations comprised 25% of the VaR and 21% of LaR.

In simulation, Gauntlet's objective was to analyze the impact of the global debt pool and SNX stakers' positions as volatility increases. As we adjusted the parameters in our simulation as described above, we observed that the decrease in insolvencies and liquidations for equivalent volatility and liquidity scenarios was around 14% for insolvencies and about 7% for liquidations. More specifically, the 95th percentile of VaR decreases from $11.42M to $9.78M, and the 95th percentile of LaR decreases from $50.48M to $46.97M. With the significant VaR and LaR decrease, we recommend lowering the Liquidation Ratio, Liquidation Penalty, and Self Liquidation Penalty.

![liquidation ratio heatmap](https://imgur.com/CbptPV3.png)

The heatmaps above show the predicted effects of varying the Liquidation Ratio while holding the other protocol parameters fixed at their current values. The expected insolvent value of the protocol is shown on the left, and SNX liquidated on the right. While a decrease in the Liquidation Ratio leads to a slight increase in insolvencies, it also brings a sizable decrease in liquidations.

![liquidation penalty heatmap](https://imgur.com/maiXqR2.png)

The figure above shows the predicted effects of varying the Liquidation Penalty while holding the other protocol parameters fixed at their current values. We expect a decrease in Liquidation Penalty to lead to a decrease in both insolvencies and liquidations for the protocol. Decreasing the Self Liquidation Penalty follows the same pattern, and setting it to be 10% less than the Liquidation Penalty incentivizes delinquent stakers to trigger their own liquidations and reduce the risk of liquidation cascades.

## C-Ratio Analysis
We are not recommending a change in Min C-Ratio in this set of recs. We did, however, perform a user behavior analysis of how the top 100 accounts on Mainnet and Optimism react to Min C-Ratio changes and include relevant findings below.

We grouped SNX stakers into Active users who have made at least one change in their staked collateral balance in the last 6 months and Inactive users who have not. Nearly all Optimism users have been active, but only around 2/3 of Mainnet users have been active. However, 90% of the debt comes from these active users. We have upgraded our simulations to differentiate between active and inactive users when measuring the impact of min c-ratio changes.

![mainnet c-ratio](https://imgur.com/SmqaGAw.png)
![optimism c-ratio](https://imgur.com/bUjoVnQ.png)

The figures above show timeseries for the min c-ratio, median account c-ratio, system c-ratio, liquidation ratio, and SNX price for active users specifically. The top figure is for Ethereum Mainnet, and the bottom figure is for Optimism. The dashed gray lines show the timing of epochs for claiming weekly staking rewards.

***For most of the last 6 months, users have been elastic to changes in min c-ratio, even when adjusting for the price of SNX.*** We note, however, that there has been a weaker response to the most recent min c-ratio change, particularly on Mainnet. This analysis recommends that we focus on other parameters as levers for managing risk at this point in time. Adjusting the liquidation ratio and penalties instead of the min c-ratio has the additional benefit of incurring less burden on typical stakers.

## Risk Dashboard


The community should use Gauntlet's [Synthetix Risk Dashboard](https://gov.gauntlet.network/synthetix) to understand better the updated parameter suggestions and general market risk in the Synthetix protocol. 

![dash 1](https://imgur.com/Ucl2DQl.png)
![dash 2](https://imgur.com/bMjEeil.png)
![dash 3](https://imgur.com/pBPYBAX.png)

## Copyright



Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

*<sup>By approving this proposal, you agree that any services provided by Gauntlet shall be governed by the terms of service available at gauntlet.network/tos.<sup>*







