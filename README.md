# BetNest

![1708867378298](https://github.com/Nworah-Gabriel/BetNest/assets/99169106/b18286ef-e48c-4787-9ac3-8b79338e8540)

# AirBnB Clone

![hbnb](https://user-images.githubusercontent.com/59466195/183268975-648aa48a-76f1-486d-8e55-b335e4279a9e.png)

## Description
This project is a decentralized application (DApp) built on the Arbitrum one, a layer two (L2) scaling solution that operates on top of the Ethereum network blockchain. This DApp allows users to participate in betting activities without the need for intermediaries. It utilizes smart contracts to manage the betting logic, ensuring transparency and security.

## Features
Bet Creation: Users can create bets by specifying the conditions, such as the event, outcome options, and stake amount.

Bet Participation: Other users can join existing bets by staking the required amount and selecting their predicted outcome.

Smart Contract Logic: All bet conditions and outcomes are enforced by smart contracts, ensuring trustless execution.

Payouts: Once the outcome is determined, winnings are automatically distributed to the winning participants based on the predefined rules.

Transparency: The entire betting process, including bet creation, participation, and payouts, is transparent and verifiable on the blockchain.

## Technologies Used
Arbitrum(Ethereum Blockchain): The core infrastructure for executing smart contracts and recording bet transactions.

Solidity: The programming language used to write smart contracts.

Eth-Brownie: A python library for interacting with Ethereum nodes and smart contracts from web applications.

Frontend Framework: (Next.js) for building the user interface.

Backend Framework: (Django) for building the server side.

## How to Use
1. Connect Wallet: Users need to connect their Ethereum wallets (e.g., MetaMask) to the DApp.

2. Browse Bets: Users can browse existing bets, view their details, and decide whether to participate.

3. Participate in Bets: To participate in a bet, users need to stake the required amount and select their predicted outcome.

4. Wait for Outcome: After the event is concluded, the smart contract determines the outcome, and payouts are automatically processed.

5. Withdraw Winnings: Users can withdraw their winnings from the DApp to their connected wallet.

## API Installation
start up the *console(shell)* in an **interactive mode**

```
~$ git clone https://github.com/Nworah-Gabriel/BetNest.git
```

Navigate to the **cloned Directory**:

```
$ cd BetNest
```

start up the API server with Django framework

```
$ python manage.py runserver
```
![staked bets](https://github.com/Nworah-Gabriel/BetNest/assets/99169106/a5be84e6-dcd3-4d3a-8eb8-9f661bc5ecb8)
![user details](https://github.com/Nworah-Gabriel/BetNest/assets/99169106/c035d988-4dc5-4581-ba15-f3103fde5ed2)

![console](https://user-images.githubusercontent.com/59466195/183268981-14576f75-aa4a-4a4b-b25f-c02f551ec91f.png)

## License
This project is licensed under the MIT License.
