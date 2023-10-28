import userReducer from '@app/store/slices/userSlice';
import authReducer from '@app/store/slices/authSlice';
import nightModeReducer from '@app/store/slices/nightModeSlice';
import themeReducer from '@app/store/slices/themeSlice';
import searchReducer from '@app/store/slices/searchSlice';
import searchProfileReducer from '@app/store/slices/searchProfileSlice';
import dashboardReducer from '@app/store/slices/dashboardSlice';

export default {
  user: userReducer,
  auth: authReducer,
  nightMode: nightModeReducer,
  theme: themeReducer,
  // pwa: pwaReducer,
  search: searchReducer,
  searchProfile: searchProfileReducer,
  dashboard: dashboardReducer,
};
