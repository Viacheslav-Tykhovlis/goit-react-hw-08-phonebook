export const getContacts = state => state.contact.contacts;
export const getFilter = state => state.filter;
export const getIsLoading = state => state.contact.isLoading;
export const getError = state => state.contact.error;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;
