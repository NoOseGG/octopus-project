import { PercentState, ResponsePercent } from '@app/store/types/dashboard/DashboardSlicesType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard, getCurrentDate, getLastYear } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import axios from 'axios';
import { RequestData } from '@app/components/dashboards/dashboard/DashboardTypes';

const initialState: PercentState = {
  percent: 0,
  loading: false,
  error: null,
};

export const doCalculatePercentYear = createAsyncThunk<ResponsePercent, RequestData>(
  'doCalculatePercentYear',
  async ({ filters, legal_entity }) => {
    try {
      const currentDate = getCurrentDate();
      const lastYear = getLastYear();

      const url = constructorUrlForDashboard(
        DASH.BASE +
          DASH.AGR_COUNT +
          DASH.GROUP_BY('company_date_registration__year') +
          legal_entity +
          DASH.DATE_BEFORE(currentDate) +
          DASH.DATE_AFTER(`${lastYear}-01-01`) +
          DASH.ORDERING_AGG('-company_date_registration__year'),
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

const calculatePercentSlice = createSlice({
  name: 'calculatePercent',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doCalculatePercentYear.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doCalculatePercentYear.fulfilled, (state, action) => {
      if (action.payload.results.length > 0) {
        const lastYear = action.payload.results[0].Count;
        const lastTwoYear = action.payload.results[1].Count;

        const percent = (((lastYear - lastTwoYear) / lastYear) * 100).toFixed(2);
        state.percent = parseInt(percent, 10);
      } else {
        state.percent = 0;
      }
      state.loading = false;
    });
  },
});

export default calculatePercentSlice.reducer;
