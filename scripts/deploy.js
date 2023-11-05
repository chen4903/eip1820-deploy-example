const { ethers } = require('hardhat');
const {ERC1820RAWDATA} = require('./CALLDATA');

async function main() {
    // 这里回获取到Ganache的第一个默认账户：owner=0x54cA04ea3EE113aDC9ac3eFFE028429E9FB674f0
    const [owner] = await ethers.getSigners();

    // 发送 1 ether 给0xa990077c3205cbDf861e17Fa532eeB069cE9fF96，然后这个地址会去部署合约，否则这个地址不够钱去部署合约
    console.log("send 1 ether to deployer: 0xa990077c3205cbDf861e17Fa532eeB069cE9fF96")

    await owner.sendTransaction({
        to: "0xa990077c3205cbDf861e17Fa532eeB069cE9fF96",
        value: ethers.parseUnits('1',"ether")
    });

    console.log("send raw tx, 0xa990077c3205cbDf861e17Fa532eeB069cE9fF96 will deploy eip 1820 contract")

    // 同一个网络中只能部署一次，因为这个ERC1820RAWDATA包含nonce，他无法部署多次
    // 换句话说，这个合约已经被部署过了，不能再被部署
    const txHash = await ethers.provider.send('eth_sendRawTransaction', [ERC1820RAWDATA]);
  
    console.log("deploy successfully! the tx is:",txHash);

    const txReceipt = await ethers.provider.getTransaction(txHash)

    console.log("txReceipt is:",txReceipt);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });