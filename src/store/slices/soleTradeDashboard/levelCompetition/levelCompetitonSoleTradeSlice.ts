import { ILevelCompetitionObject, ILevelCompetitionState } from '@app/store/types/dashboard/LevelCompetitionTypes';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { httpDashboard } from '@app/api/http.api';
import { DASH } from '@app/constants/enums/Dashboards';

const initialState: ILevelCompetitionState = {
  level_competition: [],
  isLoading: false,
  error: null,
};

export const doGetLevelCompetitionSoleTrade = createAsyncThunk<ILevelCompetitionObject[]>(
  'doGetLevelCompetitionSoleTrade',
  async () => {
    const response = await httpDashboard.get(DASH.BASE_LEVEL_COMPETITION);
    return response.data;
  },
);

const levelCompetitionSoleTradeSlice = createSlice({
  name: 'levelCompetitionSoleTradeSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetLevelCompetitionSoleTrade.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(doGetLevelCompetitionSoleTrade.fulfilled, (state, action) => {
      state.level_competition = action.payload;
      state.isLoading = false;
    });
    builder.addCase(doGetLevelCompetitionSoleTrade.rejected, (state) => {
      state.level_competition = [];
      state.isLoading = false;
    });
  },
});

export default levelCompetitionSoleTradeSlice.reducer;
