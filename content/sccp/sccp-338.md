---
sccp: 338
title: Set Arbitrum Yield-Generating Asset LP & Issuance Variables
network: Arbitrum
status: Rejected
type: Governance
author: Matt, DSacks
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0xca28d38eacc2a58b01fcefc7e2332612ee638d39ea56b750a1ea6c69a6498414
---
# Simple Summary
This SCCP proposes to configure the LP & issuance caps for Arbitrum as the system prepares to support yield-generating collateral from AAVE stata USDT & USDC, Lido-wrapped staked ETH, and Etherfi's LRT.

# Abstract
The parameters configurations description is as follows. EST USD values updated as of July 29th, 2024:

|            Asset            |  Token | Maximum LP Amount (Native Units) | Maximum LP Amount (USD) |                            TVL on Platform                           | Issuance Ratio | Liquidation Ratio |
|:---------------------------:|:------:|:--------------------------------:|:-----------------------:|:--------------------------------------------------------------------:|:--------------:|:-----------------:|
| LIDO ARB Wrapped Staked ETH | wsteth |              2564                |       ~$10,000,000       | $174m on AAVE + 21m DEX Liquidity + Majority of liquidity on Mainnet |      200%      |        135%       |
|      Aave Arbitrum USDT     |  aUSDT |           10,000,000              |        $10,000,000       |                          $85,000,000 on AAVE                         |      130%      |        110%       |
|    EtherFi Arbitrum wEETH   |  wEETH |               289                |       ~$1,000,000       | $276m on AAVE + 13m DEX Liquidity + Majority of liquidity on Mainnet |      250%      |        150%       |
|      AAVE Arbitrum USDC     | stataUSDC |            10,000,000            |        10,000,000       |                             $264m on AAVE                             |      130%      |        110%       |       


# Motivation
The Arbitrum deployment is ready to be configured for yield generating collateral types as defined by [SIP-388](https://sips.synthetix.io/sips/sip-388/) & [SIP-389](https://sips.sinthetix.io/sips/sip-389/).

# Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
