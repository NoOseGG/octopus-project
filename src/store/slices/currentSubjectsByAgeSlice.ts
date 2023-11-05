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

export const doGetCurrentSubjectsMoreThen20 = createAsyncThunk<ResponseType, FiltersType>(
  'doGetCurrentSubjectsMoreThen20',
  async (filters) => {
    try {
      const url = constructorUrlForDashboard(
        DASH.BASE + DASH.LEGAL_ENTITY + DASH.STATUS_AT + DASH.AGE_RANGE(20, 100),
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

export const doGetCurrentSubjectsFrom10To20 = createAsyncThunk<ResponseType, FiltersType>(
  'doGetCurrentSubjectsFrom10To20',
  async (filters) => {
    try {
      const url = constructorUrlForDashboard(
        DASH.BASE + DASH.LEGAL_ENTITY + DASH.STATUS_AT + DASH.AGE_RANGE(10, 20),
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

export const doGetCurrentSubjectsFrom5To10 = createAsyncThunk<ResponseType, FiltersType>(
  'doGetCurrentSubjectsFrom5To10',
  async (filters) => {
    try {
      const url = constructorUrlForDashboard(
        DASH.BASE + DASH.LEGAL_ENTITY + DASH.STATUS_AT + DASH.AGE_RANGE(5, 10),
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

export const doGetCurrentSubjectsFrom1To5 = createAsyncThunk<ResponseType, FiltersType>(
  'doGetCurrentSubjectsFrom1To5',
  async (filters) => {
    try {
      const url = constructorUrlForDashboard(
        DASH.BASE + DASH.LEGAL_ENTITY + DASH.STATUS_AT + DASH.AGE_RANGE(1, 5),
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

export const doGetCurrentSubjectsLessThen1 = createAsyncThunk<ResponseType, FiltersType>(
  'doGetCurrentSubjectsLessThen1',
  async (filters) => {
    try {
      const url = constructorUrlForDashboard(
        DASH.BASE + DASH.LEGAL_ENTITY + DASH.STATUS_AT + DASH.AGE_RANGE(0, 1),
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

export const doGetCurrentSubjectsAvgAge = createAsyncThunk<AvgAgeType, FiltersType>(
  'doGetCurrentSubjectsAvgAge',
  async (filters) => {
    try {
      const url = constructorUrlForDashboard(
        DASH.BASE +
          DASH.AGR_AVERAGE +
          DASH.AVG_FIELD('age_short') +
          DASH.LEGAL_ENTITY +
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

const currentSubjectByAgeSlice = createSlice({
  name: 'currentSubjectByAgeSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetCurrentSubjectsMoreThen20.fulfilled, (state, action) => {
      state.count20More = action.payload.count;
    });
    builder.addCase(doGetCurrentSubjectsFrom10To20.fulfilled, (state, action) => {
      state.countFrom10To20 = action.payload.count;
    });
    builder.addCase(doGetCurrentSubjectsFrom5To10.fulfilled, (state, action) => {
      state.countFrom5To10 = action.payload.count;
    });
    builder.addCase(doGetCurrentSubjectsFrom1To5.fulfilled, (state, action) => {
      state.countFrom1To5 = action.payload.count;
    });
    builder.addCase(doGetCurrentSubjectsLessThen1.fulfilled, (state, action) => {
      state.count1Less = action.payload.count;
    });
    builder.addCase(doGetCurrentSubjectsAvgAge.fulfilled, (state, action) => {
      state.avgAge = action.payload.results[0].Avg;
    });
  },
});

export default currentSubjectByAgeSlice.reducer;
