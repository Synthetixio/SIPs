---
stp: 13
status: Approved
title: V3 Data Analytics API
author: Michael Carrot Anderson (@michaelcarrotanderson)
implementation-date: 
discussions-to: TC Discord Channel
created: 2023-12-27
---

## Abstract

From the $250,000 allocated to a Synthetix data analytics working group in [STP-2](https://sips.synthetix.io/stps/stp-2/) this proposal allocates $182,000 to upfront development, medium term ongoing costs and ecosystem incentives. 

The first priority for this initiative is to build a canonical source of truth for the protocol that can be relied upon by builders in the community. This STP proposes that $57,000 USD used to procure Gateway.fm to build and host an open-source Synthetix V3 API to provide visibility into the V3 Andromeda delpoyment on Base and serve as a source of truth for Synthetix data analytics efforts. The Gateway team have already built an open source [Perps V3 API](https://api.infinex.gateway.fm/api/v1/docs) for Infinex, so this extension will form the Synthetix V3 API.

A further $20,000 sUSD will be set aside for a trial period of three months, and can be used to maintain the V3 API in the event of breaking upgrades to the V3 contracts. These funds will assure backwards compatibility for data analytics artefacts built on top of the API. Once complete, $100,000 will be available as incentives for the ecosystem to build on the API.

## Motivation

Historically, data analytics initiatives in Synthetix have been managed either by the core contributors (top-down) or originated from within the community (bottom-up). While STP-2 highlights the limitations of the first approach, the bottom-up approach has advantages:

- Community efforts, such as dune dashboards, are open source and can be forked and continued by others if their creators stop maintaining them
- The open source nature of the work means other people can fork the work of others and continue it on when it becomes outdated (academically, at least)

However, there are limitations to the the community approach that the this STP wishes to overcome:

- Without incentives for long-term ownership over community projects, they are at risk of being abandoned in the long run
- Having disparate sources of information makes it difficult to ascertain which is the source of truth, and which are the most up-to-date

The funding allocated for data analytics aims to establish ownership at the data source level, establishing a data analytics source of truth that the community can depend on and in turn build atop of it.

## Rationale

The launch of V3 will be a pivotal moment for Synthetix and will make the data analytics of the protocol more complex. Infinex has currently procured Gateway.fm a DAO Infrastructure provider, to build a [PerpsV3 API](https://api.infinex.gateway.fm/api/v1/docs) that will be used by the Infinex frontend. This presents an opportunity for the TC to expand the PerpsV3 API into a generalised Synthetix V3 API while Gateway have momentum and context.

## Financial Specification

- $57,000 will be allocated to the Gateway team to build out the additional V3 API endpoints
    - $37,000 will be paid in USDC
    - $20,000 will be paid in SNX
    
- $20,000 will be set aside for maintenance of the data layer, consumed as needed and only if needed
    
- $5,000 will be set aside to operate the infrastructure. The Gateway team will pass the costs onto the council at a variable rate.

Once the V3 API is built, $100,000 in SNX tokens will be allocated to a run of grants encouraging builders to use the V3 API.

## V3 API specification

The V3 API will comprise of the endpoints already developed in the Infinex Perps V3 API, as well as the additional endpoints procured by the Treasury Council.

### Entities

The Gateway team will design an API schema that represents the following entities:

| Entity | Description | Calculation |
| --- | --- | --- |
| Pools | Each pool takes in collateral deposits and allocates credit to markets. | Historical: CoreProxy.PoolCreated. Pool names can be fetched from CoreProxy.getPoolName(poolId) |
| Markets | Each market uses credit from pools to offer some product to end users, like perps. | Historical: CoreProxy.MarketRegistered |
| Accounts | Users create accounts represented as an NFT to track their collateral and debt. | Historical: CoreProxy.AccountCreated |
| Liquidations | A user's collateral can be liquidated when their collateral ratio is too low. | Historical: CoreProxy.Liquidation |
| Reward claims | An account can claim the rewards distributed by pools, mainly from fees collected on markets. | Historical: CoreProxy.RewardsClaimed |
| Reward distribution | A distribution of rewards is triggered by privileged accounts. | Historical: CoreProxy.RewardsDistributed |
| Vault Liquidations | A systemwide liquidation event which fixes the entire pool's collateral ratio. | Historical: CoreProxy.VaultLiquidation |

### **************Metrics**************

The following are metrics which can be derived from Core V3 events.

| Entity | Description | Calculation |
| --- | --- | --- |
| TVL | The total notional value of the assets in a pool. | deposits: CoreProxy.Deposite. withdrawals: CoreProxy.Withdrawn. price: Price must be determined externally. `TVL` = (`deposits` - `withdrawals`) * `price` |
| Total Collateral Delegated | The total amount of collateral in accounts that is delegated to a pool. | delegations: CoreProxy.DelegationUpdated. For each accountId, keep track of the most recent amount. The total amount delegated is the sum of the delegations of each account. |
| Net sUSD Issuance | The total supply of sUSD minted against LP positions. | CoreProxy.UsdMinted.amount - CoreProxy.UsdBurned.amount. Subtract burns from mints, the remaining amount is the current supply of sUSD. |
| Total Rewards Distributed | The total amount of rewards distributed during some period. Potential filters: Per pool, Timeframes (weekly, monthly) | Sum the amount and multiply by the price of each collateral type as the given time. |
| Total Rewards Claimed | The total amount of rewards claimed during some period. Potential filters: Per account, Per pool, Timeframes (weekly, monthly) | Sum the amount and multiply by the price of each collateral type at the given time. |
| APR / Yield | The percentage return earned on positions in a given pool. | Rewards are distributed continuously, and collateral can be deposited or withdrawn at any time. This makes yield calculations difficult, as the denominator is variable. For the best estimate: `APR` = (`total_rewards_claimed` / `starting_collateral`) * (seconds_in_year / period_seconds). `total_rewards_claimed`: Sum of CoreProxy.RewardsDistributed.amount during a time period as a USD value. `starting_collateral`: The USD value of the collateral at the start of the period. `period_seconds`: the number of seconds from the start of the period to the end of the last reward distribution |

The API schema and proposed implementation architecture provided by the Gateway team can be found [here](https://pyrite-yumberry-ec6.notion.site/Development-Specification-ae2c792b9d424bc380a711dbe3a22542).

### Existing PerpsV3 API

The entities and metrics detailed above will exist alongside the PerpsV3 API (documented [here](https://api.infinex.gateway.fm/api/v1/docs)) to form the canonical Synthetix V3 API (documented [here](https://api.infinex.gateway.fm/api/v1/docs)).

## Next steps

The Gateway team have reviewed the data dictionary provided by the Synthetix Core Contributors and responded with the [project plan and API schema](https://pyrite-yumberry-ec6.notion.site/Development-Specification-ae2c792b9d424bc380a711dbe3a22542). Once this STP has been approved, the project will be underway.

The Treasury Council will seek to appoint a member from the community to liaise between the Treasury Council, the core contributors, and the Gateway team with respect to the development and maintenance of the V3 API.

## Copyright

Copyright and related rights waived via'a0[CC0](https://creativecommons.org/publicdomain/zero/1.0/).
