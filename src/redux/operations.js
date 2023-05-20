import { createAsyncThunk } from '@reduxjs/toolkit';
import fetch from 'mock/fetch';
import toast from 'react-hot-toast';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const { data } = await fetch();
  // console.log(data);
  return data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async name => {
    try {
      const toastId = toast.loading('Loading...', { position: 'top-right' });
      const { data } = await fetch.post('', { ...name });
      toast.success('Done', { id: toastId, position: 'top-right' });
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
      const toastId = toast.loading('Loading...', { position: 'top-right' });
      console.log(+id);
      await fetch.delete(`/${id}`);
      toast.error('Done', { id: toastId });
      return id;
    } catch (error) {
      console.log(error);
    }
  }
);

// export default fetchAll;
