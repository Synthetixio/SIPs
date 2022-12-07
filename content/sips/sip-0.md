---
sip: 0
title: V3 fee sharing
network: Ethereum & Optimism
status: Draft
type: Governance
author: cyberduck, ivan, chatGPT
implementor: n/a
created: 2022-12-07
requires: 
---

# Simple Summary

<p>This SIP outlines how fees are shared to protocol participants in Synthetix V3.</p>

# Abstract

<p>Fees captured by the protocol are split between collateral liquidity providers (LPs) and SNX stakers. Staked SNX receives a percentage of the fees captured by the protocol rent-free. The ratio at which fees are split is to be decided by the Spartan Council and can be changed via SCCP.</p><p><br></p>

# Specification


### Overview

<p>Protocol fees are to be split between collateral liquidity providers and SNX stakers according to a configurable ratio, initially set to 95% for liquidity providers and 5% for SNX stakers.</p><p><br></p><p>Staking is liquid and stakers may withdraw their SNX at any time. Unclaimed fees are claimed during withdrawal.&nbsp;</p><p><br></p><p>Protocol fees are to be split between collateral liquidity providers and SNX stakers according to a configurable protocol_fee_ratio expressed in decimal, where the value set represents the fees shared with SNX stakers.&nbsp;</p><p><br></p><p>With the implementation of this proposal, the initial fee percentages are to be set as follows:</p><p><br></p><p>protocol_fee_ratio = 0.05</p><p><br></p><p>This SIP also proposes a maximum configurable upper value for the protocol_fee_ratio of 0.20.&nbsp;</p><p><br></p><p>Staked SNX is to be represented in a wrapped staked SNX token in the ERC20 standard.&nbsp;</p>

### Rationale

<p>This design aims to reward providers of any collateral type while also rewarding SNX stakers.&nbsp;Pools in Synthetix V3 can be backed by ETH and other types of collateral as voted by the Spartan Council. To incentivize liquidity some kind of rewards must be provided to LPs - inflationary or protocol fees, which affects the value of SNX and tokenomics in status quo. While inflation towards other token types dilutes existing SNX holders, fees captured by other token types are fees not captured by SNX. This could lead to a decrease in the demand for SNX and a potential reduction in its value and inherently in the value of SNX used for any incentives within the protocol or externally in AMMs or bribes.&nbsp;</p><p><br></p><p>One potential solution to incentivize liquidity providers and not devalue holding SNX in Synthetix v3 is to introduce a ratio of how fees are shared. Instead of 100% of fees being shared with liquidity providers, a portion of the fees is to be shared with SNX stakers without the need for them to provide SNX as collateral, allowing SNX stakers to earn fees passively without taking on debt risks. This would help to maintain the demand for SNX and its value, while also providing sufficient rewards to liquidity providers.&nbsp;</p><p><br></p>

### Test Cases

<p>Test Case A</p><p>Liquidity providers capture 95% of fees, SNX stakers capture 5% fees</p><p>protocol_fee_ratio = 0.05</p><p><br></p><p>Test Case B</p><p>Liquidity providers capture 80% of fees, SNX stakers capture 20% fees</p><p>protocol_fee_ratio = 0.20</p>


### Configurable Values (Via SCCP)

<p>protocol_fee_ratio</p>