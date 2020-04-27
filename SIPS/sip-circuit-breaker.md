---
sip: <to be assigned>
title: Circuit breaker for Synths exchange
status: WIP
author: Jackson Chan (@jacko125)
discussions-to:

created: 2020-04-24
---

<!--You can leave these HTML comments in your merged SIP and delete the visible duplicate text guides, they will not appear and may be helpful to refer to if you edit it again. This is the suggested template for new SIPs. Note that an SIP number will be assigned by an editor. When opening a pull request to submit your SIP, please use an abbreviated title in the filename, `sip-draft_title_abbrev.md`. The title should be 44 characters or less.-->

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SIP.-->
Phase one of circuit breakers for Synthetix exchange. Sythetix uses a mix of decentralised oracle feeds from Chainlink and oracle feeds from different sources for the synthetix exchange. In order to protect the integrity of the system large abnormal price shifts in price updates of a synth would trigger a circuit breaker so that the synth becomes suspended from exchanging until investigated.

## Abstract
<!--A short (~200 word) description of the technical issue being addressed.-->
Phase one will use the [SystemStatus detailed in SIP-44](./sip-44.md) to pause a synth when the circuit breaker detects a price difference between a price update that is greater than 25% on chainlink aggregators and on the exchangeRates contract.

We have a number of systems in place to alert the protocol DAO in the scenario where the circuit breaker is tripped and requires investigation before the protocol DAO re-enables the synth.

The next phase will introduce a decentralised circuit breaker mechanism into Synthetix exchange so that an exchange from / into the synth will pause the synth if there has been a price update above the threshold.

## Motivation
<!--The motivation is critical for SIPs that want to change Synthetix. It should clearly explain why the existing protocol specification is inadequate to address the problem that the SIP solves. SIP submissions without sufficient motivation may be rejected outright.-->

1. **Security meaures**: There have been occasions where synths have needed to be disabled immediately, such as the chainlink oracle issue with [XAG-USD mispriced](https://blog.synthetix.io/update-on-xag-pricing-incident) as XAU, causing sXAG to be mispriced and loss of funds. This gives the team and community time to investigate the situation and ensure that funds are not at risk.

We will build live monitoring software that can detect and disable synths whenever a price update crosses the threshold on chainlink aggregators and on the exchange rates contract.

2. **Decentralised governance**: We can allerviate governance concerns with having an automated circuit breaker system pause synths from being exchanged and transferred by implementing an authority address that is linked to an Aragon DAO for token holders to resume these synths. Token holders can vote to resume a synth after investigating the price shock is legitimate or not.

## Specification
<!--The technical specification should describe the syntax and semantics of any new feature.-->

1. **Phase 1 - Automated synth suspensions**

Pause a synth when the circuit breaker detects a price difference between a price update that is greater than 25% on chainlink aggregators and on the exchangeRates contract.

Circuit breaker oracle is given the authority to suspend synths on the System status contract with an assigned `reasonCode`.

The price oracle will continue to publish the synth prices on chain to the exchangeRates contract however users will not be able to exchange or transfer them until the price shock is investigated as legitimate before resuming.

The behaviour would mimic decentralised chainlink oracles which continue updating prices onchain regardless of the status of the synth's traded on synthetix exchange.

2. **Decentralised circuit breaker**

When a user exchanges `src` synth for `dest` synth, each exchange transaction can read and check from chainlink aggregators or exchange rates contract the largest % price difference value between a price update for the `src` and `dest` synths respectively.

The circuit breaker will be triggered when either the `src` or `dest` synth have a % price difference between two updates above the 25% threshold limit and automatically have the synth suspended by the exchange transaction.

- Chainlink aggregators can record and expose the largest % price diff within a time period (ie 3 hours) as an onchain value.
- On each price update calculate the % price diff between previous roundID and compare with the largest % price diff in the period.

- Only update the update the % price diff value, if the new % price diff is > than largest % price diff in the period.

- Rollover the largest % price difference value each time period and reset with the latest price update % diff value.

- Reduces gas cost by only updating the largest % price diff value within a time period and checking on each price update whether the largest % price diff needs to be updated.

- Each exchange txn will only need to check this rolled up value (largest % price difference in period) instead of reading multiple roundID's and calculate each price differences between the roundID's to check whether a price anomaly occured within the time period.

**Resuming synth**

- Resumption of a synth when it's suspended by the decentralised circuit breaker will be possible by the protocol DAO or Synthetix community voting via Aragon DAO after investigating the price shock.

- Record the RoundID where price shock occured as resolved so the circuit breaker will ignore this on future exchange txn's.

## Rationale
<!--The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.-->

## Test Cases
<!--Test cases for an implementation are mandatory for SIPs but can be included with the implementation..-->
TBD

## Implementation
<!--The implementations must be completed before any SIP is given status "Implemented", but it need not be completed before the SIP is "Approved". While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.-->

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
