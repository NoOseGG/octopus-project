import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { constructorUrlForDashboard } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import { RequestData } from '@app/components/dashboards/dashboard/types/DashboardTypes';
import { MainInfoState, ResponseMainInfo } from '@app/store/types/dashboard/DashboardSlicesType';
import { httpDashboard } from '@app/api/http.api';
import axios from 'axios';

const initialState: MainInfoState = {
  count: 0,
  loading: false,
  error: null,
};

export const doGetTotalCountCheckedBankrupted = createAsyncThunk<ResponseMainInfo, RequestData>(
  'doGetTotalCountCheckedBankrupted',
  async ({ filters }) => {
    try {
      const url = constructorUrlForDashboard(
        DASH.BASE_INSPECTION + DASH.LEGAL_ENTITY + DASH.STATUS_BP + DASH.IS_NULL_FALSE('inspection_dttm'),
        filters,
        true,
        true,
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

const checkedBankruptedSlice = createSlice({
  name: 'checkedBankrupted',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetTotalCountCheckedBankrupted.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doGetTotalCountCheckedBankrupted.fulfilled, (state, action) => {
      state.count = action.payload?.count;
      state.loading = false;
    });
  },
});

export default checkedBankruptedSlice.reducer;
