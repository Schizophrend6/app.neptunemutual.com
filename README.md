[![Netlify Status](https://api.netlify.com/api/v1/badges/c9b8ce26-2fd7-497f-8aaf-51d1fea5291d/deploy-status)](https://app.netlify.com/sites/unruffled-snyder-b2165b/deploys)

# Pool Page

## Total Value Locked

Sum of all cards' TVL values

## Total NEP Locked

Sum of the following:

- nep token balanceOf(poolContractAddress)
- nep token balanceOf(farmContractAddress)

## Card - Total Value Locked

If (hardcoded per card) nepRewardAllocation is 0, then TVL = (from summary) tvl

Otherwise, Sum of the following:

- (hardcoded per card) nepRewardAllocation \* nepPrice
- (from summary) totalTokensLocked \* tokenPriceInBUSD

Minus following:

- (from summary) totalNepRewards \* nepPrice

# Dashboard

## Total Rewards

**In NEP**
Sum of the following:

- (pool) Sum of (summary) totalNepRewards - all cards
- (bond) Sum of (summary) poolTotalNepPaired - all cards

**In BUSD**
Above sum \* nepPrice

## Total Value Locked

Sum of the following:

- (pool) Total Value Locked - described above
- (bond) Sum of (summary) poolTotalNepPaired \* nepPrice - all cards
- (bond) Sum of (summary) totalLocked \* tokenPriceInBUSD - all cards
- nep token balanceOf(bondContractAddress) \* nepPrice
