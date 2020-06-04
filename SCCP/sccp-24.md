---
sccp: <to be assigned>
title: Setting initial differential fee levels
author: @Spreek
status: WIP
discussions-to: <https://discordapp.com/invite/AEdUHzt>
created: 2020-06-04
requires (*optional): <SIP/SCCP number(s)>
---

## Simple Summary

Per [SIP-56](https://github.com/Synthetixio/SIPs/blob/master/SIPS/sip-56.md), each synth can now have its own fee levels. In this SCCP, we set initial fee levels based on which category a synth belongs to.

## Abstract
**Old fees**: 
30 bps (0.3%) for all synths

**New fees**: 

* Forex: 5bps (0.05%)
* Commodity: 5bps (0.05%)
* Equities: 5bps (0.05%)
* Crypto: 30bps (0.05%)
* Inverse crypto: 30bps (0.3%)

## Motivation
Fees chosen by vote in discord. Crypto synths deemed to be riskier and generally have higher market fees elsewhere. We also hope that lower fees on forex/commodity/equity synths will spur greater adoption/trading volume.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
