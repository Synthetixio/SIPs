---
sccp: 147
title: Increasing the cap on the DAI wrappr to 30m and lower the minting fee on DAI to 5 bp
author: Kaleb (@kaleb-keny)
discussions-to: 'https://discord.gg/EWmYsH7X'
status: Implemented
created: 2021-11-05
type: Governance
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/QmQnLDMTDXWbNomwJoB3scHkLMYPj1Dsgw9YpG5KhcvzAw
---

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

This SCCP proposes the following:
- Increase the DAI wrappr cap to 30 million sUSD
- Lower the minting fee on the DAI wrappr from the peg market price to 5 bp in 50 bp increments 
- Set the burn fee on the DAI wrappr to 5 bp

## Abstract
<!--A short (~200 word) description of the variable change proposed.-->

Due to the on-going high demand for sUSD on L2, this sccp proposes to increase the cap on the DAI wrappr to 30m and lower the minting fee gradually to 5 bp in 50 bp incremental steps.

## Motivation
<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

Although everyone would have preferred wrapping around a stable coin that has no connection to centralized stables, unfortunately on the optimistic eco-system at the moment there is only DAI available out of the box. It will take some work to have an alternatives online, such as LUSD on optimism, which offers a stable coin without any connection to the regulated stablecoin space. Therefore, this sccp proposes to increase the cap on the DAI wrappr to 30 million sUSD and lower the minting fee gradually from the prevailing market price to 5 bp in 50 bp incremental steps, whenever the USD/DAI market price falls to a level that makes arbitrage unprofitable.

That said, there are discussions on how to phase out of DAI by the end of the year or Q1 next year, as myself, I am an extreme proponent of cutting off all connections to censorable centralized stable tokens. One option being considered is to burn sUSD and get the DAI out of wrappr, once enough sUSD is available on optimism (post-merge). In the meantime, our only alternative is to use DAI as a transitory bridge of a few months, in order to be able to provide the currency of choice to our partners, who are fully deployed on optimisim or are expected to be coming online in the weeks to come.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).