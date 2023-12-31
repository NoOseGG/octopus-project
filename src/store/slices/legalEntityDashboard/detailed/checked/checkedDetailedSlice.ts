import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { DASH } from '@app/constants/enums/Dashboards';
import { constructorUrlForDashboard } from '@app/utils/utils';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import {
  DetailedInformationState,
  ResponseDetailedInformation,
} from '@app/store/types/dashboard/DetailedInformationType';

const initialState: DetailedInformationState = {
  results: [],
  loading: false,
  error: null,
};

export const doGetCheckedDetailed = createAsyncThunk<ResponseDetailedInformation, RequestData>(
  'doGetCheckedDetailed',
  async ({ filters }) => {
    try {
      const url = constructorUrlForDashboard(
        DASH.BASE_INSPECTION +
          DASH.PAGE_SIZE(30) +
          DASH.LEGAL_ENTITY +
          DASH.ORDERING('-company_date_registration') +
          DASH.IS_NULL_FALSE('company_date_registration'),
        filters,
        false,
        false,
      );

      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const checkedDetailedSlice = createSlice({
  name: 'checkedDetailed',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetCheckedDetailed.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetCheckedDetailed.fulfilled, (state, action) => {
      state.results = action.payload.results;
      state.loading = false;
    });
  },
});

export default checkedDetailedSlice.reducer;
