# KIPs [![Discord](https://img.shields.io/discord/413890591840272394.svg?color=768AD4&label=discord&logo=https%3A%2F%2Fdiscordapp.com%2Fassets%2F8c9701b98ad4372b58f13fd9f65f966e.svg)](https://discord.gg/t7J2qAyeRT) [![Twitter Follow](https://img.shields.io/twitter/follow/synthetix_io.svg?label=synthetix_io&style=social)](https://twitter.com/kwenta_io)

Kwenta Improvement Proposals (KIPs) describe standards for the Kwenta platform, including core protocol specifications, client APIs, and contract standards.

# Contributing

1.  Review [SIP-1](sips/sip-1.md).
2.  Fork the repository by clicking "Fork" in the top right.
3.  Add your KIP to your fork of the repository. There is a [template SIP here](sip-x.md).
4.  Submit a Pull Request to Synthetix's [SIPs repository](https://github.com/synthetixio/SIPs).

Your first PR should be a first draft of the final KIP. It must meet the formatting criteria enforced by the build (largely, correct metadata in the header). An editor will manually review the first PR for a new KIP and assign it a number before merging it. Make sure you include a `discussions-to` header with the URL to a new thread on [research.synthetix.io](https://research.synthetix.io) where people can discuss the KIP as a whole.

If your KIP requires images, the image files should be included in a subdirectory of the `assets` folder for that KIP as follow: `assets/sip-X` (for sip **X**). When linking to an image in the KIP, use relative links such as `../assets/sip-X/image.png`.

When you believe your KIP is mature and ready to progress past the Draft phase, you should reach out to a Spartan Council member on discord by searching members with the "Spartan Council" role or finding them within the #governance channel. The Spartan Council will schedule in a call with the SIP author to go through the SIP in more detail.

Once assessed, a KIP is moved into `Feasibility` and a Core Contributor is assigned. The Core Contributor will work with the author to conduct a feasibility study. Once the Author and the Core Contributor are satisfied, a KIP is moved to `EC Review Pending`. Once the Spartan Council has formally reviewed the KIP during the KIP presentation they can either move it to a vote or send it back to `Feasability`. A vote is conducted within the `spartancouncil.eth` snapshot space connected on the [staking](https://staking.synthetix.io/) dApp. If a vote by the Elite Council reaches a super majority, the KIP is moved to `Approved`, otherwise it is `Rejected`.

Once the KIP has been implemented by either the protocol DAO or the KIP author and relevant parties, the KIP is assigned the `Implemented` status. There is a 500 sUSD bounty for proposing a KIP that reaches the `Implemented` phase.

# KIP Statuses

- **Draft** - The initial state of a new KIP before the Elite Council and core contributors have assessed it.
- **Feasibility** - a KIP that is being assessed for feasibility with an assigned Core Contributor
- **SC_Review_Pending** - a KIP that is awaiting a Elite Council Review after the Author and Core Contributor are satisfied with feasibility
- **Vote_Pending** - a KIP that is awaiting a vote.
- **Approved** - a KIP that has successfully reached a super majority Elite Council vote in favour.
- **Rejected** - a KIP that has failed to reach a super-majority KIP Council vote in favour.
- **Implemented** - a KIP that has been released to main-net.

# Validation

KIPs must pass some validation tests.

It is possible to run the KIP validator locally:

```
npm install (if not done already)
npm run test
```

# JSON API

All KIPs, CKIPs, and KTR data is available in JSON format by status at the following urls:

## SIPs

```
https://sips.synthetix.io/api/sips/draft.json
https://sips.synthetix.io/api/sips/feasibility.json
https://sips.synthetix.io/api/sips/sc-review-pending.json
https://sips.synthetix.io/api/sips/vote-pending.json
https://sips.synthetix.io/api/sips/approved.json
https://sips.synthetix.io/api/sips/rejected.json
https://sips.synthetix.io/api/sips/implemented.json
```

## SCCPs

```
https://sips.synthetix.io/api/sccp/draft.json
https://sips.synthetix.io/api/sccp/feasibility.json
https://sips.synthetix.io/api/sccp/sc-review-pending.json
https://sips.synthetix.io/api/sccp/vote-pending.json
https://sips.synthetix.io/api/sccp/approved.json
https://sips.synthetix.io/api/sccp/rejected.json
https://sips.synthetix.io/api/sccp/implemented.json
```

# Automerger

The KIP repository contains an "auto merge" feature to ease the workload for KIP editors. If a change is made via a PR to a draft KIP, then the authors of the KIP can Github approve the change to have it auto-merged by the [sip-automerger](https://github.com/bakaoh/sip_automerger) bot.
