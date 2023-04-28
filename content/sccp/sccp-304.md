---
sccp: 304
network: Ethereum & Optimism
title: Create the Degen Pool for experimental v3 Markets
author: Cavalier
status:  Draft
created: 2023-04-28
type: Governance
---


# Simple Summary

Create the Degen Pool, to collateralize experimental Markets, and kickstart developer activity on v3.

# Abstract

Create a new Pool, named Degen Pool, with the Spartan Council as the Pool Owner, and the next available poolId, as per [SIP-302](https://sips.synthetix.io/sips/sip-302/):

- *createPool(2, [Spartan Council] )*
- *setPoolName(2, “Degen Pool”)*

Intended to back experimental Markets, the Degen Pool is a separate Pool to the Spartan Pool, and so does not add risk to the Spartan Pool, or the migration from v2. 
As the pool owner, Spartan Council will have the power to delegate collateral from the Degen Pool to a Market through SCCP. Market developers can propose an SCCP to have collateral delegated from the Degen Pool to their Market.


# Motivation

The v3 system on mainnet is ready for experimental Markets to be developed and launched, yet there are no Pools of collateral. Instead of the unnecessarily delay of waiting for collateral in the Spartan Pool, and discussion about which new Markets it should collateralize, the protocol needs siloed collateral, ready for developers to build and launch experimental Markets, and request collateral delegation. 

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

