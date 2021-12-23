---
kip: 8
title: Fiat on-ramp integration
status: Draft
author: Ivan Prodanov (ivan-prodanov; @Ivan#4532)
created: 2021-12-23
---

## Summary

A proposal outlining integration with fiat on-ramp Transak.
## Abstract

Add integration to fiat on-ramp provider Transak in the upcoming Kwenta v2 UX.
## Motivation

Kwenta requires sUSD to enable new users to trade. sUSD is not a token everyone has in their wallets. To onboard new users Kwenta UX gives them an option to convert ETH to sUSD via 1inch. While this can be further enhanced with other existing stablescoins routed through Curve, once Curve is on L2, it still servers only crypto natives. 
Transak on-ramps allow new users who have previously not interacted with DeFi protocols to tap into these markets by giving them an easy way convert fiat to stablecoins and vice versa. Transak off-ramps will allow anyone to convert crypto to fiat.
There already are DeFi protocols (Aave) that integrate Transak and other on/off ramp providers. Transak recently [announced](https://discord.com/channels/852273007370960937/859055138462105670/923187695520464927) support for Optimism.
## Specification

There are two ways to achieve this - by requesting native sUSD support in Transak or by routing the purchased currency through Curve, once Curve is available on Optimism.
The upcoming Kwenta v2 UX should have an option to buy either sUSD only or any synth using fiat by going through Transak. (Aave can be used as a reference for integration).

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
