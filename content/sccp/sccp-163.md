---
sccp: 163
title: Update Optimism Chainlink Oracles to OCR
network: Optimism
author: Roger Brogan (@rbrogan-git)
status: Approved
type: Governance
created: 2022-01-10
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/QmaXeVS61B8kqjdobjTP2kXNv72ANfdkifGaMfEBZ2qy5J
---

<!--You can leave these HTML comments in your merged SCCP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SCCPs. Note that an SCCP number will be assigned by an editor. When opening a pull request to submit your SCCP, please use an abbreviated title in the filename, `sccp-draft_title_abbrev.md`. The title should be 44 characters or less.-->



## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Upgrade to use the new OCR price feeds from Chainnlink on Optimism.

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The original Chainlink price feeds on Optimism are an older OVM compatible version.

The regenisis allowed the newer Off Chain Reporting (OCR) feeds to be deployed on Optimism.

The new OCR feeds should be used as they are current state of the art.


## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

The OCR feeds are the latest technology and will perform better than the old versions.

The existing proxy address are:

BTC/USD	    `0xc326371d4D866C6Ff522E69298e36Fe75797D358`

ETH/USD	    `0xA969bEB73d918f6100163Cd0fba3C586C269bee1`

LINK/USD    `0x74d6B50283AC1D651f9Afdc33521e4c1E3332b78`

SNX/USD	    `0x588e1f339910c21c7E4864048E37017AafF4cBc6`


The change should be to the new OCR proxy addresses here: 

BTC/USD     `0xD702DD976Fb76Fffc2D3963D037dfDae5b04E593`

ETH/USD     `0x13e3Ee699D1909E989722E753853AE30b17e08c5`

LINK/USD    `0xCc232dcFAAE6354cE191Bd574108c1aD03f86450`

SNX/USD     `0x2FCF37343e916eAEd1f1DdaaF84458a359b53877`



## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
