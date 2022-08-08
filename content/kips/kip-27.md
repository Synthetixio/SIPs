---
kip: 27
title: Add Web Analytics
status: Draft
author: Burt Rock (@BurtRock)
created: 2022-07-25
---

## Summary

Add Web Analytics to Kwenta which allow anonymized tracking of traffic sources and dapp usage. 

## Abstract

Web analytics provide important information that can inform both UI updates, and marketing initiatives. Although Kwenta values the privacy of its users and should not be collecting personally identifying information or attempting to do extensive tracking of users across the web, limited use of web analytics tools will allow Kwenta to remain competitive. Kwenta should install a self-hosted web analytics tool to measure on-site behavior and learn about where users come from, and how users spend time in the dapp.

## Motivation

Although there are on chain metrics which give some insight to the success of marketing and promotion efforts, and an active social media presence to monitor and respond to direct user feedback, there is a lack of quantitative data which provides detailed information about users stories and the user experience. Marketing initiatives should be partially evaluated based on the information made available form these tools, including the source of traffic to Kwenta, and country of origin. This information will become particularly important in evaluating the effectiveness of outreach to international communities and marketing efforts focused on multilingual content, attempts to drive traffic to Kwenta from social media, and traffic generated from strategic partners and affiliates. Additionally, analytics showing user behavior within the dapp can provide insight in to the effectiveness and importance of new dapp features such as the leaderboard or stats page, and the impact of desight changes on user behavior.

## Additional Context

Matomo is a Google Analytics alternative that allows organizations to gain user insights without recording PII (personally identifying information) and is used by other decentralized organizations and crypto communities. 

Synthetix installed Matomo in August 2021 and it has provided important insights into sources of traffic, user flow between pages on-site, and countries of origin for many users. We can likely loop in the core contributors that installed Matomo to help streamline the process of getting this up and running. 

## Specification

Install Matomo or a similar self hosted analytics solution which anonymizes data for user privacy, and respects user DoNotTrack settings.

Platform: Matomo.org
Version: On-Premise - https://matomo.org/matomo-on-premise/
Installation Guide - https://matomo.org/docs/installation/

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
