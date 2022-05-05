const { assert, expect } = require("chai")
const { network, deployments, ethers } = require("hardhat")
const { isCallTrace } = require("hardhat/internal/hardhat-network/stack-traces/message-trace")
const { developmentChains } = require("../../helper-hardhat-config")

let Tesla, tesla 

describe('Tesla (proxy)', function () {
    beforeEach(async function () {
        Tesla = await ethers.getContractFactory("TeslaPower")
        tesla = await upgrades.deployProxy(Tesla, [600], { initializer: 'setHorsePower' })
        })
 

    it('retrieve a value previously initialized', async function () {
        expect((await tesla.retrieveHorsePower()).toString()).to.equal('600')
    })
    it('upgrades', async function () {
        const TeslaV2 = await ethers.getContractFactory("TeslaPowerV2")
        teslaV2 = await upgrades.upgradeProxy(tesla.address, TeslaV2)
        await teslaV2.incrementHorsePower()
        let result = await teslaV2.retrieveHorsePower()
        expect(result).to.equal('601')
    })
})