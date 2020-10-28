---
sccp: 54
title: Modify (SIP-90) Snapshot Governance Formula
status: Proposed
author: @mjayceee
discussions-to: https://research.synthetix.io/
created: 2020-10-28
---

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->
This SCCP proposes to modify the formula for off-chain snapshot-based governance put forward in SIP 90. The new formula enhances sybil resistance and amplifies the voices of long-term community members while maintaining the more egalitarian quadratic format.

## Abstract
<!--A short (~200 word) description of the variable change proposed.-->
This SCCP proposes an off-chain formula that incorporates staker data over the previous 50 fee periods. Each address will be "scored" over a rolling 50 week period. The total score for each address will be the new input to the quadratic formula. The most recent week will be weighted most heavily while the least (50th most) recent week will be weighted most lightly. The contribution will be scored based on SNX claimed in the fee period. Voters without a claim in the most recently closed fee period will be excluded. 

|  Week |  SNX claimed |  Multiplier |  Score | Total   |
|---|---|---|---|---|
|  1 | 40  | 50  | 2000  | 2000  |
|  2 | 38  | 49  |  1862 |  3862 |
|  3 | 37  | 48  |  1776 | 5638  |
|  ... | ...  | ...  | ...  | ...  |
| 50  | 29  | 1  | 29  | 99876  |
||||||
| Total  |   |   |   | 99876  |

## Motivation
<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->
The quadratic formula gives voice to smaller holders and this SCCP seeks to maintain that dynamic. However, while the expense would be non-trivial, motivated actors could sybil-attack the current formula where vote weight is based solely on debt in the most recent fee period. 

Additionally, the current formula gives no consideration to holder duration &#8722; one week holders are treated exactly the same as one year holders. This formula gives a greater voice to longer term holders, while still emphasizing more recent position size using a sliding scale multiplier.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).