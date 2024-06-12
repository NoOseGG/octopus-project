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

export const doGetBankruptedTypeActivitiesSoleTradeQuarter = createAsyncThunk<TypeActivityType, RequestData>(
  'doGetBankruptedTypeActivitiesSoleTradeQuarter',
  async ({ filters }) => {
    const date = getDateLastQuarter();
    const url = constructorUrlForDashboard(
      DASH.BASE +
        DASH.AGR_COUNT +
        DASH.GROUP_BY('type_activity_name') +
        DASH.SOLE_TRADE +
        DASH.STATUS_BP +
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

const typeActivitiesBankruptedSoleTradeQuarterSlice = createSlice({
  name: 'typeActivitiesBankruptedSoleTradeQuarter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetBankruptedTypeActivitiesSoleTradeQuarter.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetBankruptedTypeActivitiesSoleTradeQuarter.fulfilled, (state, action) => {
      state.typeActivities = action.payload;
      state.loading = false;
    });
    builder.addCase(doGetBankruptedTypeActivitiesSoleTradeQuarter.rejected, (state) => {
      state.typeActivities.results = [];
      state.loading = false;
    });
  },
});

export default typeActivitiesBankruptedSoleTradeQuarterSlice.reducer;
