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
})