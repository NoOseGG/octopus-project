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
import typeActivitiesBankruptedReducer from '@app/store/slices/legalEntityDashboard/typeActivities/bankrupted';
import typeActivitiesSoleTradeReducer from '@app/store/slices/soleTradeDashboard/typeActivities/current';
import typeActivitiesLiquidatedSoleTradeReducer from '@app/store/slices/soleTradeDashboard/typeActivities/liquidated';
import typeActivitiesBankruptedSoleTradeReducer from '@app/store/slices/soleTradeDashboard/typeActivities/bankrupted';
import currentByAgeReducer from '@app/store/slices/legalEntityDashboard/byAge/current';
import liquidatedByAgeReducer from '@app/store/slices/legalEntityDashboard/byAge/liquidated';
import bankruptedByAgeReducer from '@app/store/slices/legalEntityDashboard/byAge/bankrupted';
import currentByAgeSoleTradeReducer from '@app/store/slices/soleTradeDashboard/byAge/current';
import liquidatedByAgeSoleTradeReducer from '@app/store/slices/soleTradeDashboard/byAge/liquidated';
import bankruptedByAgeSoleTradeReducer from '@app/store/slices/soleTradeDashboard/byAge/bankrupted';
import detailedInformationReducer from '@app/store/slices/legalEntityDashboard/detailed';
import detailedInformationCompanySoleTradeReducer from '@app/store/slices/soleTradeDashboard/detailed/current/detailedInformationSoleTradeSlice';
import liquidatedMainInfoReducer from '@app/store/slices/legalEntityDashboard/mainInfo/liquidated';
import liquidatedMainInfoSoleTradeReducer from '@app/store/slices/soleTradeDashboard/mainInfo/liquidated/';
import mainInfoReducer from '@app/store/slices/legalEntityDashboard/mainInfo/created';
import mainInfoSoleTradeReducer from '@app/store/slices/soleTradeDashboard/mainInfo/created';
import mainInfoBankruptedReducer from '@app/store/slices/legalEntityDashboard/mainInfo/bankrupt';
import mainInfoBankruptedSoleTradeReducer from '@app/store/slices/soleTradeDashboard/mainInfo/bankrupted';
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
  liquidatedMainInfo: liquidatedMainInfoReducer,
  liquidatedMainInfoSoleTrade: liquidatedMainInfoSoleTradeReducer,
  mainInfoBankrupted: mainInfoBankruptedReducer,
  mainInfoBankruptedSoleTrade: mainInfoBankruptedSoleTradeReducer,
  charts: chartsReducer,
  chartsSoleTrade: chartsSoleTradeReducer,
  typeActivities: typeActivitiesReducer,
  typeActivitiesLiquidated: typeActivitiesLiquidatedReducer,
  typeActivitiesBankrupted: typeActivitiesBankruptedReducer,
  typeActivitiesSoleTrade: typeActivitiesSoleTradeReducer,
  typeActivitiesLiquidatedSoleTrade: typeActivitiesLiquidatedSoleTradeReducer,
  typeActivitiesBankruptedSoleTrade: typeActivitiesBankruptedSoleTradeReducer,
  currentByAge: currentByAgeReducer,
  liquidatedByAge: liquidatedByAgeReducer,
  bankruptedByAge: bankruptedByAgeReducer,
  currentByAgeSoleTrade: currentByAgeSoleTradeReducer,
  liquidatedByAgeSoleTrade: liquidatedByAgeSoleTradeReducer,
  bankruptedByAgeSoleTrade: bankruptedByAgeSoleTradeReducer,
  detailedInformation: detailedInformationReducer,
  detailedInformationCompanySoleTrade: detailedInformationCompanySoleTradeReducer,
};
