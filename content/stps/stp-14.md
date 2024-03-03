---
stp: 14
title: Incentivize USDC LP on Base Andromeda
status: Draft
author: Cavalier (@cavalier_eth)
implementation-date: TBA
discussions-to: TC Discord Channel
created: 2024-01-29
---

## Simple Summary

This STP allocates SNX to kick start liquidity provision on Base Andromeda.

## Abstract

Allocate 49k SNX over 8 weeks to incentivize USDC deposits on Base Andromdeda.

## Motivation

Base Andromeda is ready scale up, and in order to reach its potential requires a significant increase in USDC liquidity. 

## Specification

### Overview

This STP allocates 49k SNX over 8 weeks to incentivize USDC deposits. A rewardsDistributor contract will be required to be deployed and registered, and will be defined by the appropriate SCCP.

### Rationale

Incentivizing the Spartan Council pool is expected to attract more USDC, which in turn allows perp Open Interest caps to be increased, attracting traders and kickstarting the organic fee yield. Weeks 3-8 at current SNX price would yield 20% APR on $7.28m USDC.

### Financial Specification

49k SNX will be allocated to this pool for a trial of 8 weeks. During the trial period this figure may be adjusted or extended by the treasury council.

| Interval  | Reward         | LP for 20% APR, $SNX @ $4     |
|-----------|----------------|-------------------------------------|
| Week 1    | 3k SNX/week    | $ 3,120,000
| Week 2    | 4k SNX/week    | $ 4,160,000
| Weeks 3-8 | 6k SNX/week    | $ 7,248,000
| Total     | 49k SNX        |                                     |

The TC will send 49k SNX to the deployed and registered rewardsDistributor contract.


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
