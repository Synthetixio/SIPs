---
sccp: 100
title: Initial Parameters of ETH Wrappr
author: Kaleb Keny (@kaleb-keny)
discussions-to: governance
status: Proposed
created: 2021-05-12
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes to set the initial parameters of the wrappr contract [SIP-112](https://sips.synthetix.io/sips/sip-112) as follows:
- `maxETH`: 5k ETH
- `mintFeeRate`: 200 bp
- `burnFeeRate`: 5 bp 

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->
The initial parameters proposed in this SCCP will be revisisted once the contract cap is utilized and on-chain arbs take place in order to fix the peg. 
In the long-run, `mintFeeRate` and `burnFeeRate` are expected to be around 5 bp as to encourage peg arbing with the least amount of friction possible and `maxETH` is expected to be set significantly high enough in order to keep some capacity for increased demand for synths and offset the skew in the debt pool.

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The initial parameters of the wrappr contract are proposed to be set as such for the following reasons:

- The `maxETH` parameter is set low enough as to minimize volatility on the peg and avoid situations where liquidity is drawn from Curve pools in expectations of large influx of synths. In addition, the cap is set as such, since the contract is still being battle tested against on-chain activities. The cap will be raised eventually over the next few weeks until the peg premium is resolved.

- The `mintFeeRate` is set as to capture most of the arb-value due to the peg-premium by the fee pool. Currently curve provides around 250 bp premium for trades of sETH into ETH. Therefore, setting `mintFeeRate` to 200 bp will ensure that  most of the value is captured by the fee pool.

- The `burnFeeRate` is set initially at 5 bp, which is the long-run expected fee, as this function isn't expected to be utilized initially due to the peg premium.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
