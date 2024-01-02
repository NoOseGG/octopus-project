import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IInitialState, ResponseData, RequestData } from '@app/store/types/search/SearchSimilar';
import axios from 'axios';
import { TOKEN_NAME } from '@app/constants/Constants';
import { readToken } from '@app/services/localStorage.service';

const initialState: IInitialState = {
  results: [],
  unnProfile: null,
  loading: false,
  error: null,
};

export const doSearchSimilar = createAsyncThunk<ResponseData, RequestData>(
  'doSearchSimilar',
  async (request, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setUnn(request.unn));
      let url = 'https://api.analytix.by/api/v1/dashboard/main/?';
      if (request.settlement !== null) url += `address_settlement=${request.settlement}&`;
      if (request.taxOffice !== null) url += `tax_office_name=${request.taxOffice}&`;
      if (request.typeActivity !== null) url += `type_activity_name=${request.typeActivity}&`;
      url += 'company_status_code=AT&';
      url += `page_size=6`;

      const response = await axios.get(url, {
        headers: { Authorization: `${TOKEN_NAME} ${readToken()}` },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const searchSimilarSlice = createSlice({
  name: 'searchSimilar',
  initialState,
  reducers: {
    setUnn: (state, action) => {
      state.unnProfile = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(doSearchSimilar.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doSearchSimilar.fulfilled, (state, action) => {
      const result = action.payload.results.filter((item) => item.legal_entity_id !== state.unnProfile);
      state.results = result;
      state.loading = false;
      state.error = null;
    });
  },
});

export default searchSimilarSlice.reducer;

export const { setUnn } = searchSimilarSlice.actions;
