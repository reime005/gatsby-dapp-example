export const getContracts = (state) => state.nameStorageExampleReducer.drizzle ? 
  state.nameStorageExampleReducer.drizzle.contracts : undefined;
export const getStore = (state) => state.nameStorageExampleReducer.drizzle ? 
  state.nameStorageExampleReducer.drizzle.store : undefined;
export const getDrizzle = (state) => state.nameStorageExampleReducer.drizzle;
export const getChannel = (state) => state.nameStorageExampleReducer.channelSubscriptions;
export const getNameStorageExampleReducer = (state) => state.nameStorageExampleReducer;
export const getAccounts = (state) => state.accounts;