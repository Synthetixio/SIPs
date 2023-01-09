---
kip: 53
title: Integrate Socket Plugin
status: Draft
author: Synthquest
created: 2023-01-06
---

## Summary
This KIP proposes integrating the Socket Plugin, which enables seamless multichain bridging and exchanging within KWENTA.

## Abstract
Currently, users need to have funds on Optimism or Ethereum to use KWENTA, requiring them to use external parties to bridge between chains, exchange tokens, and deposit into their KWENTA accounts. This KIP aims to eliminate this friction by integrating the Socket Plugin, which allows users to bridge and exchange within KWENTA.

## Motivation
The Socket Plugin offers a user-friendly, multichain experience with minimal resource allocation for integration and developer overhead. It currently supports multichain swaps between Optimism, Ethereum, Binance Smart Chain, Gnosis Chain, Polygon, Fantom, Arbitrum, Avalanche, and Aurora in a single transaction. This integration will improve onboarding for users across the DeFi ecosystem.

## Specification
The Socket Plugin contracts interact with the Socket Liquidity Layer, which aggregates various bridge and DEX aggregators. 

The swap functionality will offer synthetic assets from Synthetix, where available, on their native chains. 

This allows users to start from any token on any of the supported chains and exchange it into a new token on the chain of their choice. For example, a user could hold ETH on Arbitrum, bridge and exchange it into sUSD on Optimism, and deposit it directly into their trading account.

Links:

Socket Plugin: https://docs.socket.tech/socket-liquidity-layer/use-socketll/socket-plugin


### Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
