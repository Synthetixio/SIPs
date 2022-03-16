---
sccp: 169
network: Optimism
title: Update Parameters of Dynamic fees
author: Kaleb (@kaleb-keny)
status: Implemented
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/QmfNPNjRoSiFeRsCghz6HGuraFTJaY43hmZ5bqfbts7CEg
created: 2022-03-10
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes the following changes to Dynamic Fees parameters:

- Increase the `exchangeDynamicFeeThreshold` to 35 bp from 25 bp
- Lower the `exchangeDynamicFeeRounds` to 3 rounds from 10 rounds
- Decrease the `exchangeDynamicFeeWeightDecay` to 0.6 from 0.9

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The parameters being updated are as follows:

- `exchangeDynamicFeeThreshold` is the minimum change in price above which dynamic fees are levied. A larger threshold leads to lower dynamic fees.
- `exchangeDynamicFeeRounds` is the length of the look-back window. The shorter the lookback window, the less is persistent the impact of historical price volatiltiy on dynamic fees.
- `exchangeDynamicFeeWeightDecay` is the coefficient applied on dynamic fees from the previous round. The lower the decay factor, the faster dynamic fees revert back to zero.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The primary motivation is to improve the trading experience without increasing the risk of oracle latency arbitrage significantly.

The below table showcases stats on the decrease in fees when moving from the previous dynamic fee configuration to the new one, as well as the average amount of time fees stay above a threshold:

|       **Fee**        |  Ticker  | **Mean** | **Std** | **> 50 bp** | **> 75 bp** | **> 100 bp** |
| :------------------: | :------: | -------- | ------- | ----------- | ----------- | ------------ |
| **Previous Config.** | **eth**  | 44 bp    | 22 bp   | 1550 sec    | 792 sec     | 630 sec      |
|                      | **btc**  | 42 bp    | 19 bp   | 1384 sec    | 635 sec     | 256 sec      |
|                      | **link** | 46 bp    | 19 bp   | 1350 sec    | 690 sec     | 546 sec      |
|                      | **sol**  | 43 bp    | 15 bp   | 1094 sec    | 350 sec     | 122 sec      |
|   **New Config.**    | **eth**  | 27 bp    | 7 bp    | 216 sec     | 203 sec     | 61 sec       |
|                      | **btc**  | 26 bp    | 5 bp    | 76 sec      | 59 sec      | 0 sec        |
|                      | **link** | 26 bp    | 5 bp    | 181 sec     | 118 sec     | 0 sec        |
|                      | **sol**  | 26 bp    | 4 bp    | 117 sec     | 116 sec     | 0 sec        |

The below table showcases the change in oracle latency when moving from the old fee regime to the new one. As can be seen, the oracle latency does not exceed 50 bp in most extreme cases, with 50 bp being the cutoff needed by latency arbitragers that aim to cover the base fee of the round trip.

| **Oracle Latency Delta** | **Ticker** | **99%** | **99.50%** | **99.90%** |
| :----------------------: | :--------: | :-----: | :--------: | :--------: |
|   **Previous Config.**   |  **eth**   |  -4 bp  |   14 bp    |   45 bp    |
|                          |  **btc**   |  -2 bp  |   20 bp    |   58 bp    |
|                          |  **link**  |  -4 bp  |   14 bp    |   45 bp    |
|                          |  **sol**   |  -2 bp  |   20 bp    |   58 bp    |
|     **New Config.**      |  **eth**   |  39 bp  |   53 bp    |   55 bp    |
|                          |  **btc**   |  8 bp   |   32 bp    |   66 bp    |
|                          |  **link**  |  11 bp  |   30 bp    |   62 bp    |
|                          |  **sol**   |  33 bp  |   45 bp    |   61 bp    |

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
