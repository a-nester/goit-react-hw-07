import { createSlice, nanoid } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";

// навмисно задав початковий стан не пустий
const contactsInitialState = {
  items: [
    // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  isLoading: false,
  error: null,
};

const handlePending = (state, action) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.indexOf((item) => item.id === action.payload);
        state.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected);
  },

  // reducers: {
  //   addContact: {
  //     reducer(state, action) {
  //       state.items.push(action.payload);
  //     },
  //     prepare(name, number) {
  //       return {
  //         payload: {
  //           id: nanoid(),
  //           name,
  //           number,
  //         },
  //       };
  //     },
  //   },

  //   deleteContact(state, action) {
  //     const index = state.items.findIndex((task) => {
  //       return task.id === action.payload;
  //     });

  //     state.items.splice(index, 1);
  //   },
  // },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
