---
sccp: 164
network: Ethereum
title: Extend burn lock to seven days
author: Kain Warwick (@kaiynne), Jackson Chan (@jacko125)
status: Approved
created: 2022-02-01
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/QmbzbKqusFvELHY9pYicJkiF9vcozZSvCFhP9nAkQDgUT7

---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Adjust Burn Lock from 24 hours to 7 days (168 hours).

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

There is currently a time lock that prevents burning above the target ratio for 24 hours following a mint. This SCCP proposes to adjust this from 24 hours to 7 days (168 hours).

minimumStakeTime = 604,800

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

To further deter snapshotters following the increase in weekly SNX rewards to be implemented in [SIP-202](https://sips.synthetix.io/sips/sip-202/). This will increase the exposure of snapshotters from 1/7 to 7/7 of an epoch.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

