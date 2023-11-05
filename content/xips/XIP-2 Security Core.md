---
xip: 2
title: Security Core
author: ' Bilby (@bilb-y), Kmao (@kmaox), Spinxho (@spinxho)'
network: Optimism
status: Draft
created: 2023-11-05
updated: 2023-11-05
type: meta-governance
---

# Simple Summary

This XIP proposes the framework for a security module that will be intended to secure Infinex and its users. 

# Abstract

Infinex requires the implementation of a security system that blends robust, multi-layered protection for users’ onchain assets, with off-chain authentication and account recovery robust to the mainstream user. To achieve these goals, this XIP proposes Infinex generates a smart contract for each user that is controlled by a key stored in the users browser, and recoverable by a key that is trustlessly gated by offchain MFA.

# Motivation

In order to understand the problems that this proposal aims to solve with the Infinex security core architecture, we will explore stylised examples with a user, Bob, who is new to the space.

![Untitled](XIP-2%20(working)%201c2afbcd2aeb4eba995c37b4a402bed8/Untitled.png)

Bob is trying to decide whether he should sign up to trade on a centralised exchange, or onboard himself into DeFi.

### The DeFi solution

To onboard into DeFi, Bob can create a wallet on Ethereum, and transfer his funds into it.

![Untitled](XIP-2%20(working)%201c2afbcd2aeb4eba995c37b4a402bed8/Untitled%201.png)

Bob learns that this solution has some interesting advantages:

- **Bob controls his funds**: the only actor who can touch the funds in Bob’s wallet is Bob, or someone else that Bob explicitly approves. This is because Bob is the sole bearer of the key to his wallet.
- **Bob can interact with all of Ethereum**: the composability of DeFi means that Bob’s money is programmable, and can be plugged into any decentralised application that has ever been built on the network, or will be built in the future.

But of course, he also learns of the limitation. If Bob loses his key, he is in trouble. He’s told the best approach is to write down the seed phrase on a piece of paper, and that seems a little overkill and cumbersome to Bob. He continues to explore.

### The CeFi solution

Bob looks into creating an account on a centralised exchange. He chooses one, and sends the exchange some information about himself, deposits some money, and starts trading. 

Beyond the initial onboarding, Bob doesn’t have to manage much – the exchange takes the responsibility of authenticating him, holding his funds, matching his trades, and stepping up his security.

One day, Bob forgets his password. How does he go about resetting it? Let’s imagine there’s a security guard sitting inside the exchange, called the Authenticator. He’s got a picture of Bob pinned to his wall. When Bob comes to the exchange and asks to access his account, he has to convince this security guard that he is indeed the same Bob as is in the picture.

![Untitled](XIP-2%20(working)%201c2afbcd2aeb4eba995c37b4a402bed8/Untitled%202.png)

He does this by providing them with his username and password, or via some social sign-in. When Bob tries to do something particularly sensitive, the authenticator has the discretion to double check that he is really Bob – he can ask for one or multiple one time passwords from Bob, depending on Bob’s security preferences.

If Bob changes his identity (updates his phone number, or shaves his moustache) he only needs to let the security guard know that he is still Bob, and he can continue to access his money as normal. This should work, because fundamentally, Bob is still Bob, and he can likely prove it via some digital means.

If a hacker tries to pretend to be Bob, they should be caught out by the security guard – the exchange has refined a security handbook that minimises the risk of an attacker imitating Bob and stealing his funds (**********************account hack state**********************), while simultaneously minimising the chance that Bob be unable to verify his identity, and loses access to his money forever (**********************account loss state**********************).

This is a really robust and scalable solution, because Bob has been given the absolute **minimal marginal responsibility** over his account. Bob doesn’t have to carry anything around that he doesn’t already carry around – his emails are accessible from his computer, his passwords are kept in his password manager, and his phone is in his pocket. The CeFi solution has a security model that is already integrated into the world that Bob lives in. This is a user experience that can scale.

The disadvantages of this approach are obvious: Bob’s savings are held by an opaque, scantily-regulated offshore entity, that also holds full control over authentication. His money is also no longer programmable – it’s confined within the walls of the exchange and limited to the products that the exchange builds.

### The challenge, therefore

The Infinex security module aims to replicate the architecture of the CeFi solution in a trustless, decentralised fashion. This can be done by breaking apart the constituent actors and functions in the CeFi security architecture. For this security module to be deemed successful, Bob must retain sole ownership over his funds, while maintaining composability with the rest of the Ethereum. 

Here’s what that would look like:

![Untitled](XIP-2%20(working)%201c2afbcd2aeb4eba995c37b4a402bed8/Untitled%203.png)

From top-left to right:

1. The authenticator does nothing but authenticate Bob and sign attestations that he has authenticated via any specified combination of factors.
2. A decentralised KMS holds Bob’s key, can only release a signature if Bob’s security settings (stored in IPFS and run on encrypted machines)
3. Bob holds a key on his device.
4. Bob’s onchain smart account requires signatures from both the blue key and the cantaloupe key for sensitive transactions.

A simple withdrawal flow would therefore work like this:

![Untitled](XIP-2%20(working)%201c2afbcd2aeb4eba995c37b4a402bed8/Untitled%204.png)

The important piece of this puzzle is in decoupling the authenticator from the key management system (KMS), while preventing the KMS operators from accessing Bob’s key (unless they are Bob). This sounds like magic, but has become possible in recent months.

The obvious piece of **marginal responsibility** beyond Bob’s off-chain authentication is the blue key that he holds on his device. To avoid making this a single point of failure, this key needs to be recoverable, and thus the scope of it’s authorization on Bob’s account must be limited. It should be easily duplicatable, so that Bob can switch devices. It also has to be resistant to cross-site scripting attacks. The user experience of using this key should be seemless, such that Bob doesn’t need to know there is a key on his device.

# Specification

## **Overview**

The proposed Infinex security module uses three key architectural features:

Firstly, it designates each user account as a smart contract responsible for holding their assets. Secondly, each onchain actions can be gated by a signature (or signatures) from multiple of keys at the smart contract level. Finally, the keys that control the account are distributed between the users device, and a decentralised key management system, which is gated by trustless offchain authentication such that no third party can control the users funds.

## Each user owns an onchain smart account

This smart contract holds the users funds, and is controlled cryptographically by the user. From this smart contract, the user can interact with the rest of DeFi (i.e. trade perpetual futures via Synthetix).

The users smart account will be located on the same chain as the first integration for Infinex. If this is Synthetix PerpsV3, the smart account will be located on Base or Optimism.

## Each smart account is controlled by three keys

1. Browser key – held by the user
2. Multi-factor authentication (MFA) key – held in a decentralised KMS
3. Recovery key – held in a decentralised KMS

To execute low sensitivity actions, such as opening a trade position, users would only require a single signature from the browser key.

To execute high sensitivity actions, such as withdrawing funds or adding a whitelisted withdrawal address, users would require two signatures – one from a browser key and one from an MFA key. This protects the users account if someone were able to get access to their device.

A third key, the recovery key, is used to add a new browser key to the users smart account. This is a crucial component for robustness of the system: avoiding catastrophe when a user loses their device, and enabling the user to control their smart account from multiple devices.

A new browser key can be added via:

1. A signature from the recovery key, and a `recoveryDelay` delay period
2. A signature from the recovery key and a signature from another active browser key

<INSERT DIAGRAM HERE>

## Key settings are configurable

The keys that control a users smart account can be changed via the smart account. This means a user can add multiple devices, or a new browser key pair to use as a scope-limited API key that can’t withdraw from their account. If they wanted a withdrawal key, they could add an emergency withdrawal address, offering an experience akin to a centralised exchange.

Additionally, if the user would prefer to hold their own MFA key or recovery key, they can simply update their smart account key configuration to accept signatures from their own hardware wallet instead of the preconfigured MFA key. This offers a gradient of control for advanced users who accept the responsibility of managing their own keys. It also allows for social recovery (Alice’s hardware wallet could be added as a recovery signer for Bob’s account)

## Each key is gated by trustless off-chain security

### Browser key encryption

The browser key is encrypted on the users device by a long string stored in their JWT. The key is also included in the browser via cross-domain iframe architecture, protecting the user from cross site scripting attacks.

### Off-chain authentication

To reduce the magnitude of a compromised browser key, the MFA key and recovery key are not held by the user in the default case – instead, they are stored as sharded **programmable key pairs** (PKP) on a decentralised key management service operated by the [Lit protocol](https://developer.litprotocol.com/v2/resources/glossary/). Access to the keys is gated by JavaScript code called a ********************Lit action********************, stored on IPFS and executed by Lit node operators.

The Lit action contains logic for releasing signatures to user authenticated by an off-chain authentication provider, ************Stytch************. Their off-chain authentication configuration is stored in the users **permissions contract** on the Lit network, which can only be modified with a signature from the PKP.

The diagram below demonstrates how these pieces fit together for Bob, who would like to withdraw some money from his onchain smart account:

![Untitled](XIP-2%20(working)%201c2afbcd2aeb4eba995c37b4a402bed8/Untitled%205.png)

The flow is easiest to comprehend when starting with the end goal:

- To withdraw onchain funds, Bob needs two signatures (one from his browser key and one from his MFA key)
- To get a signature from his MFA key, Bob needs to pass the logic in the Lit action
- To pass the logic in the Lit action, Bob needs an authenticated JWT from Stytch that matches the configuration in his permissions contract
    - In order to update the configuration in his permissions contract, he would also need an MFA signature, and thus Bob would go through a similar flow.
    - For a further breakdown of the authentication logic for different actions, see *Off-chain security module* below.

When Bob requests a signature from his MFA key or their recovery key, or to change their security settings, they will firstly have to authenticate themselves to Stytch via the Infinex UI, and then present their Stytch signed JWT to the Lit action, which will check it against their **permissions contract**, before constructing their key and releasing a signature. 

A more detailed specification for how a user would create a new account and then change his email address is outlined in the following sequence diagram:

![Untitled](XIP-2%20(working)%201c2afbcd2aeb4eba995c37b4a402bed8/Untitled%206.png)

### Upgrading a Lit action

The Lit node operators run encrypted virtual machines to store PKPs and execute Lit action code, meaning they can not modify the logic of a Lit action. Upgrading a Lit action requires a signature from the PKP, which is gated via the Lit action itself, so logic can be written to specify how self-upgrades can occur. Infinex governance can upgrade Lit actions by deploying new code to IPFS code and pointing the Lit action at it.

Both the user and Infinex governance need to sign 

First, Infinex governance will update the canonical id.

Then, it will be up to the user to sign a transaction to upgrade. This can be done via their browser key.

<INSERT DIAGRAM HERE>

### Off-chain security module

The logic stored in a Lit action needs to balance two opposing objectives:

1. Minimise the risk of **loss state**: minimise the risk of a user permanently losing access to their account (for example, if they lose their device, or forget their password)
2. Minimise the risk of **hack state**: i.e. the risk of a users funds being drained by (for example, if a hacker were able to gain access to their device, or guess their password)

Additional goals for the security model are

1. **Linear marginal security**: if a user has configured more authentication methods, both the risk of loss state and hack state should be reduced. 
2. Achieving loss state should require losing access to uncorrelated security events, although this is influenced by the combination of MFA methods the user chooses to configure)
3. Reasonable user experience: a user shouldn’t have to use all of their MFA methods if they’ve added more.

We can loosely achieve these goals by implementing a waterfall security approach: if you are trying to protect the castle using a key, and there is a key factory next door, the key factory needs to be better protected than the castle itself. 

In more practical terms, if an MFA signature is the castle, and off-chain MFA methods are the key to the door, then we can make the MFA signature easy to access by making it difficult to change the key.

We apply a general ruleset for off-chain security actions:

Then, we bucket users by their security configurations, from least secure to most secure:

To each bucket we then apply a points-threshold security system. For each security bucket, a **points map** and a **requirements map** are defined, and configured to achieve the goals outlined above. To achieve a security action defined below, the user needs to satisfy the points requirement **and** the requirements outlined in the general ruleset.

This configuration (the full tables can be found in the auxiliary file here) yields the following hack and loss states:

**Note:** compromising an unlocked device and gaining access to an email account is equivalent to compromising an email here.

The full list of hack states is attached in the appendix file found here.

To minimise the protocols net loss and hack states, the Infinex UI will usher users into security buckets based on the value of their deposits:

## Emergency withdrawal addresses

An escape hatch for advanced users can be added. A whitelist of public keys can be added to the smart account such that

# Parameters

- `recoveryDelay` is proposed to be initialised to seven days.

# Rationale

The specification proposed above can be evaluated on the goals outlined in the motivation section.

### Custody

No one can access the funds in a smart account except for the user who controls that smart account. There is no way for the lit node operators, the Infinex DAO or core contributors to gain access to their funds, as they don’t know the users authentication credentials or have access to their MFA devices.

### Recoverability

### Security

Accepting that the most crucial point of security is the off-chain MFA configuration, we can assess the security of a users account by observing prerequisites of the hack states for various users.

The full table can be found in the appendix file here.

# Test cases

### TODO
