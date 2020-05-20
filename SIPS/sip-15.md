---
sip: 15
title: SNX liquidation mechanism
status: WIP
author: Jackson Chan (@jacko125), Kain Warwick (@kaiynne)
discussions-to:
created: 2019-08-20
---

## Simple Summary

This SIP proposes to introduce a direct redemption mechanism for SNX collateral. Holders of Synths would be able to redeem their Synths for staked SNX if the staker is below the liquidation ratio.

## Abstract

Create a liquidation mechanism for under collateralised SNX Collateral to be redeemable with Synths at a discounted price (liquidation penalty fee).

Instead of an instant liquidation ratio, after a delay period, it would be possible to liquidate a proportion of the snx collateral until the under collateralised staker's collateral ratio is fixed and above the liquidation ratio.

## Motivation

In a crypto-backed stablecoin system such as Synthetix, the issued stablecoin (synths) tokens should represent a claims on the underlying collateral. The current design of the Synthetix system doesn't allow holders of synths to directly redeem the underlying collateral unless they are burning and unlocking their own SNX collateral. The value of the synths issued in the synthetix system is derived from incentivising minters to be over-collateralised on the debt they have issued and other economic incentives such as exchange fees and SNX rewards.

If a minter's collateral value falls below the required collateral ratio, there is no direct penalty for being under collateralised, even in the unlikely event where the value of their locked synthetix collateral is less than the debt they owe. Stakers and synth holders should be able to liquidate undercollateralised minters at a discounted price to restore the network colateral ratio.

Liquidation would encourage minters to be above the required collateral ratio and create a strong economic incentive to burn synths to repair their collateral ratio if they are at risk of being liquidated.

Liquidation gives SNX holders and issuers of Synthetic synths these benefits:

1. Allows holders of Synths to burn synth debt on behalf of another minter and redeem the underlying collateral.
2. Provides instrinsic value to synth debt for anyone who holds synths as backing it with synthetix collateral that can be redeemed at fair value.
3. Stakers above the collateral ratio can protect their value in the system by liquidating another staker's collateral that is below the liquidation ratio, to fix network's collateralisation ratio.
4. Incentive for users to keep network collateral ratio healthy by providing a discount on the liquidated SNX collateral.

## Specification

<!--The technical specification should describe the syntax and semantics of any new feature.-->

### Liquidations Contract

Liquidations contract to mark an SNX staker for liquidation with a time delay to allow them to fix their collateral ratio.

### Parameters

Time delay for liquidation of under collateralised collateral.

3. Time delay increases the cost to a malicious actor who attempts to manipulate the SNX price to trigger liquidations.

4. Under collateralised stakers (less than the liquidation ratio) can be marked for liquidation by any address. Liquidation can be performed from any address after time delay has elapsed.

5. Liquidator can burn synths in exchange for SNX collateral at discount rate (% of the current value based on the liquidation penalty) to incentivise liquidations.

6. Partial liquidation of an under collateralised SNX can be performed until collateral ratio is at or above the liquidation ratio (300% configurable via SCCP). Multiple liquidations can be made until the collateral ratio is above the liquidation ratio - (300%).

    Once the collateral ratio is above 300% the liquidations mapping is removed.

7. Current escrowed SNX tokens in the RewardsEscrow will require a planned upgrade to the RewardsEscrow contract as per [SIP]() to be included as part of the redeemable SNX when liquidating snx collateral. The escrowed snx tokens will be transferred to the liquidator and appened to the rewardsEscrow.

   Mitigating this issue is the fact that in order to unlock all `transferrable` SNX a minter would have to repay all of their debt and re-issue debt at the issuance ratio (currently 800%).


#### flagAccountForLiquidation(address account)

**Function signature**

`flagAccountForLiquidation(address account) external`

#### removeAccountInLiquidation(address account)

**Function signature**
`removeAccountInLiquidation(address account) external onlyInternalContract`

#### checkAndRemoveAccountInLiquidation(address account)

**Function signature**

`checkAndRemoveAccountInLiquidation(address account) external`

#### isOpenForLiquidation(address account)

**Function signature**

`isOpenForLiquidation(address account) external`

#### setLiquidationDelay(uint40 time)

**Function signature**

`setLiquidationDelay(uint40 time) onlyOwner`

#### setLiquidationRatio(uint ratio)

**Function signature**

`setLiquidationRatio(uint ratio) onlyOwner`

#### setLiquidationPenalty(uint penalty)

**Function signature**

`setLiquidationPenalty(uint penalty) onlyOwner`

- `uint penalty`: 18 decimals representation of a penalty percentage

#### setLiquidationTargetRatio(uint target)

**Function signature**

`setLiquidationTargetRatio(uint target) onlyOwner`

### Synthetix contract
---

#### liquidateSynthetix(address account, uint synthAmount)

**Function signature**

`liquidateSynthetix(address account, uint synthAmount) external`

Parameters

- `address account`: account to be liquidated
- `uint synthAmount`: amount of sUSD synth the redeemer wants to redeem against the account

## Rationale

The reasoning behind the direct redemption approach to liquidations is to provide a mechanism to purge positions for which the primary incentives have failed. Under most circumstances we have observed that the majority of stakers maintain a healthy ratio to ensure they can continue to claim staking rewards or the exit the system completely by burning all debt and selling ther SNX. Even in the case of a major price shock the majority of wallets will have more collateral value than their Synth debt so the optimal strategy is to burn debt and recover the collateral. In the case where this does not happen a fallback incentive to remove these undercollateralised positions is required. However, given that these wallets are likely to be edge cases so long as the collateral ratio remains above 500% it is important to not open an attack vector that would enable a malicious party to attempt to manipulate the price of SNX to liquidate positions. Due to the time delay implemented in the mechanism the cost of attack far exceeds the potential reward making it unlikely that a rational actor would pursue this strategy. The tension in this implementation is therefore between the time it takes to remove an undercollateralised position and the risk that liquidations are used as an attack vector against stakers. The thresholds and delays implemented above err on the side of protecting stakers and can therefore be reduced over time if liquidations are deemed to be too inefficient.

- **Time Delay:** Time delay increases the cost to a malicious actor who attempts to manipulate the SNX price to trigger liquidations.

## Test Cases

<!--Test cases for an implementation are mandatory for SIPs but can be included with the implementation..-->

Test cases for an implementation are mandatory for SIPs but can be included with the implementation.

## Implementation

<!--The implementations must be completed before any SIP is given status "Implemented", but it need not be completed before the SIP is "Approved". While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.-->

The implementations must be completed before any SIP is given status "Implemented", but it need not be completed before the SIP is "Approved". While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
