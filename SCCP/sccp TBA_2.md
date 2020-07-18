---
sccp: TBA
title: Increase Fees on Synths
author: Kaleb Keny (@kaleb-keny)
status: Proposed
discussions-to: <Governance-Discord>
created: <2020-07-18>
---

## Simple Summary
Increase the fees on trades into sXAG, sFTSE, sAUD, sGBP and sCHF.

## Abstract
<!--A short (~200 word) description of the variable change proposed.-->
As per [sip-56](https://github.com/Synthetixio/SIPs/blob/master/SIPS/sip-56.md) each synth can now have its own fee levels. This SCCP suggest to raise the fees on synths as per the below breakdown:

## Motivation
Analysis of on-chain data showed that front-running opportunities were more accessible for certain synths. Increasing the fees as per the below should shrink that window significantly and bolster the protection until [sip-52](https://sips.synthetix.io/sips/sip-52) is implemented.

| Synth | Old Fees (bp) | New Fees (bp) |
|:-----:|:-------------:|:-------------:|
|  sXAG |       30      |       50      |
| sFTSE |       30      |       15      |
|  sAUD |       5       |       15      |
|  sGBP |       5       |       15      |
|  sCHF |       5       |       15      |

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
