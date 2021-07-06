---
sip: 85
title: Oracle Socialization
status: WIP
author: @mjayceee
discussions-to: 
created: 2020-08-31
---

## Simple Summary

This SIP proposes a model for socializing the costs of reading of the oracle while reducing gas costs to mint, claim, burn and transfer significantly. 

## Abstract

The Pollux release is set to increase the gas costs to mint, burn and claim by 50%. The reason for this is that the Synthetix contracts read the current price of every synth in the ecosystem on every transaction to validate the debt balance precisely. With roughly 40 synths, the increase in gas from the Chainlink update in Pollux will be substantial. 

This SIP proposes a model where each mint, burn, claim or transfer transaction will contribute atomically to the management of the global debt balance. On each of these transactions, the Synthetix contract reads the updated price of one synth and records the updated value of debt in a cumulative variable. The Synthetix contracts are some of the most active on Ethereum, meaning the full portfolio of synths would be updated frequently. Even during slow days on the network, this cycle is likely to complete in less than 15 minutes.

## Motivation
Synthetix contracts are already some of the most expensive on Ethereum. The Chainlink update will compound that problem. SIP 84's suggested solution is to disable a large segment of the current synth assets. Regardless of their usage, this change would mean diminishing the quality of the exchange offering. 

## Technical Specification

Using the process of issuing synths as an example for how this could be implemented across the system, the `_internalIssueSynths` function on the **Issuer** contract would call an additional internal functional called `_updateSynthPrice` which would record the price of one single synth and use the token supply to update the cumulative running debt variable `totalSynthValue`. The contract would iterate through the 40+ synths sequentially using a `synthPriceUpdateIterator` - one synth read-and-write per user transaction. 

The `_totalIssuedSynths` function on the **Issuer** contract would no longer iterate through the full universe of synths reading each price. The contract would only need to read from a `totalSynthValue` variable. 

The implementations for claiming, burning and transferring will mostly be along the same lines, without too much added complexity.

These changes would reduce the costs of reading the debt balance by 95%. Reading the debt balance accounts for a significant percentage of the gas spent on Synthetix contracts. While there will be additional gas costs from writing to storage, these changes will still result in noticeably lower gas costs.

With the delays on burning-after-minting implemented in SIP 40, the risk of frontminting should remain negligible.


### Test Cases

<!--Test cases for an implementation are mandatory for SIPs but can be included with the implementation..-->

TBD

### Configurable Values (Via SCCP)

<!--Please list all values configurable via SCCP under this implementation.-->

N/A

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).