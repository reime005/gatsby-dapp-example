export const contracts = {
  NameStorageExample: {
    contractName: "NameStorageExample",
    txMethods: {
      changeContractName: "changeContractName",
      addIndexName: "addIndexName",
      changeAddressName: "changeAddressName"
    },
    callMethods: {
      contractName: "contractName",
      indexName: "indexNames",
      addressName: "addressNames"
    },
    events: {
      ContractNameChanged: "ContractNameChanged",
      IndexNameAdded: "IndexNameAdded",
      AddressNameChanged: "AddressNameChanged"
    }
  }
}