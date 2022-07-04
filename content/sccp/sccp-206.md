---
sccp: 206
network: Optimism
title: Update Wrapper Parameters
author: kaleb
status: Draft
created: 2022-07-04
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Implement the following:
- Increase the LUSD `BurnFeeRate` from 0% to 1%
- Increase the ETH wrappr `maxTokenAmount` from 3700 ETH to 5700 ETH
- Decrease the ETH wrappr `mintFeeRate` from 20 bp to 5 bp

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The `burnFeeRate` is the fee paid to release LUSD by burning sUSD. 
The `maxTokenAmount` is the maximum amount of ETH that can be wrapped to mint sETH.
The `mintFeeRate` is the fee levied when minting sETH with ETH.


## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The main motivation is the recent premium seen on the sUSD peg, increasing the LUSD `burnFeeRate` will reduce the amount of sUSD that is being burned in order to release the locked LUSD. the `burnFeeRate` was originally set to zero, as to encourage arbitrages and sending the LUSD back to L1 where it's needed for liquidations. Originally 50m$ worth of LUSD was locked in the LUSD wrappr making up over 40% of all the LUSD ever minted, that amount has steadily decreased in the last few weeks as can be seen [here](https://dune.com/queries/848381/1489436). The scarcity of LUSD which results in a LUSD premium result in that premium being imported onto sUSD as arbitrages had taken place.
On increasing the `maxTokenAmount` for the ETH wrappr, currently the debt pool is 25% (or 25m$) long ETH. Increasing the wrapper capacity by 2k ETH might lead to a decrease in the skew by the equivalent amount, as the sETH is sent over to sUSD, and will help with relieving some of the pressure on the peg.


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
