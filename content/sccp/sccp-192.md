---
sccp: 192
network: Optimism
title: Futures - Lower min keeper fee from 20 sUSD to 5.
author: Arthur (@artdgn)
status: Draft
created: 2022-05-02
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

`MinKeeperFee` should be lowered to make smaller next-price profitable when executed by a keeper.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

`MinKeeperFee` is used for two purposes:

1. It's the minimal fee paid for a liquidation to a keeper (for small positions).
2. It's the constant fee paid to a keeper for executing a next-price order. The fee is withheld from the user when submitting
   the order.

This means that small next-price orders aren't viable when executed by keepers (because of the imposed fixed fee).

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Please see more details about next-price fees in SIP-80 https://sips.synthetix.io/sips/sip-80/#next-price-orders-and-fees

### Next price fee considerations
When a user submits a next price order, a keeper fee and a commitment fee are withheld. The keeper fee is a constant.

When executing an order, if the executing account is the same as the submitting account - the keeper fee is refunded.
If the execution is by a different account - the fee is paid to that account (assumed to be a keeper).

This means that if executed by keeper, this fixed fee is an additional fee imposed on the trade.

Currently, at 20 sUSD, and for a difference of 10 bps in next-price vs. spot fees, it would mean that the minimal order that
would make sense to be submitted is of `20 / 0.001 = 20000` size. And any smaller order would not make economical sense if executed by a keeper.

Furthermore, even with a UI and a user willing to "save" the fee by executing themselves, a keeper may still beat the user to the execution.

Reducing the fee to 5 sUSD would still be more than enough to pay for the gas costs on L2, but would reduce the size of the orders that 
can benefit from this flow to `5000` (assuming next-price fee difference of 10 bps).

### Liquidation fees considerations

There should be no impact on liquidations, since most of the incentive is the proportional fee, and 5 sUSD would still be more than enough for covering gas costs.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
