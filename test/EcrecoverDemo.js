const { expect } = require('chai');
const { ethers } = require('hardhat');

describe("check is the target address or not", ()=>{
    it("verify", async () => { 

        const EcrecoverDemoFactory = await ethers.getContractFactory("EcrecoverDemo")

        const EcrecoverDemo = await EcrecoverDemoFactory.deploy();
        
        await EcrecoverDemo.waitForDeployment()

        const receipt = await EcrecoverDemo.verify("0xa50e507019122a7e00e77c401a9c7800debd1e6de5044b5d23cb7cf10f8f9099")

        expect(receipt).to.equal("0xa990077c3205cbDf861e17Fa532eeB069cE9fF96")

    });
})