---
sip: 0
title: Fix the Synthetix Staking L2 UI to prevent liquidations due to misreading
network: Optimism
status: Draft
type: Governance
author: utilmind
implementor: utilmind
created: 2024-08-05
requires: 
---

# Simple Summary

<ol><li>Fix 2 identified issues in Synthetix Staking UI.</li><li>Fix the notification message in the Telegram bot.</li><li>Reward the author of this SIP in SNX amount sufficient to restore the funds liquidated on 2024-08-05.</li></ol>

# Abstract

<p>The following measures will help avoid confusions and mass liquidations by properly warning the Synthetic stackers.</p>

# Specification


### Overview

<p>Synthetix Staking UI have the following issues:</p><ol><li>Red banner (which warns about dip below the liquidation line) shows the 72 hours countdown (instead of actual timing).</li><li>Orange banner have broken timer, which for some reason visually increasing (+ should contain description why it's important to fix the c-ratio to 500% before the time is out).</li><li>Current Telegram notification about the flagged position doesn't reflects time before liquidation and target c-ratio. (The current message is following: “Your position has ben flagged for liquidation. You have 0 hours to raise your c-ratio above the target.”. = 0 hours (that can be misinterpreted as unlimited) and no c-ratio target (that can be misinterpreted that funds are safe while they are above liquidation line).</li></ol><p><br></p><p>The author of this SIP believes that his position was liquidated unfairly, due to misleading information displayed in UI. (Author was sure that he have 3 days before liquidation and there is plenty time to fix the c-ratio to target, plus previously author wanted to ask the community in Synthetix Discord whether fixing the c-ratio completely to 500% is really required, because there was impression that it's enough to just continue keeping it above the liquidation line.)</p><p><br></p><p>Thus author wants either: compensation of lost SNX in liquidated position (it can be fair according to misleading information displayed in UI and notification) OR reward for assistance in improving the Synthetix UI, in any form (as user, as tester, maybe even as JavaScript front-end developer with 20+ years experience).</p>

### Rationale

<ol><li>The messages in UI are misleading. The message in "red" banner giving impression that staker have 3 days before liquidation.</li><li>The message in "orange" banner (which informing about flagged account) should contain correct countdown (ideally, for better visualization, with a progress bar that changes color from orange to red over time during the flagged period, besides of numbers). Additionally this banner should contain brief explanation why it's important to fix c-ratio to the target (with target value) and why it's already not enough to keep the c-ratio above the liquidation line when it once dipped. If there is no space for this brief message, then "orange" banner should contain a link to documentation for full and clear explanation.</li><li>The message in Telegram notification currently does not says anything about timing required to fix the c-ratio (it says 0 hours, that can be misinterpreted as "unlimited time"), plus doesn't have a c-target value that can be misinterpreted that funds are safe while they are above the liquidation line.</li></ol><p><br></p><p>As the reward, author will be rewarded in SNX equal to the amount that was liquidated.</p><p>Amount of SNX on author's wallet before liquidation: 14372.21</p><p>Amount after liquidation: 3766.74</p>

### Test Cases

<ol><li>On L2 OP, remove funds from the wallet, to simulate dipping below the liquidation line (160% at this moment). You will see a 72 countdown.</li><li>After restoring the funds above the liquidation line observe the behavior of countdown timer in the "orange" banner. It's obviously increasing. It is possible under some special conditions, for example, in the case of partial increase of holding SNX about. Author of this SIP purchased some SNX and saw that the time until liquidation increased. (The countdown value should not depend on anything besides of the original timestamp when the account was dipped below the liquidation line.)</li></ol>


### Configurable Values (Via SCCP)

<ul><li>Liquidation line</li><li>C-ratio target</li><li>The timing required to restore c-ratio to target</li></ul><p><br></p><p>(* Keep these values as is, but properly display these values in UI and telegram message.)</p><p><br></p>
