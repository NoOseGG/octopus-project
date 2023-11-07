import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FiltersType } from '@app/store/slices/searchFiltersSlice';
import axios from 'axios';
import { DASH } from '@app/constants/enums/Dashboards';
import {
  constructorUrlForDashboard,
  getCurrentDate,
  getCurrentYear,
  getDateLastMonth,
  getDateLastQuarter,
} from '@app/utils/utils';

export interface TypeActivityObject {
  group_fields: {
    type_activity_name: string;
  };
  Count: number;
}

export interface TypeActivityType {
  count: number;
  next: string | null;
  previous: string | null;
  results: TypeActivityObject[];
}

interface TypeActivitySlice {
  typeActivities: TypeActivityType;
  typeActivitiesYear: TypeActivityType;
  typeActivitiesQuarter: TypeActivityType;
  typeActivitiesMonth: TypeActivityType;
}

const initialState: TypeActivitySlice = {
  typeActivities: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  typeActivitiesYear: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  typeActivitiesQuarter: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  typeActivitiesMonth: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
};

export const doGetTypeActivities = createAsyncThunk<TypeActivityType, FiltersType>(
  'doGetTypeActivities',
  async (filters) => {
    try {
      let baseUrl =
        DASH.BASE +
        DASH.AGR_COUNT +
        DASH.GROUP_BY('type_activity_name') +
        DASH.LEGAL_ENTITY +
        DASH.STATUS_AT +
        DASH.IS_NULL_FALSE('type_activity_name') +
        DASH.PAGE_SIZE(10000);
      let url;
      if (!filters.isDate) {
        const currentDate = getCurrentDate();
        baseUrl += DASH.DATE_BEFORE(currentDate);
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

export const doGetTypeActivitiesLastQuarter = createAsyncThunk<TypeActivityType, FiltersType>(
  'doGetTypeActivitiesLastQuarter',
  async (filters) => {
    try {
      const date = getDateLastQuarter();
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
      const response = await axios.get(url + DASH.ORDERING_AGG('-Count'));
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const doGetTypeActivitiesLastMonth = createAsyncThunk<TypeActivityType, FiltersType>(
  'doGetTypeActivitiesLastMonth',
  async (filters) => {
    try {
      const date = getDateLastMonth();
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
      const response = await axios.get(url + DASH.ORDERING_AGG('-Count'));
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const typeActivitiesSlice = createSlice({
  name: 'typeActivity',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetTypeActivities.fulfilled, (state, action) => {
      state.typeActivities = action.payload;
    });
    builder.addCase(doGetTypeActivitiesLastYear.fulfilled, (state, action) => {
      state.typeActivitiesYear = action.payload;
    });
    builder.addCase(doGetTypeActivitiesLastQuarter.fulfilled, (state, action) => {
      state.typeActivitiesQuarter = action.payload;
    });
    builder.addCase(doGetTypeActivitiesLastMonth.fulfilled, (state, action) => {
      state.typeActivitiesMonth = action.payload;
    });
  },
});

export default typeActivitiesSlice.reducer;
