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

export const doGetLiquidatedTypeActivitiesYear = createAsyncThunk<TypeActivityType, RequestData>(
  'doGetLiquidatedTypeActivitiesYear',
  async ({ filters }) => {
    const date = getDateLastYear();
    const url = constructorUrlForDashboard(
      DASH.BASE +
        DASH.AGR_COUNT +
        DASH.GROUP_BY('type_activity_name') +
        DASH.LEGAL_ENTITY +
        DASH.LIQUIDATED_ENTITY +
        DASH.DATE_AFTER_LIQUIDATED(date) +
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

const typeActivitiesLiquidatedYearSlice = createSlice({
  name: 'typeActivitiesLiquidatedYear',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetLiquidatedTypeActivitiesYear.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetLiquidatedTypeActivitiesYear.fulfilled, (state, action) => {
      state.typeActivities = action.payload;
      state.loading = false;
    });
    builder.addCase(doGetLiquidatedTypeActivitiesYear.rejected, (state) => {
      state.typeActivities.results = [];
      state.loading = false;
    });
  },
});

export default typeActivitiesLiquidatedYearSlice.reducer;
