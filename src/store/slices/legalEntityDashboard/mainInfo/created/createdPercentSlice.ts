import { PercentState, ResponsePercent } from '@app/store/types/dashboard/DashboardSlicesType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard, getCurrentDate, getLastYear } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import axios from 'axios';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';

const initialState: PercentState = {
  percent: 0,
  loading: false,
  error: null,
};

export const doCalculateCreatedPercent = createAsyncThunk<ResponsePercent, RequestData>(
  'doCalculateCreatedPercent',
  async ({ filters }) => {
    try {
      const currentDate = getCurrentDate();
      const lastYear = getLastYear();

      const url = constructorUrlForDashboard(
        DASH.BASE +
          DASH.AGR_COUNT +
          DASH.GROUP_BY('company_date_registration__year') +
          DASH.LEGAL_ENTITY +
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

const createdPercentSlice = createSlice({
  name: 'calculatePercent',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doCalculateCreatedPercent.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doCalculateCreatedPercent.fulfilled, (state, action) => {
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

export default createdPercentSlice.reducer;
