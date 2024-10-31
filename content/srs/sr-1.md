---
sr: 1
title: SR Purpose and Guidelines
status: Implemented
author: Fenway
created: 2024-09-24T00:00:00.000Z
type: Governance
network: Ethereum & Optimism
---

## What is an SR?

SR stands for Synthetix Referendum. SR's are artifacts that describe proposed changes to Synthetix that are to be voted on by SNX token holders, not representative Council members.

## SR Rationale

We intend SRs to be the primary mechanisms for proposing significant changes to the protocol to be voted on directly by SNX token holders. These can include but are not limited to; structural changes to Synthetix operations, governance model adjustments, and token design changes. Because they are maintained as text files in a versioned repository, their revision history is the historical record of the proposal.

It is highly recommended that the SR be socialised with tokenholders prior to posting to get a community temperature check and/or to gather the required support to meet the quorum required.

A SR must meet certain minimum criteria, as outlined in SIP-408. It must be a clear and complete description of the proposed changes.

## SR Work Flow

Parties involved in the process are the _author_, the [_SIP editors_](#sip-editors), and the [Spartan Council](https://governance.synthetix.io/#/councils/spartan).

:warning: Before you begin, vet your idea, this will save you time. Ask the Synthetix community first if the proposed change is original to avoid wasting time on something that will be rejected based on prior research (searching the Internet does not always do the trick). It also helps to make sure the idea is applicable to the entire community and not just the author. Just because an idea sounds good to the author does not mean it will have the intend effect. The appropriate public forum to gauge interest around your SR is [the Synthetix Discord].

Your role as the champion is to write the SR using the style and format described below, shepherd the discussions in the appropriate forums, and build community consensus around the idea. Following is the process that a successful SR will move along:

```
[ DRAFT ] -> [ PROPOSED ] -> [ VOTINH ] -> [ APPROVED ] 
```

Each status change is requested by the SR author and reviewed by the SIP editors. Use a pull request to update the status. Please include a link to where people should continue discussing your SR. The SIP editors will process these requests as per the conditions below.

- **Draft** -- This SR is work-in-progress.

- **Proposed** -- If agreeable and the relevant criteria are met, SIP editor will assign the SR a number (generally the issue or PR number related to the SR) and merge your pull request. The SIP editor may request more information before merging an SR. Proposed SRs will be discussed during governance calls (either weekly scheduled ones or one-off governance calls) and in Discord.

- **Voting** -- A snapshot vote will be held for SNX token holders. If the quorum and approval percentage meet the required criteria, the change will be moved to approved.

- **Approved** -- This SR has passed community governance and is now being prioritised.

## What belongs in a successful SR?

Each SR should have the following parts:

- Preamble - RFC 822 style headers containing metadata about the SR, including the SR number, a short descriptive title (limited to a maximum of 44 characters), and the author details.
- Simple Summary - “If you can’t explain it simply, you don’t understand it well enough.” Provide a simplified and layman-accessible explanation of the SR.
- Abstract - a short (~200 word) description of the variable change proposed.
- Motivation (\*optional) - The motivation is critical for SRs that want to update significant components of the Synthetix project. It should clearly explain why the existing methods of operation are not adequate. SR submissions without sufficient motivation may be rejected outright.

## SR Formats and Templates

SRs should be written in [markdown] format.
Image files should be included in a subdirectory of the `assets` folder for that SR as follows: `assets/sr-X` (for sr **X**). When linking to an image in the SR, use relative links such as `../assets/sr-X/image.png`.

## SR Header Preamble

Each SR must begin with an [RFC 822](https://www.ietf.org/rfc/rfc822.txt) style header preamble, preceded and followed by three hyphens (`---`). This header is also termed ["front matter" by Jekyll](https://jekyllrb.com/docs/front-matter/). The headers must appear in the following order. Headers marked with "\*" are optional and are described below. All other headers are required.

` sip:` <SR number> (this is determined by the SIP editor)

` title:` <SR title>

` author:` <a list of the author's or authors' name(s) and/or username(s), or name(s) and email(s). Details are below.>

` * discussions-to:` \<a url pointing to the official discussion thread\>

` status:` < DRAFT | PROPOSED | VOTING | APPROVED >

` created:` <date created on>

` * updated:` <comma separated list of dates>

` * requires:` <SR number(s)>

Headers that permit lists must separate elements with commas.

Headers requiring dates will always do so in the format of ISO 8601 (yyyy-mm-dd).

#### `author` header

The `author` header optionally lists the names, email addresses or usernames of the authors/owners of the SR. Those who prefer anonymity may use a username only, or a first name and a username. The format of the author header value must be:

> Random J. User &lt;address@dom.ain&gt;

or

> Random J. User (@username)

if the email address or GitHub username is included, and

> Random J. User

if the email address is not given.

#### `discussions-to` header

While an SR is in DRAFT or PROPOSED status, a `discussions-to` header will indicate the mailing list or URL where the SR is being discussed.

#### `created` header

The `created` header records the date that the SR was assigned a number. Both headers should be in yyyy-mm-dd format, e.g. 2001-08-14.

#### `updated` header

The `updated` header records the date(s) when the SR was updated with "substantial" changes. This header is only valid for SRs of Draft and Active status.

#### `requires` header

SRs may have a `requires` header, indicating the SR numbers that this SR depends on.

## Auxiliary Files

SRs may include auxiliary files such as diagrams. Such files must be named SR-XXXX-Y.ext, where “XXXX” is the SR number, “Y” is a serial number (starting at 1), and “ext” is replaced by the actual file extension (e.g. “png”).

## SIP Editors

The current SIP editors can be found listed in [SIP-1](https://github.com/Synthetixio/SIPs/blob/master/sips/sip-1.md)

## SIP Editor Responsibilities

For each new SR that comes in, an editor does the following:

- Read the SR to check if it is ready: sound and complete. The ideas must make technical sense, even if they don't seem likely to get to final status.
- Ensure the SR meets the required criteria (e.g. soft quorum)
- The title should accurately describe the content.
- Check the SR for language (spelling, grammar, sentence structure, etc.), markup (Github flavored Markdown), code style

If the SR isn't ready, the editor will send it back to the author for revision, with specific instructions.

Once the SR is ready for the repository, the SIP editor will:

- Assign an SR number (generally the PR number or, if preferred by the author, the Issue # if there was discussion in the Issues section of this repository about this SR)

- Merge the corresponding pull request

- Send a message back to the SR author with the next step.

Many SRs are written and maintained by developers with write access to the Ethereum codebase. The SIP editors monitor SR changes, and correct any structure, grammar, spelling, or markup mistakes we see.

The editors don't pass judgment on SRs. We merely do the administrative & editorial part.

## History

The SR document was derived heavily from the EIP Ethereum Improvement Proposal document in many places text was simply copied and modified. Any comments about the SR document should be directed to the SIP editors. The history of the EIP is quoted below from the EIP document for context:

- _"This document (EIP) was derived heavily from [Bitcoin's BIP-0001] written by Amir Taaki which in turn was derived from [Python's PEP-0001]. In many places text was simply copied and modified. Although the PEP-0001 text was written by Barry Warsaw, Jeremy Hylton, and David Goodger, they are not responsible for its use..."_ \*

June 10, 2019: SR-1 has been drafted and submitted as a PR.

See [the revision history for further details](https://github.com/synthetixio/**), which is also available by clicking on the History button in the top right of the SR.

### Bibliography

[the synthetix discord]: https://discord.gg/a2E6uxk
[pull request]: https://github.com/Synthetixio/SIPs/pulls
[markdown]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
[bitcoin's bip-0001]: https://github.com/bitcoin/bips
[python's pep-0001]: https://www.python.org/dev/peps/
[synthetix engineering team]: https://github.com/orgs/Synthetixio/people

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
