---
sip: <to be assigned>
title: Upgrade Delegates Powers
author: Nocturnalsheet (@nocturnalsheet)
discussions-to: https://discord.gg/CDTvjHY
status: WIP
created: 2019-06-14
---


## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SIP.-->
This SIP proposes to add the ability for Delegates to mint and burn on their owners behalf. 

## Abstract
<!--A short (~200 word) description of the technical issue being addressed.-->
What are Delegates and what are their current powers? Delegates are trusted wallet addresses that you can set to claim the weekly rewards on your behalf. This function is already live on SNX mainnet however adoption will likely be limited if Delegates are not able to help their owner in penalty to fix their c ratio before claiming the rewards. By upgrading the current powers of Delegates, we will be able to explore the true potential of this feature and hopefully help SNX minters to have an easier life and less #tech-support issues with their ledger wallet. This will also encourage 3rd party integrations such as building an automated delegate to help claim the weekly rewards

## Motivation
<!--The motivation is critical for SIPs that want to change Synthetix. It should clearly explain why the existing protocol specification is inadequate to address the problem that the SIP solves. SIP submissions without sufficient motivation may be rejected outright.-->
We expect c-ratio and reduction of rewards period to change from time to time based on governance calls so by adding more powers to delegates, owners can make use their delegates to react to the change in requirements more easily. Using delegates provides higher security as you can now keep your hardware wallet in cold storage with no need to connect it online anymore. We expect delegates to help solve a major pain point for ledger wallet SNX owners with their constant browser support issues as well. More importantly delegates can only claim rewards on behalf only currently and if the owner wallet is in penalty, the delegate will not be able to help fix the penalty and claim for maximum rewards. The upgrade in powers is much needed to complete the potential of what delegates can help their owners to achieve for rewards.   

## Specification
<!--The technical specification should describe the syntax and semantics of any new feature.-->
New call functions expected to be added in which allows owner to approve each function individually or all 3 functions of claim, mint and burn with a single contract call

function _mintonbehalf
function _burnonbehlaf

function _approvemintonbehalf
function _approveburnonbehlaf

function _removemintonbehalf
function _removeburnonbehlaf

function _approvealldelegatepowers
function _removealldelegatepowers

## Rationale
<!--The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

There should be addtional functions to safeguard against potential rouge delegates after approval hence:
1) Delegates will only be able to burn sUSD if the owner is in penalty and only up to the point where the penalty will be removed
2) Delegates will not able to burn sUSD to unlock the owner SNX tokens 

Technical consultation on the feasibility has asked from Clinton & Jackson (SNX core team) and it is feasible 

Strategic supporter of this SIP is SNX Guardian - gmgh (More Guardians to be added once confirmed with their support)

Potential uses cases 
1) SNX in ledger wallet, delegate to your own hot wallet such as metamask wallet to do claim/burn/mint without worrying about broken ledger support on browser ever again
2) Integration with 3rd party services to automate the weekly rewards claim and ensuring that you can always claim maximum rewards because your delegates can now fix your c ratio if you are in penalty
3) SNX in hardware wallet, delegate to your own hot wallet such as metamask wallet so that when you are traveling or away from home you will be able to claim rewards easily still
 
## Test Cases
<!--Test cases for an implementation are mandatory for SIPs but can be included with the implementation..-->
Not required at this stage

## Implementation
<!--The implementations must be completed before any SIP is given status "Implemented", but it need not be completed before the SIP is "Approved". While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.-->
Not required at this stage

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
