---
sccp: 94
title: Increase loans and shorts cap to sUSD 75 million from sUSD 65 million
author: Kaleb Keny (@kaleb-keny)
discussions-to: governance
status: Proposed
created: 2021-04-13
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

The current `maxDebt` was configured to be sUSD 65 million in [SCCP-91](https://sips.synthetix.io/SCCP/sccp-91) but has been surpassed, this sccp proposed to increase it to sUSD 75 million given the increased demand for shorts, following the recent temporary increase in snx rewards.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The cap if increased to sUSD 75 million allows users to take loans and shorts.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Total debt had increased beyound the sUSD 65 million `maxDebt` previously configured, as can be seen in the table below:

|                       | **sUSD M** |
| --------------------- | :--------: |
| **ETH Collateral**    |   **8.7**  |
| sUSD                  |     8.7    |
| **renBTC Collateral** |   **4.4**  |
| sBTC                  |    0.03    |
| sUSD                  |     4.4    |
| **Shorts**            |   **52**   |
| sBTC                  |     18.3   |
| sETH                  |     34     |
| **Total**             |   **65.5**   |



## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
