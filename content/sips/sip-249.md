---
sip: 249
title: Create BNB-PERP
network:  Optimism 
status: Implemented
type: Governance
author: Burt Rock(@BurtRock)
implementor: MEB (@barrasso)
release: Muhlifain v2.76 release
created: 2022/06/13
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/bafkreialpaaycjvxtnzocwlnknqfzskp3gk6wj4pfnnyj4s4tbgrxpeari
---

## Simple Summary

Create a BNB-PERP market on Optimism.

## Abstract

This is a proposal to offer BNB-PERP futures which track the price of the $BNB token.

## Motivation

$BNB is the native token used for gas and governance on the BNB chain. Excluding stable coins, it is the third largest cryptocurrency by market cap, and consistently maintains some of the highest 24 hour trading volume among cryptocurrencies. 

$BNB is also already featured on Perpetual Protocol, and is considered a blue chip digital asset.

### Rationale

The primary focus of Kwenta is to offer a trading experience which competes with centralized exchanges. One of the primary ways in which Kwenta and Synthetix can deliver on this goal is to provide traders with the most popular assets from centralized exchanges, making the Kwenta futures product a more complete trading experience. 

Additionally, there is interest in the Kwenta community for this listing, as demonstrated by $BNB receiving the most votes in a recent informal community poll. 

### Technical Specification

ChainLink Price feed on OE should update after a 0.2% deviation with a 20 minute heartbeat. Current feed updates after a 0.5% deviation with a 24 hour heartbeat.

### Test Cases

n/a

### Configurable Values (Via SCCP)

Open interest caps and fee tier


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
