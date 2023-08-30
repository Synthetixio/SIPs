---
sccp: 304
network: Ethereum & Optimism
title: Create the Innovation Pool
author: 'Cavalier (@cavalier-eth)'
status:  Draft
created: 2023-04-28
type: Governance
---

## Simple Summary
Create a new pool, the 'Innovation Pool,' to collateralize experimental mainnet markets and stimulate developer activity on the v3 platform.

## Abstract
Create a new v3 Pool called “Innovation Pool”, controlled by the Treasury Council, with the next available poolId in line with [SIP-302](https://sips.synthetix.io/sips/sip-302/):
- *createPool(2, [Treasury Council] )*
- *setPoolName(2, “Innovation Pool”)*

## Motivation
v3 mainnet is capable of hosting experimental Markets, but we do not have appropriate collateral pools designated for higher risk. A dedicated collateral pool should be readily available for developers to establish, launch experimental markets and request collateral delegation. 

The existing Spartan Council pool is likely to back markets which are delta neutral by design, and is not suited to experimental markets. The introduction of this dedicated pool would not only allow SNX holders to contribute liquidity into the pool in support of the ecosystem, but also provide them with the potential for less delta nuetral returns.

Designed to support experimental markets, the Innovation Pool will function independently from the Spartan Pool. As the pool owner, the Treasury Council will have the authority to delegate collateral from the Innovation Pool to any market. Market developers will have the opportunity to request the TC to delegate collateral from the Innovation Pool for their market.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
