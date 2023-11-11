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

export const doGetTypeSoleTradeActivitiesLastQuarter = createAsyncThunk<TypeActivityType, RequestData>(
  'doGetTypeSoleTradeActivitiesLastQuarter',
  async ({ filters }) => {
    try {
      const date = getDateLastQuarter();
      const url = constructorUrlForDashboard(
        DASH.BASE +
          DASH.AGR_COUNT +
          DASH.GROUP_BY('type_activity_name') +
          DASH.SOLE_TRADE +
          DASH.STATUS_AT +
          DASH.DATE_AFTER(date) +
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

const typeSoleTradeActivitiesQuarterSlice = createSlice({
  name: 'typeSoleTradeActivitiesQuarter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetTypeSoleTradeActivitiesLastQuarter.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetTypeSoleTradeActivitiesLastQuarter.fulfilled, (state, action) => {
      state.typeActivities = action.payload;
      state.loading = false;
    });
  },
});

export default typeSoleTradeActivitiesQuarterSlice.reducer;
