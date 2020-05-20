---
sip: 15
title: SNX liquidation mechanism
status: WIP
author: Jackson Chan (@jacko125)
discussions-to:
created: 2019-08-20
---

## Simple Summary

This SIP proposes to introduce direct a redemption mechanism for SNX collateral. Holders of Synths would be able to redeem their Synths for staked SNX if the staker is below the liquidation ratio.

## Abstract

In a crypto-backed stablecoin system such as Synthetix, the issued stablecoin (synths) tokens should represent a claims on the underlying collateral. The current design of the Synthetix system doesn't allow holders of synths to directly redeem the underlying collateral unless they are burning and unlocking their own SNX collateral. The value of the synths issued in the synthetix system is derived from incentivising minters to be over-collateralised on the debt they have issued and other economic incentives such as exchange fees and SNX rewards.

If a minter's collateral value falls below the required collateral ratio, there is no direct penalty for being under collateralised, even in the unlikely event where the value of their locked synthetix collateral is less than the debt they owe. Stakers and synth holders should be able to liquidate undercollateralised minters at a discounted price to restore the network colateral ratio.

Liquidation would encourage minters to be above the required collateral ratio and create a strong economic incentive to burn synths to repair their collateral ratio if they are at risk of being liquidated.

## Motivation

Liquidation gives SNX holders and issuers of Synthetic synths these benefits:

1. Allows holders of Synths to burn synth debt on behalf of another minter and redeem the underlying collateral.
2. Provides instrinsic value to synth debt for anyone who holds synths as backing it with synthetix collateral that can be redeemed at fair value.
3. Stakers above the collateral ratio can protect their value in the system by liquidating another staker's collateral that is below the liquidation ratio, to fix network's collateralisation ratio.
4. Incentive for users to keep network collateral ratio healthy by providing a discount on the liquidated SNX collateral.

## Specification

<!--The technical specification should describe the syntax and semantics of any new feature.-->

1. Provide a liquidation contract to mark an SNX staker for liquidation with a time delay to allow them to fix their collateral ratio.

2. Time delayed liquidation of under collateralised collateral. Delay is configurable with an SCCP and is set to two weeks by default to allow for SNX staker to fix their collateral ratio.

3. Time delay increases the cost to a malicious actor who attempts to manipulate the SNX price to trigger liquidations.

4. Under collateralised stakers (less than the liquidation ratio) can be marked for liquidation by any address. Liquidation can be performed from any address after time delay has elapsed.

5. Liquidator can burn synths in exchange for SNX collateral at discount rate (% of the current value based on the liquidation penalty) to incentivise liquidations.

6. Partial liquidation of an under collateralised SNX can be performed until collateral ratio is at or above the liquidation ratio (300% configurable via SCCP). Multiple liquidations can be made until the collateral ratio is above the liquidation ratio - (300%).

    Once the collateral ratio is above 300% the liquidations mapping is removed.

7. Current escrowed SNX tokens in the RewardsEscrow will require a planned upgrade to the RewardsEscrow contract as per [SIP]() to be included as part of the redeemable SNX when liquidating snx collateral. The escrowed snx tokens will be transferred to the liquidator and appened to the rewardsEscrow.

   Mitigating this issue is the fact that in order to unlock all `transferrable` SNX a minter would have to repay all of their debt and re-issue debt at the issuance ratio (currently 800%).

## Liquidations Contract

---

Storage of the mapping of accounts marked for liquidation and the time marked for liquidation.

Using `eternalStorage` to map the `liquidation` struct values such as the `isFlagged` as boolean and `uint` for the `startTime` to allow Liquidations Contract to be upgraded.

Mapping for Liquidations - `mapping(address => liquidation) public liquidations`

**Struct to store liquidations**

```
struct liquidation {
    bool isFlagged;
    uint40 startTime;
}
```

#### flagAccountForLiquidation(address account)

Allows a user to flag an account for liquidation and starts the waiting period. Requires the `account`'s collateral ratio to be below the `liquidation ratio`.

**Function signature**

`flagAccountForLiquidation(address account) external`

**Events**

Emit Event `accountFlaggedForLiquidation`

#### removeAccountInLiquidation(address account)

Helper function for internal contracts to remove account from liquidations if the C-ratio is above the `liquidation target ratio` when:

- a user burns sUSD to fix their debt.
- liquidation fixes the under collateralised account above the liquidation target ratio.
- Reduces gas consumption as doesn't require recalculating the account's c-ratio if burning / liquidating already calculates the c-ratio after burning.

**Function signature**

`removeAccountInLiquidation(address account) external onlyInternalContract`

#### checkAndRemoveAccountInLiquidation(address account)

Function for any user to call and check whether the `account` c-ratio is above the `liquidation target ratio` and remove the liquidation flag set against `account`.

Function will calculate the `account` current c-ratio and determine whether it can be removed from the `liquidations` list.

**Function signature**

`checkAndRemoveAccountInLiquidation(address account) external`

#### isOpenForLiquidation(address account)

Returns whether an address is open for liquidation.

- ✅ liquidations(account) isFlagged is true
- ✅ Current C-Ratio is less than 150%
- ✅ block.timestamp > liquidation start time + delay

#### setLiquidationDelay(uint40 time)

Configurable value to set the time delay before a flagged account can be liquidated.

Candidate to move to SCCP variable contract

#### setLiquidationRatio(uint ratio)

Collateral ratio that a wallet can be flagged for liquidation.

Candidate to move to SCCP variable contract

**Function signature**

`setLiquidationRatio(uint ratio) onlyOwner`

#### setLiquidationPenalty(uint penalty)

Candidate to move to SCCP variable contract

**Function signature**

`setLiquidationPenalty(uint penalty) onlyOwner`

- `uint penalty`: 18 decimals representation of a penalty percentage

#### setLiquidationTargetRatio(uint target)

Update the liquidation c-ratio target where the liquidations of an snx staker is capped to, ie 300%.

Once the under collateralised account's c-ratio is above the liquidation target ratio it will be removed from the accounts to be liquidated.

Candidate to move to SCCP variable contract

**Function signature**

`setLiquidationTargetRatio(uint target) onlyOwner`

## Synthetix contract

---

Update Synthetix contract to allow Synth sUSD holder to liquidate under collateralised Synthetix up to the Liquidation Target ratio (300%).

#### liquidateSynthetix(address account, uint synthAmount) external

External function for liquidation of under collateralised Synthetix.

Any holder of sUSD can use liquidateSynthetix to repay the debt of undercollateralised staker and redeem their SNX collateral.

- ✅ Check `systemStatus().requireSystemActive`.
- ✅ Check liquidations Contract that `account` is `isOpenForLiquidation()` is true.

- Calculate the maximum amount of debt to burn to reach the liquidation target ratio (ie 300%).

  - If the `liquidation target ratio` is already reached, remove liquidation flag on `account` and return.

- liquidation target ratio should take into account the liquidation penalty fee that will be paid to `msg.sender`.
- Take the `synthAmount` or the `maximum amount` of debt to burn to reach the liquidation target ratio for liquidated account.
- Burn sUSD from the `msg.sender` sUSD balance and reduce the debt from `account` being liquidated.
- `Synth.burn()` will check that `msg.sender` has enough sUSD to burn with SafeMath subtraction.
- Transfer liquidated Synthetix to the `msg.sender` plus the liquidation penalty. Invoke `_transferByProxy(account, msg.sender, value)` to transfer SNX to liquidator with `value` set to amount of SNX + penalty liquidated.

- Remove liquidation flag on `account` from liquidations contract if the liquidation target ratio has been reached.

**Function signature**

`liquidateSynthetix(address account, uint synthAmount) external`

Parameters

- `address account`: account to be liquidated
- `uint synthAmount`: amount of sUSD synth the redeemer wants to redeem against the account

## Issuer contract

---

#### \_internalBurnSynths()

When liquidation is flagged on an account and after burning synths, if their c-ratio is above the `liquidation targer ratio` after burning synths then we can remove the liquidation flag from the liquidations contract.

If the under collateralised staker has fixed their c-ratio above the `liquidation target ratio` it should call `liquidations.removeAccountInLiquidation()`.

## Rationale

The reasoning behind the direct redemption approach to liquidations is to provide a mechanism to purge positions for which the primary incentives have failed. Under most circumstances we have observed that the majority of stakers maintain a healthy ratio to ensure they can continue to claim staking rewards or the exit the system completely by burning all debt and selling ther SNX. Even in the case of a major price shock the majority of wallets will have more collateral value than their Synth debt so the optimal strategy is to burn debt and recover the collateral. In the case where this does not happen a fallback incentive to remove these undercollateralised positions is required. However, given that these wallets are likely to be edge cases so long as the collateral ratio remains above 500% it is important to not open an attack vector that would enable a malicious party to attempt to manipulate the price of SNX to liquidate positions. Due to the time delay implemented in the mechanism the cost of attack far exceeds the potential reward making it unlikely that a rational actor would pursue this strategy. The tension in this implementation is therefore between the time it takes to remove an undercollateralised position and the risk that liquidations are used as an attack vector against stakers. The thresholds and delays implemented above err on the side of protecting stakers and can therefore be reduced over time if liquidations are deemed to be too inefficient.

## Test Cases

<!--Test cases for an implementation are mandatory for SIPs but can be included with the implementation..-->

Test cases for an implementation are mandatory for SIPs but can be included with the implementation.

## Implementation

<!--The implementations must be completed before any SIP is given status "Implemented", but it need not be completed before the SIP is "Approved". While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.-->

The implementations must be completed before any SIP is given status "Implemented", but it need not be completed before the SIP is "Approved". While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
