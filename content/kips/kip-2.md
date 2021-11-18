---
kip: 2
title: Kwenta Governance Framework 
status: Draft
author: Andrew Trudel (@andrew-synthetix)
created: 2021-11-08
---


## Summary

A proposal outlining a governance structure for the Kwenta DAO.

## Abstract

Kwenta requires a governance framework that enables the community to coordinate on maintaining and improving the protocol. To do this, the Elite Council will vote on a system, outlined in this proposal, that will dictate roles and processes that the Kwenta community will use to operate. 

## Motivation

By having a clear framework in which Kwenta governance will operate, the community will have the faculties it needs to achieve desired outcomes such as a defined way to propose new features, rewards DAO participants, and manage routine affairs. 

## Specification

Kwenta governance will follow a democratic structure with multiple semi-independent governing bodies, each with their own goals and operational structure.

**Staker:**

Users who stake their Kwenta will gain voting power and have the ability to vote in elections, proposals the Elite Council deems fit for a broader community vote, and Community Kwenta Improvement Proposals (CKIPs).

**Elite Council:**

Token holders will vote every three months (quarterly) on 5 community members to operate the Elite Council. The Elite Council  will be responsible for voting to pass or block Kwenta Improvement Proposals (KIPs). KIPs are proposals that anyone from the community can create and lobby for. If a KIP receives support from the community or directly from core contributors, the proposal will be voted on by the Elite Council. Proposals must reach a majority to pass. Meta-Governance proposals require unanimous support. 

**President:**

One of the 5 Elite Council members will become the President. The President is elected within the Elite Council, requiring 3/5 members' support. The President will be responsible for the strategic direction of the protocol and will have one additional vote of power representing the equivalent of two Elite Council members.

**Product Elites:**

This role will provide structured feedback to the developers during the implementation of a new KIP. Product Elites will be responsible for finding opportunities to improve the product, providing feedback and approving designs, as well as testing and providing feedback on staged code. The Elite Council in conjunction with the TreasuryDAO will use their discretion to determine the amount of Product Elites and approval votes necessary for this role. Council Elites can add and remove Product Elites as they see fit.

**Core Contributors:**

These members are responsible for executing on the decisions made by the Elite Council. CCs will design product changes, manage the smart contracts and UI, assist with marketing, and assist in supporting community infrastructure.

**Core Contributor Committee:**

This entity is managed and organized by Core Contributors. Core Contributor Committee members will hold a reserve of the Kwenta token (outlined in the tokenomics proposal as the Core Contributor allocation) as well as funding used for routine protocol expenses and Core Contributor payroll. Should additional funding be needed, the Core Contributor Committee will work with the treasuryDAO. This entity will ensure that Core Contributors will have stability under all market conditions.

**treasuryDAO:**

This sub-DAO (outlined in SIP-177) will control the treasury, investment, and growth funds for the Kwenta DAO, working with the Core Contributors and Elite Council to use funds for bootstrapping the protocol and ensuring long-term sustainability. The treasuryDAO would be composed of three anonymous signers where only ⅔ signers would be required to send a transaction. The treasuryDAO would be voted on by the Elite Council via a closed process: Community members would be able to put their name in a ballot box and then the Elite Council would choose from the list which participants would make up the treasuryDAO. Core Contributors and Elite Council members would be the only people to know who operate the treasuryDAO. At least ⅔ treasuryDAO members must be non-council members. An election for the treasuryDAO would only be held when a rebalance of members is required, a forced election would not be held in the same cadence as the Elite Council. TreasuryDAO members have a maximum term life of 1 year before they need to be reelected. 

**Future Additions:**

devDAO - A community oriented development structure that rewards developers for closing outstanding tickets by having their code merged as well structured compensation for longer-term members. This sub-DAO will include a community PM, various developer roles, and auditor roles.

marketingDAO - A community driven marketing branch that collaborates on growth and manages a budget. Rewards will be earned based on performance. Structured compensation will be available for longer-term members. This sub-DAO will include roles for marketers and designers.

**KIPs:**

A Kwenta Improvement Proposal outlines a change to be made to the Kwenta protocol. These are submitted to the Elite Council for voting and require a majority to pass.

Here is an example of the process a KIP would follow to be implemented:

1. A community member would write a KIP for a change to be made to Kwenta, following the structure established in SIP-01.
2. If there is community support (Ex. recurring discussion in discord about the KIP) or Core Contributor support is demonstrated for the KIP, the Elite Council would vote on the KIP.
3. If a majority is reached, the KIP will be handed over to the Core Contributors for implementation. If the KIP fails, it is properly labelled and dropped from the KIP process.
4. If designs are required, the core contributors will create designs and present them to the Product Elites.
5. Once Product Elite feedback has been taken into account and implemented into designs as necessary, the Product Elites will be responsible for approving the designs. The amount of approvals required for designs to pass this stage will be determined by the Elite Council
6. Once designs are approved, Core Contributors will then write the code necessary to implement the designs. If designs are not needed, the CCs would write the code necessary to meet the KIP’s requirements.
7. Once the necessary code has been written, the code would be staged for Product Elites to test. Testing feedback would be implemented as needed.
8. If the Product Elites determine that the code meets their standards and the required amount of approvals have been met, the code would be pushed to production.

**CKIPs:**

In the event that a structural change needs to be made to the DAO’s governance system, the community can overrule the Elite Council by reaching a quorum (over 50% of circulating supply voting in favour of a proposal) with a Community Kwenta Improvement Proposal (CKIP). CKIPs should only be used in the event that there’s disagreement between the Elite Council and the Kwenta community.

**KTRs:**

In the event that funding is required from the treasuryDAO, community members can create a KTR which will be passed to the treasuryDAO and either approved or rejected.

**Removal Mechanism:**

In the event that the community feels a member of the DAO is acting maliciously, a KIP can be written to remove a member of the DAO. This KIP would be voted on by the Elite Council and would require a majority to pass. If a council member is removed, the seat will remain empty for the remainder of the epoch. 

**DAO Role Compensation:**

DAO roles will be compensated via a portion of the yield generated by the growth fund. This will eventually be fulfilled by the treasury however due to the high inflation rate, the treasury will remain staked and untouched until a later date to ensure it still accumulates and retains a meaningful amount of the token supply. This proposal recommends that 30% of the growth fund would be staked to capture this yield. 1.5% of the yield generated from this mechanism will be used to compensate the Elite Council. 1.5% of the yield generated would be used to incentivize Product Elites. Remaining yield will be used to incentivize community development and marketing campaigns, a KTR will be needed to process these bonuses. The Elite Council can adjust these percentages with a KIP as needed. 

**Implementation:**

Token managed governance will go into effect once the Kwenta token is live. Until the Kwenta token is live, the Interim Kwenta Council will act as the official governing body. The first token manage election will be held at the start of the next quarter following the Kwenta token launch. 


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
