import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard, getCurrentYear } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import axios from 'axios';
import { RequestData } from '@app/components/dashboards/dashboard/DashboardTypes';
import { PercentState, ResponsePercent } from '@app/store/types/dashboard/DashboardSlicesType';

const initialState: PercentState = {
  percent: 0,
  loading: false,
  error: null,
};

export const doCalculateLiquidatedPercentYear = createAsyncThunk<ResponsePercent, RequestData>(
  'doCalculateLiquidatedPercentYear',
  async ({ filters, legal_entity }) => {
    try {
      const year = getCurrentYear();
      const url = constructorUrlForDashboard(
        DASH.BASE + legal_entity + DASH.LIQUIDATED_ENTITY + DASH.DATE_AFTER_LIQUIDATED(`${year}-01-01`),
        filters,
        true,
        false,
      );
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const calculateLiquidatedPercentSlice = createSlice({
  name: 'calculateLiquidatedPercent',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doCalculateLiquidatedPercentYear.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doCalculateLiquidatedPercentYear.fulfilled, (state, action) => {
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

export default calculateLiquidatedPercentSlice.reducer;
