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

- Setting the `nominationPeriodStartDate` to 14 days prior `epochEnd`

- Setting the `votingPeriodStartDate` to 10 days prior to `epochEnd`

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

At present, the council election process takes in excess of three weeks to carry out when including preparatory work. At almost one quarter of the entire epoch length, this creates a excessively large drain on the attention of incumbent councillors, Core Contributors and the Synthetix community at large. Reduction in the length of the nomination and voting periods, as well as conducting them simultaneously, will allow an election to be comfortably carried out within a period of two weeks, granting all parties the ability to more effectively concentrate their efforts on either campaigning for council seats when an election is being held or developing the protocol when one is not.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
