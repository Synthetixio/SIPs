---
sccp: 373
title: Update Trading Fees Distribution
network: Arbitrum & Base
status: Vote_Pendin
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0xc74f174587a81d63b6075efa7c25b013d9862c5981a77f7cfb18b923a37350e8
type: Governance
created: 2024-12-09
author: Kaleb
---

# Simple Summary

This SCCP proposes to update the trading fee distribution split as per the below:

|     **Split**    | **Existing Config.** | **Synthetix Exchange** | **Other Integrators** |
|:----------------:|:--------------------:|:----------------------:|:---------------------:|
| **v2 Debt Burn** |          20%         |           30%          |          20%          |
|    **V3 LPs**    |          40%         |           70%          |          60%          |
|  **Integrators** |          20%         |           0%           |          20%          |


# Configurations

Due to the specificity pertaining to this split, the below will be configured:
- The [referrer](https://arbiscan.io/address/0xebAC8Fc8752A267A36cE683A867000F69Fd0e73d) of Synthetix tracking will be configured to 20% (along with other integrators).
- The referrer to the collector (debt burn) will be configured to 25%. Please note that a 25% configuration is applied on the fee after taking out integrator fee. Therefore, 1$ trading fee, 80 cents remain after integrator and therefore 20 cents is sent to the [TC address](https://arbiscan.io/address/0xf2107A85d8b79CBd2c5b2Bb63CA73Fd068040b67), entirely used for v2 debt buy back and burn.
- TC will use 50% of the funds received on [this](https://arbiscan.io/address/0xebAC8Fc8752A267A36cE683A867000F69Fd0e73d) address will be distributed to v3 stakers and 50% will be used to buy v2 sUSD and burn. 

The above configuration and TC action, helps achieve the split shown in the table above.


# Motivation

The main motivation is to boost the LP apy by increasing their share of trading fees. 

# Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
