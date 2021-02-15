---
sip: 112
title: ETH Wrappr
status: WIP
author: bojan (@bojan), kaleb (@kaleb-keny)
discussions-to: https://research.synthetix.io/
created: 2020-02-15
---

<!--You can leave these HTML comments in your merged SIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SIPs. Note that an SIP number will be assigned by an editor. When opening a pull request to submit your SIP, please use an abbreviated title in the filename, `sip-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->
Allow users to wrap ETH and get sETH

## Motivation
<!--This is the problem statement. This is the *why* of the SIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the SIP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the SIP will address the issue!-->
We are experiencing a chronic shortage of Synths which is reflected on the market where Synths are being constantly traded above their peg for months now. 
Even after the introduction of Multi-Collateral Loans in SIP-97, problems with the peg persisted. One explanation is that those loans are relatively capital inefficient since they require over-collateralisation and thus are not effective tools for arbitrage and bringing synths to peg. 

Abstract
We propose to deploy a new contract that accepts deposits in ETH and in return mints sETH in the user's wallet. After successful ETH deposit, users' ownership over ETH is transferred to Synthetix protocol. Wrappr is a conditionally bidirectional contract, meaning that if it holds ETH in its reserve, it will accept deposits in sETH and release ETH.
ETH can be unwrapped at any point by anyone after the corresponding amount of sETH is sent back and effectively burned.
Motivation
 
## Specification
<!--The specification should describe the syntax and semantics of any new feature, there are five sections
1. Overview
2. Rationale
3. Technical Specification
4. Test Cases
5. Configurable Values
-->

### Overview
<!--This is a high level overview of *how* the SIP will solve the problem. The overview should clearly describe how the new feature will be implemented.-->
By allowing users to mint sETH against ETH at pair, an arbitrage opportunity will be instantly created, which will bring sETH to peg.

### Rationale
<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->
This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.

Technical Specification
The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.

### Test Cases
Test cases for an implementation are mandatory for SIPs but can be included with the implementation.

### Configurable Values (Via SCCP)

<!--Please list all values configurable via SCCP under this implementation.-->

For ETH Wrappr contract, the following values must be set.
maxETH the maximum amount of ETH held by contract.
wrapFeeRate the fee for wrapping and unwrapping ETH.

Proposed Initial Values
The following values are proposed as the initial configuration.
WrapprETH.sol
maxETH 25000
wrapFeeRate 0%
 
## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
