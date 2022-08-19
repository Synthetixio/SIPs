---
kip: 22
title: Advanced Decentralized Deployment 
status: Implemented
author: Andrew Trudel (@Andrew-Synthetix), Jeremy Chiaramonte 
created: 2022-07-13
---

## Summary

A method to further decentralize the process of deploying code to the Kwenta protocol.

## Abstract

Distribute the signing rights for deploying code to the official version of Kwenta to both the Elite Council as well as the Core Contributors.

## Motivation

By providing the Elite Council with control over what version of Kwenta’s code is the official version via onchain execution, the Kwenta DAO will further distribute control of the code to token holders. 

## Specification

There are a few steps for this proposal to be executed: 

1. Give the Elite Council and Core Contributors a multisig which requires either 2/6 votes, 5 of which are Elite Council members and 1 of which is for the Core Contributors (any Core Contributor). 
2. Enable transaction-based execution for directing which version of code the official Kwenta ENS is pointing to on IPFS. 
3. Change the main domain of Kwenta to: kwenta.eth.link

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

