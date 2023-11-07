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

export const doGetTypeActivitiesSoleTrade = createAsyncThunk<TypeActivityType, FiltersType>(
  'doGetTypeActivities',
  async (filters) => {
    try {
      let baseUrl =
        DASH.BASE +
        DASH.AGR_COUNT +
        DASH.GROUP_BY('type_activity_name') +
        DASH.SOLE_TRADE +
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

export const doGetTypeActivitiesLastYearSoleTrade = createAsyncThunk<TypeActivityType, FiltersType>(
  'doGetTypeActivitiesLastYear',
  async (filters) => {
    try {
      const year = getCurrentYear();
      const url = constructorUrlForDashboard(
        DASH.BASE +
          DASH.AGR_COUNT +
          DASH.GROUP_BY('type_activity_name') +
          DASH.SOLE_TRADE +
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

export const doGetTypeActivitiesLastQuarterSoleTrade = createAsyncThunk<TypeActivityType, FiltersType>(
  'doGetTypeActivitiesLastQuarter',
  async (filters) => {
    try {
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
      const response = await axios.get(url + DASH.ORDERING_AGG('-Count'));
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const doGetTypeActivitiesLastMonthSoleTrade = createAsyncThunk<TypeActivityType, FiltersType>(
  'doGetTypeActivitiesLastMonth',
  async (filters) => {
    try {
      const date = getDateLastMonth();
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
      const response = await axios.get(url + DASH.ORDERING_AGG('-Count'));
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const typeActivitiesSoleTradeSlice = createSlice({
  name: 'typeActivitiesSoleTrade',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetTypeActivitiesSoleTrade.fulfilled, (state, action) => {
      state.typeActivities = action.payload;
    });
    builder.addCase(doGetTypeActivitiesLastYearSoleTrade.fulfilled, (state, action) => {
      state.typeActivitiesYear = action.payload;
    });
    builder.addCase(doGetTypeActivitiesLastQuarterSoleTrade.fulfilled, (state, action) => {
      state.typeActivitiesQuarter = action.payload;
    });
    builder.addCase(doGetTypeActivitiesLastMonthSoleTrade.fulfilled, (state, action) => {
      state.typeActivitiesMonth = action.payload;
    });
  },
});

export default typeActivitiesSoleTradeSlice.reducer;
