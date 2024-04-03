---
sccp: 313
title: USDC LP incentives for Base
type: Governance
network: Base
author: Cavalier (@cavalier_eth)
status: Implemented
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x1c3c6e84226e95de05bed1104b8c1808b020f9b94cbf39343c8f688d589428dd
created: 2024-03-21
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Register a USDC Rewards Distributor to the Spartan Council pool on Base, so that USDC incentives can be distributed to LPs.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->
1. Deploy a [rewards distributor contract](https://github.com/Synthetixio/rewards-distributors) controlled by the pdao and register it on the Spartan Council Pool `id =1`.
2. Configure the Rewards Distributor to distrubute rewards on the schedules defined by Treasury Council STPs or partners who incentivize LPs in the Spartan Council pool.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->
The Base deployment is ready to scale up, and USDC incentives are expected for LPs in the Spartan Council pool.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
