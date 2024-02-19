//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;



contract TestContract{
    constructor () payable {

    }

    uint256 number = 7;

    mapping(address => uint256) public balances;
    event Deposit(address indexed depositor, uint256 amount);
    event Recieved(address, uint256);
    function readNumber() public view returns (uint256){
        return number;
    }

    receive() external payable {
        balances[msg.sender] += msg.value;
        
        //Emit an event to log the recieved and deposit
        emit Recieved(msg.sender, msg.value);
        emit Deposit(msg.sender, msg.value);
    }

    //a function for withdrawing a fungible token(Arbitrium)
     function withdraw(uint256 amount, address payable reciever) public payable returns(bool){
        
        // require(balances[reciever] >= amount, "insufficient funds");
        balances[reciever] -= uint256(amount);
        (bool res, ) = reciever.call{value:amount}("");
        require(res, "Failed to send Ether");
        return (res);
    }


    //A function the gets balance of a specific user
    function getBalances(address wallet_address) public view returns (uint256) {
        return balances[wallet_address];
    }

    //A function getting the contract balance
    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }


    //A function for debiting a user account
    function DebitUser(address userAdress, uint amount) public returns (bool) {
        require(balances[userAdress] >= amount, "insufficient funds");
        balances[userAdress] -= amount;
        return true;
    }

    //A function for crediting a user account
    function CreditUser(address userAdress, uint amount) public returns (bool) {
        require(balances[userAdress], "invalid address");
        balances[userAdress] += amount;
        return true;
    }
}