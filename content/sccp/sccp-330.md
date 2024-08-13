---
sccp: 330
title: StataUSDC 5m LP cap
network: Base 
author: Matt
status: Implemented
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0xd29eeff4780e1d1bf691dea6f96d333e302da27c10240eab75c5daf4391d0628
created: 2024-05-10
---

## Simple Summary

Increase the maximum amount of stataUSDC collateral that can be provided to Base Andromeda to 5 million stataUSDC.

## Abstract

Increase the maximum stataUSDC LP cap to 5m stataUSDC by setting

* setPoolCollateralConfiguration(uint128,address,(uint256,uint256)) = [1, 0x4EA71A20e655794051D1eE8b6e4A3269B13ccaCc, 5000000000000000000000,0] 

## Motivation

The original SIP approving stataUSDC didn't establish a cap for stataUSDC in its native collateral type. This SCCP sets the collateral cap at 5 million stataUSDC, which, at the current unwrap rate from AAVE, equals approximately 5.1 million USDC. 

The value of stataUSDC will progressively increase in exchange rate to USDC as AAVE interest rates continue to accrue, with the current AAVE rate on Base being around 5% per year. This means that while 5 million stataUSDC is equivalent to about 5.1 million USDC today, it will be slightly more in the future.
## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
