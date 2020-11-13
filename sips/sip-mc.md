---
sip:
title: Multicollateral
status: WIP
author: Michael Spain
discussions-to:
created:
requires: 
---

## Simple Summary

Allow users to borrow synthetic assets against eth and erc20 collateral.

## Abstract

By locking collateral into Synthetix, users can borrow synthetic assets (synths) against the value of their collateral. A borrower's debt is fixed at the time the loan is created. This is in contrast with the debt of an SNX staker, which fluctuates with the composition of the debt pool. Since borrowers assume no responsbility for maintenance of the debt pool they are ineligible to receive rewards. Instead, they are charged interest in proportion with the risk that they introduce to the system.

## Motivation

As Synthetix grows, the drawbacks of a single collateral system are becoming apparent.

- SNX price volatility requires significant overcollateralisation, making the system relatively capital inefficient when compared to others that utilise more stable collateral.
- It introduces friction by requiring prospective traders to either exchange their assets directly for synths or buy and stake snx.

While the collateralisation ratio for issuing debt has been reduced from 750% to 500%, it cannot be lowered fast enough for sustainable growth. As the two largest, most liquid assets, Eth and Bitcoin are considerably more stable than SNX and therefore can be borrowed against at lower collateralisation levels. As the two most widely held assets, they represent a huge market of potential traders. Having already successfully trialed Eth as collateral, we would like the system to be positioned to capture the increasing amount of tokenised Bitcoin that is entering Ethereum.

A system that supports arbitrary erc20 tokens as collateral would not only capture the current inflow of tokenised Bitcoin, it would also mean that adding additional types of collateral in the future would be reduced to a purely governance process, with no technical work required.

## Specification

### Overview

This specification first introduces loans and collateral. It then describes the debt pool dynamics, motivating the need for interest. Finally, liquidations are addressed.

### Loans and Collateral

To open a loan, a borrower must deposit collateral. Depending on the type of collateral deposited, the borrower will have a choice of different synths that can be borrowed. The dollar value of collateral locked must be greater than the dollar value of the synths borrowed. 

The duration of the loan is at the discretion of the borrower. While the loan is open, it accrues interest according to a variable rate that will be discussed in the interest rate section. Repayments can be made at anytime, by anyone. 

If the collateralisation ratio of the loan falls below the minimum required, it will be eligible for liquidation. 

The borrower can close the loan at anytime. 

A Loan is defined by several basic parameters.

| Symbol | Description | Definition | Notes |
| ------ | ----------- | ---------- | ----- |
| \\(c\\) | The quantity of collateral backing this loan | tba | tba | 
| \\(c_p\\) | The price of c | tba | tba | 
| \\(s\\) | The synth borrowed | tba | For example, sUSD, sETH or sBTC. |
| \\(a\\) | The quantity of s borrowed | tba | tba | 
| \\(s_p\\) | The price of s | tba | tba | 
| \\(c\\) | The collateralisation ratio of the loan | \\( c \ := \frac{c_p \ c}{s_p \ a}\\) |tba |


Each type of collateral is implemented by its own smart contract and is responsible for the issuance and mananagement of all loans associated with the collateral.

| Symbol | Description | Definition | Notes |
| ------ | ----------- | ---------- | ----- |
| c | The collateral asset | bla | For example, ETH, renBTC. |
| S | synths| synths that can be issued by this collateral | For example [sUSD, sETH] or [sUSD, sBTC] |
| r | base rate | base rate for the collateral | sccpable|
| c ratio | minimum collateralisation | the minimum collateralisation ratio a loan can have | sccpable |
| debt | The total amount of debt issued by this collateral | tba | |


### Debt pool

Each loan contributes to the size of the debt pool. When a loan is opened, the debt pool increases by the amount of the synth borrowed. Now, while the debt of the borrower is fixed, they are free to exchange their debt for other synths. This means that profit/loss from their trading activities is absorbed by the snx stakers, who's debt flucutates with the total size and composition of the debt pool. As the proportion of non snx backed debt grows, stakers are responsible for maintaining an increasing amount of debt. If SNX backed debt represents 50% of the debt pool and non snx backed debt represents 50%, SNX stakers are responsible for 2x what they have issued. Now, assuming a balanced debt pool, this is actually a good thing as a larger debt pool should mean more exchanges (size imply velocity?) and therefore more fee revenue for stakers. However, it also means that correcting skew in the debt pool is twice as costly as it would have been if only snx backed debt existed.


The aggregate debt of the system is the sum of all the synths times their price. In a single collateral system, the collateralisation ratio is the value of staked snx divided by the aggregate debt.

### Interest rates

Goals for this section:
1. Explain instantaneous rate.
2. Explain accrued interest calculation 

As discussed above, loans leverage the snx stakers by increasing the size of the debt pool and the impact of skew on their collateralisastion ratios. As such, we desire that as the proportion of non-snx backed debt grows, the cost of borrowing increases, to compensate stakers for the extra risk they face. 

We track accumulated interest using the same methodology decsribed in SIP-80, making it possible to compute in constant time the interest owed by a loan.

Interest is charged whenever a payment occurs, either as a repayment, a liquidation or as part of closing the loan.

### Liquidations

When a loan's collateralisation ratio falls below the minimum collateralistion of the collateral, it is eligible for ilquidation. Liquidation is a public function that may be called by anyone.
