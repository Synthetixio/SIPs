---
network: L2
sccp: 157
title: Update sETH/ETH Wrappr Parameters
author: Kaleb (@kaleb-keny)
discussions-to: 'https://discord.gg/EWmYsH7X'
status: Vote_Pending
created: 2021-12-14
type: Governance
---

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to update the following parameters on the sETH wrappr on L2:
- Increase the minting fee to 150 bp
- Increase the max capacity by 1,000 ETH to 3,200 ETH 

## Abstract
<!--A short (~200 word) description of the variable change proposed.-->

The minting fee is paid upon minting sETH with ETH and helps somewhat restrict the supply of synth. The sETH cap sets the maximum amount of sETH that can be minted by the wrappr.

## Motivation
<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

With [SIP-195](https://sips.synthetix.io/sips/sip-195/) going live on L2 the proposed changes laid out in this SCCP will permit liquidations to take place regardless of the liquidity of ETH/sUSD on L2. Increasing the minting fee will ensure that users who want to procure sETH, would route their trades through the exchange (earning minters fees) and ensures that some sETH minting capacity remains available for liquidation purposes.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
