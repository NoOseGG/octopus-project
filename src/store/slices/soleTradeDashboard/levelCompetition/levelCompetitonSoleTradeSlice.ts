import { ILevelCompetitionResponse, ILevelCompetitionState } from '@app/store/types/dashboard/LevelCompetitionTypes';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { httpDashboard } from '@app/api/http.api';
import { DASH } from '@app/constants/enums/Dashboards';

const initialState: ILevelCompetitionState = {
  level_competition: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  isLoading: false,
  error: null,
};

export const doGetLevelCompetitionSoleTrade = createAsyncThunk<ILevelCompetitionResponse>(
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
      state.level_competition.results = [];
      state.isLoading = false;
    });
  },
});

export default levelCompetitionSoleTradeSlice.reducer;
