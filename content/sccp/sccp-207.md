---
sccp: 207
network: Ethereum & Optimism
title: Lower target c-ratio to 300%
author: kain (@kaiynne)
status: Rejected
created: 2022-05-05
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/bafkreib3bjkso3mnzvyvygxochv6idekjxr62nnfz3ora7ljbhz4nk7wke
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Lower the target c-ratio to 300% 

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

This SCCP changes the target c-ratio from 350% down to 300%.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The target c-ratio was reduced to 300% during the implementation of SIP-148 which changed the mechanism for liquidations. The intent was to raise it back to 400% once the network had stabilised. The c-ratio was then raised to 350% too quickly due to fears that the price of SNX might increase significantly, while the price has almost doubled from the low of ~$1.50 it has stablised in a range below $3 for the last several weeks. Below $3 a c-ratio of >300% puts undue pressure on stakers and on the sUSD peg on Optimism. This SCCP reduces the target c-ratio back to 300% where it should remain until price volatility has decreased and the price of SNX is above $3 for at least several weeks. Stability of the c-ratio is critical for stakers to make informed decisions about their staking strategy, this SCCP should provide confidence to stakers that the ratio will remain at 300% until SNX recovers and price volatility declines.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
