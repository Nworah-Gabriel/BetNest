from web3 import Web3
import codecs
from web3.middleware import geth_poa_middleware


w3 = Web3(Web3.HTTPProvider('https://arbitrum-sepolia.infura.io/v3/62ec278d3eb941748d8503e6cadaf637'))

# contract_address = " 0x4E8f02FCb113785dcDBF07d4d8bbfE061CDe5a3c"
contract_address= "0xB9b8B56a2a379f77b733f4655D98C4cDE0997A59"
sender_address = "0x532354D85920702C461C59B33b14911D8D1b97F5"
sender_address.strip()
contractABI = [{"inputs": [], "stateMutability": "payable", "type": "constructor", "name": "constructor"}, {"anonymous": false, "inputs": [{"indexed": true, "internalType": "address", "name": "depositor", "type": "address"}, {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}], "name": "Deposit", "type": "event"}, {"anonymous": false, "inputs": [{"indexed": false, "internalType": "address", "name": "", "type": "address"}, {"indexed": false, "internalType": "uint256", "name": "", "type": "uint256"}], "name": "Recieved", "type": "event"}, {"anonymous": false, "inputs": [{"indexed": true, "internalType": "address", "name": "source", "type": "address"}, {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}], "name": "Transfer", "type": "event"}, {"inputs": [{"internalType": "address", "name": "userAdress", "type": "address"}, {"internalType": "uint256", "name": "amount", "type": "uint256"}], "name": "CreditUser", "outputs": [{"internalType": "bool", "name": "", "type": "bool"}], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "address", "name": "userAdress", "type": "address"}, {"internalType": "uint256", "name": "amount", "type": "uint256"}], "name": "DebitUser", "outputs": [{"internalType": "bool", "name": "", "type": "bool"}], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "address", "name": "", "type": "address"}], "name": "balances", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "address", "name": "wallet_address", "type": "address"}], "name": "getBalances", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "getContractBalance", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "getSender", "outputs": [{"internalType": "address", "name": "", "type": "address"}], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "address payable", "name": "_recipient", "type": "address"}], "name": "sendEther", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "uint256", "name": "amount", "type": "uint256"}, {"internalType": "address payable", "name": "reciever", "type": "address"}], "name": "withdraw", "outputs": [{"internalType": "bool", "name": "", "type": "bool"}], "stateMutability": "payable", "type": "function"}, {"stateMutability": "payable", "type": "receive"}]
contract_address = contract_address.strip()

contract = w3.eth.contract(address=contract_address, abi=contractABI)

def withdraw(amount):

    # Enable middleware for POA chains
    w3.middleware_onion.inject(geth_poa_middleware, layer=0)

    # Replace with your private key and recipient address
    private_key = '63133419bb31564d176d37b78e5b8f72bf0811e9ae39e61c388e2e29f2085124'

    # Convert private key to bytes
    private_key_bytes = bytes.fromhex(private_key)

    # Get account from private key
    account = w3.eth.account.privateKeyToAccount(private_key_bytes)

    transaction = {
        'to': "0x476A5ca6E3fA9B241FAf184d11Cd635A1154caD9",
        'value': w3.toWei(int(amount), 'wei'),  # Amount to send (in wei)
        'gas': 2000000,  # Gas limit
        'gasPrice': w3.toWei('50', 'gwei'),  # Gas price (in wei)
        'nonce': w3.eth.getTransactionCount(account.address),  # Nonce
    }
    # Sign transaction
    signed_txn = w3.eth.account.signTransaction(transaction, private_key)

    # Send transaction
    tx_hash = w3.eth.sendRawTransaction(signed_txn.rawTransaction)

    # Wait for transaction to be mined
    receipt = w3.eth.waitForTransactionReceipt(tx_hash, timeout=300)
    # debit = debit_user("0x532354d85920702c461c59b33b14911d8d1b97f5", amount) 
    # print("Amount Debited: ", debit)
    print("Transaction sent. Hash:", tx_hash.hex())
    # print("Receipt:", receipt)

    return transaction


def get_balance(address):
        """
        A function that returns a user balance using it's wallet address
        """
        tx_hash = contract.functions.getBalances(address).call({'from': sender_address})
        w3.eth.waitForTransactionReceipt(tx_hash)
        return tx_hash

def debit_user(address, amount):
    """
    A function created for debiting user's account balace from the smart contract 
    """

    tx_hash = contract.functions.DebitUser(address, amount).call({'from': sender_address})
    w3.eth.waitForTransactionReceipt(tx_hash)
    return tx_hash

if __name__ == "__main__":
    number = withdraw(2000)
    
    # print(number)

    if number:
        get_sender = contract.functions.getSender().call({'from': sender_address})
        get_balances = contract.functions.getBalances("0x532354D85920702C461C59B33b14911D8D1b97F5").call({'from': sender_address})
        get_cont = contract.functions.getContractBalance().call({'from': sender_address})
        
        # w3.eth.waitForTransactionReceipt(get_sender, timeout=300)
        # w3.eth.waitForTransactionReceipt(get_balances, timeout=300)
        # w3.eth.waitForTransactionReceipt(get_cont, timeout=300)

        print("SAGGIO:", get_balances)
        print("cONTRACT:", get_cont)
        print("Sender:", get_sender)
# from web3 import Web3

# # Infura API endpoint for the Arbitrum Sequencer chain
# infura_url = 'https://arbitrum-sepolia.infura.io/v3/62ec278d3eb941748d8503e6cadaf637'

# # Create a Web3 instance
# web3 = Web3(Web3.HTTPProvider(infura_url))

# # Get the chain ID
# chain_id = web3.eth.chain_id
# print("Chain ID:", chain_id)
# "0x532354D85920702C461C59B33b14911D8D1b97F5"