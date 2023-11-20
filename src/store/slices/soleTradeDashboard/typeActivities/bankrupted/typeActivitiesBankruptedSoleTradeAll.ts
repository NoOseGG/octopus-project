import { TypeActivityState, TypeActivityType } from '@app/store/types/dashboard/TypeActivitiesType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DASH } from '@app/constants/enums/Dashboards';
import { constructorUrlForDashboard, getCurrentDate } from '@app/utils/utils';
import axios from 'axios';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';

const initialState: TypeActivityState = {
  typeActivities: {
    results: [],
  },
  loading: false,
  error: null,
};

export const doGetBankruptedTypeActivitiesSoleTradeAll = createAsyncThunk<TypeActivityType, RequestData>(
  'doGetBankruptedTypeActivitiesSoleTradeAll',
  async ({ filters }) => {
    try {
      let baseUrl =
        DASH.BASE +
        DASH.AGR_COUNT +
        DASH.GROUP_BY('type_activity_name') +
        DASH.SOLE_TRADE +
        DASH.STATUS_BP +
        DASH.IS_NULL_FALSE('type_activity_name') +
        DASH.PAGE_SIZE(10000);
      let url;
      if (!filters.isDate) {
        const currentDate = getCurrentDate();
        baseUrl += DASH.DATE_BEFORE_LIQUIDATED(currentDate);
        url = constructorUrlForDashboard(baseUrl, filters, false, false);
      } else {
        url = constructorUrlForDashboard(baseUrl, filters, false, true);
      }

      const response = await axios.get(url + DASH.ORDERING_AGG('-Count'));
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const typeActivitiesBankruptedSoleTradeAllSlice = createSlice({
  name: 'typeActivitiesBankruptedSoleTradeAll',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetBankruptedTypeActivitiesSoleTradeAll.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetBankruptedTypeActivitiesSoleTradeAll.fulfilled, (state, action) => {
      state.typeActivities = action.payload;
      state.loading = false;
    });
  },
});

export default typeActivitiesBankruptedSoleTradeAllSlice.reducer;
