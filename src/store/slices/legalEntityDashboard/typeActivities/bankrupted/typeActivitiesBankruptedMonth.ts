import { TypeActivityState, TypeActivityType } from '@app/store/types/dashboard/TypeActivitiesType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DASH } from '@app/constants/enums/Dashboards';
import { constructorUrlForDashboard, getDateLastMonth } from '@app/utils/utils';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import { httpDashboard } from '@app/api/http.api';

const initialState: TypeActivityState = {
  typeActivities: {
    results: [],
  },
  loading: false,
  error: null,
};

export const doGetBankruptedTypeActivitiesMonth = createAsyncThunk<TypeActivityType, RequestData>(
  'doGetBankruptedTypeActivitiesMonth',
  async ({ filters }) => {
    try {
      const date = getDateLastMonth();
      const url = constructorUrlForDashboard(
        DASH.BASE +
          DASH.AGR_COUNT +
          DASH.GROUP_BY('type_activity_name') +
          DASH.LEGAL_ENTITY +
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
    } catch (error) {
      console.log(error);
    }
  },
);

const typeActivitiesBankruptedMonthSlice = createSlice({
  name: 'typeActivitiesBankruptedMonth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetBankruptedTypeActivitiesMonth.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetBankruptedTypeActivitiesMonth.fulfilled, (state, action) => {
      state.typeActivities = action.payload;
      state.loading = false;
    });
  },
});

export default typeActivitiesBankruptedMonthSlice.reducer;
