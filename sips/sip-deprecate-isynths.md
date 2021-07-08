---
sip: TBA
title: Deprecate Inverse Synths
status: Draft
author: Jackson Chan (@jacko125), Kain Warwick (@kaiynne)
discussions-to: https://research.synthetix.io
created: 2021-07-07
---

<!--You can leave these HTML comments in your merged SIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SIPs. Note that an SIP number will be assigned by an editor. When opening a pull request to submit your SIP, please use an abbreviated title in the filename, `sip-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

Deprecate inverse synths as shorting is now enabled by the shorts mechanism and pause exchanges for inverse synths. Planned upgrade of Multi-collateral shorts to enable more assets to be shorted replacing inverse synths to allow traders to short on Synthetix.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the SIP is implemented, not *why* it should be done or *how* it will be done. If the SIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

Deprecate inverse synths from Synthetix exchange, which will pause exchanging into these inverse synths and purge any remaining holders. Existing inverse synth holders will be purged into sUSD before the isynths are removed. All inverse synths have been frozen at their upper / lower limits.

Phase one of the process will involve removing the current isynths from Synthetix and phase two would be updating the contracts to remove references to Inverse synths and inverse pricing from the ExchangeRates contract.

## Motivation

<!--This is the problem statement. This is the *why* of the SIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the SIP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the SIP will address the issue!-->

With the introduction of shorting in Multi-collateral loans [SIP 103](https://sips.synthetix.io/sips/sip-103) there has been the ability to short ETH and BTC without using iETH or iBTC. This SIP proposes to remove isynths from Synthetix in favor of enabling shorts on these assets.

The ongoing mangaement of isynths requires manual intervention by the core contributors to purge all holders and reset them whenever they froze. The design of the inverse synths pricing also introduced leverage as they reached their upper / lower limits, which required exchange fees to be increased to deal with frontrunning.

Upgrades to the multi-collateral loan and shorts contracts on L1 will enable shorting on assets for the top 10 traded synths by volume.

## Specification

<!--The specification should describe the syntax and semantics of any new feature, there are five sections
1. Overview
2. Rationale
3. Technical Specification
4. Test Cases
5. Configurable Values
-->
### Overview

### Technical Specification

### Phase 1: Purge and remove Inverse Synths

1. Pause exchange on all isynths.
2. Purge all remaining isynth holders and remove synths from the Synthetix and inverse pricing exchangeRates contract.
3. Ensure Collateral Manager continues to open loans and shorts with isynths supply at 0.

### Phase 2: Upgrade contracts to remove inverse synths

After delisting and removing isynths, references to inverse synths and pricing can be removed from:

1. ExchangeRates contract
2. CollateralManager contract (Upgrade as part of the Multicollateral loan updates)

This would require a release to remove the references to inverse pricing and use of inverse synths from these contracts.

## Rationale

Splitting the deprecation of isynths into two phases allows the isynths to be purged and removed from Synthetix exchange first, and then have contract updates to be done as a separate release.

### Test Cases

### Configurable Values

N/A

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
