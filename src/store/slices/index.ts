import userReducer from '@app/store/slices/userSlice';
import authReducer from '@app/store/slices/authSlice';
import nightModeReducer from '@app/store/slices/nightModeSlice';
import themeReducer from '@app/store/slices/themeSlice';
import searchReducer from '@app/store/slices/searchSlice';
import searchHistoryReducer from '@app/store/slices/search/searchHistorySlice';
import searchProfileReducer from '@app/store/slices/searchProfileSlice';
import searchFiltersReducer from '@app/store/slices/searchFiltersSlice';
import favouritesReducer from '@app/store/slices/search/favouritesSlice';
import typeActivitiesReducer from '@app/store/slices/legalEntityDashboard/typeActivities';
import typeActivitiesLiquidatedReducer from '@app/store/slices/legalEntityDashboard/liquidatedTypeActivities';
import typeActivitiesSoleTradeReducer from '@app/store/slices/soleTradeDashboard/typeActivitiesSoleTrade';
import typeActivitiesLiquidatedSoleTradeReducer from '@app/store/slices/soleTradeDashboard/liquidatedTypeActivities';
import currentByAgeReducer from '@app/store/slices/legalEntityDashboard/currentByAge/index';
import currentByAgeSoleTradeReducer from '@app/store/slices/soleTradeDashboard/currentByAgeSoleTrade';
import detailedInformationCompanyReducer from '@app/store/slices/legalEntityDashboard/detailedInformationSlice';
import detailedInformationCompanySoleTradeReducer from '@app/store/slices/soleTradeDashboard/detailedInformationSoleTradeSlice';
import liquidatedMainInfo from '@app/store/slices/legalEntityDashboard/liquidatedMainInfo';
import liquidatedMainInfoSoleTradeReducer from '@app/store/slices/soleTradeDashboard/liquidatedMainInfoSoleTrade';
import mainInfoReducer from '@app/store/slices/legalEntityDashboard/mainInfo/index';
import mainInfoSoleTradeReducer from '@app/store/slices/soleTradeDashboard/mainInfoSoleTrade';
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
  currentByAgeSoleTrade: currentByAgeSoleTradeReducer,
  detailedInformationCompany: detailedInformationCompanyReducer,
  detailedInformationCompanySoleTrade: detailedInformationCompanySoleTradeReducer,
  liquidatedMainInfo: liquidatedMainInfo,
  liquidatedMainInfoSoleTrade: liquidatedMainInfoSoleTradeReducer,
};
