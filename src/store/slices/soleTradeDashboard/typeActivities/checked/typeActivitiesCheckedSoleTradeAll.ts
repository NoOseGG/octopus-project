import { TypeActivityState, TypeActivityType } from '@app/store/types/dashboard/TypeActivitiesType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DASH } from '@app/constants/enums/Dashboards';
import { constructorUrlForDashboard, getCurrentDate } from '@app/utils/utils';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import { httpDashboard } from '@app/api/http.api';

const initialState: TypeActivityState = {
  typeActivities: {
    results: [],
  },
  loading: false,
  error: null,
};

export const doGetCheckedTypeActivitiesAllSoleTrade = createAsyncThunk<TypeActivityType, RequestData>(
  'doGetCheckedTypeActivitiesAllSoleTrade',
  async ({ filters }) => {
    let baseUrl =
      DASH.BASE_INSPECTION +
      DASH.AGR_COUNT +
      DASH.GROUP_BY('type_activity_name') +
      DASH.SOLE_TRADE +
      DASH.IS_NULL_FALSE('type_activity_name') +
      DASH.PAGE_SIZE(10000);
    let url;
    if (!filters.isDate) {
      const currentDate = getCurrentDate();
      baseUrl += DASH.DATE_BEFORE_INSPECTION(currentDate);
      url = constructorUrlForDashboard(baseUrl, filters, false, false);
    } else {
      url = constructorUrlForDashboard(baseUrl, filters, false, true);
    }

    const response = await httpDashboard.get(url + DASH.ORDERING_AGG('-Count'));
    return response.data;
  },
);

const typeActivitiesCheckedAllSoleTradeSlice = createSlice({
  name: 'typeActivitiesCheckedAllSoleTrade',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetCheckedTypeActivitiesAllSoleTrade.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetCheckedTypeActivitiesAllSoleTrade.fulfilled, (state, action) => {
      state.typeActivities = action.payload;
      state.loading = false;
    });
    builder.addCase(doGetCheckedTypeActivitiesAllSoleTrade.rejected, (state) => {
      state.typeActivities.results = [];
      state.loading = false;
    });
  },
});

export default typeActivitiesCheckedAllSoleTradeSlice.reducer;
