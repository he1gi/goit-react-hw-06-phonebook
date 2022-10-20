import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialContactsState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    addContacts: {
      reducer(store, { payload }) {
        store.push(payload);
      },
      prepare(contact) {
        return {
          payload: {
            id: nanoid(5),
            ...contact,
          },
        };
      },
    },
    removeContacts: (store, { payload }) => {
      return store.filter(({ id }) => id !== payload);
    },
  },
});

export const { addContacts, removeContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
