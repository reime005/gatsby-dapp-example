export const contracts = {
  NameStorageExample: {
    contractName: "NameStorageExample",
    txMethods: {
      changeName: "changeName"
    },
    callMethods: {
      name: "getName",
      numbers: "getNumbers"
    },
    events: {
      NameChangedEvent: "NameChangedEvent"
    }
  }
}