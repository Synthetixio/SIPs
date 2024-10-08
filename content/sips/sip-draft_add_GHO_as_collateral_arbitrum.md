---
sip: <to be assigned>
title: Support GHO and stataGHO as LP Collateral on Arbitrum
network: Arbitrum
status: Draft
type: Governance
author: TokenLogic (@TokenLogic-com-au)
implementor: TokenLogic (@TokenLogic-com-au)
release: TBD
implementation-date: TBD
discussions-to: TBD
created: 2024-09-18
---

## Simple Summary

This SIP proposes to add support for GHO (Aave's GHO Stablecoin) and stataGHO (Static Aave Arbitrum GHO) as LP collateral on Synthetix v3 on Arbitrum, enabling users to earn lending fees from Aave and trading rewards from Synthetix Perps.

## Abstract

- Support GHO as a collateral type for the Arbitrum V3 deployment with minting at a 125% collateral ratio (C-ratio) and a maximum LP cap of $50M.
- Support stataGHO as Arbitrum LP collateral to provide Synthetix LPs with yield-generating collateral, enhancing liquidity and scaling capabilities of Synthetix V3 & Perps on Arbitrum. The use of stataTokens mitigates concerns associated with the rebasing nature of aTokens, facilitating smoother integration with Synthetix.

## Motivation

GHO is a decentralized multi-collateral stablecoin that is fully backed, transparent, and native to the Aave Protocol, with over [155M](https://aave.tokenlogic.xyz/gho) in circulating supply.

The collateral ratio for GHO exceeds [2.20](https://aave.tokenlogic.xyz/collateral) and consists of high-quality assets like wstETH and wETH, which make up [23.67%](https://aave.tokenlogic.xyz/gho) and [20.20%](https://aave.tokenlogic.xyz/gho) of the total collateral, respectively.

The Aave Liquidity Committee (ALC) aims to expand GHO's reach across various protocols and chains. Additional details about GHO can be found [here](https://docs.gho.xyz/).

The Chainlink CCIP bridge, deployed by Aave Governance, has been in production since early July. GHO has also been integrated into Aave v3 on Arbitrum. With the initial phase complete, it's time to accelerate GHO's growth on Arbitrum by integrating it as a collateral asset into Synthetix v3.

Adding stataGHO to Synthetix Arbitrum LP offers significant advantages due to its high returns in lending markets and low risk stemming from over-collateralization. This addition is expected to provide a competitive edge for Synthetix, with dual-yield opportunities from DeFi lending and perps trading rewards.

Using stataTokens addresses the challenges related to aTokens' rebasing nature, reducing implementation overhead and making it easier for Synthetix to integrate with Aave's GHO.

## Specification

### Overview

The implementation of this SIP will depend on the availability of a high-frequency GHO price oracle on Arbitrum, currently being developed by Chainlink.

Below are the configurable values for GHO LP (Via SCCP):

| Parameter         | Value |
| ----------------- | ----- |
| Maximum LP amount | $50M  |
| Issuance Ratio    | 125%  |
| Liquidation Ratio | 105%  |

### Technical Specification

For the Synthetix side, implementation will involve:

- Adding stataGHO as a collateral type accepted by the core system, which will be valued at GHO multiplied by the GHO-to-stataGHO conversion ratio.

Key technical features of stataTokens include:

- Full EIP-4626 compatibility
- Support for liquidity mining rewards accounting
- Meta-transaction support for gasless transactions
- Upgradeability via Aave governance
- Powered by a stataToken Factory for permissionless deployment and token registry

### Test Cases

- Deploy and test the vault contract using Aave GHO and Aave GHO Arbitrum stataTokens.
- Conduct integration testing with the Arbitrum LP to verify compatibility with existing Synthetix infrastructure.

## Copyright

This SIP is licensed under [CC0](https://creativecommons.org/publicdomain/zero/1.0/), waiving all copyright and related rights.
