---
sccp: 141
network: Ethereum
title: Up the Weekly SNX Minting reward
author: JJ (@justinjmoses)
status: Implemented
created: 2021-10-12
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Update the reward to mint the weekly SNX inflation

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

In order to ensure a keeper calls the weekly `Synthetix.mint()` function, the reward for calling needs to be updated to `50 SNX` from `30` to account for gas costs.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The mint for SNX starting the 7 days following Oct 7, 2021 was not called. Presumeably, this was because the reward was low (30 SNX) compared to gas prices and the current market rate of SNX. This SCCP proposed updating it to `50 SNX` weekly.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
