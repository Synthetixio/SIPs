---
xip: 1
title: XIP Purpose and Guidelines
author: ' Bilby (@bilb-y), kmao (@kmaox), Spinxho (@spinxho)'
network: Optimism
status: Approved
created: 2023-11-02
updated: 2023-11-02
type: meta-governance
---

## What are XIPs?

Infinex Improvement Proposals (XIPs) are a fundamental component of the Infinex ecosystem, serving as a framework for suggesting and discussing changes, improvements, and updates to the Infinex system in a decentralized fashion. These proposals are an adaption from Ethereum Improvement Proposals (EIPs) and provide a structured way for the Infinex community to collaborate and contribute to the development and evolution of Infinex.

## XIP Rationale

Once the first Infinex Council is established, XIPs are proposed as the primary mechanism for suggesting new features, collecting community input on an issue, documenting design decisions for changes to Infinex, and making adjustments to system parameters. By encompassing these aspects, XIPs help maintain clarity in Infinex's development roadmap, enabling stakeholders to collectively steer the course of the platform's growth.

## XIP Work Flow

Parties involved in the process include the _author_, the [_XIP editors_](#xip-editors), the Infinex Core Contributors (CCs), the Infinex Council, and the Infinex Community.

Given the decentralized nature of the Infinex development process, anyone within the Infinex community is welcome to submit an XIP. However, to foster a collaborative environment, it is strongly encouraged that proposers engage in discussions within the Infinex Discord community before formally submitting their proposals. This preliminary discourse allows for the exchange of ideas, feedback, and refinement of concepts, ultimately leading to more robust and well-considered XIPs.

Progression through the XIP workflow is requested by the XIP author through a pull request, and reviewed by the XIP editors. 

 The XIP workflow comprises three main stages:

1. Creation

Once submitted, every XIP will begin as a `Draft`. It must then meet specific formatting criteria (largely, correct metadata in the header which will be discussed later), and be manually approved by an editor for further community discussion and consideration.

The author of the XIP proposal is responsible for building consensus within the community and documenting dissenting opinions. Authors must include a link to where people should continue discussing your XIP. 

2. Voting

Once a `Draft` is believed to be mature enough and ready to progress, it must be `Approved` to be executed. Approval of an XIP will be granted through:

- Consultation with at least one member of the Infinex council, found through the Infinex Discord. They will assess whether the proposal needs a ‘Feasibility study’.
- If it does need a ‘Feasibility Study’, the XIP will progress to the `Feasibility` stage. It will then be assigned a CC who will work with the author to conduct a ‘Feasibility study’. Once all parties are satisfied, the XIP is moved to `IC Review Pending` where it will be discussed.
- If it does not need a ‘Feasibility Study’, the XIP will progress straight to `IC Review Pending` where it will be discussed. 
- The Infinex council can send it back to the `Draft` or `Feasibility` stage if they believe more edits are required, if not, it will enter the next stage

3. Approval

XIPs will be voted on by the Infinex Council (`IC Vote Pending`) for five days, and proposals will be passed only under a majority decision. Approved XIPs are moved to `Approved`, and then `Implemented` once executed by the Infinex Council, protocol CCs, or community members. Otherwise, it is `Rejected`.


## XIP status terms

- **Draft** – The initial state of a new XIP before the Infinex Council and core contributors have assessed it.
- **Feasibility** – a XIP that is being assessed for feasibility with an assigned Core Contributor.
- **IC Review Pending** – a XIP that is awaiting a Infinex Council Review after the Author and Core Contributor are satisfied with feasibility.
- **Vote Pending** – a XIP that is awaiting a vote.
- **Approved** – a XIP that has successfully reached a majority Infinex Council vote in favour.
- **Rejected** – a XIP that has failed to reach a majority Infinex Council vote in favour.
- **Implemented** – a XIP that has been released and implemented.

## What belongs in a successful XIP?

Each XIP should have the following parts:
- Preamble – RFC 822 style headers containing metadata about the XIP, including the XIP number, a short descriptive title (limited to a maximum of 44 characters), and the author details.
- Simple Summary – “If you can’t explain it simply, you don’t understand it well enough.” Provide a simplified and layman-accessible explanation of the XIP.
- Abstract – a short description (~200 words) of the technical issue being addressed.
- Motivation (*optional) – The ‘motivation’ is critical for XIPs that want to change any aspect of Infinex. It should clearly explain why the existing specification is inadequate to address the problem that the XIP solves. XIP submissions without sufficient motivation may be rejected outright.
- Specification – The technical specification should describe the syntax and semantics of any new feature.
- Parameters – The configurable parameters set in this section can be updated by a proposal with `type` header set to `parameter-change` to simplify the specification. New parameters should have initialised values under this heading.
- Rationale – The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work, e.g. how the feature is supported in other languages. The rationale may also provide evidence of consensus within the community and should discuss important objections or concerns raised during discussion.
- Test Cases – Test cases may be added during the implementation phase but are required before implementation.
- Copyright Waiver – All XIPs must be in the public domain. See the bottom of this XIP for an example copyright waiver.

## XIP Formats and Templates

XIPs should be written in [markdown] format.
Image files should be included in a subdirectory of the `assets` folder for that XIP as follows: `assets/xip-X` (for xip **X**). When linking to an image in the XIP, use relative links such as `../assets/xip-X/image.png.`

## XIP Header Preamble

Each XIP must begin with an [RFC 822](https://www.ietf.org/rfc/rfc822.txt) style header preamble, preceded and followed by three hyphens (`---`). This header is also termed ["front matter" by Jekyll](https://jekyllrb.com/docs/front-matter/). The headers must appear in the following order. Headers marked with "\*" are optional and are described below. All other headers are required.

` xip:` <XIP number> (this is determined by the XIP editor)

` title:` <XIP title>

` author:` <a list of the author's or authors' name(s) and/or username(s), or name(s) and email(s). Details are below.>

` * discussions-to:` \<a url pointing to the official discussion thread within the Infinex discord> 

` status:` < Draft \| Feasibility \| SC Review Pending \| Vote Pending \| Approved \| Rejected \| Implemented >

` created:` <date created on>

` updated:` <comma separated list of dates>

` * requires:` <XIP number(s)>

` * resolution:` \<a url pointing to the resolution of this XIP\>

` type: ` \<Label as “parameter-change” if solely altering protocol parameters or “protocol-upgrade” if changing the protocol itself>

`parameter-changes: ` \<a list of the parameter changes that are being proposed, or “None” if no protocol parameters are being changed in the specification>

`network: ` \<Ethereum | Optimism | Base | Ethereum & Optimism | Ethereum, Optimism & Base> 

`implementor:  ` \ <a list of the author's or authors' name(s) and/or username(s), or name(s) and email(s), e.g. (use with the parentheses or triangular brackets): FirstName LastName (@GitHubUsername), FirstName LastName foo@bar.com, FirstName (@GitHubUsername) and GitHubUsername (@GitHubUsername)>

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

While an XIP is in **Draft** or **Feasibility** status, a `discussions-to` header will indicate the URL for [Discord](https://discord.gg/infinex) where the XIP is being discussed.

#### `created` header

The `created` header records the date that the XIP was assigned a number. Both headers should be in yyyy-mm-dd format, e.g. 2001-08-14.

#### `updated` header

The `updated` header records the date(s) when the XIP was updated with "substantial" changes. This header is only valid for XIPs of Draft and Active status.

### `type` header

The `type` header specifies the category of the XIP to which it belongs. The categories are as follows: 

- `parameter-change` (used for XIPs proposing modifications to existing parameters)
- `meta-governance` (for XIPs concerning governance matters)
- `core-upgrade` (pertaining to proposed protocol upgrades)
- `integration-upgrade` (for introducing new features to the protocol).

#### `requires` header

XIPs may have a `requires` header, indicating the XIP numbers that this XIP depends on.

## Auxiliary Files

XIPs may include auxiliary files such as diagrams. Such files must be named XIP-XXXX-Y.ext, where “XXXX” is the XIP number, “Y” is a serial number (starting at 1), and “ext” is replaced by the actual file extension (e.g. “png”).

## XIP Editor Responsibilities

For every new XIP submitted, the Core Contributor Councillor (CCC) will operate as an editor. During the drafting stage of the process, the CCC will work closely with the Author to: 

- Ensure the title accurately describes the content.
- Read the XIP to check if it is ready: sound and complete. The ideas must make technical sense, even if they don't seem likely to get to final status.
- Check the XIP for language (spelling, grammar, sentence structure, etc.), markup (Github flavored Markdown), and code style

If the XIP isn't ready, the editor will send it back to the author for revision, with specific instructions.

Once the XIP is ready for the repository, the XIP editor will:

- Assign an XIP number (generally the PR number or, if preferred by the author, the Issue # if there was discussion in the Issues section of this repository about this XIP)
- Merge the corresponding pull request
- Assign a Core Contributor to conduct a feasibility study on the XIP.
- Send a message back to the XIP author with the next step.

Many XIPs are written and maintained by developers with write access to the Ethereum codebase. The XIP editors monitor XIP changes and correct any structure, grammar, spelling, or markup mistakes we see.

The editors do not pass judgment on XIPs. They merely hold an administrative and editorial role.

## History

This XIP document was derived heavily from the SIP Synthetix Improvement Proposal document and in many places, text was simply copied and modified. Any comments about the XIP document should be directed to the XIP editors. The history of the SIP is quoted below from the SIP document for context:

- *“The SIP document was derived heavily from the EIP Ethereum Improvement Proposal document. In many places text was simply copied and modified. Any comments about the SIP document should be directed to the SIP editors. The history of the EIP is quoted below from the EIP document for context:”*
    - *"This document (EIP) was derived heavily from [Bitcoin's BIP-0001](https://github.com/bitcoin/bips) written by Amir Taaki which in turn was derived from [Python's PEP-0001](https://www.python.org/dev/peps/). In many places text was simply copied and modified. Although the PEP-0001 text was written by Barry Warsaw, Jeremy Hylton, and David Goodger, they are not responsible for its use..."* *


## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
