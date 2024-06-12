import React from 'react';

import styled from 'styled-components';

import { Container, InnerContainer } from '../styles/MainLandingStyles';
import logo from '../../../../assets/logo.svg';
import Social from '@app/components/dashboards/mainLanding/Footer/Social/Social';
import Links from '@app/components/dashboards/mainLanding/Footer/Links/Links';
import map from '@app/assets/landing/footer/map.png';

const Footer: React.FC = () => {
  return (
    <Container backgroundColor={'#232528'}>
      <InnerContainer>
        <FooterContainer>
          <TopContainer>
            <Logo src={logo} />
            <MapContainer>
              <ImageMap src={map} />
            </MapContainer>
            <InfoContainer>
              <Info>
                <Address>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5 9C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9C19 13.17 14.58 18.92 12.77 21.11C12.37 21.59 11.64 21.59 11.24 21.11C9.42 18.92 5 13.17 5 9ZM9.5 9C9.5 10.38 10.62 11.5 12 11.5C13.38 11.5 14.5 10.38 14.5 9C14.5 7.62 13.38 6.5 12 6.5C10.62 6.5 9.5 7.62 9.5 9Z"
                      fill="#188CFF"
                    />
                  </svg>
                  <span>г. Минск, ул. Убаревича 99, пом. 77, внут. номер 315</span>
                </Address>
                <ContactContainer>
                  <Item>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.23 15.26L16.69 14.97C16.08 14.9 15.48 15.11 15.05 15.54L13.21 17.38C10.38 15.94 8.06 13.63 6.62 10.79L8.47 8.94001C8.9 8.51001 9.11 7.91001 9.04 7.30001L8.75 4.78001C8.63 3.77001 7.78 3.01001 6.76 3.01001H5.03C3.9 3.01001 2.96 3.95001 3.03 5.08001C3.56 13.62 10.39 20.44 18.92 20.97C20.05 21.04 20.99 20.1 20.99 18.97V17.24C21 16.23 20.24 15.38 19.23 15.26Z"
                        fill="#188CFF"
                      />
                    </svg>
                    8-(0-29)-957-81-15
                  </Item>
                  <Item>
                    <svg width="22px" height="22px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.2929 0.178932C7.49181 0.178932 7.68258 0.25795 7.82323 0.398602L10.1213 2.6967L12.0659 0.752155C12.3588 0.459262 12.8336 0.459262 13.1265 0.752156L15.2479 2.87348C15.5407 3.16637 15.5407 3.64124 15.2479 3.93414L13.3033 5.87868L15.6014 8.17678C15.7421 8.31743 15.8211 8.50819 15.8211 8.70711C15.8211 8.90602 15.7421 9.09678 15.6014 9.23744L13.4801 11.3588C13.3394 11.4994 13.1487 11.5784 12.9498 11.5784C12.7508 11.5784 12.5601 11.4994 12.4194 11.3588L4.64125 3.58058C4.34836 3.28769 4.34836 2.81282 4.64125 2.51992L6.76257 0.398602C6.90322 0.25795 7.09399 0.178932 7.2929 0.178932ZM6.23224 3.05025L12.9498 9.76777L14.0104 8.70711L11.7123 6.40901C11.5717 6.26836 11.4926 6.07759 11.4926 5.87868C11.4926 5.67977 11.5717 5.489 11.7123 5.34835L13.6569 3.40381L12.5962 2.34315L10.6517 4.28769C10.3588 4.58058 9.88389 4.58058 9.591 4.28769L7.2929 1.98959L6.23224 3.05025ZM2.51993 4.64124C2.81282 4.34835 3.2877 4.34835 3.58059 4.64124L11.3588 12.4194C11.4994 12.5601 11.5784 12.7508 11.5784 12.9497C11.5784 13.1487 11.4994 13.3394 11.3588 13.4801L9.23744 15.6014C9.09679 15.7421 8.90603 15.8211 8.70711 15.8211C8.5082 15.8211 8.31744 15.7421 8.17678 15.6014L5.87869 13.3033L3.93414 15.2478C3.64125 15.5407 3.16638 15.5407 2.87348 15.2478L0.752163 13.1265C0.45927 12.8336 0.45927 12.3588 0.752163 12.0659L2.69671 10.1213L0.39861 7.82322C0.257957 7.68257 0.17894 7.49181 0.17894 7.29289C0.17894 7.09398 0.257957 6.90321 0.39861 6.76256L2.51993 4.64124ZM1.9896 7.29289L4.2877 9.59099C4.58059 9.88388 4.58059 10.3588 4.2877 10.6516L2.34315 12.5962L3.40381 13.6569L5.34836 11.7123C5.48901 11.5717 5.67978 11.4926 5.87869 11.4926C6.0776 11.4926 6.26837 11.5717 6.40902 11.7123L8.70711 14.0104L9.76778 12.9497L3.05026 6.23223L1.9896 7.29289Z"
                        fill="#188CFF"
                      />
                    </svg>
                    УНП: 193767345
                  </Item>
                </ContactContainer>
              </Info>
              <SocialContainer>
                <Social />
              </SocialContainer>
            </InfoContainer>
          </TopContainer>
          <BottomContainer>
            <Links />
            <Copyright>Copyright © 2024 • Analytix.</Copyright>
          </BottomContainer>
        </FooterContainer>
      </InnerContainer>
    </Container>
  );
};

export default Footer;

const FooterContainer = styled.div`
  padding: 50px 48px 100px;

  @media (max-width: 1050px) {
    padding: 50px 0;
  }
`;

const TopContainer = styled.div`
  padding: 100px 60px 80px 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid #188cff;
  border-bottom: 1px solid #d0daf5;

  @media (max-width: 1050px) {
    padding: 30px 0;
    flex-direction: column;
    gap: 30px;
  }
`;

const BottomContainer = styled.div`
  padding-top: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Logo = styled.img`
  width: 120px;
  height: 120px;
`;

const InfoContainer = styled.div``;

const Info = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 14px;
  color: #d0daf5;
`;

const Address = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const MapContainer = styled.div`
  margin-left: auto;
  margin-right: 40px;
  width: 340px;
`;

const ImageMap = styled.img`
  width: 100%;
  height: 100%;
`;

const SocialContainer = styled.div`
  margin-top: 40px;
  color: #d0daf5;
`;

const Copyright = styled.div`
  color: #6f7482;
  font-size: 14px;
`;
