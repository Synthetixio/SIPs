---
sccp: 178
network: Ethereum
title: Disable New Loans against renBTC
author: Kaleb (@kaleb-keny)
status: Implemented
created: 2022-04-03
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/QmbVoehE3NNDM4YCUxYfnLALwg9jtkUogUgf7scPxJSyjC
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Set `canOpenLoans` on the `CollateralERC20` contract to `false`.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The `canOpenLoans` variable controls whether new loans can be taken out against renBTC collateral.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The current multi-collateral loan contracts does not impose caps on the max amount that can be borrowed against deposited collateral and therefore the protocol is exposed to the risk of infinite mints in case renBTC becomes vulnerable.
Given that the loan contract is not being used (contract currently contains only $3.5m worth of renBTC) disabling new loans makes sense from a risk/return perspective.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
