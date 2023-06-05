---
sccp: 231
network: Ethereum
title: Temporarily Lower Max Atomic Volume Per Block
author: Afif (@aband1)
status: Implemented
created: 2022-09-10
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x24a12d63596ec326109ff241bd91e358b657acc6286867f591730bb6b40811eb
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to temporarily lower the maximum volume per block on all atomic exchanges from 5,000,000 sUSD to 100,000 sUSD.



## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The intent of this proposal is to lower the maximum synth exchange volume per block for the atomic exchange contract until the implications of the PoS MEV landscape surrounding Uniswap oracles can be more carefully considersd.


## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The security assumptions of on-chain oracles from AMM pools like Uniswap will fundamentally change after Ethereum's transition to PoS consensus. While mining successive blocks is impractical for a single entity in PoW, PoS block producers are announced _a priori_ at the beginning of each 6 minute epoch; thus the cost of sustained on-chain oracle price manipulation may be significantly lower in PoS. Security assumptions relied upon by the atomic exchange mechanism such as the integrity of the n-1 block price and resilience of TWAP pricing will need to be carefully observed for further consideration. 


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
