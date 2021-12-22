---
sccp: 159
network: Optimism
title: Include sETH borrowing to multi-collateral loans 
author: Kaleb (@kaleb-keny)
status: Draft
created: 2021-12-22
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to include sETH borrowing to the multi-collateral loan contract which was deployed under [SIP-195](https://sips.synthetix.io/sips/sip-195/):

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The function which needs to be called `addSynths` under the [CollateralEth](0x308AD16ef90fe7caCb85B784A603CB6E71b1A41a) contract with the following parameters (SynthsETH,sETH) addes sETH borrowing against ETH deposits.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The primary motivation is to growth the supply of sETH on optimism to meet the growing needs of Lyra traders without utilizing the positive ETH skew  which will help in the future offset the negative debt pool skew on L1. In addition, add sETH borrowing will divert some traffic to the staking site as folks will be able to interact with the UI to borrow a synth and increase synergies between the different partner protocols.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
