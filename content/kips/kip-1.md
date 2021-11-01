---
kip: 1
title: KIP Purpose and Guidelines
status: Implemented
author: Andrew Trudel (@Andrew-Synthetix)
created: 2021-10-27
---

## What is a KIP?

KIP stands for Kwenta Improvement Proposal, it has been adapted from the SIP (Synthetix Improvement Proposal). The purpose of this process is to ensure changes to Kwenta are transparent and well governed. A KIP is a design document providing information to the Kwenta community about a proposed change to the system. The author is responsible for building consensus within the community and documenting dissenting opinions.

## KIP Rationale

We intend KIPs to be the primary mechanism for proposing new features, collecting community input on an issue, and for documenting the design decisions for changes to Kwenta. Because they are maintained as text files in a versioned repository, their revision history is the historical record of the feature proposal.

It is highly recommended that a single KIP contain a single key proposal or new idea. The more focused the KIP, the more successful it is likely to be.

A KIP must meet certain minimum criteria. It must be a clear and complete description of the proposed enhancement. The enhancement must represent a net improvement.

## KIP Workflow

Parties involved in the process are the _author_, the [_KIP editors_](#kip-editors), the Elite Council and the Kwenta community.

:warning: Before you begin, vet your idea, this will save you time. Ask the Kwenta community first if an idea is original to avoid wasting time on something that will be rejected based on prior research (searching the Internet does not always do the trick). It also helps to make sure the idea is applicable to the entire community and not just the author. Just because an idea sounds good to the author does not mean it will have the intended effect. The appropriate public forum to gauge interest around your KIP is [the Kwenta Discord](https://discord.gg/Y32dAVMMwF).

Your role as the champion is to write the KIP using the style and format described below, shepherd the discussions in the appropriate forums, and build community consensus around the idea. Following is the process that a successful KIP will move along.

Each status change is requested by the KIP author and reviewed by the KIP editors. Use a pull request to update the status. Please include a link to where people should continue discussing your KIP. The KIP editors will process these requests as per the conditions below.

- **Draft** -- This KIP is a work-in-progress.
- **Proposed** -- This KIP is scheduled for voting by the Elite Council.
- **Approved** -- This KIP has passed community governance and is now being prioritised for development.
- **Rejected** -- This KIP has failed to reach community consensus.
- **Implemented** -- This KIP has been implemented and deployed to mainnet.

## What belongs in a successful KIP?

Each KIP should have the following parts:

- Preamble - RFC 822 style headers containing metadata about the KIP, including the KIP number, a short descriptive title (limited to a maximum of 44 characters), and the author details.
- Simple Summary - “If you can’t explain it simply, you don’t understand it well enough.” Provide a simplified and layman-accessible explanation of the KIP.
- Abstract - a short (~200 word) description of the technical issue being addressed.
- Motivation - The motivation is critical for KIPs that want to change Kwenta. It should clearly explain why the existing specification is inadequate to address the problem that the KIP solves. KIP submissions without sufficient motivation may be rejected outright.
- Specification - The technical specification should describe the syntax and semantics of any new feature.
- Rationale - The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community, and should discuss important objections or concerns raised during discussion.
- Test Cases - Test cases may be added during the implementation phase but are required before implementation.
- Copyright Waiver - All KIPs must be in the public domain. See the bottom of this KI{ for an example copyright waiver.

## KIP Formats and Templates

KIPs should be written in [markdown] format.
Image files should be included in a subdirectory of the `assets` folder for that KIP as follows: `assets/kip-X` (for kip **X**). When linking to an image in the KIP, use relative links such as `../assets/kip-X/image.png`.

## KIP Header Preamble

Each KIP must begin with an [RFC 822](https://www.ietf.org/rfc/rfc822.txt) style header preamble, preceded and followed by three hyphens (`---`). The headers must appear in the following order. Headers marked with "\*" are optional and are described below. All other headers are required.

` kip:` <KIP number> (this is determined by the KIP editor)

` title:` <KIP title>

` author:` <a list of the author's or authors' name(s) and/or username(s), or name(s) and email(s). Details are below.>

` status:` < Draft \| Proposed \| Approved \| Rejected \| Implemented >

` created:` <date created on>

` * updated:` <comma separated list of dates>

` * requires:` <KIP number(s)>

` * resolution:` \<a url pointing to the resolution of this KIP\>

Headers that permit lists must separate elements with commas.

Headers requiring dates will always do so in the format of ISO 8601 (yyyy-mm-dd).

#### `author` header

The `author` header optionally lists the names, email addresses or usernames of the authors/owners of the KIP. Those who prefer anonymity may use a username only, or a first name and a username. The format of the author header value must be:

> Random J. User &lt;address@dom.ain&gt;

or

> Random J. User (@username)

if the email address, Twitter handle, or GitHub username is included, and

> Random J. User

if the email address is not given.

#### `created` header

The `created` header records the date that the KIP was assigned a number. Both headers should be in yyyy-mm-dd format, e.g. 2001-08-14.

#### `updated` header

The `updated` header records the date(s) when the KIP was updated with "substantial" changes. This header is only valid for KIPs of Draft and Active status.

#### `requires` header

KIPs may have a `requires` header, indicating the KIP numbers that this KIP depends on.

## Auxiliary Files

KIPs may include auxiliary files such as diagrams. Such files must be named KIP-XXXX-Y.ext, where “XXXX” is the KIP number, “Y” is a serial number (starting at 1), and “ext” is replaced by the actual file extension (e.g. “png”).

## KIP Editors

The current KIP editors are

` * Andrew T (@andrew-synthetix)`

` * Jeremy C (@JChiaramonte7)`

` * Kevin C (@kmeraz)`

## KIP Editor Responsibilities

For each new KIP that comes in, an editor does the following:

- Read the KIP to check if it is ready: sound and complete. The ideas must make technical sense, even if they don't seem likely to get to final status.
- The title should accurately describe the content.
- Check the KIP for language (spelling, grammar, sentence structure, etc.), markup (Github flavored Markdown), code style

If the KIP isn't ready, the editor will send it back to the author for revision, with specific instructions.

Once the KIP is ready for the repository, the KIP editor will:

- Assign a KIP number (generally the PR number or, if preferred by the author, the Issue # if there was discussion in the Issues section of this repository about this KIP)

- Merge the corresponding pull request

- Send a message back to the KIP author with the next step.

Many KIPs are written and maintained by developers with write access to the Kwenta codebase. The KIP editors monitor KIP changes, and correct any structure, grammar, spelling, or markup mistakes we see.

The editors don't pass judgment on KIPs. We merely do the administrative & editorial part.

## CKIPs and KTRs

CKIPs (Community Kwenta Improvement Proposal) are proposals that can overrule the Elite Council and are implemented in the event that Kwenta token holders vote on a CKIP and reach quorum where over 50% of the token holders (this includes the circulating supply and therefore tokens not held by the treasury or growth fund) agree to pass the proposal. CKIPs follow an identical flow to KIPs but are labelled differently and are voted on directly by token holders. Please use the CKIP Template. When creating a pull request, be sure to use the CKIP folder.

KTRs (Kwenta Treasury Requests) are proposals directed to the treasuryCouncil which dictate how the growth fund and treasury are used. These proposals follow a similar flow to KIPs but have a different template which includes a summary statement, request outline, information about where the funds should be sent if applicable, and a rationale behind the request. Please use the KTR template. When creating a pull request, be sure to use the KTR folder.

## History

The KIP document was derived heavily from the SIP Synthetix Improvement Proposal document in many places text was simply copied and modified. Any comments about the KIP document should be directed to the KIP editors. The history of the EIP is quoted below from the EIP document for context:

- _"This document (EIP) was derived heavily from [Bitcoin's BIP-0001] written by Amir Taaki which in turn was derived from [Python's PEP-0001]. In many places text was simply copied and modified. Although the PEP-0001 text was written by Barry Warsaw, Jeremy Hylton, and David Goodger, they are not responsible for its use..."_ \*

### Bibliography

[the kwenta discord]: https://discord.gg/Y32dAVMMwF
[pull request]: https://github.com/Kwenta/KIPs/pulls
[markdown]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
[bitcoin's bip-0001]: https://github.com/bitcoin/bips
[python's pep-0001]: https://www.python.org/dev/peps/
[kwenta engineering core contributors]: https://github.com/kwenta/people

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
