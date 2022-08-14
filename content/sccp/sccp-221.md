---
sccp: 221
network: Ethereum & Optimism
title: Update Futures & Spot Price Parameters
author: Kaleb (@kaleb-keny)
status: Draft
created: 2022-08-14
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to implement the following:
- Increase the Dydx, Uni and AAVE  `makerFee` and `takerFee` to 65 and 75 bp (on L2)
- Increase the Dydx, Uni and AAVE  `makerFeeNextPrice` and `takerFeeNextPrice` fees to 55 and 60 bp (on L2)
- Lower the Dydx, Uni and AAVE `maxMarketValueUSD` to 100k$ (on L2)
- Increase `feeRateForExchange` on spot trades into AAVE to 100 bp (on L1 and L2)
- Increase `feeRateForExchange` on spot trades into Uni to 100 bp (on L2)

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

- The `makerFeeNextPrice` and `takerFeeNextPrice` are the fees paid by traders when filled for next price futures orders.
- The `makerFee` and `takerFee` are the fees paid by traders when filled for immediate orders.
- The `maxMarketValueUSD` is the maximum amount of open interest allowed on each side of a market.
- The `feeRateForExchange` is the fee paid on trades into a particular synths.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The deteriorating situation on the liquidity of these tokens, which can be visualized [here](https://www.dropbox.com/s/3dm1c6pjknjzrf7/futures.csv?dl=0) has increased the risk of actors manipulating the spot token prices, in order to profit from the infinite liquidity and no slippage trades, with some suspicious activies seen on chain. Hence increasing fees and lowering the open interest leans against these risks. It is important to mention, that Futures V2, which includes a slippage parameter, helps better manage these risks without resorting to baseFee and open interest adjustment.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
