from web3 import Web3
import codecs

w3 = Web3(Web3.HTTPProvider('https://arbitrum-sepolia.infura.io/v3/62ec278d3eb941748d8503e6cadaf637'))

# contract_address = " 0x4E8f02FCb113785dcDBF07d4d8bbfE061CDe5a3c"
contract_address= "0x53bb31ca03573Caf1F13b6b19BdfA9b6C2a20179"
contractABI =[{"inputs": [], "stateMutability": "payable", "type": "constructor", "name": "constructor"}, {"anonymous": False, "inputs": [{"indexed": True, "internalType": "address", "name": "depositor", "type": "address"}, {"indexed": False, "internalType": "uint256", "name": "amount", "type": "uint256"}], "name": "Deposit", "type": "event"}, {"anonymous": False, "inputs": [{"indexed": False, "internalType": "address", "name": "", "type": "address"}, {"indexed": False, "internalType": "uint256", "name": "", "type": "uint256"}], "name": "Recieved", "type": "event"}, {"inputs": [{"internalType": "address", "name": "", "type": "address"}], "name": "balances", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "address", "name": "wallet_address", "type": "address"}], "name": "getBalances", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "getContractBalance", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "readNumber", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "uint256", "name": "amount", "type": "uint256"}, {"internalType": "address payable", "name": "reciever", "type": "address"}], "name": "withdraw", "outputs": [{"internalType": "bool", "name": "", "type": "bool"}], "stateMutability": "payable", "type": "function"}, {"stateMutability": "payable", "type": "receive"}]

contract_address = contract_address.strip()

contract = w3.eth.contract(address=contract_address, abi=contractABI)

def testit():
    value = contract.functions.withdraw(2000, "0x532354D85920702C461C59B33b14911D8D1b97F5").call()
    # wthdraw = contract.functions.withdraw(2).call()
    return value


def get_balance(address):
        """
        A function that returns a user balance using it's wallet address
        """
        return contract.functions.getBalances(address).call()


def debit_user(address, amount):
    """
    A function created for debiting user's account balace from the smart contract 
    """

    return contract.functions.DebitUser(address, amount).call()

if __name__ == "__main__":
    number = testit()
    print(number)

    if number == True:
        print("SAGGIO:", contract.functions.getBalances("0x532354D85920702C461C59B33b14911D8D1b97F5").call())
        print("cONTRACT:", contract.functions.getContractBalance().call())
# from web3 import Web3

# # Infura API endpoint for the Arbitrum Sequencer chain
# infura_url = 'https://arbitrum-sepolia.infura.io/v3/62ec278d3eb941748d8503e6cadaf637'

# # Create a Web3 instance
# web3 = Web3(Web3.HTTPProvider(infura_url))

# # Get the chain ID
# chain_id = web3.eth.chain_id
# print("Chain ID:", chain_id)
# "0x532354D85920702C461C59B33b14911D8D1b97F5"