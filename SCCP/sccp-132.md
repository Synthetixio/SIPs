---
sccp: 132
title: Fee Rates for L2 Exchanging
author: David Goldberg (@drgoldb)
discussions-to: governance
status: SC_Review_Pending
created: 2021-07-27
---

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->
Roll out L2 Exchanging for sETH, sBTC, and sLINK with 40 bip fees.

## Motivation
<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->
The Chainlink price feeds for sETH, sBTC, and sLINK were tested on Kovan and were deemed to be lively enough that with 40 bip fees, fee reclamation can initially be removed all together on L2, without a significant risk to SNX stakers.

Mainnet will be monitored and fee reclamation can be switched back on at moment's notice, should the Spartan Council find it necessary. 

Some recent benchmarking demonstrated that front-running is possible when you have multiple deviations of volatility. This was confirmed by a bot ran by the community and a separate one operated by the Synthetix core-contributors. Given that the Spartan Council can always turn on fee reclamation should the need arise, and that we will be actively monitoring for front-runners via front-running detection models we are proposing releasing L2 Exchangiing with 40 bip fees. 

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
