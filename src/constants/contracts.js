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
      addressName: "getAddressName"
    },
    events: {
      ContractNameChanged: "ContractNameChanged",
      IndexNameAdded: "IndexNameAdded",
      AddressNameChanged: "AddressNameChanged"
    }
  }
}