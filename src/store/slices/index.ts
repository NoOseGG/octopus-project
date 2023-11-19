import userReducer from '@app/store/slices/userSlice';
import authReducer from '@app/store/slices/authSlice';
import nightModeReducer from '@app/store/slices/nightModeSlice';
import themeReducer from '@app/store/slices/themeSlice';
import searchReducer from '@app/store/slices/search/searchSlice';
import searchHistoryReducer from '@app/store/slices/search/searchHistorySlice';
import searchProfileReducer from '@app/store/slices/search/searchProfileSlice';
import searchFiltersReducer from '@app/store/slices/search/searchFiltersSlice';
import favouritesReducer from '@app/store/slices/search/favouritesSlice';
import typeActivitiesReducer from '@app/store/slices/legalEntityDashboard/typeActivities/current';
import typeActivitiesLiquidatedReducer from '@app/store/slices/legalEntityDashboard/typeActivities/liquidated';
import typeActivitiesSoleTradeReducer from '@app/store/slices/soleTradeDashboard/typeActivities/current';
import typeActivitiesLiquidatedSoleTradeReducer from '@app/store/slices/soleTradeDashboard/typeActivities/liquidated';
import currentByAgeReducer from '@app/store/slices/legalEntityDashboard/byAge/current';
import liquidatedByAgeReducer from '@app/store/slices/legalEntityDashboard/byAge/liquidated';
import liquidatedByAgeSoleTradeReducer from '@app/store/slices/soleTradeDashboard/liquidatedByAgeSoleTrade/';
import currentByAgeSoleTradeReducer from '@app/store/slices/soleTradeDashboard/byAge/current';
import detailedInformationCompanyReducer from '@app/store/slices/legalEntityDashboard/detailed/current/detailedInformationSlice';
import detailedInformationCompanySoleTradeReducer from '@app/store/slices/soleTradeDashboard/detailed/current/detailedInformationSoleTradeSlice';
import liquidatedMainInfo from '@app/store/slices/legalEntityDashboard/mainInfo/liquidated';
import liquidatedMainInfoSoleTradeReducer from '@app/store/slices/soleTradeDashboard/mainInfo/liquidated';
import mainInfoReducer from '@app/store/slices/legalEntityDashboard/mainInfo/created';
import mainInfoSoleTradeReducer from '@app/store/slices/soleTradeDashboard/mainInfo/created';
import chartsReducer from '@app/store/slices/legalEntityDashboard/charts';
import chartsSoleTradeReducer from '@app/store/slices/soleTradeDashboard/charts';

export default {
  user: userReducer,
  auth: authReducer,
  nightMode: nightModeReducer,
  theme: themeReducer,
  // pwa: pwaReducer,
  search: searchReducer,
  searchHistory: searchHistoryReducer,
  searchProfile: searchProfileReducer,
  searchFilters: searchFiltersReducer,
  favourites: favouritesReducer,
  mainInfo: mainInfoReducer,
  mainInfoSoleTrade: mainInfoSoleTradeReducer,
  charts: chartsReducer,
  chartsSoleTrade: chartsSoleTradeReducer,
  typeActivities: typeActivitiesReducer,
  typeActivitiesLiquidated: typeActivitiesLiquidatedReducer,
  typeActivitiesSoleTrade: typeActivitiesSoleTradeReducer,
  typeActivitiesLiquidatedSoleTrade: typeActivitiesLiquidatedSoleTradeReducer,
  currentByAge: currentByAgeReducer,
  liquidatedByAge: liquidatedByAgeReducer,
  liquidatedByAgeSoleTrade: liquidatedByAgeSoleTradeReducer,
  currentByAgeSoleTrade: currentByAgeSoleTradeReducer,
  detailedInformationCompany: detailedInformationCompanyReducer,
  detailedInformationCompanySoleTrade: detailedInformationCompanySoleTradeReducer,
  liquidatedMainInfo: liquidatedMainInfo,
  liquidatedMainInfoSoleTrade: liquidatedMainInfoSoleTradeReducer,
};
