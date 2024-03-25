---
stp: 14
title: Incentivize USDC LP on Base Andromeda
status: Approved
author: Cavalier (@cavalier_eth)
implementation-date: TBA
discussions-to: TC Discord Channel
created: 2024-01-29
---

## Simple Summary

This STP allocates SNX to kick start liquidity provision on Base Andromeda.

## Abstract

Allocate 225k SNX over 10 weeks to incentivize USDC deposits on Base Andromdeda.

## Motivation

Base Andromeda is ready scale up, and in order to reach its potential requires a significant increase in USDC liquidity. 

## Specification

### Overview

This STP allocates 225k SNX over 10 weeks to incentivize USDC deposits. A rewardsDistributor contract will be required to be deployed and registered, and will be defined by SCCP-313.

### Rationale

Incentivizing the Spartan Council pool is expected to attract more USDC, which in turn allows perp Open Interest caps to be increased, attracting traders and kickstarting the organic fee yield. 

### Financial Specification

225k SNX will be allocated to this pool for a trial of 10 weeks. During the trial period this figure may be adjusted or extended by the treasury council. 25k SNX will be distributed to existing LPs who have taken the losses of early trading during alpha testing, and then 20k SNX per week for 10 weeks.

| Interval  | Reward         |                                     |
|-----------|----------------|-------------------------------------|
| Week 0    | 25k SNX        | Once off retroactive for existing LPs        |
| Weeks 1-10 | 20k SNX/week  | ~20% APY on $ 26m of LP             |
| Total     | 225k SNX       |                                     |

The TC will send 225k SNX to the deployed and registered rewardsDistributor contract on Base.


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
