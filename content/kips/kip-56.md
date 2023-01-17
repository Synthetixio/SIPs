---
kip: 56
title: Web Analytics
status: Draft
author: Burt Rock (@BurtRock)
created: 2023-01-13
---

## Summary

This proposal outlines the benefits and implementation of adding web analytics to Kwenta, which allows for anonymized tracking of traffic sources and website usage.

## Abstract

Limited use of web analytics tools will help Kwenta remain competitive by understanding how users interact with the website, identifying areas of improvement, optimizing marketing campaigns, gaining insights into user behavior, and opens up the possibility of effective A/B tests for UI elements. The proposal suggests installing a self-hosted web analytics tool, such as Matomo, to measure on-site behavior and gain insights into where users come from and how they interact with the dapp.

## Motivation

On-chain metrics and social media presence can provide some insight into marketing and promotion efforts, but web analytics tools can offer more detailed information about user behavior and the user experience. Without Analytics, Kwenta has been limited in evaluating the effectiveness of marketing campaigns, communication channels, UX decisions and bug fixes. Web analytics will allow us to bring together the incomplete picture of proactive user feedback, on chain data, and social media analytics to Kwenta better understand the full user experience.

## Additional Context

Matomo, a Google Analytics alternative, allows organizations to gain user insights without recording PII and is used by other decentralized organizations and crypto communities. Synthetix has successfully implemented Matomo in August 2021 and can assist with the installation process.

## Specification

The proposal suggests installing Matomo or a similar self-hosted analytics solution that anonymizes data for user privacy and respects user DoNotTrack settings. The platform suggested is Matomo.org, version On-Premise with installation guide available on the Matomo website, though other analytics tools may be used provided they meet the same guidelines for user privacy.

## Copyright

Copyright and related rights waived via CC0.
