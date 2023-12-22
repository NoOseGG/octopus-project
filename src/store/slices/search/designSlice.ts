import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  isNewDesign: boolean;
}

const initialState: IInitialState = {
  isNewDesign: true,
};

const designSlice = createSlice({
  name: 'design',
  initialState,
  reducers: {
    changeDesign: (state) => {
      state.isNewDesign = !state.isNewDesign;
    },
  },
});

export const { changeDesign } = designSlice.actions;
export default designSlice.reducer;
