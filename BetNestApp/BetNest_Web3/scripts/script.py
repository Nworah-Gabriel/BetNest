from brownie import BetNestContract, accounts


def main():
    acct = accounts.load('SAGGIO')
    return BetNestContract.deploy({"from": acct})
    
value = main()
print("Contract deployed at:", value)

