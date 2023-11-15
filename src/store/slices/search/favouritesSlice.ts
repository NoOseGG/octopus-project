import { FavouritesRequest, FavouritesResponse, FavouritesState } from '@app/store/types/FavouritesTypes';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { TOKEN_NAME, URLS } from '@app/constants/Constants';
import { readToken } from '@app/services/localStorage.service';

const initialState: FavouritesState = {
  favourites: [],
  loading: false,
  error: null,
};

const doGetFavourites = createAsyncThunk<FavouritesResponse[], FavouritesRequest>('doGetFavourites', async () => {
  try {
    const response = await axios.get(URLS.FAVOURITES, {
      headers: { Authorization: `${TOKEN_NAME} ${readToken()}` },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const doPostFavourites = createAsyncThunk<FavouritesResponse[], FavouritesRequest>(
  'doPostFavourites',
  async (favourite) => {
    try {
      const response = await axios.post(URLS.FAVOURITES, favourite, {
        headers: { Authorization: `${TOKEN_NAME} ${readToken()}` },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doGetFavourites.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(doGetFavourites.fulfilled, (state, action) => {
      state.favourites = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(doPostFavourites.rejected, (state) => {
      state.error = 'ошибка';
    });
  },
});

export default favouritesSlice.reducer;
