---
sccp: 302
network: Ethereum & Optimism
title: Reduction in the Length of Council Election Periods
author: TerraBellus (@TerraBellus)
status: Draft
created: 2022-10-11
type: Meta-Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

In the interests of greater efficiency, this SIP seeks reduce the length of time required to hold a council election by adjusting the timing of both the nominations and voting periods.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The recent passing of [SIP-278: Enable nominations during voting period](https://sips.synthetix.io/sips/sip-278/) has reduced the necessary length of a epochal election by allowing nominations to be made concurrently with voting. As the two can now be overlapped, the independent and week-long length of the nominations phase adds to the time it takes to stage an election with little in the way of return. As the variables within the V3GM allow the two to be adjusted and overlapped, with the passing of this SIP an election process with a disproportionate time cost can be rendered more efficient.

The above would be achieved by:

- Calling `tweakEpochSchedule` on the four councils for two variable changes.

```solidity
    function tweakEpochSchedule(
        uint64 newVotingPeriodStartDate,
        uint64 newEpochEndDate
    ) external override onlyOwner onlyInPeriod(ElectionPeriod.Administration) {
```

- The current values would then be altered to the new, desired values.

```solidity
    "votingPeriodStartDate": "1671359097", // Sun Dec 18 2022 10:24:57 GMT+0000
    "epochEndDate": "1672568697", // Sun Jan 01 2023 10:24:57 GMT+0000
```

```solidity
    "votingPeriodStartDate": "1671667200", // Thu Dec 22 2022 00:00:00 GMT+0000
    "epochEndDate": "1672531199", // Sat Dec 31 2022 23:59:59 GMT+0000
```

- In order to adjust the third necessary value, used to alter the nomination period, an alternative call would be used on the four councils, `modifyEpochSchedule`. This is used in this case because the change is greater than the current `maxAdjustmentTolerance`, which is set at 604800 seconds (7 days). Usually such a change would be made within a SIP but due to these three changes being made with the same objective and conducted through a meta-gov SCCP, this SCCP proposes initiating the changes through this SCCP only.

```solidity
    function modifyEpochSchedule(
        uint64 newNominationPeriodStartDate,
    ) external override onlyOwner onlyInPeriod(ElectionPeriod.Administration) {
```

- The current values would then be altered to the new, desired values.

```solidity
    "nominationPeriodStartDate": "1670754297", // Sun Dec 11 2022 10:24:57 GMT+0000
    "nominationPeriodStartDate": "1671321600", // Sun Dec 18 2022 00:00:00 GMT+0000
```
    
- Combined, these changes would would set the `nominationPeriodStartDate` to 14 days prior to the `epochEndDate` and the `votingPeriodStartDate` to 10 days prior to the `epochEndDate`, with the `epochEndDate` falling at 23:59:29 on December 31st, 2022.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

At present, the council election process takes in excess of three weeks to carry out when including preparatory work. At almost one quarter of the entire epoch length, this creates a excessively large drain on the attention of incumbent councillors, Core Contributors and the Synthetix community at large. Reduction in the length of the nomination and voting periods, as well as conducting them simultaneously, will allow an election to be comfortably carried out within a period of two weeks, granting all parties the ability to more effectively concentrate their efforts on either campaigning for council seats when an election is being held or developing the protocol when one is not.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
