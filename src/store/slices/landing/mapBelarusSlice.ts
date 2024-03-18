import { MapBelarusObject, MapBelarusSlice } from '@app/store/types/landing/MapBelarusTypes';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { REGIONS_URL } from '@app/constants/Constants';

const initialState: MapBelarusSlice = {
  countEntitiesOfMap: [],
};

export const doGetCountEntitiesOfMap = createAsyncThunk<MapBelarusObject[]>('doGetCountEntitiesOfMap', async () => {
  try {
    const response = await axios.get(REGIONS_URL.MAP_STATISTICS);

    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const mapBelarusSlice = createSlice({
  name: 'mapBelarusSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetCountEntitiesOfMap.fulfilled, (state, action) => {
      state.countEntitiesOfMap = action.payload;
    });
  },
});

export default mapBelarusSlice.reducer;
