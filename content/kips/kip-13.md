---
kip: 13
title: KWENTA Launch Distribution 
status: Draft
author: Andrew Trudel (@Andrew-Synthetix)
created: 2022-02-17
---

## Summary

This proposal outlines a model in which the KWENTA token will be distributed to the community once launched. 

## Abstract

5% of KWENTA will be distributed to **eligible** Synth traders who have traded between Jan 1st 2020 - Feb 1st 2022 and 30% of KWENTA will be distributed to SNX stakers active during Sept 1st 2021 - Feb 1st 2022. The remainder of the KWENTA will be sent to the treasury and distributed according to the model proposed in KIP-4. 

## Motivation

To distribute tokens to community members that are likely to facilitate governance and leverage the token to create a sustainable system for growth. 

## Specification

The distribution will follow this model: 

#### Synth traders 5% 

Synth traders* active within the range of Jan 1st 2020 to February 1st 2022 are eligible for 5% of the initial KWENTA supply. The minimum trade requirements are at least **5 trades** and **$1000 in cumulative volume** on L1; and at least **10 trades** and **$5000 in cumulative volume** on L2. These values were selected to filter sybils and provide highly active traders with a meaningful stake in KWENTA. The tokens will be distributed evenly across these members and will go into a one-year vesting contract which can be vested at any time, however, an attached fee which will begin at 80% and deplete linearly to 0% after one year will be executed when vested which burns the percentage of tokens exposed to the remaining fee, enabling short term holders to exit while decreasing the total supply. 

*Note that shorting is not explicitly included in this distribution, however, to close a short with the Synthetix system, a wallet would have needed to make a Synth exchange which would be accounted for in the above distribution model. 


#### SNX Stakers 30% 


SNX stakers, on both L1 and L2, active within the range of September 1st 2021 to February 1st 2022 are eligible to receive an allotment of 30% of the initial KWENTA supply. Of which will be distributed based on these users' proportion of debt owned during that period (similar to the Aelin distribution) with a floor of 5 KWENTA per each staker. Activity was determined by stakers who had at least **1 fee claim*** during this time period. Debt ownership percentages below 1E-7% were culled from the distribution (approximate value of SNX staked below ~$100 at the time of writing) to reduce sybiling. All KWENTA received by stakers will go into a one-year vesting contract which can be vested at any time, however, an attached fee which will begin at 80% and deplete linearly to 0% after one year will be executed when vested which burns the percentage of tokens exposed to the remaining fee, enabling short term holders to exit while decreasing the total supply. 

*Note L2 stakers with only fee claims prior to the [Optimism Mainnet Regenesis on November 11th 2021](https://twitter.com/optimismPBC/status/1451339513964359682?s=20&t=KxKrgJ6GSyUHcAqynpYJpQ) were excluded from the distribution due to incomplete fee claim data. However, those with SNX staked "pre-regenesis" and continued to claim weekly rewards "post-regenesis" are eligible for this distribution.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
