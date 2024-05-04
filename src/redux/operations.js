import { createAsyncThunk } from '@reduxjs/toolkit';
import { http } from '../http';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await http.get('/contacts');

      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await http.post('/contacts', contact);

      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await http.delete(`/contacts/${contactId}`);

      return contactId;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);
