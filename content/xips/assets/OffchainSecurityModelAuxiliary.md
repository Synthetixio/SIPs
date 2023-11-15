# Offchain Security Model Auxiliary

### **Bucket Security Method Points Maps & Requirements Maps**

**NB:** ABK points can only be applied after verifying credentials (logging in)

<h3>Bucket Level 0</h3>	

| Name      | Points |
| ----------- | ----------- |
| Active Browser Key      | 20.0       |
| Email OTP   | 5.0        |
| Authenticated Credentials      | 1.0       |
| Authenticator MFA      | 0.0       |
| Mobile SMS MFA      | 0.0       |
| Passkey MFA      | 0.0   |
| Ethereum Signer      | 0.0      |

    
#### **Bucket Level 1**
    
    [Security Method Points Map](Offchain%20Security%20Model%20Auxiliary%20da5121d8bc6f4b2fb8ae4def6d3f8b47/Security%20Method%20Points%20Map%20d41c09a36a4c443898911bb92ff218e7.csv)
    
    [Requirements Map](Offchain%20Security%20Model%20Auxiliary%20da5121d8bc6f4b2fb8ae4def6d3f8b47/Requirements%20Map%200caa52d96abb444aa0b5a94fc7364c18.csv)
    
#### **Bucket Level 2**
    
    [Security Method Points Map ](Offchain%20Security%20Model%20Auxiliary%20da5121d8bc6f4b2fb8ae4def6d3f8b47/Security%20Method%20Points%20Map%2034d28fbd4f2e447db36dabebfc559853.csv)
    
    [Requirements Map](Offchain%20Security%20Model%20Auxiliary%20da5121d8bc6f4b2fb8ae4def6d3f8b47/Requirements%20Map%20b9b86389276e42b69099069db9f3dfe2.csv)
    
#### **Bucket Level 3**
    
    [Security Method Points Map](Offchain%20Security%20Model%20Auxiliary%20da5121d8bc6f4b2fb8ae4def6d3f8b47/Security%20Method%20Points%20Map%20c954c163ed9f4bfdaeccc2f7239a0f89.csv)
    
    [Requirements Map](Offchain%20Security%20Model%20Auxiliary%20da5121d8bc6f4b2fb8ae4def6d3f8b47/Requirements%20Map%20d3bea8a591d942b987b7524a29bc0d03.csv)
    
#### **Bucket Level 4**
    
    [Security Method Points Map](Offchain%20Security%20Model%20Auxiliary%20da5121d8bc6f4b2fb8ae4def6d3f8b47/Security%20Method%20Points%20Map%20715cc869578b465baefdc921e99763df.csv)
    
    [Requirements Map](Offchain%20Security%20Model%20Auxiliary%20da5121d8bc6f4b2fb8ae4def6d3f8b47/Requirements%20Map%202861f8f181bd46d78cec73681bcba37e.csv)
    

## User Security States

Exhaustive tables of user loss and hack states.

********NB (I):******** Only the minimal criterion are shown. I.e. for a hack/loss state of x, y, z: any hack/loss states including x, y, z, t are ignored.

**NB (II):** In general, stealing an unlocked [Device, Mobile] is equivalent to stealing email

**********NB (III):********** “+” is equivalent to logical AND

**********NB (IV):********** “,” is equivalent to logical OR

**********NB (V):********** “**Other** MFA Method” refers to any MFA method not in the hacker’s possession 

##### **Bucket Level 0**

- New User [No Security Methods]
    
    [Hack States [New User]](Offchain%20Security%20Model%20Auxiliary%20da5121d8bc6f4b2fb8ae4def6d3f8b47/Hack%20States%20%5BNew%20User%5D%204d48fa08685f4db8b1c667fa4eed0d52.csv)
    
    [Loss States [New User]](Offchain%20Security%20Model%20Auxiliary%20da5121d8bc6f4b2fb8ae4def6d3f8b47/Loss%20States%20%5BNew%20User%5D%20806f089cb07f4037b3e04713204482af.csv)
    

**Bucket Level 1**

- Low Security User [1x MFA Methods]
    
    [Hack States [Low Security User]](Offchain%20Security%20Model%20Auxiliary%20da5121d8bc6f4b2fb8ae4def6d3f8b47/Hack%20States%20%5BLow%20Security%20User%5D%2055e85fb940634d3e8f7e91bb65245702.csv)
    
    [Loss States [Low Security User]](Offchain%20Security%20Model%20Auxiliary%20da5121d8bc6f4b2fb8ae4def6d3f8b47/Loss%20States%20%5BLow%20Security%20User%5D%20513b77a8b7ee483ebbf390a4db9df1ed.csv)
    
- Ethereum Signer Only User [1x Ethereum Signer]
    
    [Hack States [Ethereum Signer Only User]](Offchain%20Security%20Model%20Auxiliary%20da5121d8bc6f4b2fb8ae4def6d3f8b47/Hack%20States%20%5BEthereum%20Signer%20Only%20User%5D%2047938677b3aa4ba2a6acacafe6a672dc.csv)
    
    [Loss States [Ethereum Signer Only User]](Offchain%20Security%20Model%20Auxiliary%20da5121d8bc6f4b2fb8ae4def6d3f8b47/Loss%20States%20%5BEthereum%20Signer%20Only%20User%5D%20f25fc965575042138a90fa329295561b.csv)
    

**Bucket Level 2**

- Medium Security User w/ Ethereum Signer [1x MFA Methods + 1x Ethereum Signer]
    
    [Hack States [Medium Security User]](Offchain%20Security%20Model%20Auxiliary%20da5121d8bc6f4b2fb8ae4def6d3f8b47/Hack%20States%20%5BMedium%20Security%20User%5D%203640eb53a3264f27a1443403f0635589.csv)
    
    [Loss States [Medium Security User]](Offchain%20Security%20Model%20Auxiliary%20da5121d8bc6f4b2fb8ae4def6d3f8b47/Loss%20States%20%5BMedium%20Security%20User%5D%20f6f88914d6e646178595fdd9c69d43aa.csv)
    
- Medium Security User [2x MFA Methods]
    
    [Hack States [Medium Security User]](Offchain%20Security%20Model%20Auxiliary%20da5121d8bc6f4b2fb8ae4def6d3f8b47/Hack%20States%20%5BMedium%20Security%20User%5D%2006aa6029f87b4e93b2e6d67f27c77f1d.csv)
    
    [Loss States [Medium Security User]](Offchain%20Security%20Model%20Auxiliary%20da5121d8bc6f4b2fb8ae4def6d3f8b47/Loss%20States%20%5BMedium%20Security%20User%5D%20fc4f11575cb94680881fe6654f4b6aeb.csv)
    

**Bucket Level 3**

- High Security User w/ Ethereum Signer [2x MFA Methods + Ethereum Signer]
    
    [Hack States [High Security User w/ Ethereum Signer]](Offchain%20Security%20Model%20Auxiliary%20da5121d8bc6f4b2fb8ae4def6d3f8b47/Hack%20States%20%5BHigh%20Security%20User%20w%20Ethereum%20Signer%5D%2040990409803943459a3b0bddcf1ce240.csv)
    
    [Loss States [High Security User]](Offchain%20Security%20Model%20Auxiliary%20da5121d8bc6f4b2fb8ae4def6d3f8b47/Loss%20States%20%5BHigh%20Security%20User%5D%20b0f10b86fb0b4a84a6e38e0815774255.csv)
    
- High Security User [3x MFA Methods]
    
    [Hack States [High Security User]](Offchain%20Security%20Model%20Auxiliary%20da5121d8bc6f4b2fb8ae4def6d3f8b47/Hack%20States%20%5BHigh%20Security%20User%5D%20d24fc4a1723b4f1fbc76161b4a1ca07b.csv)
    
    [Loss States [High Security User]](Offchain%20Security%20Model%20Auxiliary%20da5121d8bc6f4b2fb8ae4def6d3f8b47/Loss%20States%20%5BHigh%20Security%20User%5D%204cd83c59eeaf4480ab882b4b865d27d4.csv)
    

**Bucket Level 4**

- Maximum Security User [All Security Methods Enabled]
    
    [Hack States [Maximum Security User]](Offchain%20Security%20Model%20Auxiliary%20da5121d8bc6f4b2fb8ae4def6d3f8b47/Hack%20States%20%5BMaximum%20Security%20User%5D%200737e670db9e4fb0a4be883c59cf6220.csv)
    
    [Loss States [Maximum Security User]](Offchain%20Security%20Model%20Auxiliary%20da5121d8bc6f4b2fb8ae4def6d3f8b47/Loss%20States%20%5BMaximum%20Security%20User%5D%2037b9aa71212b44a0a6ddd37102bd3fea.csv)