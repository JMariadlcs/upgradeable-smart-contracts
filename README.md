# upgradeable-smart-contracts

This is a Upgradeable Smart Contract workshop from Chainlink Hackaton Spring 2022.

[Proxies by Openzeppeling](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/proxy) are going to be used.

To do so, a local Blockchain is executed using [Hardhat simple storage](https://github.com/smartcontractkit/hardhat-starter-kit) repo, details are explained below step by step.

The workshop followed to complete this repo is [this one](https://www.youtube.com/watch?v=8w8xJaGtZwo&t=3097s).

## Objetives
- Build an upgradeable Tesla Power module Smart Contract:
1. Clon Chainlink Hardhat Startet Kit
2. Create Transparent Proxy + Impelementation Contracts
3. Upgrade our Smart Contract

## Dependencies and Set-Up
- Clone hardhat-starter-kit:
```bash
cd ..
git clone https://github.com/smartcontractkit/hardhat-starter-kit
cd hardhat-simple-storage
```

- Add OpenZeppeling library:
```bash
yarn add @nomiclabs/hardhat-ethers
```

## Resources
- [Proxys by Openzeppeling](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/proxy): Used to 'upgrade' Smart Contracts.