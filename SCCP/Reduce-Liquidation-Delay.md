
---
sccp: TBD
title: Reduce Liquidation Delay
status: Proposed
author: Kaleb Keny (@kaleb-keny)
discussions-to: <https://discord.gg/mXNj2x?
created: 2020-06-06
---

## Simple Summary
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->
Proposing to lower the liquidation delay `liquidationDelay` variable from 2 weeks to 3 days.

## Abstract
<!--A short (~200 word) description of the variable change proposed.-->
The initial parameters set at implementation of [SIP-15](https://sips.synthetix.io/sips/sip-15) gave users a 2 week grace period to raise their c-ratio, before bots and other users are able to liquidate them. The reason behind the grace period is to provide users with an opportunity to fix their c-ratio and avoid the scenario of bad actors manipulating SNX prices in order to liquidate wallets. However, this exposes the system to the risk of having to fund an uncollateralized wallet due to sharp decrease of SNX prices.

This SCCP proposes to lower the grace period (`liquidationDelay`)  to 3 days, in order to bolster the protection of the system from the threat of undercollateralized wallets.

## Motivation
<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->
#### SNX-Debt Pool Correlation:
The c-ratio being is impacted by 2 components, the debt pool and the price of SNX. We used the price of ETH as a proxy for the value of the debt pool, given that historically sETH makes up around half of the debt pool. The correlation coefficient between the price of SNX and the sETH is has been around 0.60.

![SNX-ETH Correlation](https://drive.google.com/file/d/1Geap-2cdhht9WpdgtQb91hMAUZXRmh95/view?usp=sharing)

Since the liquidation grace period begins when the c-ratio reaches `Liquidation-Collateral-Ratio` of  200%, we are able to simulate the shocks that would result in a c-ratio of 100% as follows:

| Component | Pre Shock | Price Shock | Post Shock|
| :-------------: | :-------------: | :-------------: |  :-------------: | 
| SNX Collateral | 1,000 | -60%| 400
| Debt | 500 | -20%| 400
| **C-Ratio** | **200%** || **100%**

Due  other idiosyncratic events on the price of SNX (due to its low liquidity relative to ETH) and an adding a buffer on top of the 100% minimum collateralization ratio, we can infer that a  price-shock of 30% to 50% could notably impact a wallet that is at the borderline of the minumum collateral liquidation ratio and could increase the risk on the system. 

#### Probability Distribution:
Having a target SNX price shock of 30% to 50%, we can infer the probabilities of such events, given the probability  distribution of  returns of SNX. As can be seen in the figure below, we can clearly see that the longer the horizon the more volatility in returns can be expected (and the greater the risk that a wallet becomes under uncollateralized).

#### Probability Inference:
Modeling the probability distribution we can infer the respective probabilities for different prices shocks across different time horizons. The table confirms that it is 7 times more likely that SNX prices will fall by 50% during  2-weeks (probability of 40%), versus 3 day (probability of around 6%).

| Time\Shock | -30% | -40% | -50% |
|:----:|:----:|:----:|:----:|
|  **1D**  |  10% |  5%  |  2%  |
|  **3D**  |  6%  |  4%  |  6%  |
|  **1W**  |  38% |  24% |  14% |
|  **2W**  |  42% |  41% |  40% |

Therfore lowering the grace period to 3 days will significantly bolster the protection of the system against the threat of having an under-collateralized wallet.

#### Disclaimer:
**justwanttoknowathing - SNX phD**
Past performance doesn't guarantee future results. In other words, this parameter might need to be revisited (relaxed or maybe tightened) if the distribution of returns of SNX vary across time.


#### Sources:
[Jupyter Notebook](https://dashboard.synthetix.io/)
[Data.csv](https://dashboard.synthetix.io/)

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).