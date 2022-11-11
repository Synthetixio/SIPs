---
kip: 34
title: SNX Staker and Trader KWENTA Distribution Amendment
status: Implemented
author: Kain Warwick (@kaiynne), Andrew Trudel (@Andrew-Synthetix)
created: 2022-09-21
---

## Summary

An alternative method to distribute KWENTA tokens to SNX stakers and Kwenta traders which will result in higher conviction from recipients and additional funding for the Kwenta DAO via an Aelin pool.

## Abstract

Host an Aelin pool that enables SNX Stakers to purchase KWENTA at a discount with a 1-year vesting period as an alternative to a direct distribution. ˚

## Motivation

By hosting an Aelin pool for SNX Stakers, Kwenta will top up the treasury to fund development, allocate KWENTA to individuals with conviction, and create long term alignment with its stakeholders.

## Specification

To facilitate the owed distribution of KWENTA tokens to SNX stakers and Synth traders, the Kwenta DAO will host an Aelin pool with 35% of the initial supply on November 1st, 2022 which will enable eligible addresses to purchase KWENTA for a discounted price with a 1-year vesting period.

**Pool Terms**

The Aelin pool will offer KWENTA tokens to eligible addresses at a price of $31.91 per token. This price was determined by using the previous Aelin raise (100M FDV, 319.10 USD/token) and setting the vestable amount to 10% at the launch of the token which will take place directly after the pool concludes. The vesting package includes a “burn to vest” model where 10% of the package is available immediately but if vested early, the remaining 90% is returned to the Kwenta treasury, effectively removing it from circulating supply; this vests to 100% linearly over the course of the year. These tokens will be stakeable and can therefore be used to vote in elections as well as capture inflationary rewards.

This vesting model will also be applied to all inflationary rewards, replacing the current parameters outlined in KIP-4.

**Unpurchased tokens**

On the 14th day, the Aelin pool will conclude and any unpurchased tokens will be distributed to pool participants relative to the proportion of tokens participants acquired.

**Eligibility**

Users which meet the criterion outlined in KIP-13 will be able to participate in the distribution.

**Lono Clause**
In the event an address which participated in the initial Aelin pool qualifies for the SNX staker and Synth trader distribution, they would automatically have access to their allotment of tokens without the need to purchase them. 

**KWENTA Live**

Once the pool concludes, the KWENTA token will go live and the token launch will be completed.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
