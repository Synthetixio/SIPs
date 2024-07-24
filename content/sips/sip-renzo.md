## Simple Summary
This SIP proposes the addition of Renzo ezETH tokens as LP collateral on Arbitrum V3 deployment.

## Abstract
In order to enhance the diversity of yield-generation and exposure options for LP collateral within the Synthetix ecosystem, this SIP aims to add Renzo ezETH tokens as LP collateral on Arbitrum V3 deployment. Depositors of ezETH will continue to earn ezPoints and EigenLayer points along with the native restaking yield of each token.

## Motivation
The addition of these yield tokens aims to:
Increase the variety of yield-generating assets available to LP.
Attract holders of ezETH to the Synthetix ecosystem.
Enhance the overall liquidity of Arbitrum V3 LP.

## Technical Specification
Chainlink exchange rate feed can be found here:

https://data.chain.link/feeds/arbitrum/mainnet/ezeth-eth

## Test Cases
N/A

## Configurable Values
Each LP parameter (LP cap, minimum minting c-ratio, liquidation ratio) will be configured via SCCP.
