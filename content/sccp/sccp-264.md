---
sccp: 264
network: Ethereum & Optimism
title: DAI Wrapper
author: Kaleb (@kaleb-keny), Afif (@aband1)
status: Approved
created: 2022-12-16
proposal: >-
  https://snapshot.org/#/snxgov.eth/proposal/0x32ac4e8699e02d5f4d32c53b213f3666f693660f55abc8b6b50dff8600c7226b
type: Governance
---
 
## Simple Summary
 
<!--"If you can't explain it simply, you don't understand it well enough." Provide a simplified and layman-accessible explanation of the SCCP.-->
 
This SCCP proposes to implement the following:

Create DAI wrapper on ethereum by calling [createWrapper](https://etherscan.io/address/0x02f9bC46beD33acdB9cb002fe346734CeF8a9480#writeContract) with the following parameters:
 - token: `0x6B175474E89094C44Da98b954EedeAC495271d0F`
 - currencyKey: `sUSD`
 - synthContractName: `SynthsUSD`

Set the parameters on ethereum and [optimism](https://optimistic.etherscan.io/address/0xad32aa4bff8b61b4ae07e3ba437cf81100af0cd7#readContract) DAI wrappers to the following:
- `maxTokenAmount` 20m DAI
- `burnFeeRate` 10 bp
- `mintFeeRate` Peg (around 1%) and lower it gradually until we reach 25 bp in incremental steps
 
## Abstract
 
<!--A short (~200 word) description of the variable change proposed.-->
 
- `createWrapper` creates a wrapper by assigning a mapping of synth to token.
- `maxTokenAmount` is the maximum amount that can be wrapped with a designated token underlying.
- `mintFeeRate` is the minting fee rate applied when wrapping a token to mint the equivalent synth.
- `burnFeeRate` is the burning fee rate applied when unwrapping a token by burning the equivalent synth.
 
## Motivation
 
<!--The motivation is critical for SCCPs that want to update variables within Synthetix. It should clearly explain why the existing variable is not incentive aligned. SCCP submissions without sufficient motivation may be rejected outright.-->
 
The motivation behind this are as follows:
- Atomic swaps are getting little traction because of the scarcity of synths which is resulting in only small trades
- The imminent release of Perps v2 requires an abundant supply of synths to support robust volume
- Loans are not optimal at scaling, given the capital inefficiency and the need to manage collateralization ratio in case of sUSD loans
- SNX price decline has led to a major synth liquidity contraction.
- Fragmentation between L1/L2 liquidity adds more friction
- Fragmentation will only increase when sUSD/sETH are migrated to snxUSD/snxETH
- Incentives and bribes do not in principle increase the supply of synths
 
It is important to mention that this is a temporary scaling solution and that DAI Wrappers will need to be unwound in the next 6 months in order to fully migrate to v3, hence unwind on V2x is a technical guarantee. Alternative scaling solutions would have materialized by then in the form of [SIP-256](https://sips.synthetix.io/sips/sip-256/) and on-boarding other collaterals such as ETH for issuance. 

### Dai Unwind 
The precise details of DAI unwind will be laid out when the pertinent v3 SIPs are ready for release, but it could take the following form:
- set DAI wrapper `burnFeeRate` to e.g. -5bps and limit to 0 DAI so it winds down in one direction
- allow snxUSD to be interconverted to sUSD
- this creates an arb to do: snxUSD > sUSD > DAI > sUSD > snxUSD 
Although this will cost the protocol, on the order of $100k, more than offset by the fees that will be earned while DAI is wrapped

### Further Scaling
One final point, more scaling might be required, to be laid out in futures SCCP's, based the demand for sUSD and the peg. This will take the form of a combination of DAI and ETH wrapper capacity increases in order to control the skeweness of the debt pool.
 
 
## Copyright
 
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
