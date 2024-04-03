---
stp: 18
title: Solana Perps Working Group
status: Approved
author: Cavalier
implementation-date: TBA
discussions-to: TC Discord Channel
created: 2024-03-27
---

## Simple Summary
Fund a team to develop, deploy and operate an instance of Synthetix Perps on Solana.

## Abstract
Using a standalone vault and market factory contract implementation, Synthetix Perps logic can be recreated to expand the reach of the Synthetix Protocol to virtually any chain. This proposal is to develop a standalone vault and market factory contract implementation for Synthetix perps to be deployed on Solana.

## Motivation
Expansion of Synthetix to new users and communities increases the reach and scale of the protocol. In the past, the protocol roadmap has centered around unified instances of the Synthetix Protocol across many EVM chains. Recently, however, the roadmap has shifted towards designing around isolated instances of the protocol. This presents an opportunity to not only deploy Synthetix V3 on any EVM-compatible chains, but also to develop instances of Synthetix’s most popular product (perps) on various non-EVM chains and fold them into the Synthetix Community. With a committed community, and low penetration of perps, Solana is an ideal candidate for Synthetix expansion.  

## Specification

### Overview
Allocate 430,000 SNX and 400,000 USDC to fund the development, deployment and operation of Synthetix Perps on Solana for a period of 12 months.

Responsibilities of the working group include but are not limited to
- Adapting Synthetix Perps v3 smart contracts for SVM
- Overseeing the implementation and support of a front end
- Preparing appropriate governance proposals for its release
- Ongoing maintenance and performance improvements to remain competitive
- Implementing governance mechanisms such that Synthetix governance has control of the deployment


### Rationale
With one of the strongest non-EVM communities, high visibility, and low perp penetration, Solana is a natural opportunity for Synthetix to expand to. At time of writing Solana has $2.75b stablecoin TVL and $10.7b total TVL.

### Financial Specification
Total: 430,000 SNX/ 400,000 USDC (includes audit costs) over 12 months
This proposal requests 390,000 SNX and 300,000 USDC to deliver the project to mainnet, and support it for the remainder of 12 months from kickoff. The team will require individuals with specialized expertise in the development of smart contracts and front ends on Solana. 

#### Operational Costs 
- 12 month period (6 month build + 6 month maintenance) 
- Amount: 370,000 SNX
- Develop an SVM compatible adaptation of Perps v3 (Est. 5 months from start)  
  - Estimated to complete audit by (Est. 1 month)
  - Testnet launch (Est. 2 weeks after audit) 92,500 SNX 
  - Mainnet launch by (Est. 2 weeks after testnet completion)  Mainnet - 92,500 SNX
  - Mainnet launch + 3 months - 92,500 SNX
  - Mainnet launch + 6 months - 92,500 SNX
- Purpose: These funds are requested for software development and other essential technical requirements necessary to facilitate the Solana expansion. 

#### Up front Front End Costs 
- One-off up front
- Amount: 100,000 USDC + 30,000 SNX
- Purpose: Develop, maintain and operate a front end for Synthetix perps on Solana

#### Up front Contract Costs
- One-off up front
- Amount: 300,000 USDC and 20,000 SNX
- Purpose: A significant portion of the USDC funds will be specifically used for conducting third-party smart contract audits. This combined allocation in USDC and SNX is intended to cover project costs, including the onboarding of skilled personnel critical to the project's success. The team members will play a pivotal role in development, testing, and deployment. 

#### Kicker Incentive
- One-off if reached
- Amount: 70,000 SNX
- Purpose: This kicker incentive is a strategic allocation designed to motivate the Working Group to achieve all project milestones within a condensed time frame of 4 months or less from the proposals approval.


## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
