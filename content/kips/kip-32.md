---
kip: 32
title: Change KWENTA Burning Mechanism to Treasury Reclamation 
status: Approved
author: Andrew Trudel (@Andrew-Synthetix)
created: 2022-09-13
---

## Summary

Change the KWENTA burning mechanism to a mechanism that removes KWENTA from circulating supply and puts it into the Kwenta Treasury.

## Abstract

When users exit the inflationary reward vesting agreement early, the remaining KWENTA in the vesting package will not be burnt, it will be sent to the Kwenta treasury. 

## Motivation

The original intention of the KWENTA burning mechanism was to evenly distribute the value of the KWENTA being burnt to all holders of KWENTA. However, this model only works for a rational market that has the capacity to account for burnt KWENTA as an increase in proportional claim to KWENTA governance and rewards. Due to the obvious irrationality of the market, it no longer makes sense to implement a burning mechanism. By returning the KWENTA to the treasury, the DAO will regain additional tokens for the use of product incentivization, development, and community rewards. 

## Specification

Update the KWENTA staking rewards smart contract to move the KWENTA that would be burnt to the Kwenta treasury. 

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

