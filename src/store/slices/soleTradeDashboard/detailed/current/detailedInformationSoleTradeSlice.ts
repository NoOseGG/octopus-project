import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DASH } from '@app/constants/enums/Dashboards';
import { constructorUrlForDashboard } from '@app/utils/utils';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import {
  DetailedInformationState,
  ResponseDetailedInformation,
} from '@app/store/types/dashboard/DetailedInformationType';
import { httpDashboard } from '@app/api/http.api';

const initialState: DetailedInformationState = {
  results: [],
  loading: false,
  error: null,
};

export const doGetDetailedSoleTrade = createAsyncThunk<ResponseDetailedInformation, RequestData>(
  'doGetDetailedInformationCompanySoleTrade',
  async ({ filters }) => {
    const url = constructorUrlForDashboard(
      DASH.BASE +
        DASH.PAGE_SIZE(30) +
        DASH.SOLE_TRADE +
        DASH.ORDERING('-company_date_registration') +
        DASH.IS_NULL_FALSE('company_date_registration'),
      filters,
      false,
      false,
    );

    const response = await httpDashboard.get(url);
    return response.data;
  },
);

const detailedInformationSoleTradeSlice = createSlice({
  name: 'detailedInformationSoleTrade',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetDetailedSoleTrade.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetDetailedSoleTrade.fulfilled, (state, action) => {
      state.results = action.payload.results;
      state.loading = false;
    });
    builder.addCase(doGetDetailedSoleTrade.rejected, (state) => {
      state.results = [];
      state.loading = false;
    });
  },
});

export default detailedInformationSoleTradeSlice.reducer;
