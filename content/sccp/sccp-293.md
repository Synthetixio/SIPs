---
sccp: 293
network: Optimism
title: Update Perp Parameters
author: Kaleb (@kaleb-keny), Fifa (@aband1)
status: Implemented
created: 2023-04-11
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x207b502fc7e38cdc9276e29d72d592d4cff121eae74fe238d517c60041cab4f1
type: Governance
---

# Simple Summary

This SCCP proposes to update the perp-v2 parameters as per the below configurations:

## Offchain Maker & Taker Fees:

|            | **Existing** | **Proposed** | **Change** |
|:----------:|:------------:|:------------:|:----------:|
|  **sETH**  |     5/10     |      2/6     |    -3/-4   |
|  **sBTC**  |     5/10     |      2/6     |    -3/-4   |
|  **sBNB**  |     8/12     |      2/8     |    -6/-4   |
|  **sLINK** |     8/12     |      2/8     |    -6/-4   |
|  **sSOL**  |     8/12     |      2/8     |    -6/-4   |
| **sMATIC** |     8/12     |      2/8     |    -6/-4   |
|  **sDOGE** |     10/15    |      2/8     |    -8/-7   |
|  **sFTM**  |     10/15    |     2/10     |    -8/-5   |
|  **sATOM** |     8/12     |     2/10     |    -6/-2   |
|  **sAVAX** |     8/12     |     2/10     |    -6/-2   |
|  **sARB**  |     4/12     |     2/10     |    -2/-2   |
|   **sOP**  |     10/15    |     2/10     |    -8/-5   |
|  **sAPE**  |     8/12     |     2/10     |    -6/-2   |
|  **sNEAR** |     10/15    |     2/10     |    -8/-5   |
|  **sAXS**  |     10/15    |     2/10     |    -8/-5   |
|  **sUNI**  |     8/12     |     2/10     |    -6/-2   |
|  **sDYDX** |     10/15    |     2/10     |    -8/-5   |
|  **sAAVE** |     8/12     |     2/10     |    -6/-2   |
|  **sFLOW** |     8/12     |     2/10     |    -6/-2   |

## Max Market Value

|            | **Existing** | **Proposed** |  **Change** |
|:----------:|:------------:|:------------:|:-----------:|
|  **sETH**  |    10,000    |    20,000    |   +10,000   |
|  **sBTC**  |     1,000    |     2,000    |    +1,000   |
|  **sBNB**  |     7,500    |    20,000    |   +12,500   |
|  **sLINK** |    200,000   |    600,000   |   +400,000  |
|  **sSOL**  |    100,000   |    170,000   |   +70,000   |
| **sMATIC** |   1,250,000  |   4,000,000  |  +2,750,000 |
|  **sDOGE** |   5,000,000  |  70,000,000  | +65,000,000 |
|  **sFTM**  |   1,500,000  |   3,000,000  |  +1,500,000 |
|  **sATOM** |    75,000    |    100,000   |   +25,000   |
|  **sARB**  |   1,500,000  |   3,000,000  |  +1,500,000 |
|   **sOP**  |    300,000   |    700,000   |   +400,000  |
|  **sAPE**  |    150,000   |    400,000   |   +250,000  |
|  **sNEAR** |    250,000   |   1,000,000  |   +750,000  |
|  **sAXS**  |    50,000    |    100,000   |   +50,000   |
|  **sUNI**  |    40,000    |    100,000   |   +60,000   |
|  **sDYDX** |    100,000   |    800,000   |   +700,000  |
|  **sAAVE** |     3,000    |     5,000    |    +2,000   |
|  **sFLOW** |    50,000    |    100,000   |   +50,000   |

## Skew Scale

|              | **Existing** |  **Proposed** |    **Change**    |
|:------------:|:------------:|:-------------:|:----------------:|
|   **sDOGE**  |  500,000,000 | 2,500,000,000 | 2,000,000,000.00 |
|   **sARB**   |  150,000,000 |   75,000,000  |    -75,000,000   |

## Liquidation Buffer Ratio

|           | **Existing** | **Proposed** | **Change** |
|:---------:|:------------:|:------------:|:----------:|
|  **sETH** |      100     |      75      |     -25    |
|  **sBTC** |      100     |      75      |     -25    |
|  **sFTM** |      100     |      125     |     +25    |
| **sATOM** |      100     |      125     |     +25    |
| **sAVAX** |      100     |      125     |     +25    |
|  **sARB** |      100     |      125     |     +25    |
|  **sOP**  |      100     |      125     |     +25    |
|  **sAPE** |      100     |      125     |     +25    |
| **sNEAR** |      100     |      125     |     +25    |
|  **sAXS** |      100     |      125     |     +25    |
|  **sUNI** |      100     |      125     |     +25    |
| **sDYDX** |      100     |      125     |     +25    |
| **sAAVE** |      100     |      125     |     +25    |
| **sFLOW** |      100     |      125     |     +25    |
|  **sAUD** |      100     |      30      |     -70    |
|  **sGBP** |      100     |      30      |     -70    |
|  **sXAU** |      100     |      30      |     -70    |
|  **sXAG** |      100     |      30      |     -70    |
|  **sEUR** |      100     |      30      |     -70    |

## Liquidation Premium Multiplier

|            | **Existing** | **Proposed** | **Change** |
|:----------:|:------------:|:------------:|:----------:|
|  **sETH**  |       1      |       2      |     +1     |
|  **sBTC**  |       1      |       3      |     +2     |
|  **sBNB**  |       1      |       3      |     +2     |
|  **sLINK** |       1      |       3      |     +2     |
|  **sSOL**  |       1      |       3      |     +2     |
| **sMATIC** |       1      |       3      |     +2     |
|  **sDOGE** |       1      |       3      |     +2     |
|  **sFTM**  |       1      |       3      |     +2     |
|  **sATOM** |       1      |       3      |     +2     |
|  **sAVAX** |       1      |       3      |     +2     |
|  **sARB**  |       1      |       3      |     +2     |
|   **sOP**  |       1      |       3      |     +2     |
|  **sAPE**  |       1      |       3      |     +2     |
|  **sNEAR** |       1      |       3      |     +2     |
|  **sAXS**  |       1      |       3      |     +2     |
|  **sUNI**  |       1      |       3      |     +2     |
|  **sDYDX** |       1      |       3      |     +2     |
|  **sAAVE** |       1      |       3      |     +2     |
|  **sFLOW** |       1      |       3      |     +2     |

## Max Leverage

|            | **Existing** | **Proposed** | **Change** |
|:----------:|:------------:|:------------:|:----------:|
|  **sETH**  |      100     |      50      |     -50    |
|  **sBTC**  |      100     |      50      |     -50    |
|  **sBNB**  |      100     |      25      |     -75    |
|  **sLINK** |      100     |      25      |     -75    |
|  **sSOL**  |      100     |      25      |     -75    |
| **sMATIC** |      100     |      25      |     -75    |
|  **sDOGE** |      100     |      25      |     -75    |
|  **sFTM**  |      100     |      25      |     -75    |
|  **sATOM** |      100     |      25      |     -75    |
|  **sAVAX** |      100     |      25      |     -75    |
|  **sARB**  |      100     |      25      |     -75    |
|   **sOP**  |      100     |      25      |     -75    |
|  **sAPE**  |      100     |      25      |     -75    |
|  **sNEAR** |      100     |      25      |     -75    |
|  **sAXS**  |      100     |      25      |     -75    |
|  **sUNI**  |      100     |      25      |     -75    |
|  **sDYDX** |      100     |      25      |     -75    |
|  **sAAVE** |      100     |      25      |     -75    |
|  **sFLOW** |      100     |      25      |     -75    |

## Max Funding Velocity

|            | **Existing** | **Proposed** | **Change** |
|:----------:|:------------:|:------------:|:----------:|
|  **sBNB**  |       3      |       9      |     +6     |
|  **sLINK** |       3      |       9      |     +6     |
|  **sSOL**  |       3      |       9      |     +6     |
| **sMATIC** |       3      |       9      |     +6     |
|  **sDOGE** |       3      |       9      |     +6     |
|  **sFTM**  |       3      |       9      |     +6     |
|  **sATOM** |       3      |       9      |     +6     |
|  **sAVAX** |       3      |       9      |     +6     |
|   **sOP**  |       3      |       9      |     +6     |
|  **sAPE**  |       3      |       9      |     +6     |
|  **sNEAR** |       3      |       9      |     +6     |
|  **sAXS**  |       3      |       9      |     +6     |
|  **sUNI**  |       3      |       9      |     +6     |
|  **sDYDX** |       3      |       9      |     +6     |
|  **sAAVE** |       3      |       9      |     +6     |
|  **sFLOW** |       3      |       9      |     +6     |
|  **sAUD**  |       3      |       1      |     -2     |
|  **sGBP**  |       3      |       1      |     -2     |
|  **sXAU**  |       3      |       1      |     -2     |
|  **sXAG**  |       3      |       1      |     -2     |
|  **sEUR**  |       3      |       1      |     -2     |

## Max Premium Discount` & Max Liquidation Delta
- maxPD is set to 2 * (offchain maker fee + offchain taker fee)
- maxLiquidationDelta is set to offchain maker + offchain taker fees

# Abstract

Below is a description on the parameters being updated:
- `makerFeeOffchainDelayedOrder` and `takerFeeOffchainDelayedOrder` are the fee rates applied on maker & taker off-chain orders in bp
- `maxMarketValue` is the maximum amount of open interest allowed on long and short positions in a given perp market.
- `skewScale` is a scaling parameter that helps calibrate the amount of slippage (or price improvement) a position receives when a position is modified. It also is a parameter that affects the speed by which funding rate changes.
- `maxLeverage` is the max leverage a position is allowed to take on. Any changes to existing positions that result in the leverage going above `maxLeverage` would revert.
- `liquidationBufferRatio` is the penalty imposed on a position when it is liquidated. The penalty is calculated as follows: `buffer * P * S`
- `LiquidationPremiumMultiplier` or `LPM` is an additional margin required to be set aside when an account opens position with larger size. The `liquidationPremium` is calculated as follows: `LPM * (S /Scale) * P * S` .
- `maxFundingVelocity` is the parameter that helps calibrate the speed by which funding rate changes for a given level of skew & skew scale.
- `maxPD` (MPD) and `maxLiquidationDelta` (MLD) are parameters introduced  in [SIP-2005](https://sips.synthetix.io/sips/sip-2005/) and they are typically set as described above. These parameters determine whether an account can be liquidated spontaneously or exclusively by endorsed Liquidators.


# Motivation

The primary motivation behind these parameter changes:
- OI caps can be increased taking into account the risk associated with opening positions. The lifting of open interest is batched with liquidation buffer & liquidation premium multiplier changes in order to constrain the size of single positions and therefore reduce the market impact on the debt pool from significant price changes.
- Users can now specify any leverage they aim for, note that the previously configured leverage levels although configured at the contract level, front-ends were asked to constrain them to 25x as a safety precaution. This was done so in order to temporarily patch issues with the previous contracts when accounts attempted to close existing positions.
- Fees are changed to drive more volume to the protocol with focus on arbitrageurs playing a role in helping balance out the skew (i.e. relieve the debt pool from impact of price changes).
- Skew Scale is modified on few markets in order to align with the scaling factor derivative seen on centralized exchanges.
- Max funding velocity is finally updated in order to help promote skew balancing on alt coins and make the funding rate on Forex & Commodities more appealing.

# Configuration Details

Please note the below important specifications on the timing of the parameter updates:
- Fees, oi caps, max leverage, MPD and MLD, max funding velocity can be changed immediately.
- `liquidationBufferRatio` can only be changed upward by at most 10% of the prevailing configuration, once every week until it reaches it's target. However it can be lowered immediately.  
To illustrate, with an example assuming the prevailing buffer is 100 bp and the target is 125 bp, buffer could be changed as follows

a) 100 bp to 110 bp in the first week

b) 110 bp to 121 bp in the second week

c) 111 to 122 bp in the third week

d) 122 bp to 125 bp in the fourth week

- Skew scale can be changed by at most 10% per day (whether up or down) until it reaches the target specified in this SCCP. However, if the existing market is utilized by more than 90% of the prevailing open interest (on both long and short sides), then the skew scale parameter can be updated immediately.
- `liquidationPremiumMultiplier` can only be changed upward by at most 25% of the prevailing configuration, once every week  until it reaches it's target. However it can be lowered immediately.


# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
