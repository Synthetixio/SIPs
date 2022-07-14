---
kip: 21
title: SynthSwap
status: Implemented
author: Marko Roy (@marko-roy), Jared Borders (@JaredBorders)
created: 2022-07-11
---

## Summary

Introduce ERC20 token and ETH to/from Synth swaps to the current SynthSwap product on Kwenta for traders.

## Abstract

Leveraging 1inch (Smart Contracts and API) and Synthetix, Kwenta will enable the exchange of any ERC20 tokens for any synths (and vice versa) directly on our platform. The first iteration will support most ERC20 tokens that can be swapped on 1inch but will withhold the ability to add custom tokens for swaps.

## Motivation

SynthSwap currently only allows exchange between synthetic assets (`sUSD`, `sETH`, `sBTC`, etc.). Building out the functionality of our swap product will provide a better UX for Kwenta users while also reducing onboarding constraints for traders.

## Specification

User Flows:
As a spot trader, I want:
* Spot exposure with synthetic assets:
  * By swapping my ERC20 tokens or ETH for synths
* To leave the ecosystem:
  * By swapping my synths for ERC20 tokens or ETH

As a futures trader, I want:
* To open positions:
  * By swapping my ERC20 tokens or ETH for sUSD margin

SynthSwap smart contracts utilize both 1inch and Synthetix to execute ERC20 token swaps. SynthSwap provides swap functionality for ETH and 1inch supported ERC20 tokens to synths and vice-versa. Swap aggregation data is generated off-chain via 1inch's API and used on-chain to efficiently execute token exchange through 1inch smart contracts. The Synthetix exchange fills in the last leg of the swap if needed (if swapping Synth <-> Synth). This allows for users to go from ETH to `sETH` in *one* transaction vs previously having to go from ETH to `sUSD` and then a separate transaction for `sUSD` to `sETH`.

SynthSwap NPM Package: npmjs.com/package/@kwenta/synthswap <br>
Kwenta aggregator contracts: github.com/Kwenta/synthswap

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
