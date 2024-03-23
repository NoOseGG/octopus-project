import { CurrentByAgeState, ResponseCurrentByAge } from '@app/store/types/dashboard/CurrentByAgeType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import { constructorUrlForDashboard } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import { httpDashboard } from '@app/api/http.api';
import axios from 'axios';

const initialState: CurrentByAgeState = {
  age: 0,
  loading: false,
  error: null,
};

export const doGetLiquidatedByAgeFrom1To5 = createAsyncThunk<ResponseCurrentByAge, RequestData>(
  'doGetLiquidatedCurrentByAgeFrom1To5',
  async ({ filters }) => {
    try {
      const url = constructorUrlForDashboard(
        DASH.BASE + DASH.LEGAL_ENTITY + DASH.LIQUIDATED_ENTITY + DASH.AGE_RANGE(1, 5),
        filters,
        true,
        false,
      );
      const response = await httpDashboard.get(url);
      return response.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('request canceled');
      } else {
        console.log(error);
      }
    }
  },
);

const liquidatedFrom1To5Slice = createSlice({
  name: 'liquidatedFrom1To5',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetLiquidatedByAgeFrom1To5.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetLiquidatedByAgeFrom1To5.fulfilled, (state, action) => {
      state.age = action.payload?.count;
      state.loading = false;
    });
  },
});

export default liquidatedFrom1To5Slice.reducer;
