---
sccp: 216
network: Ethereum & Optimism
title: Raising the target c-ratio to 400% and decreasing liquidation ratio to 145%
author: Gauntlet
status: Draft
created: 2022-07-14
type: Governance
---

## Simple Summary

A proposal to adjust 2 (two) risk parameters. We propose increasing the target c-ratio from 350% to 400% and decreasing the liquidation ratio from 150% to 145%.

## Abstract



This set of parameter updates seeks to optimize for risk and capital efficiency for the Synthetix protocol. Gauntlet recently published a [blog post](https://medium.com/gauntlet-networks/gauntlets-parameter-recommendation-methodology-8591478a0c1c) on our parameter recommendation methodology to provide more context to the community. This is Gauntlet's second set of parameter recommendations to Synthetix.

Gauntlet's agent-based simulations use a wide array of varied input data that changes on a daily basis. These data include but are not limited to user positions, asset volatility, asset correlation, asset collateral usage, DEX/CEX liquidity, trading volume, expected market impact of trades, and liquidator behavior. Our simulations tease out complex relationships between these inputs that cannot be simply expressed as heuristics.

| Parameter | Current Value | Recommended Value |
| -------- | -------- | -------- |
| SNX C-Ratio     | 350%     | 400%     |
| Liquidation Ratio | 150% | 145% |

## Motivation


The table below shows volatility and exchange volume data from 06/27 to 07/11. These are valuable metrics to build intuition but are not the only inputs our simulations take into account to make parameter recommendations. Gauntlet's [Risk Dashboard](https://gov.gauntlet.network/synthetix) provides insight into market risk and the impact of these recommendations. 

|Symbol| 07-11 Volatility| 06-27 Volatility| Volatility Change| Average Daily Volume Change (%)  |
| ------ | ---------------- | --------------- | ----------------- | ----------- |
| SNX   |    2.133968137  |  2.103873371  | 	0.030094766   |  8.5691933    |

In simulation, Gauntlet's objective is to analyze the impact of changing market conditions on the global debt pool and SNX stakers' positions. As we increased c-ratio from 350% to 400% in our simulations, we observed that the decrease in liquidations and insolvencies for equivalent volatility and liquidity scenarios was around 21% for insolvencies and 77% for liquidations. We also recommend downgrading the liquidation ratio from 150% to 145%. By changing the liquidation ratio as per our recommendation, the liquidations can decrease by over 44% for equivalent volatility and liquidity scenarios.

![](https://i.imgur.com/AgsFtCf.png)


The graph above shows the expected insolvent value of the protocol given different market conditions and collateralization ratios. At collateralization ratios of 250% and 300%, the insolvency risk is significantly higher than 350% and above.



![](https://i.imgur.com/dXB0Y2Q.png)


The graph above shows the total SNX liquidated with respect to collateralization ratio and market conditions. Liquidation risk decreases as the c-ratio increases. Maintaining the c-ratio at 400% or above can significantly reduce the amount of liquidations observed in simulation.  

![](https://i.imgur.com/EDDcxec.png)
The graph above shows that, given different c-ratio values, system collateralization ratio of the protocol will change positively with c-ratio increases. But, as shown in the graph, market conditions have little impact on the system collateralization ratio. Note that liquidations lead to an increase in collateralization as it pushes accounts closer to the target issuance ratio.   


![](https://i.imgur.com/u5pBsPu.png)
The graph above shows that liquidation will increase with higher liquidation ratios. When liquidation ratios are at 150% or above, the liquidation risk is significantly larger than 145%.



![](https://i.imgur.com/7pjFP4d.jpg)



## Copyright



Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

*<sup>By approving this proposal, you agree that any services provided by Gauntlet shall be governed by the terms of service available at gauntlet.network/tos.<sup>*


