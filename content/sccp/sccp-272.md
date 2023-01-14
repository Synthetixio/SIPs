---
sccp: 272
network: Ethereum & Optimism
title: Update Wrapper Parameters
author: Kaleb (@kaleb-keny)
status: Vote_Pending
created: 2023-01-14
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0xa37a397635b6af46b9f2cb1faa5444f4cdfa5a19e48d3e58507ab14629ce8354
---

# Simple Summary

Update the ETH and DAI wrapper parameters as follows:
- Increase the DAI mintFeeRate to 25 bp from 10 bp
- Lower the ETH mintFeeRate to 10 bp from 25 bp

# Abstract

The `mintFeeRate` is the rate that paid for locking up a certain underlying to mint it's respective synth equivalent.

# Motivation

The primary motivation is to lean against the recent increase in the debt skew which exceeded 40%, up from 20% a couple of weeks ago. Increasing the incentive to scale with ETH helps lower the skew to a certain extent as the sETH is swapped to other synths.

# Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
