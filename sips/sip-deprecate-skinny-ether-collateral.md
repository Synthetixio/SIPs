---
sip: 142
title: Deprecating EtherCollateral loans
status: Feasibility
author: Jackson Chan (@jacko125)
discussions-to: https://research.synthetix.io

created: 2021-05-26
---

<!--You can leave these HTML comments in your merged SIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SIPs. Note that an SIP number will be assigned by an editor. When opening a pull request to submit your SIP, please use an abbreviated title in the filename, `sip-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

Deprecate the [skinny Ethercollateral](./sip-35.md) and [EtherCollateral sUSD](./sip-85.md) loans and remove them from the Synthetix system.

## Abstract

The EtherCollateral loans were scheduled to be deprecated once Multi-collateral loans system has been fully deployed. The current functions of the skinny ether collateral and Ethercollateral sUSD loans can be both done via the Multi-collateral loans and also the Ether Wrapper contracts.

After the one month notice period ending **00:00 UTC on June 25th, 2021**, the pDAO would enable liquidations on the Ethercollateral loans as per [SCCP 112](https://sips.synthetix.io/sccps/sccp-112) which allows any unclosed loans to be liquidated. Outstanding loans can be repaid by repaying the sUSD or sETH borrowed and the ETH collateral redeemed.

The EtherCollateral contracts can then be deprecated and removed from the Synthetix protocol by detaching these contracts from the protocol.

## Motivation

<!--This is the problem statement. This is the *why* of the SIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the SIP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the SIP will address the issue!-->

With the success of multi-collateral loans on Synthetix over the last 6 months, the time has come to sunset previous EtherCollateral loan contracts that are no longer active. The EtherCollateral loans were intended as a trial to enable users to borrow `sETH` and `sUSD` against ETH and had a built in liquidation function to allow them to be deprecated once the multi-collateral loans were fully functional.

Creating new loans with the EtherCollateral contracts have effectively been paused at the moment with the `issue limits` set to 1 sUSD and 1 sETH.

Another issue with the EtherCollateral sETH loans implementation was that it relied on the Depot contract to have enough sUSD deposited to be purchased for repaying the minting fees when a borrower repays their sETH loans.

Deprecating the EtherCollateral trials would also remove the overhead of managing these trial loans and their lending fees / min c-ratios as the Multi-collateral loans gets updated.

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

The `EtherCollateral` and `EtherCollateralsUSD` contracts to be removed from the Synthetix system and remove references in the AddressResolver to these contracts.

The `MultiCollateralSynths` would remove references to the `EtherCollateral` contracts as internal contracts that can issue and burn `sETH` and `sUSD` synths.

The `DebtCache` contract would be updated to remove references to these contracts and the amount of ETH or sUSD that is backed by the `EtherCollateral` loans once all the remaining loans have been liquidated and closed.

### Rationale

<!--This is where you explain the reasoning behind how you propose to solve the problem. Why did you propose to implement the change in this way, what were the considerations and trade-offs. The rationale fleshes out what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

The `MultiCollateralSynths` allows certain types of synths to be issued by non-SNX collateral such as ETH, renBTC. By removing the `EtherCollateral` and `EtherCollateralsUSD` as internal contracts that can issue and burn these synths from being minted by the deprecated EtherCollateral contracts.

Once the EtherCollateral loans are deprecated they can be removed from the `DebtCache` contract and the debt that is backed by the EtherCollateral loans can be removed from the debt pool calculation.

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->

**MultiCollateralSynth**

```solidity
contract MultiCollateralSynth is Synth {
        modifier onlyInternalContracts() {
        bool isFeePool = msg.sender == address(feePool());
        bool isExchanger = msg.sender == address(exchanger());
        bool isIssuer = msg.sender == address(issuer());
        bool isEtherWrapper = msg.sender == address(etherWrapper());
        bool isMultiCollateral = collateralManager().hasCollateral(msg.sender);

        require(
            isFeePool ||
                isExchanger ||
                isIssuer ||
                isEtherWrapper ||
                isMultiCollateral,
            "Only FeePool, Exchanger, Issuer or MultiCollateral contracts allowed"
        );
        _;
    }
}
```
**BaseDebtCache.sol**

- Remove references to `EtherCollateral` and `EtherCollateralsUSD` in the `function _totalNonSnxBackedDebt()` debt calculation.

### Test Cases

<!--Test cases for an implementation are mandatory for SIPs but can be included with the implementation..-->

### Configurable Values (Via SCCP)

<!--Please list all values configurable via SCCP under this implementation.-->

N/A

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
