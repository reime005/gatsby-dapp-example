export const getContracts = (state) => state.nameStorageExampleReducer.drizzle ? 
  state.nameStorageExampleReducer.drizzle.contracts : undefined;
export const getStore = (state) => state.nameStorageExampleReducer.drizzle ? 
  state.nameStorageExampleReducer.drizzle.store : undefined;
export const getDrizzle = (state) => state.nameStorageExampleReducer.drizzle;