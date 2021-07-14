---
sccp: 112
title: Ending Trial ETH Loan Programs 
author: Kaleb Keny (@kaleb-keny)
discussions-to: governance
status: Implemented
created: 2021-05-25
---

## Implementor

Jackson

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to end the ETH trial loan programs for both both contracts `0xfED77055B40d63DCf17ab250FFD6948FBFF57B82` and `0x7133afF303539b0A4F60Ab9bd9656598BF49E272` by triggering the `setLoanLiquidationOpen`.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The programs have long past their due date and now can be ended as we transition to  multi-loan collateral loan contracts is complete.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Users can now procure  synths  more easily with the wrappr and the multi-collateral loan contracts, therefore decommissioning the trial contracts will alleviate some of the confusion on having multiple programs running simultaneously. 
It is important to mention that users will be accorded at least a month to close their loans, however, users that do not close their loans by the deadline would permanently lose access to their collateral.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
