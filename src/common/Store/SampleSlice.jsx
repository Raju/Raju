import { createSlice } from '@reduxjs/toolkit';

const SampleSlice = createSlice ( {
    name         : `sample`,
    initialState : {},
    reducers     : {},
  } ),
  { actions, reducer } = SampleSlice;

export { actions };

export default reducer;
