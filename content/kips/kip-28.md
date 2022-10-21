---
kip: 28
title: Trading Incentives 
status: Draft
author: Andrew Trudel (@Andrew-Synthetix), Burt Rock (@BurtRock)
created: 2022-08-17
---

## Summary

A method to reward Kwenta users with $KWENTA.

## Abstract

Traders on Kwenta would earn $KWENTA tokens as trading incentives.

## Motivation

By rewarding long-term users of the Kwenta platform, governance decision-making weight will gravitate towards the people who are most invested in seeing the product improve.

With the release of cross margin, Kwenta can now benefit directly from incentived trading volume, and should be actively encouraging new users to try Kwenta.

A direct relationship between fees paid and $KWENTA rewards also helps to ease some of the pain points for new users while Perps v2 is developed. Incentive programs at this stage allow Kwenta to showcase the cross margin wallet, advanced order types, and the value proposition of the $KWENTA token while educating new users on upcoming developments and improvements.

## Specification

Stream 5% of inflationary rewards to traders weighted across a Cobbs-Douglas Function. The equation would follow the rewards model outlined in KIP-3. 

All $KWENTA distributed under this program will vest according to the mechanism outlined in KIP-34.

The relevant text of KIP-34 is included for reference:
> The vesting package includes a “burn to vest” model where 10% of the package is available immediately but if vested early, the remaining 90% is returned to the Kwenta treasury, effectively removing it from circulating supply; this vests to 100% linearly over the course of the year. These tokens will be stakeable and can therefore be used to vote in elections as well as capture inflationary rewards.

## Copyright 

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
