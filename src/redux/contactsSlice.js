import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = contactSlice.actions;

export default contactSlice.reducer;
