import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectSearchName = (state) => state.filters.name;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectSearchName],
  (contacts, searchName) => {
    return contacts.filter((elem) => {
      return elem.name.toLowerCase().includes(searchName.toLowerCase());
    });
  }
);
