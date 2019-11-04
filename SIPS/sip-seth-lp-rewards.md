---
sip: x
title: sETH LP rewards contract
status: WIP
author: Clinton Ennis
discussions-to: https://discord.gg/3uJ5rAy

created: 2019-11-04
---

<!--You can leave these HTML comments in your merged SIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SIPs. Note that an SIP number will be assigned by an editor. When opening a pull request to submit your SIP, please use an abbreviated title in the filename, `sip-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SIP.-->

Replace the current uniswap sETH Liquidity Provider mechanism with this onchian LP rewards staking contract

## Abstract

<!--A short (~200 word) description of the technical issue being addressed.-->

The current deplpyed solution is inneficient and buggy. There are weekly issues with valid LP's not getting rewards and cheaters getting rewards that should be disqualified. 
This onchain solution fixes all the issues and can be automated and self serve requiring much less steps than the current solution. 

## Motivation

<!--The motivation is critical for SIPs that want to change Synthetix. It should clearly explain why the existing protocol specification is inadequate to address the problem that the SIP solves. SIP submissions without sufficient motivation may be rejected outright.-->
TODO: Detail the issues here. 

## Specification

<!--The technical specification should describe the syntax and semantics of any new feature.-->
https://gist.github.com/k06a/3acc48d1d0e9ed8cc9316d7ea6fa15f4

Workflow
1. User adds liquidity to sETH uniswap exchange (0xe9Cf7887b93150D4F2Da7dFc6D502B216438F244) and receives LP tokens
2. User then stakes LP tokens at TimeStaking Contract

## Rationale

<!--The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->


## Test Cases

<!--Test cases for an implementation are mandatory for SIPs but can be included with the implementation..-->



## Implementation

<!--The implementations must be completed before any SIP is given status "Implemented", but it need not be completed before the SIP is "Approved". While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.-->


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
