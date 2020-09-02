---
sccp: 47
title: Extend Claim Window
author: Farmwell (@farmwell)
discussions-to: https://discordapp.com/channels/413890591840272394/585279723580686341/750820211732775082
status: 
created: 2020-09-02
requires: 
---


## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->
Increase the window for stakers to claim rewards from 7 days to 14 days to foster staker participation.
## Abstract
<!--A short (~200 word) description of the variable change proposed.-->
The changes proposed are listed below:
The proposed future state is for stakers to have 14 days before rewards are forfeited into the fee pool. Once there is an alternative solution in place for smaller stakers, i.e. Mintr on L2, then the 1-week period is to be reinstated.
In the present state stakers have 7 days to claim rewards before they are forfeited into the fee pool to be claimed by others during the next fee period.

## Motivation
<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->
1. Exponentially increasing gas prices have discouraged staker participation by pricing out small- and medium-sized stakers for claiming rewards. As a result, stakers responsiveness to changes in the collateralization ratio are suppressed, which blunts the effectiveness of c-ratio changes.
2. Minting, burning and claiming are basically all non-starter user behaviors for small- and medium-sized behaviors given the current gas prices and benefits of being an active staker.e
3. Expanding the claim window to 14 days is a decently-high leverage solution for changing a staker's tradeoffs. The cost-benefit calculation becomes 2x as good for the staker. With this simple change, a staker can double his total rewards for one claim event. 

The main counterarguments are:
1. The system is at greater risk of becoming undercollateralized with longer claim periods, enabling stakers to be lazy by giving them extra slack. 
2. It will be difficult to revert back to a state where one-week claims are the norm, which is more efficient for keeping tight feedback loops between the price of the SNX collateral and the system's level of collateralization.

These concerns are addressed by two points. One is that the 200% liquidation level that penalizes stakers for being too lazy during the claim period, ensuring the system will be collateralized at a healthy level.
The second is that the 14-day claim window can only be valid up until the point where the Mintr L2 solution is live for small and medium-sized stakers. Upon implementation of the new Mintr on L2, the two-week claim period expires and one-week claims are reinstated as provided in the present SIP.
## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
