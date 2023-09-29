---
sccp: 308
title: Chainlink Node With Staleness Check
type: Governance
network: Optimism
author: kaleb (@kaleb-keny)
status: Draft
created: 2023-09-29
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to incorporate a stalenss check on the chainlink node used for SNX staking in the V3 system.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The chainlink node would have a staleness check incoporated based on the chainlink [heartbeat](https://docs.chain.link/data-feeds/price-feeds/addresses?network=ethereum&page=1&search=snx) of the respective network. The configuration would be 5,400 seconds on ethereum and 2,400 seconds on optimism.

Staleness is measured by fetching the timestamp of the latest chainlink price push and comparing it to the timestamp of the current block. If it exceeds the configured maximum staleness, the oracle would revert when called, otherwise it would return the oracle price and timestamp.

Note that with respect to v3 oracles, restrictions and filters on existing oracles (such as the chainlink oracle), could be performed via configuration changes, further reference can be found [here](https://github.com/Synthetixio/synthetix-v3/tree/main/protocol/oracle-manager).

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Currently the configured chainlink node does not incorporate any stalenss check. However, it is considered best practice that prices are checked for staleness before being consumed (e.g. staking, unstaking and liquidation). Hence, in case the oracle is stale, all activity that touches the oracle would revert.


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
