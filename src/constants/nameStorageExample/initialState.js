import {
  contracts
} from '~/constants';

export const initialState = {
  [contracts.NameStorageExample.callMethods.contractName]: "",
  [contracts.NameStorageExample.callMethods.indexName]: "",
  [contracts.NameStorageExample.callMethods.addressName]: "",
  txError: undefined,
  drizzle: undefined,
  index: 0,
  channelSubscriptions: []
}