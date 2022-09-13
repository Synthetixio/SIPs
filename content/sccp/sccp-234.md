---
sccp: 234
network: Ethereum & Optimism
title: Addressing an Issue in SNX Inflation Released on 07/09/2022
author: TerraBellus (@TerraBellus), Kaleb Keny (@kaleb-keny)
status: Draft
created: 2022-09-13
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Temporarily cut SNX issued as inflation on L2 and redirect it to L1 in response to an L2 over-issuance/L1 under-issuance that occurred at the conclusion of the fee period ending 07/09/2022.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

During the fee period that concluded on September 7th, 2022, a miscalculation occurred in the amount of SNX to be subtracted from total weekly emissions and sent to L2 for distribution. 1,274k SNX was made available for claiming by stakers on L2, rather than the correct amount of 637k SNX. These additional SNX sent to L2 should have instead remained on L1 and been made available for claiming by L1 stakers. This occurred due to the incrementally decreasing weekly inflation configuration being miscalculated and the error not being picked up prior to the manual intervention that allocates SNX for L1 and L2 emission. While the error has since been patched, a remedy for the misallocation has yet to be implemented. This SIP seeks to address this issue.

In order to compensate for the over-allocation of SNX to L2 and under-allocation to L1, the Core Contributors have suggested reallocating 637k SNX to L1 from the supply scheduled to be sent to L2 over a three-week period. The SNX amount designated to L2 would be reduced by approximately 212k per week, for a three-week period. This three-week period of reduced L2 emission and increased L1 emission would be scheduled to begin during the fee period that starts on September 21st, 2022.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Since the release of [SIP-276: Turn off the money printer](https://sips.synthetix.io/sips/sip-276/), the reduction of SNX inflation to zero has become a real possibility. In light of this, the incremental distribution of the remaining SNX inflation now has an added importance, as spreading the emissions evenly will optimize the time available to interested parties to observe the effects of inflation reduction. Coupled with this, maintaining the emission schedule of SNX sent to both L1 and L2 would allow the total supply of 300,000,000 SNX to be reached in as egalitarian a manner as possible, setting the stage for a continuation of economically fair and ideologically inspired protocol growth post-brrr.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
