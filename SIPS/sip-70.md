---
sip: 70
title: Add sDeCon Synth
status: WIP
author: Troy Murray (@danny_desert)
discussions-to: (https://discord.gg/7kFMs7w)

created: 2020-07-09
---

<!--You can leave these HTML comments in your merged SIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SIPs. Note that an SIP number will be assigned by an editor. When opening a pull request to submit your SIP, please use an abbreviated title in the filename, `sip-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SIP.-->
Add sDeCon/iDeCon Index Synths that track an index of DeCon tokens. 

## Motivation
<!--The motivation is critical for SIPs that want to change Synthetix. It should clearly explain why the existing protocol specification is inadequate to address the problem that the SIP solves. SIP submissions without sufficient motivation may be rejected outright.-->
The Decentralized Content (DeCon) ecosystem is growing in maturity and awareness, and adding long/short exposure to a basket of DeCon tokens will allow traders to speculate on the value of some of the better-known utility tokens in the emerging ecosystem. s/iDeCOn also demonstrates how the Synthetix protocol can support new, custom kinds of assets to serve a particular purpose. 

## Specification
<!--The technical specification should describe the syntax and semantics of any new feature.-->
These Synths will both be indices implemented in much the same way as the sCEX/iCEX Synths. iDeCOn will have upper and lower thresholds which will be added to the SIP before deployment. This index is made up of the following assets: 
LPT (Livepeer), SNGLS (SingularDTV), SGT (snglsDAO Governance Token), RNDR (Render Network).

## Rationale
<!--The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->
Additional Index Synths will add further utility to Synthetix.Exchange, allowing people to speculate on the value of the ecosystem that, by trading on sX, they're clearly already participating in and can see some utility in. 

Which tokens were included in s/iDeCON were chosen through two rounds of community votes on Twitter. 

## Test Cases
<!--Test cases for an implementation are mandatory for SIPs but can be included with the implementation..-->


## Implementation
<!--The implementations must be completed before any SIP is given status "Implemented", but it need not be completed before the SIP is "Approved". While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.-->
Here are the weightings for the s/iDeCon Synths: 
25 of LPT (LivePeer)
25 of SNGLS (SingularDTV)
25 of SGT (snglsDAO Governance)
25 of RNDR (Render Network)

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
