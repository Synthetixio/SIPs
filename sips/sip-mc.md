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

Allow users to borrow synthetic assets against eth and erc20 (initially only renBTC) collateral.

## Abstract

By locking collateral into Synthetix, users can borrow synthetic assets (synths) against the value of their collateral. A borrower's debt is fixed at the time the loan is created. This is in contrast with the debt of an SNX staker, which fluctuates with the composition of the debt pool. Since borrowers assume no responsbility for maintenance of the debt pool they are ineligible to receive rewards. Instead, they are charged interest in proportion with the risk that they introduce to the system.

## Motivation

As Synthetix grows, the drawbacks of a single collateral system are becoming apparent.

- SNX price volatility requires significant overcollateralisation, making the system relatively capital inefficient when compared to others that utilise more stable collateral.
- It introduces friction by requiring prospective traders to either exchange their assets directly for synths or buy and stake SNX.

As the two largest and most liquid assets, Bitcoin and Eth are considerably more stable than SNX and therefore can be borrowed against at lower collateralisation levels. They are also the most widely held assets, representing a huge market of potential traders. Having already successfully trialed Eth as collateral, we would like the system to be positioned to capture the increasing amount of tokenised Bitcoin that is entering Ethereum.

A system that supports arbitrary erc20 tokens as collateral would not only attract the current inflow of tokenised Bitcoin, it would also mean that adding additional types of collateral in the future would be reduced to a purely governance process, with no technical work required.

## Specification

### Overview

This specification first introduces loans and collateral. It then describes the new debt pool dynamics, motivating the need for interest. Finally, liquidations are addressed.

### Loans and Collateral

To open a loan, a borrower must deposit collateral. Depending on the type of collateral deposited, the borrower will have a choice of different synths that can be borrowed. They can choose the quantity of synths borrowed, subject to the constraint that the ratio of collateral value to synth value is greater than some minimum value.

The duration of the loan is at the discretion of the borrower. While the loan is open, it accrues interest according to a variable rate that will be discussed below. Repayments can be made at anytime, by anyone, but only the borrower may close the loan. 

If the collateralisation ratio of the loan falls below the minimum required, it will be eligible for liquidation to fix its collateralisation. Anyone may liquidate a loan. 

To increase the loan's collateralisation ratio, anyone can deposit collateral to an open loan. The borrower can also withdraw collateral as long as they do not violate the minimum collateralisation requirement.

A Loan \(l\) is defined by several parameters. We use a superscript to indicate that a value is associated with a particular loan. 

| Symbol | Description | Definition | Notes |
| ------ | ----------- | ---------- | ----- |
| \\(c_q\\) | The quantity of collateral locked | - | For example 1 ETH. | 
| \\(c_p\\) | The price of c | - | For example $100. | 
| \\(s\\) | The synth borrowed | - | For example, sUSD, sETH or sBTC. |
| \\(s_a\\) | The quantity of s borrowed | - | For example 50 sUSD. | 
| \\(s_p\\) | The price of s | - | For example $1. | 
| \\(c\\) | The collateralisation ratio of the loan | \\( c \ := \frac{c_p \ c}{s_p \ a}\\) | For example  |


Each type of collateral is implemented by its own smart contract and is responsible for the issuance and mananagement of all loans associated with the collateral. It is defined by the following parameters.

| Symbol | Description | Definition | Notes |
| ------ | ----------- | ---------- | ----- |
| \\(c\\) | The collateral asset | - | For example, ETH, renBTC. |
| \\(L\\) | The set of all loans on the market | - | - |
| \\(S\\)  | The synths that can be issued by this collateral | - | For example [sUSD, sETH] or [sUSD, sBTC] |
| \\(r\\)  | The base interest rate | - | - |
| \\(x\\)  | The interest slope | - | - |
| \\(c_{min}\\) | The minimum collateralisation ratio. | - | This limits the maximum size of the loan for a given amount of collateral. |

### Debt pool

The aggregate debt of the mutli collateral system is defined as follow.

\[D \ := \ \sum_{l \in L}{s_a^l}\]

Each loan contributes to the size of the debt pool. When a loan is opened, the debt pool increases by the amount of the synth borrowed. Now, while the debt of the borrower is fixed, they are free to exchange their debt for other synths. This means that profit/loss from their trading activities is absorbed by the snx stakers, who's debt flucutates with the total size and composition of the debt pool. As the proportion of non snx backed debt grows, stakers are responsible for maintaining an increasing amount of debt. If SNX backed debt represents 50% of the debt pool and non snx backed debt represents 50%, SNX stakers are responsible for 2x what they have issued. Now, assuming a balanced debt pool, this is actually a good thing as a larger debt pool should mean more exchanges (size imply velocity?) and therefore more fee revenue for stakers. However, it also means that correcting skew in the debt pool is twice as costly as it would have been if only snx backed debt existed.

### Interest rates

As discussed above, loans leverage the snx stakers by increasing the size of the debt pool and the impact of skew on their collateralisastion ratios. As such, we desire that as the proportion of non-snx backed debt grows, the cost of borrowing increases, to compensate stakers for the extra work maintaining the debt pool.

| Symbol | Description | Definition | Notes |
| ------ | ----------- | ---------- | ----- |
| \\(U\\)| The utilisation ratio | \[U\ := \ \frac{D}{Total}\]
| \\(i\\)| Instantaneous interest rate | \[i \ := \ r^c + xU \ i_{max} \] | - |

Interest changes as a function of utilisation, which changes anytime the debt pool composition changes. It is not feasible to update every loan whenever the debt pool changes. Instead, whenever a loan is interacted with, we determine the total accrued interest using the same approach described by [SIP 80](https://sips.synthetix.io/sips/sip-80#aggregate-debt-calculation). This means we can calculate the interest accrued on a particular loan in constant time.

Interest is charged whenever a payment is made.

### Liquidations

When a loan's collateralisation ratio falls below the minimum collateralistion of the collateral, it is eligible for ilquidation. Liquidation is a public function that may be called by anyone.

The liquidation mechanism is the same as described in [SIP 15](https://sips.synthetix.io/sips/sip-15). The liquidator receives an amount of the borrowers collateral equal to the liquidated amount plus a liquidation penalty.
