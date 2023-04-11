---
sccp: 305
network: Ethereum & Optimism
title: Pause Decrease in SNX Base Inflation
author: TerraBellus (@TerraBellus)
status: Draft
created: 2023-04-11
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes pausing the ongoing decay in the `baseInflation` of the SNX token until further notice.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Throughout late 2021 and 2022, various SIPs and SCCPs were implemented with the intention of optimizing the protocol staking ratio by increasing/decreasing inflation to attract/dissuade stakers and then incrementally reducing inflation when the target ratio was met ([SIP-202](https://sips.synthetix.io/sips/sip-202/), [SCCP-208](https://sips.synthetix.io/sccp/sccp-208/) and [SCCP-211](https://sips.synthetix.io/sccp/sccp-211/)). Currently, the staking ratio has achieved relative stability across both Ethereum and Optimism at approximately 75% This is a level that, in combination with wrappers, is providing an acceptable debt pool size and maitaining SNX token liquidity on DEX and CEX markets. With the target staking ratio achieved, inflation decay has been gradually winding down emissions for a prolonged period. The intention of this SCCP is to maintain stability during the migration to V3 by halting the decay function and maintaining emissions at their current level for as long as the staking ration remains within an acceptable 'buffer' range.

Proposed settings:
- Target Staking Ratio: 75%
- Buffer: 15%
- Positive adjustment: 10%
- Negative adjustment: 10%
- Decay rate: 0%

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Halting inflation and inflation decay at its current level will provide greater consistency in protocol rewards as we move to begin migration to Synthetix V3. The decay function has worked as intended in optimizing SNX emissions and liquidity provision yet maintaining it on an ongoing basis risks rendering the protocol less attractive to new and old stakers as we prepare to scale. This SCCP retains the ability to respond to movement in the staking ratio outside of a wide range, yet halts any reduction applied through "success" in achieving stability.   

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
