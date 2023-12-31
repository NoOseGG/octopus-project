import { TypeActivityState, TypeActivityType } from '@app/store/types/dashboard/TypeActivitiesType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DASH } from '@app/constants/enums/Dashboards';
import { constructorUrlForDashboard, getCurrentYear } from '@app/utils/utils';
import axios from 'axios';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';

const initialState: TypeActivityState = {
  typeActivities: {
    results: [],
  },
  loading: false,
  error: null,
};

export const doGetCheckedTypeActivitiesYearSoleTrade = createAsyncThunk<TypeActivityType, RequestData>(
  'doGetCheckedTypeActivitiesYearSoleTrade',
  async ({ filters }) => {
    try {
      const year = getCurrentYear();
      const url = constructorUrlForDashboard(
        DASH.BASE_INSPECTION +
          DASH.AGR_COUNT +
          DASH.GROUP_BY('type_activity_name') +
          DASH.SOLE_TRADE +
          DASH.DATE_AFTER_INSPECTION(`${year}-01-01`) +
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

const typeActivitiesCheckedYearSoleTradeSlice = createSlice({
  name: 'typeActivitiesCheckedYearSoleTrade',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetCheckedTypeActivitiesYearSoleTrade.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetCheckedTypeActivitiesYearSoleTrade.fulfilled, (state, action) => {
      state.typeActivities = action.payload;
      state.loading = false;
    });
  },
});

export default typeActivitiesCheckedYearSoleTradeSlice.reducer;
