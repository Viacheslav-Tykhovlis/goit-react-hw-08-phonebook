export const selectContacts = state => state.contact.contacts;
export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contact.isLoading;
export const selectError = state => state.contact.error;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;
