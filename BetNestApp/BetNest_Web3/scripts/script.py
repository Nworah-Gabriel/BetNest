from brownie import TestContract, accounts


def main():
    acct = accounts.load('SAGGIO')
    return TestContract.deploy({"from": acct})
    
value = main()
print("Contract deployed at:", value)

