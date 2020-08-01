---
sip: TBA
title: Curve Minus DAI
status: WIP
author: Kaleb Keny (@kalebkeny)
discussions-to: Governance Channel
created: 2020-07-29
---

<!--You can leave these HTML comments in your merged SIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SIPs. Note that an SIP number will be assigned by an editor. When opening a pull request to submit your SIP, please use an abbreviated title in the filename, `sip-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

Setup a Curve pool  which omits DAI and a new staking contract for the new Curve pool. Incentivize synth holders to shift to the new Curve pool by shifting the SNX rewards to the new staking contract.

## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the SIP is implemented, not *why* it should be done or *how* it will be done. If the SIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

Much of the debate has already happened under the pre-SIP [research post](https://research.synthetix.io/t/should-dai-be-removed-from-the-curve-pool/27/30). The purpose of this SIP is  put together the different arguments from opposing camps into one document and proposes the new pool so that it can voted on by the SNX community.

## Motivation

<!--This is the problem statement. This is the *why* of the SIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the SIP proposes changing how something is calculated, you must address *why* the current calculation is inaccurate or wrong. This is not the place to describe how the SIP will address the issue!-->

#### Arguments In Favor of Keeping the Curve Pool Intact:
- Lower trading fees for LPs, a lower APY should be expected and that could result in a lower pool size, in case LP's favor a higher APY over the lower risk.
- More slippage/inconvenience when exchanging sUSD to DAI, as we would need to go through USDT/USDC then to DAI on another pool. 
- Currently DAI is widely known in the Ethereum space and some consider DAI to be the original stable coin. Removing it could deter some users, as they are keen on having DAI as part of the pool.
- Current arguments on peg stability could be resolved in the future, as MKR is working on minting fresh DAI against deposit of stable coins (USDC) at a rate close to 1 (PSM).
- There are caps on how much each DAI can be minted for collateral category. 

#### Arguments in Favor of Creating a new Curve Pool ex-DAI:
- The first argument rests on DAI not being pegged to USD, in case the value of DAI depreciates considerably LP participants will be holding more DAI and will lose a significant portion of their investment. The following risks could result in DAI breaking the peg negatively:

a) DAI is currently having issues with scaling which is causing a premium to persist. As a result, MKR has proposed the PSM, which allows to circumvent the cap on centralized stable coins to an extent. MKR plans to increasingly lean on USDC to ensure that DAI is pegged, which will increase the centralization related risks (i.e. freezing the USDC collateral that is backing DAI).

b) In order to fight the scaling issue, MKR has also allowed more tokens to be considered as eligible collateral, some of which are more volatile and expose the system to instability and risk of insolvency.

c) The MKR protocol is essentially controlled by the MKR foundation and Andreessen Horowitz (A16z). Therefore, important functions such as triggering the system shutdown are centralized and are not expected to be shifted to a keeper function any time soon.

- DAI being a competitor in the space is benefiting from the SNX subsidy by being included in the Curve pool.
- As can be seen on Curve, DAI is less available on that pool and potentially is not able to scale with increasing demand. Therefore, the lack of liquidity is an issue worth considering.

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

Creating a Curve pool (excluding DAI) and a new staking contract should remove all the LP risks associated with DAI and decrease SNX leaking value to the benefit of competitors in the space.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->

To be specified by the SNX core team, as it involves coordination with Curve Developers.

### Test Cases

<!--Test cases for an implementation are mandatory for SIPs but can be included with the implementation..-->

To be specified by the SNX Core developer team.

### Configurable Values (Via SCCP)

<!--Please list all values configurable via SCCP under this implementation.-->

The same variables used to configure the current staking and Curve contracts.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
