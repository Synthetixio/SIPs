---
sip: <to be assigned>
title: pDAO authority to protect governance
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

This proposal gives pDAO the ability to not award a governance NFT, or to remove the governance NFT from a user who won a governance election if they have previously been removed from a council for inactivity or malice, including extending to their alt addresses.

## Abstract

The Synthetix voting system allows for individuals to run in the Spartan Council elections, and to vote for themselves, even in cases where the user has been previously expelled from a council. This includes the ability for a user to use new addresses or identities in order to run for council, leaving our governance process susceptible to governance attacks from motivated actors.

The goal of this SIP is to give pDAO the authority to not award (or if already awarded to remove) the governance NFT from any actor who is either a previously expelled councillor or found to be the alt of a previously expelled councillor.

## Motivation

Previously Synthetix had not ever had expelled councillors, nor motivated individuals with enough voting authority to vote themselves unduely on to council. However, in the current climate of apathy around defi governance, and with the recent expulsion of William87/Polik/Pollik/Napgener/Sam/Samantha, and his statements on intending to run in the next election with mulitple alts, it is important that the Spartan Council gives the pDAO clear guidelines and authorities to ensure the peaceful transfer of power between epochs.

## Specification

There is no need for a technical specification here as this SIP simply makes clear that pDAO has the right to use their current technical means of removing a governance NFT if the candidate was previously expelled.

It should however allow a Spartan Council, once duely in session, to hold a meta-governance vote to expunge a former expulsion and allow said candidate to run again should they be deemed to not be a risk and were merely inactive.

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
