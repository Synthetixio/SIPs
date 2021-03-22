---
sccp: 90
title: Update priceDeviationThresholdFactor to 1.5
status: Proposed
author: Kaleb  (@kaleb-keny)
discussions-to: governance
created: <2021-03-22>
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Update the `priceDeviationThresholdFactor` in the `SystemSettings` contract to 1.5x from 3x.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Given the addition of multiple stock synths, this sccp proposes to tighten `priceDeviationThresholdFactor` to a value of 1.5x, in order to safeguard against the event of a significant increase in synth price following a reverse stock split.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->


As explained in [SIP-65](https://sips.synthetix.io/sips/sip-65) the decentralized circuit breaker aims at preventing irrecoverable loss on minters by halting the exchange on a synth, if it's price increases or decreased by `priceDeviationThresholdFactor`.  The current factor is currently configured to 3 and would only  trigger if the price were to increase or decrease by 3x which is too wide to cater for 2-for-1 stock split or reverse stock split, in which the price halves or doubles.
Therefore, updating the `priceDeviationThresholdFactor ` to 1.5 would tighten the band to a 1.5x move and would act as a safety mechanism in case such an event were to occur. The table below shows the upper and lower bands of the 1.5x and 3x factors for a synth having an initial price of 100.

| priceDeviationThresholdFactor  	|  1.5X 	|   3X  	|
|--------------------------------	|:-----:	|:-----:	|
|           Lower Bound          	| 66.67 	| 33.33 	|
|           Upper Bound          	|  150  	|  300  	|

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
