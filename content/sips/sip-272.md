---
sip: 272
title: Atomic Swaps - Best Execution Pricing
network: Ethereum
status: Draft
type: Governance
author: Kaleb (@kaleb-keny), Afif (@aband1)
implementor: TBD
created: 2022-08-17
---

<!--You can leave these HTML comments in your merged SIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SIPs. Note that an SIP number will be assigned by an editor. When opening a pull request to submit your SIP, please use an abbreviated title in the filename, `sip-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Simply describe the outcome the proposed changes intends to achieve. This should be non-technical and accessible to a casual community member.-->

This SIP proposes the creation of a new pricing methodology, denoted `swapAtomicallyBestExecution`, that builds on top of atomic exchanges by incorporating slippage into the pricing function.
 
## Abstract

<!--A short (~200 word) description of the proposed change, the abstract should clearly describe the proposed change. This is what *will* be done if the SIP is implemented, not *why* it should be done or *how* it will be done. If the SIP proposes deploying a new contract, write, "we propose to deploy a new contract that will do x".-->

A pricing model is proposed in the form of a simple function `f(x)`, that adjusts the fill price for a given amount of cumulative volume executed: 

`f(x) = a + bx^(0.5) + cx + dx^2`

- `x` being the cumulative volume executed since the last trade reset block
- `a`, `b`, `c` and `d` are configurable per synth via SCCP

It is important to mention that the number of blocks required in order for cumulative volume to be reset, denoted `k`, is configurable via SCCP per synth.

Trades within `swapAtomicallyBestExecution` have to universally go through `sUSD` in order to trade with `swapAtomicallyBestExecution`. This is in line with the spirit of the Synthetix V3 product offering.

## Motivation
<!--This is the problem statement. This is the *why* of the SIP. It should clearly explain *why* the current state of the protocol is inadequate.  It is critical that you explain *why* the change is needed, if the SIP proposes changing how something is calculated, you must address *why* the current calculation is innaccurate or wrong. This is not the place to describe how the SIP will address the issue!-->

The Synthetix protocol spot trading product is an attempt at being a market maker that offers trading through the use of an oracle reading. This is different from the approach offered by most other AMMs, which in contrast use the composition of liquidity pools in order to gauge a price and subsequently incorporate slippage into the trade in order to compensate LPs.

The usage of oracle sources to execute a fill results in the Synthetix protocol being a constant target of latency arbitrage aimed at picking off latency at advantageous pricing. To compensate, fees have been increased to a point at which the product itself failing at its mission of offering a venue for cheap spot trading. Though latency is as much of a problem for amm's as it is for Synthetix, the difference lies in AMM fees from small random trades more than making up for the capital losses incurred by price adjustment; as well as the slippage incorporated ensuring these lp price adjustments are efficient.

From Synthetix's perspective, attempts at this tackling this problem have sought to maintain a no slippage policy at the protocol level. The [Fee reclamation mechanism](https://sips.synthetix.io/sips/sip-37/) tackles the latency issue but breaks composability and is unattractive due to the extreme uncertainty on price execution that it causes.

The second iteration was the original atomic mechanism, which uses uni-v3 as an additional lively oracle source. Although uniswap is a very effective low-latency oracle source, it still suffers from the impact of a 1 block delay. This opens up a small gap for oracle front-running. Therefore, we are currently at the limits of what can be reasonably expected from blockchain latency, making the incorporation of a slippage-based model crucial.

This [figure](https://ibb.co/dPvmcP7) shows the slippage incurred when executing orders of different sizes. The figures are calculated by taking into account the delta between the best prevailing spot price at a given moment and the price that would be expected after executing a order of a certain size (shown in the x-axis). The `Uni 5bp` line is the slippage resulting from a trade on the uniswap 5 bp USDC/ETH pool, while cex is the one from trading on the ETH/USDT orderbook on binance.
The function `f(x)` can be used to both replicate a uni-v3 order book, as well as a centralized exchange order book, by changing the coefficients of the function (`a`,`b`,`c`,`d`). The best execution function can replicate any order book to a certain degree of precision with the help of the least squares optimization algorithm, an implementation demonstrating this capability is available in this [repository](https://github.com/kaleb-keny/synthetix_slippage_calibration_sip_271). 
It is important to mention that no slippage can be still configured into the trade, simply by setting the functional parameters (`a`, `b`, `c`, `d`) to zero in appropriate situations (such as when dealing with stables).


The table below was generated by fitting the proposed model on the ETH/USDT binance order book and the uniswap ETH/USDC 5 bp pool: 

| **Trade**      	| **cex_slippage** 	| **cex_model_slippage** 	| **uni_slippage** 	| **uni_model_slippage** 	|
|----------------	|------------------	|------------------------	|------------------	|------------------------	|
| **$25,000**    	| 0.00             	| 2.79                   	| 0.00             	| -0.04                  	|
| **$525,000**   	| 4.39             	| 3.59                   	| 6.72             	| 6.74                   	|
| **$1,025,000** 	| 8.14             	| 8.28                   	| 13.44            	| 13.49                  	|
| **$1,525,000** 	| 12.77            	| 13.08                  	| 20.21            	| 20.28                  	|
| **$2,025,000** 	| 17.63            	| 17.43                  	| 27.03            	| 27.12                  	|
| **$2,525,000** 	| 17.63            	| 21.11                  	| 33.90            	| 34.02                  	|
| **$3,025,000** 	| 24.68            	| 24.01                  	| 40.81            	| 40.97                  	|
| **$3,525,000** 	| 26.94            	| 26.06                  	| 47.79            	| 47.99                  	|
| **$4,025,000** 	| 26.94            	| 27.22                  	| 54.85            	| 55.07                  	|
| **$4,525,000** 	| 26.94            	| 27.45                  	| 61.99            	| 62.21                  	|
| **$5,000,000** 	| 26.94            	| 26.79                  	| 68.83            	| 69.05                  	|

It shows how slippage can be replicated with simple equations and tweaked in order to provide better execution by diluting the respective coefficients of the equation.

- cex_model_slippage: `f(x) = 5 - 0.0178x^0.5 + 2.296e-5x -2.125e-12x^2`
- uni_model_slippage: `f(x) = -0.42 +0.00036x^0.5 + 1.3e-5x + 1.295e-13x^2`

## Specification

<!--The therefore specification should describe the syntax and semantics of new feature, there are five sections
1. Overview
2. Rationale
3. Technical Specification
4. Test Cases
5. Configurable Values
-->

The specification includes three fundamental variable structures:
- Cumulative Volume Structure
- Best Execution Functional Parameters
- Pricing Methodology

### Cumulative Volume Structure
`cumulativeVolume` is a nested structure that takes the following form:
```
{currencyKey: 
  {'blockNumber': blockNumber,
   'cumulativeVolume':cumulativeVolume}}
```
Each time someone trades a synth, the first thing done is that the volume traded in `sUSD` is computed using the price obtained with the `atomicPrice` methodology denoted in [SIP-158](https://sips.synthetix.io/sips/sip-258/). 
The following logic is applied on updating the structure:
- In situations in which more than `k` blocks have passed since the last time the structure is updated, then the `cumulativeVolume` is first reset to zero for that synth, before then being updated with the latest volume being traded. 
- otherwise, the `cumulativeVolume` is updated cumulatively for the `synth` being traded into or out from. In case the direction of the trade is into a synth the number incorporated into structure is a positive number, otherwise it's a negative number. Hence trades within the same `k` blocks in different direction cancel out the the slippage applied.

As an example, assume Alice trades 1m$ at blockNumber 1 from sUSD to sETH and Bob trades 3m$ in the same block from sETH to sUSD.

**Following Alice's trade:**
```
{'sETH': 
  {'blockNumber': 1,
   'cumulativeVolume':1m$}}
```
**Following Bob's trade:**
```
{'sETH': 
  {'blockNumber': 1,
   'cumulativeVolume':-2m$}}
```

### Best Execution Functional Parameters
`functionalParameters` is a nested structure that takes the following form:
```
{currencyKey: 
  {'a': A,
   'a': B
   'c': C
   'd': D}}
```
The parameters of the best execution function are saved in a structure and configurable via SCCP. Whenever a user trades a given amount of a synth, the cumulative volume is updated and then the number in that `Cumulative Volume Structure` (denoted as `x`) is used to to retrieve slippage applied:

`f(x) = a + bx^(0.5) + cx + dx^2`

Note that the cumulative volume passed into the best execution pricing function is an absolute number, hence after Bob's trade, denoted earlier, `f(2)` is used to retrieve the amount of price adjustment incorporated into the trade.

### Pricing Methodology
The fill price builds on the methodologies denoted in [SIP-198](https://sips.synthetix.io/sips/sip-198) and [SIP-258](https://sips.synthetix.io/sips/sip-258) in order to obtain a `atomicPrice` using the worse fill between `Uniswap-v3`, `Chainlink` and `TWAP`. Assuming the atomic price is in `USD` terms, denoted as P, then the best execution fill amount is obtained with the following computation:
- if the sourceCurrencyKey is `sUSD`:

`SrcAmount * 1/P * (1- fee) * [1-f(x)] => DestAmount`

- Otherwise:

`SrcAmount * P * (1- fee) * [1-f(x)] => DestAmount`

### Technical Specification

<!--The technical specification should outline the public API of the changes proposed. That is, changes to any of the interfaces Synthetix currently exposes or the creations of new ones.-->
Pending SC engineers input.

### Test Cases

<!--Test cases for an implementation are mandatory for SIPs but can be included with the implementation..-->

### Configurable Values (Via SCCP)

<!--Please list all values configurable via SCCP under this implementation.-->
- `a` , `b` ,`c` and `d`, can be configurable per synth, allowing the Spartan Council to fine-tune slippage based on the asset in mind.
- `kBlocks` would also be configurable per synth, specifying the number of block intervals at which slippage resets

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
