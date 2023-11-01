import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FiltersType } from '@app/store/slices/searchFiltersSlice';
import axios from 'axios';
import { DASH } from '@app/constants/enums/Dashboards';
import { constructorUrlForDashboard, getDateLastYear } from '@app/utils/utils';

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
}

const initialState: TypeActivitySlice = {
  typeActivities: {
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
      const date = getDateLastYear();
      const url = constructorUrlForDashboard(
        DASH.BASE +
          DASH.AGR_COUNT +
          DASH.GROUP_BY('type_activity_name') +
          DASH.LEGAL_ENTITY +
          DASH.STATUS_AT +
          DASH.DATE_AFTER(date) +
          DASH.PAGE_SIZE(10000),
        filters,
        false,
      );
      console.log(url);
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
  },
});

export default typeActivitiesSlice.reducer;
