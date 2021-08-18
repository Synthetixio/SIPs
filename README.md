# SIPs [![Discord](https://img.shields.io/discord/413890591840272394.svg?color=768AD4&label=discord&logo=https%3A%2F%2Fdiscordapp.com%2Fassets%2F8c9701b98ad4372b58f13fd9f65f966e.svg)](https://discordapp.com/channels/413890591840272394/) [![Twitter Follow](https://img.shields.io/twitter/follow/synthetix_io.svg?label=synthetix_io&style=social)](https://twitter.com/synthetix_io)

Synthetix Improvement Proposals (SIPs) describe standards for the Synthetix platform, including core protocol specifications, client APIs, and contract standards.
# Contributing

1.  Review [SIP-1](sips/sip-1.md).
2.  Fork the repository by clicking "Fork" in the top right.
3.  Add your SIP to your fork of the repository. There is a [template SIP here](sip-x.md).
4.  Submit a Pull Request to Synthetix's [SIPs repository](https://github.com/synthetixio/SIPs).

Your first PR should be a first draft of the final SIP. It must meet the formatting criteria enforced by the build (largely, correct metadata in the header). An editor will manually review the first PR for a new SIP and assign it a number before merging it. Make sure you include a `discussions-to` header with the URL to a new thread on [research.synthetix.io](https://research.synthetix.io) where people can discuss the SIP as a whole.

If your SIP requires images, the image files should be included in a subdirectory of the `assets` folder for that SIP as follow: `assets/sip-X` (for sip **X**). When linking to an image in the SIP, use relative links such as `../assets/sip-X/image.png`.

When you believe your SIP is mature and ready to progress past the Draft phase, you should reach out to a Spartan Council member on discord by searching members with the "Spartan Council" role or finding them within the #governance channel. The Spartan Council will schedule in a call with the SIP author to go through the SIP in more detail.

Once assessed, a SIP is moved into `Feasibility` and a Core Contributor is assigned. The Core Contributor will work with the author to conduct a feasibility study. Once the Author and the Core Contributor are satisfied, a SIP is moved to `SC Review Pending`. Once the Spartan Council has formally reviewed the SIP during the SIP presentation they can either move it to a vote or send it back to `Feasability`. A vote is conducted within the `spartancouncil.eth` snapshot space connected on the [staking](https://staking.synthetix.io/) dApp. If a vote by the Spartan Council reaches a super majority, the SIP is moved to `Approved`, otherwise it is `Rejected`.

Once the SIP has been implemented by either the protocol DAO or the SIP author and relevant parties, the SIP is assigned the `Implemented` status. There is a 500 sUSD bounty for proposing a SIP that reaches the `Implemented` phase.

# SIP Statuses

- **Draft** - The initial state of a new SIP before the Spartan Council and core contributors have assessed it.
- **Feasibility** - a SIP that is being assessed for feasibility with an assigned Core Contributor
- **SC_Review_Pending** - a SIP that is awaiting a Spartan Council Review after the Author and Core Contributor are satisfied with feasibility
- **Vote_Pending** - a SIP that is awaiting a vote.
- **Approved** - a SIP that has successfully reached a super majority Spartan Council vote in favour.
- **Rejected** - a SIP that has failed to reach a super-majority Spartan Council vote in favour.
- **Implemented** - a SIP that has been released to main-net.

# Validation

SIPs must pass some validation tests.

It is possible to run the SIP validator locally:

```
npm install (if not done already)
npm run test
```

# Automerger

The SIP repository contains an "auto merge" feature to ease the workload for SIP editors. If a change is made via a PR to a draft SIP, then the authors of the SIP can Github approve the change to have it auto-merged by the [sip-automerger](https://github.com/bakaoh/sip_automerger) bot.
