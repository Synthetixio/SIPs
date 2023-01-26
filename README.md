# SEPs [![Discord](https://img.shields.io/discord/966432149022593074.svg?color=768AD4&label=discord&logo=https%3A%2F%2Fdiscordapp.com%2Fassets%2F8c9701b98ad4372b58f13fd9f65f966e.svg)](https://discordapp.com/channels/thesoftdao/) [![Twitter Follow](https://img.shields.io/twitter/follow/thesoftdao.svg?label=Soft DAO&style=social)](https://twitter.com/thesoftdao)

Soft Improvement Proposals (SEPs) describe standards for the Soft platform, including core protocol specifications and contract standards.

# Contributing

1.  Review [SEP-01](content/seps/sep-01.md).
2.  Fork the repository by clicking "Fork" in the top right.
3.  Add your SEP to your fork of the repository. There is a [template SEP here](sep-x.md).
4.  Submit a Pull Request to Soft's [SEPs repository](https://github.com/softdao/SEPs).

Your first PR should be a first draft of the final SEP. It must meet the formatting criteria enforced by the build (largely, correct metadata in the header). An editor will manually review the first PR for a new SEP and assign it a number before merging it. Make sure you include a `discussions-to` header with the URL to a new thread on [forum.softdao.ch/c/seps/21](https://forum.softdao.ch/c/seps/21) where people can discuss the SEP as a whole.

If your SEP requires images, the image files should be included in a subdirectory of the `assets` folder for that SEP as follow: `assets/sep-X` (for sep **X**). When linking to an image in the SEP, use relative links such as `../assets/sep-X/image.png`.

When you believe your SEP is mature and ready to progress past the Draft phase, you should reach out to a Soft core team member on Discord by searching members with the "Soft Council" or "Team" role or finding them within the #soft-dao channel. The Soft core team will schedule in a call with the SEP author to go through the SEP in more detail.

Once assessed, a SEP is moved into `Feasibility` and a Core Contributor is assigned. The Core Contributor will work with the author to conduct a feasibility study. Once the Author and the Core Contributor are satisfied, a SEP is moved to `SC Review Pending`. Once the Soft Council has formally reviewed the SEP during the SEP presentation they can either move it to a vote or send it back to `Feasability`. A vote is conducted within the `INSERT ENS` snapshot space. If a vote by the Soft Council reaches quorum the SEP is moved to `Approved`, otherwise it is `Rejected`.

Once the SEP has been implemented by either the protocol DAO or the SEP author and relevant parties, the SEP is assigned the `Implemented` status. 

# SEP Statuses

- **Draft** - The initial state of a new SEP before the Soft Council and core contributors have assessed it.
- **Feasibility** - a SEP that is being assessed for feasibility with an assigned Core Contributor
- **SC_Review_Pending** - a SEP that is awaiting a Soft Council Review after the Author and Core Contributor are satisfied with feasibility
- **Vote_Pending** - a SEP that is awaiting a vote.
- **Approved** - a SEP that has successfully reached quorum by a Soft Council vote in favour.
- **Rejected** - a SEP that has failed to reach quorum by a Soft Council vote in favour.
- **Implemented** - a SEP that has been released to main-net.

# Validation

SEPs must pass some validation tests.

It is possible to run the SEP validator locally:

```
npm install (if not done already)
npm run test
```

# Automerger

The SEP repository contains an "auto merge" feature to ease the workload for SEP editors. If a change is made via a PR to a draft SEP, then the authors of the SEP can Github approve the change to have it merged.
