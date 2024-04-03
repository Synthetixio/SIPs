---
stp: 17
title: Sui Perps Working Group
status: Approved
author: Cavalier
implementation-date: TBA
discussions-to: TC Discord Channel
created: 2024-03-19
---

## Simple Summary
Fund a team to complete, deploy and operate an instance of Synthetix Perps on Sui.

## Abstract
Synthetix Perps logic can be recreated to expand the reach of the Synthetix Protocol to virtually any chain. This proposal is to develop a standalone vault and market factory contract implementation for Synthetix perps in Move, and deploy to Sui. Initial architecture development, prototyping, and test streamlining setup have already been completed over the past year with a near fully complete instance of the protocol written in Move (for Sui L1 or Movement L2).

## Motivation
Expansion of Synthetix to new users and communities increases the reach and scale of the protocol. In the past, the protocol roadmap has centered around unified instances of the Synthetix Protocol across many EVM chains. Recently, however, the roadmap has shifted towards designing around isolated instances of the protocol. This presents an opportunity to not only deploy Synthetix V3 on any EVM-compatible chains, but also to develop instances of Synthetix’s most popular product (perps) on various non-EVM chains and fold them into the Synthetix Community.  

## Specification

### Overview
Allocate 290,000 SNX to fund the completion, deployment and operation of Synthetix Perps on Sui, for a period of 12 months.
Responsibilities of the working group include but are not limited to
- Adapting Synthetix Perps v3 smart contracts for Move
- Overseeing the implementation and support of a front end
- Preparing appropriate governance proposals for its release
- Ongoing maintenance and performance improvements to remain competitive
- Implementing governance mechanisms such that Synthetix governance has control of the deployment

### Rationale
With quality DevEx tooling and smooth user experience/onboarding features, Sui/Move is a strong candidate for future growth of perps trading. At time of writing Sui has $250m stablecoin TVL and $686m total TVL. 

### Financial Specification
To seed and scale the efforts of this working group, a total of 290,000 SNX is requested. Details of the funding request:
- 40,000 SNX upfront to acquire the team and all work-product completed so far
    - Fully complete Move implementation
    - [Minimal frontend prototype](https://spamm.vercel.app/trade/BTC-USDC)
    - Centralized keeper infra
- 90,000 SNX over 6 months (15k/m) for team build out product and bring to market
- 25,000 SNX Milestone #1 - Sui/Move contracts sent for audit
- 45,000 SNX Milestone #2 - Open source confirmation and liquidation keeper implementations
- 45,000 SNX Milestone #3 - Contracts deployed to Sui mainnet
- 45,000 SNX Milestone #4 - Open source frontend implementation


## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
