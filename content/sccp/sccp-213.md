---
sccp: 213
network: Ethereum
title: Atomic Swap Fee Update (sETH)
author: Community Member
status: Draft
created: 2022-07-09
type: Governance
---

## Simple Summary

This SCCP proposes to update the fee parameter for sETH atomic swap after the release of [SCCP-210](https://sips.synthetix.io/sccp/sccp-210/).
SCCP-210 changed the uni-v3 oracle source from the 30bp ETH/USDC pool to the 5bp one.

### Atomic Exchange on Ethereum

#### Base Fee

Ticker: sETH
Previous Fee: 25bp
Proposed Fee Change: lower to 15bp

## Abstract

Parameter that is required for change:

- feeRateForExchange is the fee that is paid by traders computed by adding the baseFee of the source and destination currencies after [SIP-222](https://sips.synthetix.io/sips/sip-222/).

## Motivation

After implementing [SCCP-210](https://sips.synthetix.io/sccp/sccp-210/) there is a significant drop in atomic swap volume (~90%+ less).
Changing the atomic fee to 15bp should in theory make the atomic swaps competetive again and result in even higher trading volume than before.
Since the change is drastic (1.66x less, 25 -> 15bp), volume would need to be 1.66x higher to bring in the same amount of fee rewards as before.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).