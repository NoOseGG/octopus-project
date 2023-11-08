import {
  TypeActivityState,
  TypeActivityType,
} from '@app/store/slices/legalEntityDashboard/typeActivities/typeActivitiesType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FiltersType } from '@app/store/slices/searchFiltersSlice';
import { DASH } from '@app/constants/enums/Dashboards';
import { constructorUrlForDashboard, getCurrentYear } from '@app/utils/utils';
import axios from 'axios';

const initialState: TypeActivityState = {
  typeActivities: {
    results: [],
  },
  loading: false,
  error: null,
};

export const doGetTypeActivitiesLastYear = createAsyncThunk<TypeActivityType, FiltersType>(
  'doGetTypeActivitiesLastYear',
  async (filters) => {
    try {
      const year = getCurrentYear();
      const url = constructorUrlForDashboard(
        DASH.BASE +
          DASH.AGR_COUNT +
          DASH.GROUP_BY('type_activity_name') +
          DASH.LEGAL_ENTITY +
          DASH.STATUS_AT +
          DASH.DATE_AFTER(`${year}-01-01`) +
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

const typeActivitiesYearSlice = createSlice({
  name: 'typeActivitiesYear',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetTypeActivitiesLastYear.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetTypeActivitiesLastYear.fulfilled, (state, action) => {
      state.typeActivities = action.payload;
      state.loading = false;
    });
  },
});

export default typeActivitiesYearSlice.reducer;
