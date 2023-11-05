pragma solidity ^0.8.0;

contract EcrecoverDemo {
    
    // hash = 0xa990077c3205cbDf861e17Fa532eeB069cE9fF96
    function verify(bytes32 hash) public pure returns(address retAddr) {
        uint8 v = 27;
        bytes32 r = hex"1820182018201820182018201820182018201820182018201820182018201820";
        bytes32 s = hex"1820182018201820182018201820182018201820182018201820182018201820";
        
        retAddr= ecrecover(hash, v, r, s);
    }
}