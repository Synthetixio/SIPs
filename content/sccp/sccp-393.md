---
sccp: 393
title: Update V3 Staleness
type: Governance
network: Base
author: Kaleb (@kaleb-keny)
status: Vote_Pending
created: 2025-02-25
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to implement the following updates with regards to the staleness tolerance:
- Increase it for liquidations, deposits and withdrawals on the ETH and BTC perp markets to 1 hour, from 1 minute.
- Increase it for liquidations, deposits and withdrawals on the rest of the perp markets to 3 minutes from 1 minute.
- Increase the staleness tolerance for the all spot operations on the cbBTC, cbETH and wstETH spot markets to 1 day from 1 minute.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The staleness tolerance is the duration during which price updates are not required, in order to perform a certain contract interaction.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The proposed parameter changes are in light of new tooling put in place that updates prices on a recurrent basis as well as the need to move away from pull based pricing in order to facilitate integrations of synthetix vaults (coming soon).

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).