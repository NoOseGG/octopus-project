import React, { useMemo } from 'react';
import Overlay from '../../../../common/Overlay';
import { useResponsive } from 'hooks/useResponsive';
import * as S from './MainSider.styles';
import { SiderLogo } from '../SiderLogo';
import SiderMenu from '../SiderMenu/SiderMenu';
import styled from 'styled-components';
import image from '../../../../../assets/sider-menu/sider_menu_bottom_image.png';

interface MainSiderProps {
  isCollapsed: boolean;
  setCollapsed: (isCollapsed: boolean) => void;
}

const MainSider: React.FC<MainSiderProps> = ({ isCollapsed, setCollapsed, ...props }) => {
  const { isDesktop, mobileOnly, tabletOnly } = useResponsive();

  const isCollapsible = useMemo(() => mobileOnly && tabletOnly, [mobileOnly, tabletOnly]);

  const toggleSider = () => setCollapsed(!isCollapsed);

  return (
    <>
      <S.Sider
        trigger={null}
        collapsed={!isDesktop && isCollapsed}
        collapsedWidth={tabletOnly ? 80 : 0}
        collapsible={isCollapsible}
        width={260}
        {...props}
      >
        <MenuContainer>
          <SiderLogo isSiderCollapsed={isCollapsed} toggleSider={toggleSider} />
          <S.SiderContent>
            <SiderMenu setCollapsed={setCollapsed} />
          </S.SiderContent>
          <BottomImage src={image} />
        </MenuContainer>
      </S.Sider>
      {mobileOnly && <Overlay onClick={toggleSider} show={!isCollapsed} />}
    </>
  );
};

export default MainSider;

const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const BottomImage = styled.img`
  padding-left: 5px;
  padding-right: 5px;
  width: 100%;
  align-self: end;
`;
