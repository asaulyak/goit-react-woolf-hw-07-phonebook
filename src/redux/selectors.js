import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter;

export const selectContactsLoading = state => state.contacts.isLoading;

export const selectContactsError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) {
      return contacts;
    }

    return contacts.filter(item => item.name.toLowerCase().includes(filter));
  }
);
