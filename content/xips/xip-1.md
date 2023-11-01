---
xip: 1
network: Ethereum & Optimism
title: XIP Purpose and Guidelines
status: Implemented
author: Kain Warwick (@kaiynne)
created: 2019-06-10T00:00:00.000Z
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/Qme74DFFv2CZDENkuD2HqYndFzAUtozFsn4U8khGeKfJsi
type: Governance
---

## What is an XIP?

XIP stands for Infinex Improvement Proposal, it has been adapted from the EIP (Ethereum Improvement Proposal). The purpose of this process is to ensure changes to Infinex are transparent and well governed. An XIP is a design document providing information to the Synthetix community about a proposed change to the system. The author is responsible for building consensus within the community and documenting dissenting opinions.

## What is an SCCP?

SCCP stands for Infinex Configuration Change Proposal. SCCP's are documents for making a case for modifying one of the system configuration variables. The intent is to provide a clear and detailed history behind each configuration change and the rationale behind it at the time it was implemented. The author of the document is responsible for building consensus within the community and documenting dissenting opinions.

## XIP & SCCP Rationale

We intend XIPs and SCCPs to be the primary mechanisms for proposing new features, collecting community input on an issue, and for documenting the design decisions for changes to Infinex. Because they are maintained as text files in a versioned repository, their revision history is the historical record of the feature proposal.

It is highly recommended that a single XIP contain a single key proposal or new idea. The more focused the XIP, the more successful it is likely to be.

An XIP or SCCP must meet certain minimum criteria. It must be a clear and complete description of the proposed enhancement. The enhancement must represent a net improvement.

## XIP Work Flow

Parties involved in the process are the _author_, the [_XIP editors_](#xip-editors), the [Infinex Core Contributors] and the Synthetix community.

:warning: Before you begin, vet your idea, this will save you time. Ask the Infinex community first if an idea is original to avoid wasting time on something that will be rejected based on prior research (searching the Internet does not always do the trick). It also helps to make sure the idea is applicable to the entire community and not just the author. Just because an idea sounds good to the author does not mean it will have the intend effect. The appropriate public forum to gauge interest around your XIP or SCCP is [the Infinex Discord].

Your role as the champion is to write the XIP using the style and format described below, shepherd the discussions in the appropriate forums, and build community consensus around the idea. Following is the process that a successful XIP will move along:

![XIP-workflow.png](https://github.com/infinex-io/XIPs/blob/master/static/xip-workflow.png)

Each status change is requested by the XIP author and reviewed by the XIP editors. Use a pull request to update the status. Please include a link to where people should continue discussing your XIP. The XIP editors will process these requests as per the conditions below.

- **Draft** -- This XIP is work-in-progress and being reviewed by a Spartan Council member with the champion.
- **Feasibility** -- This XIP is assigned with a Core Contributor and underdoing a feasibility study.
- **SC Review Pending** -- This XIP is being formally reviewed by the Spartan Council to decide on voting or sent back for feasibility study.
- **Vote Pending** -- This XIP is scheduled for voting on [staking](https://staking.infinex.io/)
- **Approved** -- This XIP has passed community governance and is now being prioritised for development.
- **Rejected** -- This XIP has failed to reach community consensus.
- **Implemented** -- This XIP has been implemented and deployed to mainnet.

## What belongs in a successful XIP?

Each XIP or SCCP should have the following parts:

- Preamble - RFC 822 style headers containing metadata about the XIP, including the XIP number, a short descriptive title (limited to a maximum of 44 characters), and the author details.
- Simple Summary - “If you can’t explain it simply, you don’t understand it well enough.” Provide a simplified and layman-accessible explanation of the XIP.
- Abstract - a short (~200 word) description of the technical issue being addressed.
- Motivation (\*optional) - The motivation is critical for XIPs that want to change Infinex. It should clearly explain why the existing specification is inadequate to address the problem that the XIP solves. XIP submissions without sufficient motivation may be rejected outright.
- Specification - The technical specification should describe the syntax and semantics of any new feature.
- Rationale - The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.
- Test Cases - Test cases may be added during the implementation phase but are required before implementation.
- Copyright Waiver - All XIPs must be in the public domain. See the bottom of this XIP for an example copyright waiver.

## XIP Formats and Templates

XIPs should be written in [markdown] format.
Image files should be included in a subdirectory of the `assets` folder for that XIP as follows: `assets/xip-X` (for xip **X**). When linking to an image in the XIP, use relative links such as `../assets/xip-X/image.png`.

## XIP Header Preamble

Each XIP must begin with an [RFC 822](https://www.ietf.org/rfc/rfc822.txt) style header preamble, preceded and followed by three hyphens (`---`). This header is also termed ["front matter" by Jekyll](https://jekyllrb.com/docs/front-matter/). The headers must appear in the following order. Headers marked with "\*" are optional and are described below. All other headers are required.

` xip:` <XIP number> (this is determined by the XIP editor)

` title:` <XIP title>

` author:` <a list of the author's or authors' name(s) and/or username(s), or name(s) and email(s). Details are below.>

` * discussions-to:` \<a url pointing to the official discussion thread at research.infinex.io\>

` status:` < Draft \| Feasibility \| SC Review Pending \| Vote Pending \| Approved \| Rejected \| Implemented >

` created:` <date created on>

` * updated:` <comma separated list of dates>

` * requires:` <XIP number(s)>

` * resolution:` \<a url pointing to the resolution of this XIP\>

Headers that permit lists must separate elements with commas.

Headers requiring dates will always do so in the format of ISO 8601 (yyyy-mm-dd).

#### `author` header

The `author` header optionally lists the names, email addresses or usernames of the authors/owners of the XIP. Those who prefer anonymity may use a username only, or a first name and a username. The format of the author header value must be:

> Random J. User &lt;address@dom.ain&gt;

or

> Random J. User (@username)

if the email address or GitHub username is included, and

> Random J. User

if the email address is not given.

#### `discussions-to` header

While an XIP is in **Draft** or **Feasibility** status, a `discussions-to` header will indicate the URL at [research.infinex.io](https://research.infinex.io/) where the XIP is being discussed.

#### `created` header

The `created` header records the date that the XIP was assigned a number. Both headers should be in yyyy-mm-dd format, e.g. 2001-08-14.

#### `updated` header

The `updated` header records the date(s) when the XIP was updated with "substantial" changes. This header is only valid for XIPs of Draft and Active status.

#### `requires` header

XIPs may have a `requires` header, indicating the XIP numbers that this XIP depends on.

## Auxiliary Files

XIPs may include auxiliary files such as diagrams. Such files must be named XIP-XXXX-Y.ext, where “XXXX” is the XIP number, “Y” is a serial number (starting at 1), and “ext” is replaced by the actual file extension (e.g. “png”).

## XIP Editors

The current XIP editors are

` * Kain (@kaiynne)`

` * jj (@justinjmoses)`

` * Kaleb (@kaleb-keny)`

` * Danijel (@dgornjakovic)`

` * Afif (@abandek)`
  
` * TerraBellus (@terrabellus)`

## XIP Editor Responsibilities

For each new XIP that comes in, an editor does the following:

- Read the XIP to check if it is ready: sound and complete. The ideas must make technical sense, even if they don't seem likely to get to final status.
- The title should accurately describe the content.
- Check the XIP for language (spelling, grammar, sentence structure, etc.), markup (Github flavored Markdown), code style

If the XIP isn't ready, the editor will send it back to the author for revision, with specific instructions.

Once the XIP is ready for the repository, the XIP editor will:

- Assign an XIP number (generally the PR number or, if preferred by the author, the Issue # if there was discussion in the Issues section of this repository about this XIP)

- Merge the corresponding pull request

- Send a message back to the XIP author with the next step.

Many XIPs are written and maintained by developers with write access to the Ethereum codebase. The XIP editors monitor XIP changes, and correct any structure, grammar, spelling, or markup mistakes we see.

The editors don't pass judgment on XIPs. We merely do the administrative & editorial part.

## History

The XIP document was derived heavily from the EIP Ethereum Improvement Proposal document in many places text was simply copied and modified. Any comments about the XIP document should be directed to the XIP editors. The history of the EIP is quoted below from the EIP document for context:

- _"This document (EIP) was derived heavily from [Bitcoin's BIP-0001] written by Amir Taaki which in turn was derived from [Python's PEP-0001]. In many places text was simply copied and modified. Although the PEP-0001 text was written by Barry Warsaw, Jeremy Hylton, and David Goodger, they are not responsible for its use..."_ \*

June 10, 2019: XIP 1 has been drafted and submitted as a PR.

See [the revision history for further details](https://github.com/infinex-io/), which is also available by clicking on the History button in the top right of the XIP.

### Bibliography

[the synthetix discord]: https://discord.gg/a2E6uxk
[pull request]: https://github.com/infinex-io/XIPs/pulls
[markdown]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
[bitcoin's bip-0001]: https://github.com/bitcoin/bips
[python's pep-0001]: https://www.python.org/dev/peps/
[synthetix engineering team]: https://github.com/orgs/infinex-io/people

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
