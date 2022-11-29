---
kip: 45
title: Adjust allocation of KWENTA forfeited through early vesting  
status: Draft
author: SteveNX
created: 2022-11-28
---

## Summary

Adjust the flow of escrowed KWENTA tokens that are forfeited by stakers when they vest their KWENTA early so that a portion is directed towards stakers who remain staked.  

## Abstract

Currently, when users exit the inflationary reward vesting agreement early, the remaining KWENTA in their vesting package is sent to the Kwenta treasury (as per [KIP-32](https://kips.kwenta.io/kips/kip-32/)). This KIP proposes to reduce the amount of KWENTA sent to treasury by 50%, so that 50% goes to treasury and the other 50% is shared amongst all other KWENTA stakers as escrowed KWENTA (proportional to their stake).

## Motivation

Sharing forfeited escrowed KWENTA equally between the treasury and stakers will:

* Further incentivize long-term staking         
* Further contribute to healthy decentralization of voting power by distributing voting weight across engaged and committed users & community members


## Specification

1. The method used for distributing 50% of forfeited escrowed KWENTA to stakers should be determined according to technical feasibility. It is proposed that the distribution be completed once per epoch, to align with the distribution of trading rewards (and potentially with fee-share distributions in future).
2. Escrowed KWENTA that is forfeited through early vesting and re-distributed to other stakers will have its vesting period re-set to 12 months.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
