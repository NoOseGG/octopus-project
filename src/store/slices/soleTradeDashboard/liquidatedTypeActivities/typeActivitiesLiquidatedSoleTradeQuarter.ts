import { TypeActivityState, TypeActivityType } from '@app/store/types/dashboard/TypeActivitiesType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DASH } from '@app/constants/enums/Dashboards';
import { constructorUrlForDashboard, getDateLastQuarter } from '@app/utils/utils';
import axios from 'axios';
import { RequestData } from '@app/components/dashboards/dashboard/DashboardTypes';

const initialState: TypeActivityState = {
  typeActivities: {
    results: [],
  },
  loading: false,
  error: null,
};

export const doGetTypeActivitiesLiquidatedSoleTradeLastQuarter = createAsyncThunk<TypeActivityType, RequestData>(
  'doGetTypeActivitiesLiquidatedSoleTradeLastQuarter',
  async ({ filters }) => {
    try {
      const date = getDateLastQuarter();
      const url = constructorUrlForDashboard(
        DASH.BASE +
          DASH.AGR_COUNT +
          DASH.GROUP_BY('type_activity_name') +
          DASH.SOLE_TRADE +
          DASH.LIQUIDATED_ENTITY +
          DASH.DATE_AFTER_LIQUIDATED(date) +
          DASH.IS_NULL_FALSE('type_activity_name') +
          DASH.PAGE_SIZE(10000),
        filters,
        false,
        false,
      );
      const response = await axios.get(url + DASH.ORDERING_AGG('-Count'));
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const typeActivitiesLiquidatedSoleTradeQuarterSlice = createSlice({
  name: 'typeActivitiesLiquidatedSoleTradeQuarter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetTypeActivitiesLiquidatedSoleTradeLastQuarter.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetTypeActivitiesLiquidatedSoleTradeLastQuarter.fulfilled, (state, action) => {
      state.typeActivities = action.payload;
      state.loading = false;
    });
  },
});

export default typeActivitiesLiquidatedSoleTradeQuarterSlice.reducer;
