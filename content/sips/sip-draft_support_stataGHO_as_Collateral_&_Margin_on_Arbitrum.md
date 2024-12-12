---
sip: <to be assigned>
title: Support stataGHO as Collateral & Margin on Arbitrum
network: Arbitrum
status: <Draft>
type: Governance
author: TokenLogic (@TokenLogic-com-au)
implementor: TokenLogic (@TokenLogic-com-au)
release: TBD
implementation-date: TBD
discussions-to: TBD
created: 2024-12-12
---

## Simple Summary

This SIP proposes to add support for Aave's GHO Stablecoin (GHO) as Collateral and Margin on Synthetix v3 on Arbitrum.

## Abstract

This SIP proposes enabling GHO to be used as Collateral and Margin on Arbitrum with a 10M cap.

## Motivation

With the high returns from deposits in lending markets and the low risk profile of Aave Protocol, boasting over $35B in TVL, integrating stataGHO into Synthetix’s Arbitrum LP will provide a competitive edge.

Users will gain access to dual-yield opportunities, combining rewards from DeFi lending and perpetual trading. Additionally, these liquidity pools will exhibit greater resilience to fee-share experimentation, enhancing their appeal.

GHO is a USD pegged decentralized multi-collateral stablecoin that is fully backed, transparent and native to the Aave Protocol with over [160M](https://aave.tokenlogic.xyz/gho) of circulating supply and a [3.2 collateral ratio](https://aave.tokenlogic.xyz/collateral).

Onboarding GHO as Collateral and Margin enables users the choice of earning yield from Synthetix and Aave Protocol, or supporting active trading positions.

Further details about GHO can be found [here](https://docs.gho.xyz/).

## Specification

The below details the GHO LP Configurable Values (Via SCCP)

| Parameter                       | Value |
| ------------------------------- | ----- |
| Maximum LP amount               | $10M  |
| Issuance Ratio                  | 1000% |
| Liquidation Ratio               | 105%  |
| Liquidation Reward              | $1    |
| Spot Strict Staleness Tolerance | 60    |
| Minimum Delegation              | 100   |

The below details the GHO margin configurable Values

| Parameter                 | Value  |
| ------------------------- | ------ |
| Maximum Collateral amount | $10M   |
| Upper Limit Discount      | 0.0051 |
| Lower Limit Discount      | 0.0050 |
| Discount Scalar           | 1      |

## Copyright

This SIP is licensed under [CC0](https://creativecommons.org/publicdomain/zero/1.0/), waiving all copyright and related rights.
