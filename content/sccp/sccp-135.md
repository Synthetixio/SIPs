---
sccp: 135
title: Open Account Merging Continuously
status: Vote_Pending
discussions-to: governance
author: Rafa (@rafanator) 
created: 2021-08-13
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Make Account Merging always possible in order to enable transferring escrowed SNX balances to a different account.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

This SCCP intends to make account merging for any escrowed SNX balance (including partial amounts) possible at any time.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Not being able to merge accounts has caused several problems to stakers, such as:

- Small stakers foregoing rewards due to inability to consolidate large wallets
Less accounts staking as SNX is escrowed in wallets that are not maintained
- Limiting composability impedes using flashloans for debt repayment
- Staking pools cannot operate efficiently
- Overall worsening of UX


## Implementation

The merge window on the current escrow contract needs to be extended to a very long amount of time (like uint256(-1)) making it permanent.

The escrow migration service will be able to flash loan sUSD, burn all debt, migrate SNX and optionally sell down some SNX if the ratio is below 400%. By modifying the account merge window to be always on, this functionality can be integrated into staking.synthetix.io.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
