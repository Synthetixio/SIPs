---
sccp: 237
network: Optimism
title: Update Debt-PERP Market Parameters
author: Synthquest (@Synthquest)
status: Draft
created: 2022-10-25
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to update the DEBT-PERP market max open interest as per the below:

| **CurrencyKey**  | **Proposed OI**  | **Current OI**  |
|----------------- |-------------------- |------------------- |
|    **DebtRatio**    |          0          |         500k          |

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The Debt-Perp offers little benefit to the protocol while adding an unnecessary amount of risk due to deterministic profitable trades. Unique situations allow for this perp to be taken advantage of. The `maxMarketValueUSD` is the maximum amount of open interest allowed on each side of a market.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The most recent bad debt liquidations shed light on how unique situations allow for the Debt-Perp to be used for deterministic trades affecting the debt pool. 

Case Study:
On 2022-10-22 07:51 there was a liquidation of $763,021 of debt. At the next SDS oracle price (07:55) update there was an increase of 1.02%. During the bad debt liquidation SDS price went from 1.21 to 1.24 and over $3,000,000 of debt was liquidated. Traders that anticipated the bad debt absorption into the debt pool had an almost guaranteed profit depending on the timeframe liquidations happened over (funding rate ~0.013% 1H). This resulted in a few traders being able to profit off the debt absorption. Additionally, this may be an avenue for future profitable trade attacks where latency between liquidation and oracle update allows for traders to bid after a liquidation happens and before the oracle update. In the case study example someone could have seen the liquidation at 07:51 and opened a position within the 4 minute window for a guaranteed return. 

This thing offers no positive value and only risk for highly profitable trading strategies. So we should try to get rid of it.

See Case Study here: https://docs.google.com/document/d/1LF5GAsHuzXrApC8i05e5Exfmxcou8SRhaD61G8VNumo/edit?usp=sharing

See Backup Data here: https://dune.com/synthquest/debtooorrr-rug


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
