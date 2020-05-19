---
sip: 15
title: Liquidation. Direct Redemption of SNX collateral with synths
status: WIP
author: Jackson Chan (@jacko125)
discussions-to:
created: 2019-08-20
---

Direct Redemption of SNX collateral with Synths

## Simple Summary

This SIP proposes to introduce direct redemption mechanism for synthetix collateral. Holders of Synths would be able to redeem their Synths against synthetix collateral that are staked, if the staker is below the liquidation ratio, at a fair discounted value.

## Abstract

In a crypto-backed stablecoin system such as Synthetix, the issued stablecoin (synths) tokens should represent a claims on the underlying collateral. The current design of the Synthetix system doesn't allow holders of synths to directly redeem the underlying collateral unless they are burning and unlocking their own synthetix collateral. The value of the synths issued in the synthetix system is derived from incentivising minters to be over-collateralised on the debt they have issued and other economic incentives such as exchange fees and SNX rewards.

If a minter's collateral value falls below the required collateral ratio, there is no direct penalty for being under collateralised, even in the unlikely event where the value of their locked synthetix collateral is less than the synths debt they owe. Stakers and synth holders should be able to liquidate these minters at a discounted price to encourage a purchase of synths debt in order to close off the minter's position.

It would encourage minters to be above the required collateral ratio and creat economic incentive to buy-back synths on market to fix their collateral ratio if they are at risk of being liquidated.

## Motivation

Direct redemption (liquidation) gives SNX holders and issuers of Synthetic synths these benefits:

1. Allows holders of Synths to burn synth debt on behalf of minter and redeem underlying collateral.
2. Provides instrinsic value to synth debt for anyone who holds synths as backing it with synthetix collateral that can be redeemed at fair value.
3. Stakers above the collateral ratio can protect their value in the system by liquidating another staker's collateral that is below the liquidation ratio, to fix network's collateralisation ratio.
4. Incentive for users to keep network collateral ratio healthy by providing a discount on the liquidated synthetix collateral price.
5. Minters who are being liquidated, can either buy back the synths on market to fix their collateral ratio, or allow others to do so but at a penalty.

## Specification

<!--The technical specification should describe the syntax and semantics of any new feature.-->

1. Provide a liquidation contract to mark a SNX staker as being listed for liquidation but give time for them to fix collateral ratio / burn debt by purchasing on market.

2. Time delayed liquidation of under collateralised collateral. Delay is configurable with an SCCP and is set to 2 weeks initially to provide protection for snx staker to fix their collateral ratio.

3. Time delay prevents black swan events where malicious actor quickly dumps a sizeable amount of SNX on CEX’s / exchanges to push the price down suddenly and target liquidation, as there is a time delay for liquidation.

4. Under collateralised stakers (less than the liquidation ratio set) can be marked for liquidation by any address. Liquidation can be done by any wallet after time delay has expired.

5. Liquidator able to burn synths in exchange for SNX collateral at discount rate (% of the current value based on the liquidation penalty) as a penalty for under collateralised staker.

6. Partial liquidation of an under collateralised SNX until their collateral ratio is at or above the liquidations cap ratio (300%) again. Multiple liquidations can be made against a SNX staker that has liquidation open until their c-ratio is above the liquidations cap - (300%).

    Once the staker's collateral ratio is above 300% it will be removed from the liquidations mapping.

7. Current escrowed SNX tokens in the RewardsEscrow will require a planned upgrade to the RewardsEscrow contract as per [SIP]() to be included as part of the redeemable SNX when liquidating snx collateral. The escrowed snx tokens will be transferred to the liquidator and appened to the rewardsEscrow.

    In order to unlock all transferrable SNX a minter would have to repay all of their debt and re-issue debt at the issuance ratio (currently 800%).

## Liquidations Contract

Storage of the mapping of accounts marked for liquidation and the time marked for liquidation.

 Consider using `eternalStorage` to map the `liquidation` struct values such as the `isFlagged` boolean and `uint` for the `startTime` to allow Liquidations Contract to be upgraded.

`mapping(address => liquidation) public liquidations`

Struct to store liquidations

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

`setLiquidationRatioCap(uint cap) onlyOwner`

## Synthetix contract

#### liquidateSynthetix(address account, uint synthAmount) external

External function for liquidation of under collateralised Synthetix.

Forwards calls to `Issuer.liquidateSynthetix(account, synthAmount, msg.sender)`

## Issuer contract

Update Issuer contract to allow Synth sUSD holder to liquidate under collateralised Synthetix up to the Liquidation Target ratio (300%)

#### liquidateSynthetix(address account, uint synthAmount, address redeemer) onlySynthetix

Any holder of sUSD can use liquidateSynthetix to repay the debt of undercollateralised staker and redeem their SNX collateral.

- ✅ Check liquidations Contract that `account` is `isOpenForLiquidation()` is true.

- Calculate the maximum amount of debt to burn to reach the liquidation target ratio (ie 300%).
    - If the `liquidation target ratio` is already reached, remove liquidation flag on `account` and return.

- liquidation target ratio should take into account the liquidation penalty fee that will be paid to `redeemer`.
- Take the `synthAmount` or the `maximum amount` of debt to burn to reach the liquidation target ratio for liquidated account.
- Burn sUSD from the `redeemer` sUSD balance and reduce the debt from `account` being liquidated.
- Transfer liquidated Synthetix to the `redeemer` plus the liquidation penalty.
- Remove liquidation flag on `account` from liquidations contract if the liquidation target ratio has been reached.

**Function signature**

`liquidateSynthetix(address account, uint redemptionAmount, address redeemer) onlySynthetix`

Parameters
- `address account`: account to be liquidated
- `uint synthAmount`: amount of sUSD synth the redeemer wants to redeem against the account
- `address redeemer`: msg.sender (who is liquidating the adddress) forwarded from Synthetix contract

#### _internalBurnSynths()

When liquidation is flagged on an account and after burning synths, if their c-ratio is now above the `liquidation targer ratio` then we can remove the liquidation flag from the liquidations contract.

The under collateralised staker has fixed their c-ratio above the liquidation target ratio it should call `removeAccountInLiquidation()`.

## Rationale

Sets a mechanism for direct redemption of synthetix collateral by synth holders and a peanlty for minters who do not fix their collateralisation ratio.

Provides incentives and reward for holders of synths to burn the synthetic tokens in exchange for collateral.

## Test Cases

<!--Test cases for an implementation are mandatory for SIPs but can be included with the implementation..-->

Test cases for an implementation are mandatory for SIPs but can be included with the implementation.

## Implementation

<!--The implementations must be completed before any SIP is given status "Implemented", but it need not be completed before the SIP is "Approved". While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.-->

The implementations must be completed before any SIP is given status "Implemented", but it need not be completed before the SIP is "Approved". While there is merit to the approach of reaching consensus on the specification and rationale before writing code, the principle of "rough consensus and running code" is still useful when it comes to resolving many discussions of API details.

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
