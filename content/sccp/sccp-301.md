---
sccp: 301
network: Optimism
title: Set Spartan Council minimumActiveMembers to n-4
author: TerraBellus (@TerraBellus)
status: Draft
created: 2022-07-20
type: Meta-Governance
---

## Simple Summary

<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->

Set the Spartan Council's `minimumActiveMembers` setting to `n-4`, where `n` represents the council's current seat count, as a means of allowing council members to be dismissed without forcing an election that could revert said dismissal. This SCCP further seeks to more clearly define the conditions allowing a valid meta-governance vote by specifying that a unanimous decision among non-dismissed council member meets the necessary criteria. 

## Abstract

<!--A short (~200 word) description of the variable change proposed.-->

The current `minimumActiveMembers` setting is `1` on all councils or will be set to `n-1` with the passing of SCCP-300. This settings control at what point an "emergency election" is triggered following dismissals carried out by a council’s owner. At present, the owner of all councils is the pDAO, though in the future this may be changed so that other entities, such as the Spartan Council, take ownership.

As the Spartan Council is the primary decision-making body for the protocol, it is important that it possesses a means of addressing performance issues within its ranks without triggering an emergency election and being encumbered by the subsequent inability to implement meta-governance proposals that could be designed to address the dismissal or dismissals. 

Assuming SCCP-300 has been implemented, SCCP-301 would alter the `n-1` figure for the Spartan Council to `n-4`. If SCCP-300 has not been implemented, SCCP-301 would set `minimumActiveMembers` to `n-4` for the Spartan Council and `n-1` for the Ambassador, Grants and Treasury councils. This will result in the following:

* Ambassador council: `2/3`
* Grants council: `4/5`
* Spartan council: `4/8`
* Treasury council: `3/4`

## Motivation

<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->

This SCCP is motivated by the desire to establish reasonable initial parameters for the protocol, while also hardening it in the face of a potential need to address a Spartan Council compromised in its effectiveness. 

As it stands under `n-1`, if a member or members of the Spartan Council were to cease cooperation and subsequently be dismissed, a two-week election would begin in which no meta-governance could be carried out. This would create a state in which governance could be compromised.

Hypothetically, there is nothing to stop dismissed members of the Spartan Council being re-elected. If re-elected members maintained an unwillingness to cooperate, the governance situation would, as a result, become intractable. Considering this, the setting of `minimumActiveMembers` to `n-4`, combined with an interpretation of a unanimous decision being that taken by non-dismissed Spartan Council members, would allow non-cooperative members of the Spartan Council to be dismissed up to the point that a majority of the original 8 remained functional. The remaining members (a minimum of 5) could then work to rectify, if needed, underlying issues through meta-governance. Were a further dismissal to be sought, it would be evidence that no majority within the council remained unanimously aligned, a state in which meta-governance should rightly cease and an election be carried out. As `n-4` would trigger an election due to the minimumActiveMembers threshold being met, this election period would then grant time in which both dismissed and remaining members of the Spartan Council could elaborate on the underlying issues to the community and seek to re-establish working consensus.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
