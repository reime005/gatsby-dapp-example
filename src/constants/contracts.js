export const contracts = {
  NameStorageExample: {
    contractName: "NameStorageExample",
    txMethods: {
      changeName: "changeName",
      changeFoo: "changeFoo"
    },
    callMethods: {
      name: "getName",
      numbers: "getNumbers",
      foo: "getFoo"
    },
    events: {
      NameChangedEvent: "NameChangedEvent",
      FooChangedEvent: "FooChangedEvent"
    }
  }
}