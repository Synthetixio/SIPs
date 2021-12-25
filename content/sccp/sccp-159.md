---
sccp: 159
network: Optimism
title: Allow for sETH borrowing against ETH deposits 
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2021-12-22
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/QmbuFS7pWeSfEtTwbdtw17qY4nUz4yeBBZbDStWSm4BAPK
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to include sETH borrowing to the multi-collateral loan contract which was deployed under [SIP-195](https://sips.synthetix.io/sips/sip-195/).

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The function that needs to be called `addSynths` under the [CollateralEth](https://optimistic.etherscan.io/address/0x308AD16ef90fe7caCb85B784A603CB6E71b1A41a) contract with the following parameters `(SynthsETH,sETH)` allows for sETH borrowing against ETH deposits.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The primary motivation is to growth the supply of sETH on optimism to meet the growing needs of Lyra traders without utilizing the positive ETH skew which will help offset the negative debt pool skew on L1. In addition, adding sETH borrowing will divert some traffic to the staking site and increase synergies between snx stakers and synth users. 
The configuration of the sETH loans will be the same as those of sUSD, with 0 minting fee, a 300 bp per year interest rate and a minimum collateralization ratio of 120%.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
