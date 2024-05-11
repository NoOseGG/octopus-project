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

export const doGetTypeActivitiesYear = createAsyncThunk<TypeActivityType, RequestData>(
  'doGetTypeActivitiesYear',
  async ({ filters }) => {
    const date = getDateLastYear();
    const url = constructorUrlForDashboard(
      DASH.BASE +
        DASH.AGR_COUNT +
        DASH.GROUP_BY('type_activity_name') +
        DASH.LEGAL_ENTITY +
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

const typeActivitiesYearSlice = createSlice({
  name: 'typeActivitiesYear',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetTypeActivitiesYear.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetTypeActivitiesYear.fulfilled, (state, action) => {
      if (action.payload) {
        state.typeActivities = action.payload;
      } else {
        state.typeActivities.results = [];
      }
      state.loading = false;
    });
    builder.addCase(doGetTypeActivitiesYear.rejected, (state) => {
      state.typeActivities.results = [];
      state.loading = false;
    });
  },
});

export default typeActivitiesYearSlice.reducer;
