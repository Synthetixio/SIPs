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

Adjust SNX issued as inflation on L2 in response to an over-issuance that occurred at the conclusion of the fee period ending 07/09/2022.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

During the fee period that concluded on September 7th, 2022, an error occurred in the amount of SNX sent to L2 for distribution. Rather than receiving 627k SNX, 1,274k SNX was made available for claiming by stakers on L2. This occurred due to the incrementally decreasing weekly inflation configuration being miscalculated and the error not being picked up prior to the manual intervention occurring that allocates SNX for emission. While the error has since been patched, a remedy for the misallocation has yet to be implemented. This SIP seeks to address this issue.

In order to compensate for the over-allocation of SNX to L2, the Core Contributors have suggested reallocating 637k SNX to L1 from the supply scheduled to be sent to L2. This reallocation would occur over several weeks, with the SNX amount designated to L2 being reduced by approximately 212k per week, for three weeks. This three-week period of reduced L2 emission would be scheduled to begin during the fee period that starts on September 21st, 2022.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Since the release of SIP-276: Turn off the money printer, the reduction of SNX inflation to zero has become a real possibility. In light of this, the incremental distribution of the remaining SNX inflation now has an added importance, as spreading the emissions evenly will optimize the time available to interested parties to observe the effects of the inflation reduction. Coupled with this, maintaining the emission schedule of SNX sent to both L1 and L2 will allow the total supply of 300,000,000 SNX to be reached in as egalitarian a manner as possible, setting the stage for a continuation of economically fair and ideologically inspired protocol growth post-brrr.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
