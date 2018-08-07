import expectRevert from "./helper/expectRevert";

const NameStorageExample = artifacts.require("NameStorageExample");
const CONTRACT_NAME_TO_CHANGE = "ChangedNameStorageExample";
const ADDRESS_NAME_TO_CHANGE_0 = "0st account's personal name";
const ADDRESS_NAME_TO_CHANGE_1 = "1st account's personal name";

const fromAccount = (accounts, i) => {
  return {
    from: accounts[i]
  }
}

contract('NameStorageExample', async (accounts) => {
  it('should have the correct initial state', async function() {
    const instance = await NameStorageExample.deployed();
    const contractName = await instance.getContractName.call();
    await assert.equal(contractName, 
      "NameStorageExample", "not equal");
  });
  it('should allow only the owner to change the contract name', async function() {
    const instance = await NameStorageExample.deployed();

    await expectRevert(
      instance.changeContractName(CONTRACT_NAME_TO_CHANGE, 
        fromAccount(accounts, 1) //note: account[0] is the owner of the contract
      )
    )

    const tx1 = await instance.changeContractName(CONTRACT_NAME_TO_CHANGE);
    const contractNameAfter = await instance.getContractName.call();

    await assert.equal(contractNameAfter, 
      CONTRACT_NAME_TO_CHANGE, "not equal");
  });
  it('should allow changing the accounts personal names', async function() {
    const instance = await NameStorageExample.deployed();

    const tx1 = await instance.changeAddressName(ADDRESS_NAME_TO_CHANGE_0, 
      fromAccount(accounts, 0));
    const tx2 = await instance.changeAddressName(ADDRESS_NAME_TO_CHANGE_1,
      fromAccount(accounts, 1));

    const personalNameAccount0 = await instance.getAddressName.call(
      fromAccount(accounts, 0));
    const personalNameAccount1 = await instance.getAddressName.call(
      fromAccount(accounts, 1));

    assert.strictEqual(ADDRESS_NAME_TO_CHANGE_0, personalNameAccount0, 
      "personal name did not change");
    assert.strictEqual(ADDRESS_NAME_TO_CHANGE_1, personalNameAccount1, 
      "personal name did not change");
  });
  it('should allow incrementing the global name mapping', async function() {
    const instance = await NameStorageExample.deployed();
    const MAX = 1;
    const PREFIX = "name_";

    for (let i = 0; i < MAX; i++) {
      await instance.addIndexName(PREFIX + i);
    }

    for (let i = 0; i < MAX; i++) {
      const name = await instance.getIndexName.call(i);
      await assert.strictEqual(PREFIX + i, name, "index name do not equal");
    }
  });
});