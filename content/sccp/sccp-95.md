---
sccp: 95
title: Increase loans and shorts cap to sUSD 90 million from sUSD 75 million
author: Kaleb Keny (@kaleb-keny)
discussions-to: governance
status: Implemented
created: 2021-04-17
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

The current `maxDebt` was configured to be sUSD 75 million in [SCCP-94](https://sips.synthetix.io/SCCP/sccp-94) but has almost been reached, this sccp proposes to increase it to sUSD 90 million given the increased demand for shorts.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The cap if increased to sUSD 90 million allows users to continue to take loans and shorts without interruption.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Total debt has almost reached the sUSD 75 million `maxDebt` previously configured, as can be seen in the table below:

|                       | **sUSD M** |
| --------------------- | :--------: |
| **ETH Collateral**    |   **12**   |
| sUSD                  |     12     |
| **renBTC Collateral** |   **6**    |
| sBTC                  |     -      |
| sUSD                  |     6      |
| **Shorts**            |   **54**   |
| sBTC                  |     21     |
| sETH                  |     33     |
| **Total**             |   **72**   |


Therefore raising it to sUSD 90 million allows users to continue to open short positions without interruption.


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
