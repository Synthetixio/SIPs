---
sccp: TBA
title: Reduce Rewards On Curve - SNX 24,000
status: Proposed
author: Kaleb Keny (@kaleb-keny)
discussions-to: https://discord.gg/B3PtpY
created: <2020-07-18>
---

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->
Decrease SNX incentives on the sUSD Curve pool to 24,000 SNX per week

## Abstract
<!--A short (~200 word) description of the variable change proposed.-->
32,000 SNX per week from inflation rewards are currently paid to the sUSD pool on curve which incentivizes liquidity provision to the sUSD/ DAI-USDC-USDT pool.

## Motivation
<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->
The consistent 5% premium on the sUSD peg on Curve calls for taking action as traders feel a disincentive to pay a premium for sUSD. 
Despite the increase in the price of SNX which is accompanied by minting, which  naturally increases supply of synths, the premium remains, due to two main contributors: 
1) Farming purposes (CRV, foundation led incentives...)
2) Increase in exchange volume

It should be noted that although cutting the c-ratio could help stabilize the peg, for reasons outlined in this [research post](https://research.synthetix.io/t/decreasing-c-ratio-vs-decreasing-snx-rewards/91), cutting rewards first would decrease the leakage of value from minters. In addition,  user growth is being propped up by foundation driven incentives as well as new products being introduced which further the point of reducing leakage and help putting SNX on a more sustainable long-term path.

Other reasons to decrease the incentive, as noted in the previous SCCP:
1) It is important to not consistently overpay when incentivizing the pools, as it is effectively a transfer of value from snx minters to pool contributors. The incentive should be calibrated depending on the state of the system to pay the least amount of incentive required that achieves the desired effect of peg stability.
2) The 32k previously proposed was bound to be recalibrated as per the state of the system (peg, supply of synths...).



## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).