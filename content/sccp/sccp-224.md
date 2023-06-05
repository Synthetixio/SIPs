---
sccp: 224
network: Ethereum
title: Lower Max Atomic Volume Per Block
author: Kaleb (@kaleb-keny)
status: Rejected
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x724c60efdcb11a68359ad7dde35df3b3752564f5c69886e024c816f230c5e572
created: 2022-08-19
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to lower the maximum volume per block on all atomic exchanges to sUSD 500 thousand from sUSD 5 million per block.



## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The cap sets the maximum synth exchange volume per block in sUSD being traded using the atomic exchange contract.


## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The primary motivation is to lower the extent of damage from latency attacks, until better tools are in place which allows us to scale volume atomic exchanges while constraining latency attacks on the protocol. Mainly, [SIP-267](https://sips.synthetix.io/sips/sip-267/), [SIP-268](https://sips.synthetix.io/sips/sip-268/) and [SIP-272](https://sips.synthetix.io/sips/sip-272/).


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
