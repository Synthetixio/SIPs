---
sccp: 204
network: Ethereum & Optimism
title: Raising the c-ratio to 350%
author: Gauntlet
status: Draft
created: 2022-06-19
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Increase the target staking ratio from 350% from 300% for snx stakers on ethereum and optimism.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The target staking ratio, is the minimum collateralization ratio required for stakers to claim rewards. It also represents the maximum amount of debt a staker can inccur when minting sUSD.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The table below shows volatility and exchange volume data from 05/17 to 06/07. These are valuable metrics to build intuition but are not the only inputs our simulations take into account to make parameter recommendations. 

|Symbol| 06-07 Volatility| 05-17 Volatility| Volatility Change| Average Daily Volume Change (%)  |
| ------ | ---------------- | --------------- | ----------------- | ----------- |
| SNX   | 	  1.924023648      |  2.030504207  | 	-0.106480559   |  41.1206857    |

Our simulations, which have incorporated the most recent parameter changes including SIP-148, indicate that increasing the c-ratio will lead to a significant decrease in liquidations and insolvent debt in extreme market scenarios. For reference, the largest 1-day drop in SNX in the recent past was ~26% on May 11th. Our models observe that there is ~300k worth of insolvent debt on the protocol. In simulation, Gauntlet's objective was to analyze the impact of the global debt pool and SNX stakers' positions as volatility continues to increase. As we increased c-ratio from 300% to 350% in our simulations, we observed that the decrease in liquidations and insolvencies for equivalent volatility and liquidity scenarios was over 28% for insolvencies and over 45% for liquidations.

![](https://i.imgur.com/mZiPhG1.png)
The graph above shows the expected insolvent value of the protocol given different market conditions and collateralization ratio. At collateralization ratios of 250% and 300%, the insolvency risk is significantly higher than 350% and above.
![](https://i.imgur.com/bFDXRP7.png)

The graph above shows that, given different c-ratio values and market conditions, total collateralization ratio of the protocol will change positively with c-ratio increases and negatively with volatility scalar increases. Note that a liquidation will lead to an increase in collateralization as it pushes accounts closer to the target issuance ratio. 
![](https://i.imgur.com/ZRV3XrG.png)

The graph above shows the total SNX liquidated with respect to collateralization ratio and market conditions. This graph is not monotonic as the occurrence of liquidations and self-liquidations can impact the protocol state and volume of aggregate liquidations.  
![](https://i.imgur.com/fvTVRH1.png)

The graph above shows the impact of sETH on liquidations on the protocol. Both changes in price (and consequently, the global debt pool) and users who are holding sETH will impact the liquidation volume that occurs. 

![](https://i.imgur.com/s5a5G9C.png)

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
