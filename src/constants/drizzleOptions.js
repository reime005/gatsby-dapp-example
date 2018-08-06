import NameStorageExample from '../../truffle/build/contracts/NameStorageExample.json'

export const drizzleOptions = {
  contracts: [
    NameStorageExample
  ],
  events: {
    "NameStorageExample": [
      "ContractNameChanged",
      "IndexNameAdded",
      "AddressNameChanged",
    ]
  }
}