---
sccp: 69
title: Increase fees on trades into iBTC to 2%
author: Kaleb Keny (@kaleb-keny)
discussions-to: governance
status: Proposed
created: 2020-12-27

---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Raise exchange fees of trades into `iBTC` to `2%`.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Increasing fees on trades into iBTC, should close the front-running gap which became increasingly profitable as iBTC neared it's lower limit.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Analysis of on-chain data showed that front-running became increasingly possible on the iBTC. This is mostly due to chainlink delayed price push threshold as well as the increased leverage due to `iBTC` nearing it's lower limit.
It is worth mentioning that the current rate increases is short-term and rates will be changed back to previous levels once `iBTC` is frozen, or when leverage decreases back to previous levels.


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
