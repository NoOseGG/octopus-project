import React from 'react';
import * as S from './References.styles';
import styled from 'styled-components';
import { Divider } from 'antd';

// const GithubIcon = S.withStyles(GithubOutlined);
// const TwitterIcon = S.withStyles(TwitterOutlined);
// const FacebookIcon = S.withStyles(FacebookOutlined);
// const LinkedinIcon = S.withStyles(LinkedinOutlined);

export const References: React.FC = () => {
  return (
    <S.ReferencesWrapper>
      <Container>
        <Divider />
        <Text>{new Date().getFullYear()}</Text>
      </Container>

      {/*<S.Text>*/}
      {/*  Made by{' '}*/}
      {/*  <a href="https://altence.com" target="_blank" rel="noreferrer">*/}
      {/*    Analytix{' '}*/}
      {/*  </a>*/}
      {/*  in 2023 &copy;. Based on{' '}*/}
      {/*  <a href="https://ant.design/" target="_blank" rel="noreferrer">*/}
      {/*    Ant-design.*/}
      {/*  </a>*/}
      {/*</S.Text>*/}
      {/*<S.Icons>*/}
      {/*  <a href="https://github.com/altence/lightence-admin" target="_blank" rel="noreferrer">*/}
      {/*    <GithubIcon />*/}
      {/*  </a>*/}
      {/*  <a href="https://twitter.com/altence_team" target="_blank" rel="noreferrer">*/}
      {/*    <TwitterIcon />*/}
      {/*  </a>*/}
      {/*  <a href="https://www.facebook.com/groups/altence" target="_blank" rel="noreferrer">*/}
      {/*    <FacebookIcon />*/}
      {/*  </a>*/}
      {/*  <a href="https://linkedin.com/company/altence" target="_blank" rel="noreferrer">*/}
      {/*    <LinkedinIcon />*/}
      {/*  </a>*/}
      {/*</S.Icons>*/}
    </S.ReferencesWrapper>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-style: italic;
`;

const Text = styled.div`
  width: 100%;
  font-size: 24px;
  text-align: center;
`;
