import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contact } from '../types';

interface PhonebookState {
  contacts: Contact[];
}

const initialState: PhonebookState = {
  contacts: [],
};

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const { id, firstName, lastName, phoneNumber } = action.payload;
      const index = state.contacts.findIndex(contact => contact.id === id);
      if (index !== -1) {
        state.contacts[index] = {
          id,
          firstName,
          lastName,
          phoneNumber,
        };
      }
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      if (index !== -1) {
        state.contacts.splice(index, 1);
      }
    },
  },
});

export const { addContact, editContact, deleteContact } = phonebookSlice.actions;

export default phonebookSlice.reducer;