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

Liquidity Information for ezETH on Arbitrum: 

1. $3m on Ramses ezETH/wETH - https://app.ramses.exchange/liquidity/v2/0x575f1691e6391a2fcf932f9b9dfd6dbfb4792c13
2. $2m on Balancer ezETH/wstETH - https://app.balancer.fi/#/arbitrum/pool/0xb61371ab661b1acec81c699854d2f911070c059e000000000000000000000516
3. $3m on Camelot ezETH/wETH - https://app.camelot.exchange/pools/0xaA45265A94C93802BE9511E426933239117E658f

## Test Cases
N/A

## Configurable Values
Each LP parameter (LP cap, minimum minting c-ratio, liquidation ratio) will be configured via SCCP.
