---
sip: TBD
title: Ratio Synths
status: WIP
author: ΔLΞXΔNDΞR (@4-1-3-X)
discussions-to: https://discord.gg/RvxZX3j

created: 2020-05-21
---

<!--You can leave these HTML comments in your merged SIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SIPs. Note that an SIP number will be assigned by an editor. When opening a pull request to submit your SIP, please use an abbreviated title in the filename, `sip-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SIP.-->

A "ratio synth" would be a derivative synth that enables speculation on the ratio between two assets. 

## Abstract
<!--A short (~200 word) description of the technical issue being addressed.-->

Traders want the ability to speculate on the price ratio of two assets. Take ETH and BTC for example, Ethereum bulls think ETH will eventually surpass BTC's marketcap, and Ethereum bears think ETH will fall below $100. Ethereum bulls might not be bearish on BTC so they won't hold iBTC but they think ETH will rise faster than BTC will rise (the same goes for the inverse).

## Motivation
<!--The motivation is critical for SIPs that want to change Synthetix. It should clearly explain why the existing protocol specification is inadequate to address the problem that the SIP solves. SIP submissions without sufficient motivation may be rejected outright.-->

Traders would be interested in this product and it would attract volume to Synthetix Exchange. It can work for any two synths that are already listed on Synthetix Exchange because the assets and price feeds are already established.

## Specification
<!--The technical specification should describe the syntax and semantics of any new feature.-->

The ratio is calculated as follows: `[synth1 price]/[synth2 price]`

Example: if ETH is $200 and BTC is $10,000, the ETH/BTC ratio is `0.02`. If ETH increases to $400 but BTC stays at $10,000, the ETH/BTC ratio is `0.04`. 

Ratio synths would be named as follows: `s[synth1][synth2]` & `i[synth1][synth2]`. For example: `sETHBTC` and `iETHBTC`

All ratio synths could have an arbitrary inital price, i.e. `$100` and the price would change based on the percent change of the ratio number. For example: 1 sETHBTC purchased at an ETH/BTC ratio of `0.02` would be worth `$200` at an ETH/BTC ratio of `0.04`.


## Rationale
<!--The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

Introducing Ratio Synths intends to enable speculation on the ratio between two assets and bring traders and speculators to Synthetix Exchange with a novel product.

## Test Cases
<!--Test cases for an implementation are mandatory for SIPs but can be included with the implementation..-->

TBD

## Implementation
<!--The implementations must be completed before any SIP is given status "Implemented", but it need not be completed before the SIP is "Approved". While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.-->

TBD

## Configurable Values (Via SCCP)
<!--Please list all values configurable via SCCP under this implementation.-->

TBD

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
