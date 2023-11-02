# XIPs

Infinex Improvement Proposals (XIPs) describe standards for the Synthetix platform, including core protocol specifications, client APIs, and contract standards.

# Contributing

1.  Review [XIP-1](content/xips/xip-1.md).
2.  Fork the repository by clicking "Fork" in the top right.
3.  Add your XIP to your fork of the repository. There is a [template XIP here](xip-x.md) and a [template STP here](stp-x.md).
4.  Submit a Pull Request to Infinex's [XIPs repository](https://github.com/infinex-io/XIPs).

Your first PR should be a first draft of the final XIP. It must meet the formatting criteria enforced by the build (largely, correct metadata in the header). An editor will manually review the first PR for a new XIP and assign it a number before merging it. Make sure you include a `discussions-to` header with the URL to a new thread on [Discord](https://research.infinex.io) where people can discuss the XIP as a whole.

If your XIP requires images, the image files should be included in a subdirectory of the `assets` folder for that XIP as follow: `assets/xip-X` (for xip **X**). When linking to an image in the XIP, use relative links such as `../assets/xip-X/image.png`.

When you believe your XIP is mature and ready to progress past the Draft phase, you should reach out to a Spartan Council member on discord by searching members with the "Spartan Council" role or finding them within the #governance channel. The Spartan Council will schedule in a call with the XIP author to go through the XIP in more detail

Once assessed, a XIP is moved into `Feasibility` and a Core Contributor is assigned. The Core Contributor will work with the author to conduct a feasibility study. Once the Author and the Core Contributor are satisfied, a XIP is moved to `SC Review Pending`. Once the Spartan Council has formally reviewed the XIP during the XIP presentation they can either move it to a vote or send it back to `Feasibility`. A vote is conducted within the `spartancouncil.eth` snapshot space connected on the [staking](https://staking.infinex.io/) dApp. If a vote by the Spartan Council reaches a super majority, the XIP is moved to `Approved`, otherwise it is `Rejected`.

Once the XIP has been implemented by either the protocol DAO or the XIP author and relevant parties, the XIP is assigned the `Implemented` status. There is a 500 sUSD bounty for proposing a XIP that reaches the `Implemented` phase.

# XIP Statuses

- **Draft** - The initial state of a new XIP before the Spartan Council and core contributors have assessed it.
- **Feasibility** - a XIP that is being assessed for feasibility with an assigned Core Contributor
- **SC_Review_Pending** - a XIP that is awaiting a Spartan Council Review after the Author and Core Contributor are satisfied with feasibility
- **Vote_Pending** - a XIP that is awaiting a vote.
- **Approved** - a XIP that has successfully reached a super majority Spartan Council vote in favour.
- **Rejected** - a XIP that has failed to reach a super-majority Spartan Council vote in favour.
- **Implemented** - a XIP that has been released to main-net.

# Validation

XIPs must pass some validation tests.

It is possible to run the XIP validator locally:

```
npm install (if not done already)
npm run test
```

# JSON API

All XIPs data is available in JSON format by status at the following urls:

## XIPs

```
https://xips.infinex.io/api/xips/draft.json
https://xips.infinex.io/api/xips/feasibility.json
https://xips.infinex.io/api/xips/sc-review-pending.json
https://xips.infinex.io/api/xips/vote-pending.json
https://xips.infinex.io/api/xips/approved.json
https://xips.infinex.io/api/xips/rejected.json
https://xips.infinex.io/api/xips/implemented.json
```

# Automerger

The XIP repository contains an "auto merge" feature to ease the workload for XIP editors. If a change is made via a PR to a draft XIP, then the authors of the XIP can Github approve the change to have it auto-merged by the [xip-automerger](https://github.com/bakaoh/sip_automerger) bot.
