---
sccp: 338
title: Set Arbitrum Yield-Generating Asset LP & Issuance Variables
network: Arbitrum
status: Draft
type: Governance
author: Matt, DSacks
---
# Simple Summary
This SCCP proposes to configure the LP & issuance caps for Arbitrum as the system prepares to support yield-generating collateral from AAVE stata tokens, Lido-wrapped staked ETH, and Etherfi’s LRT.
# Abstract
The parameters configurations description is as follows. EST USD values updated as of June 10th, 2024:

|            Asset            |  Token | Maximum LP Amount (Native Units) | Maximum LP Amount (USD) |                            TVL on Platform                           | Issuance Ratio | Liquidation Ratio |
|:---------------------------:|:------:|:--------------------------------:|:-----------------------:|:--------------------------------------------------------------------:|:--------------:|:-----------------:|
| LIDO ARB Wrapped Staked ETH | wsteth |               1354               |       ~$5,000,000       | $187m on AAVE + 21m DEX Liquidity + Majority of liquidity on Mainnet |      200%      |        135%       |
|      Aave Arbitrum wBTC     |  aWBTC |                143               |       ~$10,000,000      |                         $297,000,000 on AAVE                         |      200%      |        135%       |
|      Aave Arbitrum ETH      |  aETH  |               2,709              |       ~$10,000,000      |                         $370,000,000 on AAVE                         |      200%      |        135%       |
|      Aave Arbitrum USDT     |  aUSDT |             5,000,000            |        $5,000,000       |                          $65,000,000 on AAVE                         |      130%      |        105%       |
|    EtherFi Arbitrum wEETH   |  wEETH |                261               |       ~$1,000,000       | $276m on AAVE + 13m DEX Liquidity + Majority of liquidity on Mainnet |      250%      |        150%       |

# Motivation
The Arbitrum deployment is ready to be configured for yield generating collateral types as defined by [SIP-388](https://sips.synthetix.io/sips/sip-388/) & [SIP-389](https://sips.synthetix.io/sips/sip-389/).
# Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

