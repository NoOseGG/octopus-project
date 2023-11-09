import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { FiltersType } from '@app/store/slices/searchFiltersSlice';
import { constructorUrlForDashboard } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';

export interface CurrentSubjectsByAgeType {
  count20More: number;
  countFrom10To20: number;
  countFrom5To10: number;
  countFrom1To5: number;
  count1Less: number;
  avgAge: number;
}

export interface ResponseType {
  count: number;
}

interface AvgAgeType {
  results: AvgAgeObject[];
}

interface AvgAgeObject {
  group_fields: {
    company_status_code: string;
  };
  Avg: number;
}

const initialState: CurrentSubjectsByAgeType = {
  count20More: 0,
  countFrom10To20: 0,
  countFrom5To10: 0,
  countFrom1To5: 0,
  count1Less: 0,
  avgAge: 0,
};

export const doGetCurrentSubjectsSoleTradeMoreThen20 = createAsyncThunk<ResponseType, FiltersType>(
  'doGetCurrentSubjectsSoleTradeMoreThen20',
  async (filters) => {
    try {
      const url = constructorUrlForDashboard(
        DASH.BASE + DASH.SOLE_TRADE + DASH.STATUS_AT + DASH.AGE_RANGE(20, 100),
        filters,
        true,
        false,
      );
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const doGetCurrentSubjectsSoleTradeFrom10To20 = createAsyncThunk<ResponseType, FiltersType>(
  'doGetCurrentSubjectsSoleTradeFrom10To20',
  async (filters) => {
    try {
      const url = constructorUrlForDashboard(
        DASH.BASE + DASH.SOLE_TRADE + DASH.STATUS_AT + DASH.AGE_RANGE(10, 20),
        filters,
        true,
        false,
      );
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const doGetCurrentSubjectsSoleTradeFrom5To10 = createAsyncThunk<ResponseType, FiltersType>(
  'doGetCurrentSubjectsSoleTradeFrom5To10',
  async (filters) => {
    try {
      const url = constructorUrlForDashboard(
        DASH.BASE + DASH.SOLE_TRADE + DASH.STATUS_AT + DASH.AGE_RANGE(5, 10),
        filters,
        true,
        false,
      );
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const doGetCurrentSubjectsSoleTradeFrom1To5 = createAsyncThunk<ResponseType, FiltersType>(
  'doGetCurrentSubjectsSoleTradeFrom1To5',
  async (filters) => {
    try {
      const url = constructorUrlForDashboard(
        DASH.BASE + DASH.SOLE_TRADE + DASH.STATUS_AT + DASH.AGE_RANGE(1, 5),
        filters,
        true,
        false,
      );
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const doGetCurrentSubjectsSoleTradeLessThen1 = createAsyncThunk<ResponseType, FiltersType>(
  'doGetCurrentSubjectsSoleTradeLessThen1',
  async (filters) => {
    try {
      const url = constructorUrlForDashboard(
        DASH.BASE + DASH.SOLE_TRADE + DASH.STATUS_AT + DASH.AGE_RANGE(0, 1),
        filters,
        true,
        false,
      );
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const doGetCurrentSubjectsSoleTradeAvgAge = createAsyncThunk<AvgAgeType, FiltersType>(
  'doGetCurrentSubjectsSoleTradeAvgAge',
  async (filters) => {
    try {
      const url = constructorUrlForDashboard(
        DASH.BASE +
          DASH.AGR_AVERAGE +
          DASH.AVG_FIELD('age_short') +
          DASH.SOLE_TRADE +
          DASH.STATUS_AT +
          DASH.ORDERING_AGG('-avg') +
          DASH.GROUP_BY('company_status_code'),
        filters,
        false,
        false,
      );
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const currentSubjectSoleTradeByAgeSlice = createSlice({
  name: 'currentSubjectByAgeSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetCurrentSubjectsSoleTradeMoreThen20.fulfilled, (state, action) => {
      state.count20More = action.payload.count;
    });
    builder.addCase(doGetCurrentSubjectsSoleTradeFrom10To20.fulfilled, (state, action) => {
      state.countFrom10To20 = action.payload.count;
    });
    builder.addCase(doGetCurrentSubjectsSoleTradeFrom5To10.fulfilled, (state, action) => {
      state.countFrom5To10 = action.payload.count;
    });
    builder.addCase(doGetCurrentSubjectsSoleTradeFrom1To5.fulfilled, (state, action) => {
      state.countFrom1To5 = action.payload.count;
    });
    builder.addCase(doGetCurrentSubjectsSoleTradeLessThen1.fulfilled, (state, action) => {
      state.count1Less = action.payload.count;
    });
    builder.addCase(doGetCurrentSubjectsSoleTradeAvgAge.fulfilled, (state, action) => {
      state.avgAge = action.payload?.results[0]?.Avg;
    });
  },
});

export default currentSubjectSoleTradeByAgeSlice.reducer;
