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

export const doGetLevelCompetition = createAsyncThunk<ILevelCompetitionResponse>('doGetLevelCompetition', async () => {
  const response = await httpDashboard.get(DASH.BASE_LEVEL_COMPETITION);
  return response.data;
});

const levelCompetitionSlice = createSlice({
  name: 'levelCompetitionSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetLevelCompetition.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(doGetLevelCompetition.fulfilled, (state, action) => {
      state.level_competition = action.payload;
      state.isLoading = false;
    });
    builder.addCase(doGetLevelCompetition.rejected, (state) => {
      state.level_competition.results = [];
      state.isLoading = false;
    });
  },
});

export default levelCompetitionSlice.reducer;
