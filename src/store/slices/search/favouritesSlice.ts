import {
  FavouritesResponsePost,
  FavouritesResponse,
  FavouritesState,
  FavouritesObject,
} from '@app/store/types/FavouritesTypes';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { TOKEN_NAME, URLS } from '@app/constants/Constants';
import { readToken } from '@app/services/localStorage.service';

const initialState: FavouritesState = {
  favourites: [],
  loading: false,
  error: null,
};

export const doGetFavourites = createAsyncThunk<FavouritesObject[]>('doGetFavourites', async () => {
  try {
    const response = await axios.get(URLS.FAVOURITES, {
      headers: { Authorization: `${TOKEN_NAME} ${readToken()}` },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const doPostFavourites = createAsyncThunk<FavouritesResponsePost, string>(
  'doPostFavourites',
  async (favourite, { dispatch }) => {
    try {
      const response = await axios.post(
        URLS.FAVOURITES,
        { legal_entity_id: favourite },
        {
          headers: { Authorization: `${TOKEN_NAME} ${readToken()}` },
        },
      );
      dispatch(doGetFavourites());
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
);

export const doDeleteFavourites = createAsyncThunk<FavouritesResponse, string>(
  'doDeleteFavourites',
  async (favourite, { dispatch }) => {
    try {
      const response = await axios.delete(URLS.FAVOURITES + favourite + '/', {
        headers: { Authorization: `${TOKEN_NAME} ${readToken()}` },
      });
      dispatch(doGetFavourites());
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
      debugger;
      state.favourites = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(doPostFavourites.fulfilled, (state) => {
      state.error = null;
    });
    builder.addCase(doDeleteFavourites.fulfilled, (state) => {
      state.error = null;
    });
    builder.addCase(doPostFavourites.rejected, (state) => {
      state.error = 'ошибка';
    });
  },
});

export default favouritesSlice.reducer;
