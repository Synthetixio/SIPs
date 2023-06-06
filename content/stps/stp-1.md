---
stp: 1
network: Ethereum & Optimism
title: STP Purpose and Guidelines
status: Draft
author: 'Kain Warwick (@kaiynne), Carrot Anderson (@carrotanderson), Elliptic Curve, Spartan Glory'
created: 2023-05-5T00:00:00.000Z
type: Meta-Governance
---

## What is an STP?

STP stands for Synthetix Treasury Proposal. An STP is a document that outlines a proposed ongoing management process or one time use of Synthetix treasury funds. The STP structure has been adapted from STP (Synthetix Improvement Proposal).

## STP Rationale

Up until now the Treasury Council has been operating without a formal proposal process akin to an STP used by the Spartan Council. While a formal proposal template is not required by governance the introduction of STPs aims to provide clarity to the community and facilitate community input. In addition, STPs will serve as documentation for the treasury processes and assist with handover at the end of each epoch.

## STP Work Flow

Parties involved in the process are the author, the Treasury Council, and the Synthetix community.

Before you begin, propose your idea to the Synthetix community to see if the idea is original and realistic. It also helps to make sure the idea is applicable to the entire community and not just the author. Just because an idea sounds good to the author does not mean it will have the intended effect. The appropriate public forum to gauge interest around your STP is the [Synthetix Discord](https://discord.gg/a2E6uxk) (#treasury-council).

Your role as the author is to write the STP using the style and format described below, shepherd the discussions in the appropriate forums, and build community consensus around the idea.

Each status change is requested by the STP author and reviewed by the Treasury Council. Use a pull request to update the status. Please include a link to where people should continue discussing your STP. The Treasury Council will process these requests as per the conditions below.

Community Feedback -- This STP has been submitted for community feedback.
Approved -- This STP has been approved by a vote of the Treasury Council
Rejected -- This STP has been rejected by a vote of the Treasury Council.
Implemented -- This STP has been implemented by the Treasury Council.

- **Draft** -- This STP is work-in-progress.
- **Community Feedback** -- This STP has been submitted for community feedback.
- **Approved** -- This STP has been approved by a vote of the Treasury Council
- **Rejected** -- This STP has been rejected by a vote of the Treasury Council.
- **Implemented** -- This STP has been implemented by the Treasury Council.

## What belongs in a successful STP?

Each STP should have the following parts:

- Preamble - RFC 822 style headers containing metadata about the STP, including the STP number, a short descriptive title (limited to a maximum of 44 characters), and the author details.
- Simple Summary - “If you can’t explain it simply, you don’t understand it well enough.” Provide a simplified and layman-accessible explanation of the STP.
- Abstract - a short (~200 word) description of the issue being addressed.
- Motivation (\*optional) – The motivation is critical for STPs that want to change the way the Treasury is managed. It should clearly explain why the existing specification is inadequate to address the problem that the STP solves. STP submissions without sufficient motivation may be rejected outright.
- Specification - The tokens, amounts, and destinations, and schedule of funds to be moved.
- Rationale - The rationale fleshes out the specification by describing what motivated the process. It should describe alternate processes that were considered. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.
- Copyright Waiver - All STPs must be in the public domain. See the bottom of this STP for an example copyright waiver.

## STP Formats and Templates

STPs should be written in [markdown] format. Image files should be included in a subdirectory of the assets folder for that STP as follows: assets/stp-X (for stp X). When linking to an image in the STP, use relative links such as ../assets/stp-X/image.png.

## STP Header Preamble

Each STP must begin with an [RFC 822](https://www.ietf.org/rfc/rfc822.txt) style header preamble, preceded and followed by three hyphens (`---`). This header is also termed ["front matter" by Jekyll](https://jekyllrb.com/docs/front-matter/). The headers must appear in the following order. Headers marked with "\*" are optional and are described below. All other headers are required.

` stp:` <STP number> (this is determined by the STP editor)

` title:` <STP title>

` author:` <a list of the author's or authors' name(s) and/or username(s), or name(s) and email(s). Details are below.>

` * discussions-to:` \<a url pointing to the official discussion thread in the Synthetix discord\>

` status:` < Draft \| Feasibility \| SC Review Pending \| Vote Pending \| Approved \| Rejected \| Implemented >

` created:` <date created on>

` * updated:` <comma separated list of dates>

` * requires:` <STP number(s)>

` * resolution:` \<a url pointing to the resolution of this STP\>

Headers that permit lists must separate elements with commas.

Headers requiring dates will always do so in the format of ISO 8601 (yyyy-mm-dd).

#### `author` header

The `author` header optionally lists the names, email addresses or usernames of the authors/owners of the STP. Those who prefer anonymity may use a username only, or a first name and a username. The format of the author header value must be:

> Random J. User &lt;address@dom.ain&gt;

or

> Random J. User (@username)

if the email address or GitHub username is included, and

> Random J. User

if the email address is not given.

#### `discussions-to` header

While an STP is in **Draft** or **Feasibility** status, a `discussions-to` header will indicate the URL in the discord where the STP is being discussed.

#### `created` header

The `created` header records the date that the STP was assigned a number. Both headers should be in yyyy-mm-dd format, e.g. 2001-08-14.

#### `updated` header

The `updated` header records the date(s) when the STP was updated with "substantial" changes. This header is only valid for STPs of Draft and Active status.

#### `requires` header

STPs may have a `requires` header, indicating the STP numbers that this STP depends on.

## Auxiliary Files

STPs may include auxiliary files such as diagrams. Such files must be named STP-XXXX-Y.ext, where “XXXX” is the STP number, “Y” is a serial number (starting at 1), and “ext” is replaced by the actual file extension (e.g. “png”).

## STP Editors

The current STP editors are

` * Kain (@kaiynne)`

` * Carrot Anderson (@carrot.anderson)`

` * Elliptic Crv (@elliptic-crv)`

` * Spartan Glory (@SpartanGlory)`

## STP Editor Responsibilities

For each new STP that comes in, an editor does the following:

- Read the STP to check if it is ready: sound and complete. The ideas must make financial sense, even if they don't seem likely to get to final status.
- The title should accurately describe the content.
- Check the STP for language (spelling, grammar, sentence structure, etc.), markup (Github flavoured Markdown), code style

If the STP isn't ready, the editor will send it back to the author for revision, with specific instructions.

Once the STP is ready for the repository, the STP editor will:

- Assign an STP number (generally the PR number or, if preferred by the author, the Issue # if there was discussion in the Issues section of this repository about this STP)

- Merge the corresponding pull request

- Send a message back to the STP author with the next step.

The STP editors monitor STP changes, and correct any structure, grammar, spelling, or markup mistakes we see.

The editors don't pass judgement on STPs. We merely do the administrative & editorial part.

## History

The STP document was derived heavily from the SIP Synthetix Improvement Proposal document and in many places text was simply copied and modified. Any comments about the STP document should be directed to the STP editors. The history of the STP is quoted below from the STP document for context:

- _“The SIP document was derived heavily from the EIP Ethereum Improvement Proposal document. In many places text was simply copied and modified. Any comments about the SIP document should be directed to the SIP editors. The history of the EIP is quoted below from the EIP document for context:”_
  - _"This document (EIP) was derived heavily from [Bitcoin's BIP-0001] written by Amir Taaki which in turn was derived from [Python's PEP-0001]. In many places text was simply copied and modified. Although the PEP-0001 text was written by Barry Warsaw, Jeremy Hylton, and David Goodger, they are not responsible for its use..."_ \*

June 6, 2023: STP 1 has been drafted and submitted as a PR.

See [the revision history for further details](https://github.com/Synthetixio/), which is also available by clicking on the History button in the top right of the STP.

### Bibliography

[the synthetix discord]: https://discord.gg/a2E6uxk
[pull request]: https://github.com/Synthetixio/STPs/pulls
[markdown]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
[bitcoin's bip-0001]: https://github.com/bitcoin/bips
[python's pep-0001]: https://www.python.org/dev/peps/
[synthetix engineering team]: https://github.com/orgs/Synthetixio/people

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
