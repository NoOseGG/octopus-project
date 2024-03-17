import { PercentState, ResponsePercentToSlice } from '@app/store/types/dashboard/DashboardSlicesType';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCurrentDate, getDateLastYear } from '@app/utils/utils';
import { DASH } from '@app/constants/enums/Dashboards';
import { httpDashboard } from '@app/api/http.api';

const initialState: PercentState = {
  percent: 0,
  loading: false,
  error: null,
};

export const doCalculateCreatedPercent = createAsyncThunk<ResponsePercentToSlice>(
  'doCalculateCreatedPercent',
  async () => {
    try {
      const currentDate = getCurrentDate();
      const lastYearDate = getDateLastYear();
      const twoLastYearDate = getDateLastYear(2);

      const lastYearUrl =
        DASH.BASE + DASH.LEGAL_ENTITY + DASH.DATE_AFTER(lastYearDate) + DASH.DATE_BEFORE(currentDate) + DASH.COUNT;

      const twoLastYearUrl =
        DASH.BASE + DASH.LEGAL_ENTITY + DASH.DATE_AFTER(twoLastYearDate) + DASH.DATE_BEFORE(lastYearDate) + DASH.COUNT;

      const responseLastYear = await httpDashboard.get(lastYearUrl);
      const responseTwoLastYear = await httpDashboard.get(twoLastYearUrl);

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

const createdPercentSlice = createSlice({
  name: 'calculatePercent',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doCalculateCreatedPercent.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doCalculateCreatedPercent.fulfilled, (state, action) => {
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

export default createdPercentSlice.reducer;
