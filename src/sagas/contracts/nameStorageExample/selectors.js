export const getContracts = (state) => state.nameStorageExampleReducer.drizzle ? 
  state.nameStorageExampleReducer.drizzle.contracts : {};
export const getStore = (state) => state.nameStorageExampleReducer.drizzle ? 
  state.nameStorageExampleReducer.drizzle.store : {};