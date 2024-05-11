import { TypeActivityState, TypeActivityType } from '@app/store/types/dashboard/TypeActivitiesType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DASH } from '@app/constants/enums/Dashboards';
import { constructorUrlForDashboard, getDateLastQuarter } from '@app/utils/utils';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import { httpDashboard } from '@app/api/http.api';

const initialState: TypeActivityState = {
  typeActivities: {
    results: [],
  },
  loading: false,
  error: null,
};

export const doGetTypeActivitiesQuarterSoleTrade = createAsyncThunk<TypeActivityType, RequestData>(
  'doGetTypeActivitiesQuarterSoleTrade',
  async ({ filters }) => {
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
    const response = await httpDashboard.get(url + DASH.ORDERING_AGG('-Count'));
    return response.data;
  },
);

const typeSoleTradeActivitiesQuarterSlice = createSlice({
  name: 'typeSoleTradeActivitiesQuarter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetTypeActivitiesQuarterSoleTrade.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetTypeActivitiesQuarterSoleTrade.fulfilled, (state, action) => {
      state.typeActivities = action.payload;
      state.loading = false;
    });
    builder.addCase(doGetTypeActivitiesQuarterSoleTrade.rejected, (state) => {
      state.typeActivities.results = [];
      state.loading = false;
    });
  },
});

export default typeSoleTradeActivitiesQuarterSlice.reducer;
