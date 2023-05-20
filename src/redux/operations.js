import { createAsyncThunk } from '@reduxjs/toolkit';
import fetch from 'mock/fetch';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const { data } = await fetch();
  // console.log(data);
  return data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async name => {
    try {
      const { data } = await fetch.post('', { ...name });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      console.log(+id);
      await fetch.delete(`/${id}`);

      return id;
    } catch (error) {
      console.log(error);
    }
  }
);

// export default fetchAll;
