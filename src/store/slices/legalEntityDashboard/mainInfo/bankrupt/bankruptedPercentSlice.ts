import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCurrentDate, getDateLastYear } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import axios from 'axios';
import { PercentState, ResponsePercentToSlice } from '@app/store/types/dashboard/DashboardSlicesType';

const initialState: PercentState = {
  percent: 0,
  loading: false,
  error: null,
};

export const doCalculateBankruptedPercent = createAsyncThunk<ResponsePercentToSlice>(
  'doCalculateBankruptedPercent',
  async () => {
    try {
      const currentDate = getCurrentDate();
      const lastYearDate = getDateLastYear();
      const twoLastYearDate = getDateLastYear(2);

      const lastYearUrl =
        DASH.BASE +
        DASH.LEGAL_ENTITY +
        DASH.STATUS_BP +
        DASH.DATE_AFTER_LIQUIDATED(lastYearDate) +
        DASH.DATE_BEFORE_LIQUIDATED(currentDate) +
        DASH.COUNT;

      const twoLastYearUrl =
        DASH.BASE +
        DASH.LEGAL_ENTITY +
        DASH.STATUS_BP +
        DASH.DATE_AFTER_LIQUIDATED(twoLastYearDate) +
        DASH.DATE_BEFORE_LIQUIDATED(lastYearDate) +
        DASH.COUNT;

      const responseLastYear = await axios.get(lastYearUrl);
      const responseTwoLastYear = await axios.get(twoLastYearUrl);

      const lastYearCount = responseLastYear.data.count;
      const twoLastYearCount = responseTwoLastYear.data.count;

      const result: ResponsePercentToSlice = { lastYearCount, twoLastYearCount };

      return result;
    } catch (error) {
      console.log(error);
      throw error; // Бросаем ошибку, чтобы Redux Toolkit мог обработать ее
    }
  },
);

const bankruptedPercentSlice = createSlice({
  name: 'bankruptedPercent',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doCalculateBankruptedPercent.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doCalculateBankruptedPercent.fulfilled, (state, action) => {
      if (Boolean(action.payload.lastYearCount) && Boolean(action.payload.twoLastYearCount)) {
        const lastYear = action.payload.lastYearCount;
        const lastTwoYear = action.payload.twoLastYearCount;

        const percent = (((lastYear - lastTwoYear) / lastYear) * 100).toFixed(2);
        state.percent = parseInt(percent, 10);
      } else {
        state.percent = 0;
      }
      state.loading = false;
    });
  },
});

export default bankruptedPercentSlice.reducer;
