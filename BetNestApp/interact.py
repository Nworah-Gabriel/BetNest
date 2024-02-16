from web3 import Web3
import codecs

w3 = Web3(Web3.HTTPProvider('https://arbitrum-sepolia.infura.io/v3/62ec278d3eb941748d8503e6cadaf637'))

contract_address = " 0x4E8f02FCb113785dcDBF07d4d8bbfE061CDe5a3c"

contractABI = [{"inputs": [], "name": "readNumber", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}]

contract_address = contract_address.strip()

contract = w3.eth.contract(address=contract_address, abi=contractABI)

def testit():
    value = contract.functions.readNumber().call()
    return value

# from web3 import Web3

# # Infura API endpoint for the Arbitrum Sequencer chain
# infura_url = 'https://arbitrum-sepolia.infura.io/v3/62ec278d3eb941748d8503e6cadaf637'

# # Create a Web3 instance
# web3 = Web3(Web3.HTTPProvider(infura_url))

# # Get the chain ID
# chain_id = web3.eth.chain_id
# print("Chain ID:", chain_id)