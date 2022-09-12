---
kip: 31
title: Decentralized Repository for Kwenta
status: Draft
author: Platschi (@platschi)
created: 2022-09-12
---

## Summary

To strengthen the decentralization efforts of Kwenta, its source code
should be distributed through a decentralized code collaboration network.

## Abstract

Instead of being solely hosted on a centralized entity, the Kwenta source
code repositories should be distributed in a decentralized manner. Endless
copies of the Kwenta source can exist on such a decentralized code collaboration network. The elected Elite Council can vote on any repository it endorses as the official DAO reference point for source code updates to the Kwenta IPFS deployment.

## Motivation

The KwentaDAO strives to fully decentralize its protocol, from governance
to frontend deployment. One still heavily centralized key infrastructure
is GitHub, used by DAO contributors as the major collaborative software
development tool to improve the underlying protocol source code. While being well-known and convenient in its use, centralized Github repositories are a single point
of failure in the DAOs efforts to truly decentralize. While it currently might be
utopic to strive for a full abandonment of Github, this KIP suggests a path for a gradual procession towards decentralized code collaboration. This is to ensure that in case of a force majeur event, the Kwenta protocol source code would not be dependent on one centralized entitity but always globally available in an open, permissionless manner. It is therefore suggested to ensure that the DAO considers to implement the following as a first step:

* Automatization of the Kwenta frontend repository being mirrored from Github to the decentralized Radicle network
* Elite Council vote on the decentralized project id which is to be officially endorsed and determines the delegate(s) for this project id

This KIP should be seen as the first step on the path to independence from
Github. The main objective of this envisioned path should be to eventually fully
transition collaborative development on the protocol to the decentralized
Radicle network. Due to Radicles current limitations while under active development, a gradual step-by-step approach is being suggested to avoid interruptions to the protocols development while giving contributors the chance to become familiar with Radicle and iron out any hiccups along the way. Later KIPs should take care of more nuanced flows of decision making and code collaboration structures.

## Specification

In order to access the Kwenta source code, any community member can
create a project from any existing Kwenta Git repository and publish it on the Radicle network. An endless amount of individual repositories of Kwenta can thus exist in parallel on Radicle. It is therefore of importance for the Elite Council to
vote on the officially DAO endorsed repository. Repositories on Radicle are
called projects, and each has an unique project ID, e.g. in the form of:

`rad:git:hnrkjajuucc6zp5eknt3s9xykqsrus44cjimy`

Contributors can clone such a project to their local machines, write code and push
their own version of Kwenta to the network. They can then request **patches** (like
pull request on github) to any project id, in this case the DAO endorsed
project id in order to contribute to the development of Kwenta. In case of disagreements, abandonment or forks of the endorsed Kwenta source code project, community members can put forward requests to the DAO in order to vote on alternative projects beings supported and officially endorsed.

As a first step, given Github is still being used as the main code collaboration tool,
an automatization should be put in place to immediately push new commits from the Github Kwenta repository to a Radicle project, which subsequently should be voted on by the Council as officially endorsed.

Furthermore, the devDAO should be commissioned to work out and profoundly test guidelines and instructions for community contributors to familiarize themselves with Radicle. Once sufficiently tested, the DAO should evaluate its experience with Radicle and work out further steps along the path to decentralized code collaboration.

## Copyright

Copyright and related rights waived via
[CC0](https://creativecommons.org/publicdomain/zero/1.0/).