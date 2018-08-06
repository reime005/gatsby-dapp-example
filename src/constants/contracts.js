export const contracts = {
  NameStorageExample: {
    contractName: "NameStorageExample",
    txMethods: {
      changeContractName: "changeContractName",
      addIndexName: "addIndexName",
      changeAddressName: "changeAddressName"
    },
    callMethods: {
      contractName: "getContractName",
      indexName: "getIndexName",
      arbitraryNames: "getArbitraryNames",
      addressName: "getAddressName"
    },
    events: {
      ContractNameChanged: "ContractNameChanged",
      IndexNameAdded: "IndexNameAdded",
      AddressNameChanged: "AddressNameChanged"
    }
  }
}