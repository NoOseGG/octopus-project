import { TypeActivityState, TypeActivityType } from '@app/store/types/dashboard/TypeActivitiesType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DASH } from '@app/constants/enums/Dashboards';
import { constructorUrlForDashboard, getDateLastYear } from '@app/utils/utils';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import { httpDashboard } from '@app/api/http.api';

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
    const date = getDateLastYear();
    const url = constructorUrlForDashboard(
      DASH.BASE_INSPECTION +
        DASH.AGR_COUNT +
        DASH.GROUP_BY('type_activity_name') +
        DASH.SOLE_TRADE +
        DASH.DATE_AFTER_INSPECTION(date) +
        DASH.IS_NULL_FALSE('type_activity_name') +
        DASH.PAGE_SIZE(10000),
      filters,
      false,
      false,
    );
    const response = await httpDashboard.get(url + DASH.ORDERING_AGG('-Count'));
    return response.data;
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
    builder.addCase(doGetCheckedTypeActivitiesYearSoleTrade.rejected, (state) => {
      state.typeActivities.results = [];
      state.loading = false;
    });
  },
});

export default typeActivitiesCheckedYearSoleTradeSlice.reducer;
