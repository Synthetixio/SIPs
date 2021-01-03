---
sccp: 69
title: Lower Fees on Frozen Inverse Synths
author: Kaleb (@kaleb-keny)
discussions-to: governance
status: Proposed
created: 2021-01-03
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Lower exchange fees on inverses which had been frozen.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

Proposing to lower fees levied on traders for trading into a particular iSynths.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The fee increase to account for higher leverage increased by closing the front-running gap. Given that these inverse synths are expected to be reset the sccp proposes to lower the fees back to previous levels, aligned or slightly below the oracle push frequency.


|       | Oracle Push | Current Fee | New Fee |
|:-----:|:-----------:|:-----------:|:-------:|
|  iETH |    0.50%    |    0.80%    |  0.30%  |
| iDEFI |    1.00%    |    1.50%    |  1.00%  |
|  iADA |    1.00%    |    1.50%    |  1.00%  |


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
