//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TestContract{
    uint256 number = 7;

    function readNumber() public view returns (uint256){
        return number;
    }
}