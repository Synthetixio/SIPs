---
kip: 45
title: Adjust allocation of Kwenta forfeited through early vesting  
status: Draft
author: SteveNX
created: 2022-11-28
---

## Summary

Adjust the flow of escrowed Kwenta tokens that are forfeited by stakers when they vest their Kwenta early so that a portion is directed towards stakers who remain staked.  

## Abstract

Currently, when users exit the inflationary reward vesting agreement early, the remaining KWENTA in their vesting package is sent to the Kwenta treasury (as per KIP-32). This KIP proposes to reduce the amount of Kwenta sent to Treasury by 50%, so that 50% goes to Treasury and the other 50% is shared amongst all other Kwenta stakers as escrowed Kwenta (proportional to their stake).

## Motivation

Sharing forfeited escrowed Kwenta equally between the Treasury and stakers will:

* Further incentivize long-term staking         
* Further contribute to healthy decentralization of voting power by distributing voting weight across engaged and committed users & community members


## Specification

The method used for distributing 50% of forfeited escrowed Kwenta to stakers should be determined according to technical feasibility. It is proposed that the distribution be completed once per epoch, to align with the distribution of trading rewards (and potentially with fee-share distributions in future).


## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
