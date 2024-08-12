---
sccp: 348
title: Update RNDR Feed
network: Arbitrum
status: Draft
type: Governance
created: 2024-08-12
author: Kaleb
---

# Simple Summary

This SCCP proposes to update the RNDR feed with the latest feedId `0x3d4a2bd9535be6ce8059d75eadeba507b043257321aa544717c56fa19b49e35d` 

# Abstract

The previously configured feedId had been deprecated following the RNDR token migration. This resulted in issues with the Perps V3 System given the abscence of a price update at the system level. The short-term solution was to replace the feed with the new feedId available from pyth which points to the new RENDER token.


# Motivation

The emegency action was executed last week and this sccp ratifies that action. Future iterations of Peprs V3 aims at tackling that risk by updating the feed to constant price feed that resolves the last available price.


# Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
