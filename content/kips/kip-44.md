---
kip: 44
title: Establish Trial MarketingDAO Grants Council
status: Draft
author: Burt Rock (@BurtRock)
created: 2022-11-25
---

## Summary

This KIP proposes to establish a Grants Council as part of the MarketingDAO.

## Abstract

Grants Council will be a three-seat organization funded with an allocation of $KWENTA tokens each epoch with the power to fund community members from this allocation, or from additional funds provided by the treasury, via a simple majority vote. Grants Council will be the primary mechanism by which community projects related to Kwenta DAO marketing or business development can be evaluated and funded.

## Motivation

Although the current MarketingDAO has been able to facilitate some contribution from the community, the process of funding community grants is currently lacking in terms of a process that is easy for community members to access, predictable and on-demand funding, and formal community oversight regarding grant evaluation and approval.

Given the success and popularity of similar models from Lyra and Synthetix, as well as the launch of the Kwenta token providing a new source of funding which directly rewards community contributors with the ability to stake and vote, it is the correct time to establish the new body.

## Specification

# Overview

Three community members will be selected via a popular vote by token holders. Kwenta DAO will distribute an NFT to the selected members to facilitate voting on grants and allocation of grant funds. Grants Council members are responsible for rewarding grants and allocating the Grant Council funds. 

**Elections**
- Following the passage of this KIP, a first Grants Council election should be completed in less than 30 days.
- To ensure high quality candidates, self-nominated candidates must be approved by at least 2 members of the Elite Council before candidates will be considered eligible.
- Grants Council Elections will have the same length of voting period, have the same eligible voters, and use the same voting system as Elite Council elections.
- Number of seats will be 3, and these 3 seats will be filled by the top 3 candidates in the election.
- The first Grants Council epoch will end simultaneously with the first token holder elected Elite Council epoch, and epochs and elections will continue to run on a schedule simultaneously with Elite Council moving forward.
- The first Grants Council epoch will have an evaluation period during the final 30 days of the epoch. In this evaluation period, the Grants Council will present its progress to the Elite Council and the community. Elite Council must confirm by majority vote that the Grants Council should continue to the next epoch, otherwise the Grants Council is dissolved and discontinued following the first epoch.

**Responsibilities**
- Draft and propose a Grants Council self mandate detailing the ongoing rights and responsibilities of Grants Council moving forward.
- Propose and request an ongoing funding source. Work with the appropriate governing body to secure this funding, e.g., the Treasury Council to secure regular funding from the Treasury.
- Propose and implement a system for managing funds and making payments to grant recipients, such as a Gnosis safe or similar infrastructure.
- Propose and implement a system for grant applications, a bounty board, terms for retroactive distributions, or other infrastructure enabling the community to interact with the Grants Council.
- Establish criteria for evaluating grant proposals, awarding grants or bounties for completed projects, and managing disputes.
- Establish regular meetings or communication channels with core contributors to assess Kwenta’s needs and ensure Grants Council is aware of the immediate needs of the Kwenta DAO and working in harmony with contributors. 
- Provide funding, high level management, and evaluate projects completed by community members.
- Coordinate with DevDAO to propose tickets which contribute to GrantsDAO projects, or synchronize MarketingDAO efforts with the Kwenta exchange.
- The first Grants Council should demonstrate their effectiveness by managing the implementation of two specific projects described in this proposal, or by recommending and implementing alternative projects.

**First Grants Council Projects**
The first Grants Council will immediately begin planning and managing the implementation of 2 specific projects, which will be the primary measure of Grants Council effectiveness during the evaluation period. Grants Council activities should not be limited to these projects, but should make evaluating the feasibility of these projects and presenting their progress to the community a priority.
- Community Growth Project: Grants Council will expand use of the Kwentize PFP modifier throughout Discord and Twitter, improving its design, implementation, and connection to the Kwenta product. This project should help improve brand recognition, word of mouth growth, bolster social media activity, and help retain users in social media channels and on the product itself. Grants Council will develop KPIs to measure success when possible.
- Platform usage incentive project: Grants Council will oversee the design and implementation of a trading competition, or series of trading competitions. This project should directly encourage participants in the trading competition to make more frequent trades, reach higher volume targets, and trade a wider variety of assets. Grants Council will develop KPIs to measure the success of trading competitions under their management. This project should specifically demonstrate Grants Council's ability to coordinate closely with CCs and governance.

**Grant Approval**
- Elected Grants Council members will be issued an NFT from the AdminDAO allowing them to vote on grant proposals for the epoch following each election.
- Grants will be approved if at least 2 Grants Council members vote in favor of funding a specified grant, and must be funded by the end of the epoch they are approved. Grants not funded by the end of a council epoch require a new vote in the subsequent epoch.
- For the first Grants Council epoch only, the MarketingDAO PM may choose to replace the vote of a single council member. This mechanism allows the MarketingDAO PM to influence the outcome of votes only in situations where a unanimous decision is not reached by the Grants Council.

**One-time funding**
-Grants Council will be funded with 2,000 SNX. The source of this funding should first come from the existing MarketingDAO budget. Any additional SNX needed to make a sum of 2,000 should be provided by AdminDAO.
-A sum of 500 $KWENTA should be earmarked for Grants Council. This $KWENTA will be taken from the 15% of inflation currently earmarked for future trading incentive use. Treasury will distribute this $KWENTA as locked $KWENTA at the direction and discretion of the Grants Council during the first epoch. Any $KWENTA remaining unused at the end of the epoch may be clawed back by the treasury.
-This funding will only be allocated for the first Grants Council epoch. Any additional funding or funding for subsequent epochs will require a new proposal.

**Compensation**
- Grants Council will be a compensated role. Compensation will be equal to the compensation of the Elite Council in KIP-37, currently set to $2,500 per month in locked $KWENTA. 

**Council Member Removal and Mandate Enforcement**
- Following the formation of internal mandates and guidelines, Grants Council may request the removal and replacement of a single member with a simple majority vote. If successful, the Elite Council may confirm the decision with a simple majority vote. If both votes are successful, a replacement may be appointed by Elite Council for the remainder of the epoch using a majority vote.
- Elite Council may entirely dissolve a sitting Grants Council and trigger a special election by achieving the metagovernance threshold of votes. Unless other terms are specified through metagovernance, a 1 week nomination period and 1 week special election would immediately follow a successful dissolution vote. 
- A Grants Council term triggered by a special election will be up for re-election on one of the next two regularly scheduled election dates. If 90 or more days are left in the term, re-election will happen during the next scheduled election. If less than days exist in the term, Grants Council re-election will happen during the second regularly scheduled election date.
 
# Rationale

Although the 7 specified responsibilities of incoming Grants Council members should be sufficient to communicate expectations and purpose, the specific approach to implementation is left to the incoming Grants Council to establish that the body itself should be self governing and independent in its day to day activities. The necessary framework including a broad statement of purpose, expectations, and a voting framework enabling Grants Council to make internal decisions is provided in order to ensure Grants Council is empowered to begin this task immediately.

Council member removal and council dissolution ensure a framework exists both for internal oversight, as well as emergency oversight leveraging the Elite Council. This should provide a clear response for issues with the Grants Council without taking unnecessary time developing the framework retroactively, ensuring Grants Council functioning can efficiently resume.

**Specified Projects**

The inclusion of specific projects in this KIP helps clarify the Grants Council mandate and introduces real world examples of Grants Council responsibilities, demonstrating that the role is meant to be actively planning MarketingDAO activities, and not limited to passively funding grant proposals. There will be no "paid to vote" role. Grants Council nominees and voters can better understand the appropriate candidate for the role.

These specific projects also maximize the chance of Grants Council success, and give the community and Elite Council clear expectations and criteria by which to evaluate the contributions Grants Council makes during the epoch. Although ultimately Grants Council should be independently responsible for developing their own mandates, these projects provide a framework for that discussion.

**One Time Funding**

A one time allocation of funds to the Grants Council allows the Grants Council to begin working immediately with a reasonable budget, while still requiring that Grants Council independently develop a plan for ongoing or future expenses.

**Temporary Oversight and Abridged First Epoch**

The first epoch of Grants Council will include temporary specifications ensuring a degree of oversight from the MarketingDAO PM, and an abridged length for the first epoch. The purpose of these provisions is to maximize community participation while ensuring alignment. 

MarketingDAO PM voting rights are meant to be used as an emergency measure, and should be avoided By granting special voting powers to the MarketingDAO PM in the first epoch, a protective mechanism against governance attacks or absent council members can be exercised without the need for existing core contributors to hold a seat on the council, as is often mandated by other DAOs with similar bodies. Making this mechanism temporary ensures that its necessity and effectiveness is discussed after the first epoch so that the KwentaDAO continues to further decentralize and empower the community. 

An abridged epoch for the first council ensures that the terms of Grants Council’s establishment can be decided by a token holder elected body, since Grants Council could be established after the first election, but moving forward should align with Elite Council elections.

# Technical Specification

Implementation will require NFTs representing voting power to be minted and issued by AdminDAO, and require that Snapshot be set up to record Grants Council votes. All other infrastructure will be specified by Grants Council in subsequent governance proposals.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
