---
sccp: 93
title: Slighly increase the circuit breaker deviation
status: Implemented
author: Jackson Chan (@justinjmoses)
discussions-to: https://discord.gg/8Br87gxm
created: <2021-04-08>
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Increase the price deviation threshold factor to `1.8` in order to unblock `sEOS`.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The `SystemSettings.priceDeviationThresholdFactor` from [SIP-65](../sips/sip-65.md) has been triggered on the `sEOS` synth. It needs to be increased and a single trade executed in order to reset the new price. A SIP will be coming in soon to fix this issue in the future so SCCPs like this are not necessary.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The last traded price of `sEOS` is `3.711` (see `Exchanger.lastExchangeRate(sEOS)`) and the current price is `6.32` (see `ExchangeRates.rateForCurrency(sEOS)`) - which yields a factor of `1.7`. Thus, even if the synth is resumed, the next attempted trade will suspend it again via [SIP-65](../sips/sip-65.md).

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
