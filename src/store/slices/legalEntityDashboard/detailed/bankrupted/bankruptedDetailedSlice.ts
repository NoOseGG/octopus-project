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

export const doGetBankruptedDetailed = createAsyncThunk<ResponseDetailedInformation, RequestData>(
  'doGetBankruptedDetailed',
  async ({ filters }) => {
    try {
      const url = constructorUrlForDashboard(
        DASH.BASE +
          DASH.PAGE_SIZE(30) +
          DASH.LEGAL_ENTITY +
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

const bankruptedDetailedSlice = createSlice({
  name: 'bankruptedDetailed',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetBankruptedDetailed.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetBankruptedDetailed.fulfilled, (state, action) => {
      state.results = action.payload.results;
      state.loading = false;
    });
  },
});

export default bankruptedDetailedSlice.reducer;
