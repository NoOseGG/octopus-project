import { MapBelarusResponse, MapBelarusSlice } from '@app/store/types/landing/MapBelarusTypes';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { REGIONS_URL } from '@app/constants/Constants';

const initialState: MapBelarusSlice = {
  legalEntities: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  soleTrades: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
};

export const doGetCountSoleTradesOfRegions = createAsyncThunk<MapBelarusResponse>(
  'doGetCountSoleTradesOfRegions',
  async () => {
    try {
      const response = await axios.get(REGIONS_URL.SOLE_TRADE);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const doGetCountLegalEntitiesOfRegions = createAsyncThunk<MapBelarusResponse>(
  'doGetCountLegalEntitiesOfRegions',
  async () => {
    try {
      const response = await axios.get(REGIONS_URL.LEGAL_ENTITY);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const mapBelarusSlice = createSlice({
  name: 'mapBelarusSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetCountSoleTradesOfRegions.fulfilled, (state, action) => {
      state.soleTrades = action.payload;
    });
    builder.addCase(doGetCountLegalEntitiesOfRegions.fulfilled, (state, action) => {
      state.legalEntities = action.payload;
    });
  },
});

export default mapBelarusSlice.reducer;
