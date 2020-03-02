---
sip: 
title: Deprecate ERC223 sUSD Deposits from Depot 
author: Clinton Ennis (@hav-noms)
discussions-to: https://discord.gg/DQ8ehX4
status: Implemented
created: 2020-03-01
---


## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SIP.-->
Remove ERC223 support and replace with ERC20 Deposits

## Abstract
<!--A short (~200 word) description of the technical issue being addressed.-->
ERC223 was deprecated from Synthetic in sip-30. This disabled the MAINNET Depot from being able to accept anymore deposits. A new ERC20 only version of the Depot is required to enable sUSD deposits again.  

## Motivation
<!--The motivation is critical for SIPs that want to change Synthetix. It should clearly explain why the existing protocol specification is inadequate to address the problem that the SIP solves. SIP submissions without sufficient motivation may be rejected outright.-->
Since the bZx attack on Feb 18 2020 the [Synthetix Depot was drained of all its 943,837 sUSD in exchange for 2388 ETH](https://blog.synthetix.io/bzx-susd-update/) rendering it empty and end of life. This occureed premeturily and a new version was quickly deployed in the [Achernar release](https://blog.synthetix.io/the-achernar-release)

[Old ERC223 Depot](https://etherscan.io/address/0x172e09691dfbbc035e37c73b62095caa16ee2388)

## Specification
<!--The technical specification should describe the syntax and semantics of any new feature.-->
Modify depositSynths to use the ERC20 transferFrom workflow, requiring users to perform an approve transaction first. Mintr to be updated to have the UX to support this for sUSD deposits.

## Rationale
<!--The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

ERC223 did provide a better UX for users to only perform and pay for 1 transaction to depoist sUSD into the Depot. This was the only use case for ERC223 and the gas overhead for each transaction was about an extra 100K gwei which was causing composability friction for protocols like Kyber where the tokens might transfer to 3 different addresses in an exchange causing an additional 300K overhead in gas.

It was always intedended to replace the Depot with an ERC20 version but the [bZx attack](https://etherscan.io/tx/0x762881b07feb63c436dee38edd4ff1f7a74c33091e534af56c9f7d49b5ecac15) brought this forward sooner than planned.

## Test Cases
<!--Test cases for an implementation are mandatory for SIPs but can be included with the implementation..-->
https://github.com/Synthetixio/synthetix/blob/v2.20.0/test/contracts/Depot.js

## Implementation
<!--The implementations must be completed before any SIP is given status "Implemented", but it need not be completed before the SIP is "Approved". While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.-->

https://github.com/Synthetixio/synthetix/blob/v2.20.0/contracts/Depot.sol

https://etherscan.io/address/0xE1f64079aDa6Ef07b03982Ca34f1dD7152AA3b86


## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
