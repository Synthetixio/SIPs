---
sep: 0006
title: SOFT Fee Switch Enhancement Proposal
network: Ethereum
status: Draft
type: Governance
author: SOFT Governance Community
implementor: SOFT Development Team
release: (Release Name)
implementation-date:
discussions-to: https://forum.thesoftdao.com/t/soft-fee-switch-enhancing-soft-viability/10733
proposal: <snapshot.org proposal link> (*optional)
created: 2024-03-20
requires:
---

**Simple Summary**

The SOFT Fee Switch proposal aims to establish a variable fee mechanism for the use of SOFT protocol smart contracts. This initiative is designed to generate transaction fees and ensure sustainable growth of the SOFT ecosystem.

**Abstract**

We propose the implementation of a fee mechanism that activates a "Fee Switch" on SOFT Protocol smart contracts. This structure will include a tiered fee model and governance participation incentives through SOFT token staking. Fees accrued will directly support the SOFT Treasury. The deployment timeline will consider thorough testing and community consensus, aiming for a main net launch post-QA and approval.

**Motivation**

A sustainable revenue model is essential for the continued innovation and expansion of the SOFT ecosystem. The current lack of a revenue-generating mechanism limits the project's growth potential and long-term viability. By introducing a fee model with staking incentives and dynamic fee reductions, we can create a steady income stream while incentivizing deeper ecosystem engagement.

**Specification**

**Overview**

The Fee Switch mechanism includes a tiered fee and staking structure for projects generating significant volume, and governance voting power as a staking benefit. This approach encourages broader and more engaged participation in the SOFT ecosystem.

**Rationale**

The decision to implement a variable fees, along with staking incentives, is aimed at balancing transaction fees in alignment with ecosystem growth. Governance participation incentives are designed to further align the interests of SOFT users with the ecosystem's health. Transparent reporting on fee usage will ensure accountability and community trust.

**Technical Specification**

- Fee and Staking Schedule: Outlines the relationship between SOFT staked, stake duration, applicable fees, and penalties for early withdrawal.
- Governance Participation Incentives: Offers voting power for projects staking SOFT tokens, encouraging community involvement.

**Test Cases**

Test cases will be developed as part of the implementation phase and shared with the community for feedback.

**Configurable Values (Via SCCP)**

- Fee percentages based on SOFT staked and stake duration.
- Early withdrawal penalties.

**Copyright**

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
