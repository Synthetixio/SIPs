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

GHO is a highly secure, decentralized stablecoin. The backing is high quality and the collateral ratio exceeds [2.20](https://aave.tokenlogic.xyz/collateral) and consists of high-quality assets like wstETH and wETH making up [23.67%](https://aave.tokenlogic.xyz/gho) and [20.20%](https://aave.tokenlogic.xyz/gho) respectively of all collateral. The GHO peg has shown resiliency during market downturns and the increase of the GHO Stability Module will bring even more security.

GHO on Arbitrum is brought and secured through the Chainlink CCIP bridge with the highest security standards in the industry to prevent against overminting attacks. Since the launch on Arbitrum in July, nearly 20 Million GHO have been bridged to Arbitrum.

The Chainlink CCIP bridge, deployed by Aave Governance, has been in production since early July. GHO has also been integrated into Aave v3 on Arbitrum. With the initial phase complete, it's time to accelerate GHO's growth on Arbitrum by integrating it as a collateral asset into Synthetix v3.

Adding stataGHO to Synthetix Arbitrum LP offers significant advantages due to its high returns in lending markets and low risk stemming from over-collateralization. This addition is expected to provide a competitive edge for Synthetix, with dual-yield opportunities from DeFi lending and perps trading rewards.

Using stataTokens addresses the challenges related to aTokens' rebasing nature, reducing implementation overhead and making it easier for Synthetix to integrate with Aave's GHO.

With the initial phase of the launch complete, the Aave Liquidity Committee (ALC) is eager to explore integrations that are expected to drive GHO's expansion across various protocols and chains. Integrating GHO as a collateral asset into Synthetix v3 is a strategic move that supports this expansion.

The ALC believes that the AAVE DAO and Synthetix DAO can benefit from close collaboration. Not only will GHO serve as pristine collateral with low risk to the Synthetix ecosystem, but this integration can serve as the start to further collaborations such as launching a GHO market and even Synthetix V3 serving as a GHO facilitator in the future.

## Specification

### Overview

Implementation of this SIP can happen today through the available GHO Chainlink Data push Feed on Arbitrum. Chainlink Data Streams is also actively developing a GHO low latency pull feed for use on Synthetix markets.

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
