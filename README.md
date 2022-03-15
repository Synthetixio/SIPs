# KIPs [![Discord](https://img.shields.io/discord/413890591840272394.svg?color=768AD4&label=discord&logo=https%3A%2F%2Fdiscordapp.com%2Fassets%2F8c9701b98ad4372b58f13fd9f65f966e.svg)](https://discord.gg/t7J2qAyeRT) [![Twitter Follow](https://img.shields.io/twitter/follow/kwenta_io?style=social)](https://twitter.com/kwenta_io)

Kwenta Improvement Proposals (KIPs) describe standards for the Kwenta platform, including core protocol specifications, client APIs, and contract standards.

# Contributing

1.  Review [KIP-1](kips/kip-1.md).
2.  Fork the repository by clicking "Fork" in the top right.
3.  Add your KIP to your fork of the repository. You can copy templates for [KIPs](kip-x.md), [CKIPs](kip-x.md), and [KTRs](kip-x.md).
4.  Submit a Pull Request to Kwenta's [KIPs repository](https://github.com/kwenta/KIPs).

Your first PR should be a first draft of the final KIP. It must meet the formatting criteria enforced by the build (largely, correct metadata in the header). An editor will manually review the first PR for a new KIP and assign it a number before merging it.

If your KIP requires images, the image files should be included in a subdirectory of the `assets` folder for that KIP as follow: `assets/kip-X` (for kip **X**). When linking to an image in the KIP, use relative links such as `../assets/kip-X/image.png`.

When you believe your KIP is mature and ready to progress past the Draft phase, create a thread in the #governance channel in [Discord](https://discord.gg/Y32dAVMMwF) to discuss your KIP with the Elite Council and community. The Elite Council may schedule in a call with the KIP author to go through the KIP in more detail if necessarry.

Once assessed, a KIP is moved into `Proposed` where the Elite Council will vote on the proposal via the Kwenta.eth Snapshot. If a vote by the Elite Council reaches a majority, the KIP is moved to `Approved`, otherwise it is `Rejected`.

Once the KIP has been implemented by either the protocol DAO or the KIP author and relevant parties, the KIP is assigned the `Implemented` status.

# Proposal Statuses

- **Draft** - The initial state of a new proposal before the Elite Council and Core Contributors have assessed it.
- **Feasibility** - The proposal is being discussed with the community.
- **Voting** - This proposal is being voted on.
- **Approved** - A proposal that has successfully reached a majority Elite Council vote in favour.
- **Rejected** - A proposal that has failed to reach a majority Elite Council vote in favour.
- **Implemented** - A proposal that has been released to main-net.


# Proposal Types

- **KIP** - A Kwenta Improvement Proposal outlines a change to be made to the Kwenta protocol. These are submitted to the Elite Council for voting and require a majority to pass.
- **CKIP** - A Community Kwenta Improvement Proposal outlines a change to be made to the DAO which overrules the Elite Council. These proposals should only be used in the event that there's disagreement between the Elite Council and the Kwenta community. These are submitted to token holders for voting and require quorum (over 50% of the circulating supply) to pass.
- **KTR** - A Kwenta Treasury Request outlines a request for funds from the treasuryDAO. These are submitted to the treasuryDAO and require a majority to pass.

# Validation

KIPs must pass some validation tests.

It is possible to run the KIP validator locally:

```
npm install (if not done already)
npm run test
```
