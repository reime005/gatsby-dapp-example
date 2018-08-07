import {
  contracts
} from '~/constants';

export const initialState = {
  [contracts.NameStorageExample.callMethods.name]: "",
  [contracts.NameStorageExample.callMethods.numbers]: [],
  txError: undefined,
  drizzle: undefined,
  index: 0,
  channelSubscriptions: []
}