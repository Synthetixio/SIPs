---
sip: 0
title: Synthetix Appchain (SynthChain)
network: Optimism
status: Draft
type: Governance
author: Jackson Chan, Asian0xV, Layer Labs
implementor: Synthetix
created: 2024-05-10
requires: 
---

# Simple Summary

<p>This SIP proposes for Synthetix to create an App-Chain called Synth Superchain with Optimism, the Layer 2 rollup chosen as the base for Synthetix Superchain. It will be a priority chain for DeFi Traders and users offering low congestion, rebated fees, and interoperability. </p>

# Abstract

<p>Synth Chain is the dedicated appchain where Synthetix state changes must be pushed for settlement. Make Synth Chain the home of the central Synthetix system, with other chains becoming satellites, and using cross-chain messaging for synchronization. </p>

# Specification


### Overview

<p>By deploying an appchain Synth Chain would profit ~13 ETH + a month after paying for the sequencer costs from margin of transaction fees. For data availability, we propose using the ETH DA layer and for an oracle, we propose using Pyth to prevent any execution lag for traders. To ensure the best trader UX, we propose to use it for cross-chain liquidity deposits.&nbsp; </p>

### Rationale

<p>By selling blockspace on Synth Chain to process all Synthetix transactions, the ETH transaction fees collected by the App-chain sequencer are redistributed to SNX stakers or utilized in a buyback and burn model. </p>

### Test Cases

<p><img src="./assets/sip-0/6n0hm8.png"></p>


### Configurable Values (Via SCCP)

<p><br></p>