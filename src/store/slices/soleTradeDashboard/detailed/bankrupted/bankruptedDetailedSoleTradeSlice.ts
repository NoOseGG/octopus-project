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

export const doGetBankruptedDetailedSoleTrade = createAsyncThunk<ResponseDetailedInformation, RequestData>(
  'doGetBankruptedDetailedSoleTrade',
  async ({ filters }) => {
    try {
      const url = constructorUrlForDashboard(
        DASH.BASE +
          DASH.PAGE_SIZE(30) +
          DASH.SOLE_TRADE +
          DASH.STATUS_BP +
          DASH.ORDERING('-company_status_from_dttm') +
          DASH.IS_NULL_FALSE('company_status_from_dttm'),
        filters,
        false,
        false,
      );

      const response = await httpDashboard.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const bankruptedDetailedSoleTradeSlice = createSlice({
  name: 'bankruptedDetailedSoleTrade',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetBankruptedDetailedSoleTrade.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetBankruptedDetailedSoleTrade.fulfilled, (state, action) => {
      state.results = action.payload.results;
      state.loading = false;
    });
  },
});

export default bankruptedDetailedSoleTradeSlice.reducer;
