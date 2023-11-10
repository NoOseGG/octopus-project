import { CurrentByAgeState, ResponseCurrentByAge } from '@app/store/types/dashboard/CurrentByAgeType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RequestData } from '@app/components/dashboards/dashboard/DashboardTypes';
import { constructorUrlForDashboard } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import axios from 'axios';

const initialState: CurrentByAgeState = {
  age: 0,
  loading: false,
  error: null,
};

export const doGetCurrentByAgeLessThen1 = createAsyncThunk<ResponseCurrentByAge, RequestData>(
  'doGetCurrentByAgeLessThen1',
  async ({ filters, legal_entity }) => {
    try {
      const url = constructorUrlForDashboard(
        DASH.BASE + legal_entity + DASH.STATUS_AT + DASH.AGE_RANGE(0, 1),
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

const currentByAgeLessThen1Slice = createSlice({
  name: 'currentByAgeLessThen1',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetCurrentByAgeLessThen1.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetCurrentByAgeLessThen1.fulfilled, (state, action) => {
      state.age = action.payload.count;
      state.loading = false;
    });
  },
});

export default currentByAgeLessThen1Slice.reducer;
