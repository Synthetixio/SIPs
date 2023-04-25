---
sip: <to be assigned>
title: Governance Accountability
network: Ethereum & Optimism
status: <Draft>
type: Meta-Governance
author:  Adam Cochran
implementor:me 
release:
implementation-date:
discussions-to: 
proposal:
created: 2023-04-25
requires:
---

## Simple Summary

This SIP will expand the Inactivity Threshold for Spartan Council to a greater degree of involvement than current standards to ensure activity.

## Abstract

SIP-274 established an inactivity threshold for Spartan Council that extended only to governance votes. It provides the Spartan Council and pDAO the right, but not the obligation to dismiss councillors if they've missed more than 5 votes within a single epoch.

This abstract aims to increase the responsibility by extending that to:

- Missing >3 SIP proposal calls within a single epoch, without a valid reason as judged by peers.
- Missing >3 internal calls within a single epoch, without a valid reason as judged by peers.
- Not having feedback or commentary on at least 5 SIPs within a single epoch, or 33% of SIPs if less than 10 total SIPs that epoch.
- Not having a meaningful verbal contribution in at least 3 SIP calls during a single epoch.

## Motivation

Spartan Council is the highest office within our governance system, and in these previous cycles there has been a notable decline in councillor engagement, which is unfair to this community which provides councillors with a stipend for their work.

These rules aim to increase the level of accountability that the Spartan Council faces, and provide prospective councillors with a more clear overview of the responsibilities of taking on this role. These rules do not aim to be a cureall but instead a first step in improving our accountability process.

## Specification

There is no specific technical specification for this SIP.

Instead the only specification to note, is that similar to SIP-274 create the *right* but not the obligation for remaining members of the Spartan Council to start the dismissal process along with pDAO.

In each case, there can be valid reasons for absences, or the decision that contributions and an intent to improve on missteps merit the councillor not being removed, this power rests therefore with a jury of their peers letting the remaining Spartan Council members who are not underreview weigh up the decision to dismiss.

As with SIP-274, the dismal is a matter of metagovernance and requires an n-1 vote of eligible voters, excluding the Spartan Councillor under review, in order to pass.

### Overview

-pDAO will be given the authority to review candidates upon the start of a new epoch and withhold the governance NFT, or remove the governance NFT from any candidates who are councillors who were previously expelled by metagovernance vote.
-A Spartan Council may at any time hold a metagovernance vote to expunge the record of a former expelled councillor if they are deemed to not be a threat by that council to the governance process.

### Rationale

With our current system pDAO stands as the last fail safe to ensure smooth transition of power, without a way to fairly enforce the decisions that a voted on Spartan Council has put in place in prior cycles, there would be no consistency and the protocol would be subject to governance attacks in cycles with high governance apathy.

### Technical Specification

No needed technical changes. 

### Test Cases

No needed technical changes. 

### Configurable Values (Via SCCP)

No needed technical changes. 

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
