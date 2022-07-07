---
sccp: 211
network: Ethereum & Optimism
title: Increase target staking ratio and lower adjustments and decay rate
author: Danijel
status: Draft
created: 2022-07-07
type: Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Increase the target staking ratio to 65%.  
Set Positive adjustment to 5%.  
Set Negative adjustment to 5%.  
Set Decay rate to 2.5%.  

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

This SCCP proposes changes to SIP-202 and SCCP-208 to increase the target staking ratio to be closer to the data we have seen last few months and lowers the weekly adjustments to give SC and stakers more time to capture trends before making significant changes to weekly inflation.  

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

With the current staking ratio at ~ 75%, 55% from SCCP-208 seems quite low and its realistic to expect that the inflation will keep being reduced first by 10% and then by 5% for the forseable future based on lack of imminent reactivity stakers have demonstrated from the time SIP-202 has started and over next 3 months.  
I propose setting the target staking ratio to 65% and effectively halvening adjustments and decay rate.  
This would mean the decreases to inflation happen in 5% weekly ticks if the ratio is outside the 5% buffer.  
I am also proposing halvening the decay rate to 2.5%, so the inflation would be reduced by that amount if the staking ratio is within the 5% buffer.

* If staking ratio is >70% => lower inflation by 5%  
* If staking ratio is between 60% and 70% => lower inflation by 2.5%  
* If staking ratio is <60% => increase inflation by 5%        

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
