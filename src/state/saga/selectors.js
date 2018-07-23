export const getContracts = (state) => state.reducer.drizzle.contracts;
export const getStore = (state) => state.reducer.drizzle.store;
export const getExistingValue = (contract, method, key) => (state) => 
  state.reducer.drizzle.contracts[contract].methods[method].key