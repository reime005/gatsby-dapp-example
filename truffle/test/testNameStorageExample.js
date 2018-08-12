import expectRevert from "./helper/expectRevert";

const NameStorageExample = artifacts.require("NameStorageExample");
const CONTRACT_NAME  = "NameStorageExample";
const CONTRACT_NAME_TO_CHANGE = "ChangedNameStorageExample";
const ADDRESS_NAME_TO_CHANGE_0 = "0st account's personal name";
const ADDRESS_NAME_TO_CHANGE_1 = "1st account's personal name";

const fromAccount = (accounts, i) => {
  return {
    from: accounts[i]
  }
}

//TODO: Add tests for events to be emitted/thrown
contract('NameStorageExample', async (accounts) => {
  it('should have the correct initial state', async function() {
    const instance = await NameStorageExample.deployed();
    const contractName = await instance.contractName();
    await assert.equal(contractName, 
      CONTRACT_NAME, "not equal");
  });
  it('should allow only the owner to change the contract name', async function() {
    const instance = await NameStorageExample.deployed();

    // check if someone other than the owner is eligible to change to contrac name
    // function will be reverted if not the owner tries so
    // note: account[0] is the owner of the contract
    await expectRevert(
      instance.changeContractName(CONTRACT_NAME_TO_CHANGE, 
        fromAccount(accounts, 1) 
      )
    )

    // let the owner change the name
    const tx1 = await instance.changeContractName(CONTRACT_NAME_TO_CHANGE);
    const contractNameAfter = await instance.contractName();

    await assert.equal(contractNameAfter, 
      CONTRACT_NAME_TO_CHANGE, "not equal");
  });
  it('should allow changing the accounts personal names', async function() {
    const instance = await NameStorageExample.deployed();

    // change the name related to the sender's address
    const tx1 = await instance.changeAddressName(ADDRESS_NAME_TO_CHANGE_0, 
      fromAccount(accounts, 0));
    const tx2 = await instance.changeAddressName(ADDRESS_NAME_TO_CHANGE_1,
      fromAccount(accounts, 1));

    // check if the name related to the address has been changed
    const personalNameAccount0 = await instance.addressNames(accounts[0])
    const personalNameAccount1 = await instance.addressNames(accounts[1])

    assert.strictEqual(ADDRESS_NAME_TO_CHANGE_0, personalNameAccount0, 
      "personal name did not change");
    assert.strictEqual(ADDRESS_NAME_TO_CHANGE_1, personalNameAccount1, 
      "personal name did not change");
  });
  it('should allow incrementing the global name mapping', async function() {
    const instance = await NameStorageExample.deployed();
    const MAX = 4;
    const PREFIX = "name_";

    // add random number names
    for (let i = 0; i < MAX; i++) {
      await instance.addIndexName(PREFIX + i);
    }

    // check if they are correctly created
    for (let i = 0; i < MAX; i++) {
      const name = await instance.indexNames(i);
      await assert.strictEqual(PREFIX + i, name, "index name do not equal");
    }
  });
});