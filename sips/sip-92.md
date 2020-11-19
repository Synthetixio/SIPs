---
sip: 92
title: Multi-Collateral Loans
status: Proposed
author: Michael Spain (@mjs-12), Clinton Ennis (@hav-noms)
discussions-to: https://research.synthetix.io/
created: 2020-11-19 
requires: 
---


## Simple Summary

Allow users to borrow synthetic assets such as sUSD, sBTC & sETH against ETH and ERC20's as collateral such as renBTC.


## Abstract

By locking collateral into a Synthetix multi-collateral loans contract, users can borrow synthetic assets (synths) against the value of their collateral. A borrower's debt is fixed at the time the loan is created. This is in contrast with the debt of an SNX staker, which fluctuates with the composition of the debt pool. Since borrowers assume no responsibility for maintenance of the debt pool they are ineligible to receive rewards/fees. Instead, they are charged interest in proportion with the risk that they introduce to the system which is paid weekly to SNX stakers via the fee pool. 

Initially, the system will support borrowing sUSD/sETH against ETH and sUSD/sBTC against renBTC. Allowing SNX holders to borrow a fixed debt sUSD position against SNX could also be introduced.

## Motivation

Multi-Collateral loans purpose is to augment the supply of Synthetix Synths, sUSD, sBTC, sETH etc to be used in DeFi & traded on [kwenta.io](https://kwenta.io) and create another revenue stream for SNX stakers.

As the two largest and most liquid assets, BTC and ETH are considerably less volatile than SNX and therefore can be borrowed against at lower collateralisation levels. They are also the most widely held assets, representing a huge market of potential traders. Allowing these users to access Synthetix whilst maintaining their BTC/ETH exposure should make the system more attractive. Having already successfully trialed ETH as collateral, we would like the system to be positioned to capture the increasing amount of tokenised Bitcoin that is entering Ethereum.

An implementation that supports erc20 collateral would not only support the current inflow of tokenised Bitcoin, it would also mean that adding additional erc20 collateral in the future would not require any extra technical implementation.

## Specification

### Overview

We begin by describing loans, which are the primary feature of this SIP. We then discuss the debt pool dynamics between borrowers and stakers, which motivates the need for interest. Finally, we briefly address liquidations.   

### Loans

A loan is a debt position taken out by a borrower and is denominated in a certain synth. To open a loan, the borrower must deposit collateral. Depending on the type of collateral deposited, the borrower will have a choice of different synths that can be borrowed. They can choose the quantity of synths borrowed, subject to the constraint that the ratio of collateral value to synth value is greater than some minimum.

The duration of the loan is at the discretion of the borrower. While the loan is open, it accrues interest according to a variable rate that will be discussed later. Repayments can be made at any time, by anyone, but only the borrower may close the loan.

If the collateralisation ratio of the loan falls below the minimum required, it will be eligible for liquidation. To increase the loan's collateralisation ratio, anyone can deposit collateral to an open loan. The borrower can also withdraw collateral as long as they do not violate the minimum collateralisation requirement.

A Loan \(l\) is defined by several parameters. We use a superscript to indicate that a value is associated with a particular loan. 

| Symbol | Description | Definition | Notes |
| ------ | ----------- | ---------- | ----- |
| \\(c_q\\) | The quantity of collateral locked | - | For example 1 ETH. | 
| \\(c_p\\) | The price of c | - | For example $100. | 
| \\(s\\) | The synth borrowed | - | For example, sUSD, sETH or sBTC. |
| \\(s_a\\) | The quantity of s borrowed | - | For example 50 sUSD. | 
| \\(s_p\\) | The price of s | - | For example $1. | 
| \\(i\\) | The interest accrued on the loan. | - | Measured in units of the synth borrowed. For example, .01 sETH | 
| \\(c\\) | The collateralisation ratio of the loan | \\( c \ := \frac{c_p \ c \ i}{s_p \ a}\\) | For example  |

Each type of collateral is implemented by its own smart contract and is responsible for the issuance and management of all loans associated with the collateral. It is defined by the following parameters.

| Symbol | Description | Definition | Notes |
| ------ | ----------- | ---------- | ----- |
| \\(c\\) | The collateral | - | For example, ETH, renBTC. |
| \\(S\\)  | The synths that can be issued by this collateral | - | For example [sUSD, sETH] or [sUSD, sBTC] |
| \\(r\\)  | The base interest rate | - | A configurable parameter that reflects the risk profile of the collateral |
| \\(x\\)  | The interest slope | - | - |
| \\(c_{min}\\) | The minimum collateralisation ratio | - | This limits the maximum size of the loan for a given amount of collateral. |
| \\(L\\) | The set of all loans issued against this collateral | - | - |

### Debt pool

-- will fix these calcs later.

In a single collateral system, its collateralisation level is:

\[C \ := \ \frac{}{\sum_{l \in L}{s_a^l}}\]

In a multi collateral system, 

\[D \ := \ \sum_{l \in L}{s_a^l}\]

Each loan contributes to the size of the debt pool. When a loan is opened, the debt pool increases by the amount of the synth borrowed. Now, while the debt of the borrower is fixed, they are free to exchange their debt for other synths. This means that profit/loss from their trading activities is absorbed by the SNX stakers, who's debt fluctuates with the total size and composition of the debt pool. The profit/loss absorbed by stakers from borrowers increases in proportion with the ratio of non SNX debt to SNX debt. This can be viewed as a form of implicit leverage.

### Interest rates

As discussed above, loans leverage the SNX stakers. As such, we desire that as the proportion of non SNX backed debt grows, the cost of borrowing increases, to compensate stakers for this increased risk.

| Symbol | Description | Definition | Notes |
| ------ | ----------- | ---------- | ----- |
| \\(U\\)| The utilisation ratio | \[U\ := \ \frac{D}{Total}\]
| \\(i\\)| Instantaneous interest rate | \[i \ := \ r^c + xU \ i_{max} \] | - |

Interest is charged whenever a repayment is made, a liquidation occurs, or a loan is closed.

In systems where borrowers access the collateral of other depositors, there is a tension between utilisation and liquidity risk. If all the deposited ETH is borrowed, depositors cannot access any liquidity, which is a highly undesirable state. So they use piecewise functions to rapidly increase the cost of borrowing beyond some safety threshold, or any other function with a derivative that is not constant.

In Synthetix, users borrow synthetic assets which are issued at the time the loan is created, meaning we do not face the same tradeoff. The increased risk per increment in utilisation is constant.

#### Accrued Interest Calculation

Interest changes as a function of utilisation, which changes anytime the debt pool composition changes. It is not feasible to update every loan whenever the debt pool changes. Instead, whenever a loan is interacted with, we check the utilisation and determine the total accrued interest per base currency unit, using the same approach described by [SIP 80](https://sips.synthetix.io/sips/sip-80#aggregate-debt-calculation). This means we can calculate the interest accrued on a particular loan in constant time.

### Liquidations

When a loan's collateralisation ratio falls below the minimum collateralistion required, it is eligible for liquidation. Liquidation is a public function that may be called by anyone. The liquidation mechanism is the same as described in [SIP 15](https://sips.synthetix.io/sips/sip-15). The liquidator pays an amount of the borrowed synth back, and receives an amount of the borrower's collateral equal to the liquidated amount plus a penalty of 10%.
