require("@nomicfoundation/hardhat-toolbox");

module.exports = {
    // Networks
    networks: {
        ganache: {
            url: 'http://127.0.0.1:8545',
        },
    },

    // Solc
    solidity: "0.8.19",
};