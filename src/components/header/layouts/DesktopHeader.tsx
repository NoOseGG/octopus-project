import React from 'react';
import { Col, Row } from 'antd';
import { ProfileDropdown } from '../components/profileDropdown/ProfileDropdown/ProfileDropdown';
import { HeaderSearch } from '../components/HeaderSearch/HeaderSearch';
import { HeaderFullscreen } from '../components/HeaderFullscreen/HeaderFullscreen';
import * as S from '../Header.styles';
import styled from 'styled-components';
import SearchInput from '@app/components/header/components/SearchInput/SearchInput';

interface DesktopHeaderProps {
  isTwoColumnsLayout: boolean;
}

export const DesktopHeader: React.FC<DesktopHeaderProps> = ({ isTwoColumnsLayout }) => {
  return (
    <HeaderContainer>
      <HeaderSearch />
      <ProfileContainer>
        <HeaderFullscreen />
        <ProfileDropdown />
      </ProfileContainer>
    </HeaderContainer>
  );

  // const leftSide = isTwoColumnsLayout ? (
  //   <S.SearchColumn xl={16} xxl={17}>
  //     <Row justify="center">
  //       <Col xl={20} xxl={12}>
  //         <HeaderSearch />
  //       </Col>
  //     </Row>
  //   </S.SearchColumn>
  // ) : (
  //   <>
  //     <Col lg={10} xxl={8}>
  //       <HeaderSearch />
  //     </Col>
  //   </>
  // );
  //
  // // return (
  // //   <Row justify="space-between" align="middle">
  // //     {leftSide}
  // //
  // //     <S.ProfileColumn xl={8} xxl={7} $isTwoColumnsLayout={isTwoColumnsLayout}>
  // //       <Row align="middle" justify="end" gutter={[10, 10]}>
  // //         <Col>
  // //           <Row gutter={[{ xxl: 10 }, { xxl: 10 }]}>
  // //             {/*<Col>*/}
  // //             {/*  <SwitchDesign />*/}
  // //             {/*</Col>*/}
  // //
  // //             <Col>
  // //               <HeaderFullscreen />
  // //             </Col>
  // //
  // //             {/*<Col>*/}
  // //             {/*  <NotificationsDropdown />*/}
  // //             {/*</Col>*/}
  // //
  // //             {/*<Col>*/}
  // //             {/*  <SettingsDropdown />*/}
  // //             {/*</Col>*/}
  // //           </Row>
  // //         </Col>
  // //
  // //         <Col>
  // //           <ProfileDropdown />
  // //         </Col>
  // //       </Row>
  // //     </S.ProfileColumn>
  // //   </Row>
  // );
};

const HeaderContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
`;

const ProfileContainer = styled.div`
  margin-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
