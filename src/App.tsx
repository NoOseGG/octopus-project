import React from 'react';
import { ConfigProvider } from 'antd';
import ruRu from 'antd/lib/locale/ru_RU';
import GlobalStyle from './styles/GlobalStyle';
import 'typeface-montserrat';
import 'typeface-lato';
import { useAutoNightMode } from './hooks/useAutoNightMode';
import { useThemeWatcher } from './hooks/useThemeWatcher';
import { useAppSelector } from './hooks/reduxHooks';
import { themeObject } from './styles/themes/themeVariables';
import MainLanding from '@app/components/dashboards/mainLanding/MainLanding';

const App: React.FC = () => {
  const theme = useAppSelector((state) => state.theme.theme);

  useAutoNightMode();

  useThemeWatcher();

  return (
    <>
      <meta name="theme-color" content={themeObject[theme].primary} />
      <GlobalStyle />
      <ConfigProvider locale={ruRu}>
        {/*<AppRouter />*/}
        <MainLanding />
      </ConfigProvider>
    </>
  );
};

export default App;
