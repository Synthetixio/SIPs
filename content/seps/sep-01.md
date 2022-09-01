---
sep: 0001
title SEP Purpose and Guidelines
autor:  けつばん
network: Unknown
comments-uri: https://forum.softdao.ch/t/softprovement-proposal-ideas
type: Process
status: Proposed
created: 2016-10-06T00:00:00.000Z
proposal: 
type: Governance
---

## Who:

The Soft Enhancement Process (SEP) is designed to help developers in the SOFT ecosystem coordinate around a shared value system.

## What:

The SEP process has dual tracks to address both economic parameters as well as technical specifications. These two should be treated distinctly in order to prevent adverse economic effects as a result of technical changes.

## ELI5 SEP:

SEP stands for Soft Improvement Proposal, it was been adapted from the SIP (Synthetix Improvement Proposal) which has been adapted from the EIP (Ethereum Improvement Proposal). The purpose of this process is to ensure changes to Soft are transparent and well governed. An SEP is a design document providing information to the Soft community about a proposed change to the system. The author is responsible for building consensus within the community and documenting dissenting opinions.

## ELI5 SCCP:

SCCP stands for Soft Configuration Change Proposal, it has been adapted from the SCCP (Synthetix Configuration Change Proposal). SCCP's are documents for making a case for modifying one of the system configuration variables. The intent is to provide a clear and detailed history behind each configuration change and the rationale behind it at the time it was implemented. The author of the document is responsible for building consensus within the community and documenting dissenting opinions.

## How to Contribute:

1. Review SEP-001 [ADD LINK] and comment with your favorite sentence and why.
2. Log into your Github account.
3. Go the the SEPs repo [ADD LINK] and click "Fork" on the top right of the screen.
4. First, take a look at the [template SEP](INSERT LINK). 
5. Create a folder for the next sequential SEP.
6. Copy this template into this folder and name the file accordingly.
7. Finalize your SEP and have it peer-reviewed by a few industry colleagues.
8. Submit a [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) to the host SEP repository.

*Before submitting your pull request, please ensure*:
* It meets the formatting criteria enforced by the build manager. [ADD LINK]
* Ensure the preamble [INSERT LINK] is fully and properly formatted.
* Your ```discussions-to``` header points to a forum post on the [Soft Forums](https://forum.softdao.ch/).

## What Belongs in a SEP:

Each proposed SEP should contain:

* **Preamble**: RFC 822 style headers containing metadata about the SEP, including: 
   * *As a header*:  
     * The SEP number
     * A descriptive title (less than 42.0 characters).
  * *As a two-column table*:
    *  SEP Number
    * Author: <INSERT NAME, USERNAME, PSEUDONYM>
    * Status: 
      * Draft
      * Technical Review
      * Economic Analysis
      * Review Pending
      * Vote Pending
      * Approved
      * Rejected
      * Implemented
* **Simple Summary**: Provide a simplified explanation of the SEP.
* **Abstract**: A short (~200 word) description of the technical issue being addressed.
* **Specification**: The technical specification should describe the syntax and semantics of any new feature.
* **Motivation**: The motivation fleshes out the specification by describing what motivated the design and why particular design decisions are being suggested. It should describe alternate designs that were considered. 
* **Test Cases**: Test cases may be added during the implementation phase but are required before implementation.
* **License**: <INSERT> 


## Auxiliary Files

SEPs may include auxiliary files such as diagrams. Such files must be named SEP-XXXX-Y.ext, where “XXXX” is the SEP number, “Y” is a serial number (starting at 1), and “ext” is replaced by the actual file extension (e.g. “png”).

## SEP Editors

The current SEP editors are:
* <INSERT SIGNER 1>
* <INSERT SIGNER 2>
* < ... >

## SEP Editor Responsibilities

For each new SEP that comes in, an editor does the following:

* Read the SEP to check if it is ready for review. 
  * The SEP should use complete sentences
  * The SEP should not seem rushed or short on context
  * The SEP should include technical analysis where warranted
  * The SEP should include economic analysis (spreadsheets or matlab simulations) where warranted
* If a SEP is not ready, an editor should provide ample detail with feedback on how to improve the SEP in order to respect the SEP authors time and effort

Once the SEP is ready, a SEP editor will:
* Correct or approve the SEP number provided by the author
* Merge the corresponding pull request
* Thank the author for their time, effort and contribution

All SEPs shall be treated with the same level of attentiveness and effort, as any and all contributions are welcome.

## History

This SEP process derives inspiration or is adapted from:
* [Python's PEP-0001](https://peps.python.org/pep-0001/) written by Barry Warsaw, Jeremy Hylton, David Goodger, Nick Coghlan
* [Bitcoin's BIP-0001](https://github.com/bitcoin/bips/blob/master/bip-0001.mediawiki) written by Amir Taaki.
* [Bitcoin's BIP-0002](https://github.com/bitcoin/bips/blob/master/bip-0002.mediawiki) written by Luke Dashjr.
* [Synthetix' SIP-0001](https://sips.synthetix.io/sips/sip-1/) written by Kain Warwick

## License

<INSERT>

## History

The SEP document was derived heavily from the SIP (Synthetix Improvement Proposal) which is heavily derived from the EIP (Ethereum Improvement Proposal) document in many places text was simply copied and modified. Any comments about the SEP document should be directed to the SEP editors. The history of the EIP is quoted below from the EIP document for context:

- _"This document (EIP) was derived heavily from [Bitcoin's BIP-0001] written by Amir Taaki which in turn was derived from [Python's PEP-0001]. In many places text was simply copied and modified. Although the PEP-0001 text was written by Barry Warsaw, Jeremy Hylton, and David Goodger, they are not responsible for its use..."_ \*

Sep 01, 2022: SEP 1 has been drafted and submitted as a PR.

See [the revision history for further details](https://github.com/softdao/), which is also available by clicking on the History button in the top right of the SE¯P.

### Bibliography

[pull request]: https://github.com/softdao/SEPs/pulls
[markdown]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
[bitcoin's bip-0001]: https://github.com/bitcoin/bips
[python's pep-0001]: https://www.python.org/dev/peps
[synthetix sip-0001]: https://github.com/Synthetixio/SIPs

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
