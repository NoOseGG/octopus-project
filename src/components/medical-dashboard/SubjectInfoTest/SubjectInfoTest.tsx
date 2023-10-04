import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import axios from 'axios';
import { setSubject, setSubjectError } from '@app/store/slices/searchProfileSlice';
import styles from './SubjectInfoTest.module.css';
import { readToken } from '@app/services/localStorage.service';
import { Card, Spin } from 'antd';
import styled from 'styled-components';

const SpinerSpace = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const gridStyle: React.CSSProperties = {
  width: '33%',
};

const SubjectInfoTest: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const unn = useAppSelector((state) => state.search.unn);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchSubject() {
      setLoading(true);
      try {
        const response = await axios.get(`http://93.125.0.140:1338/api/v1/profile/?unn=${unn}`, {
          headers: { Authorization: `Welcome ${readToken()}` },
        });
        dispatch(setSubject(response.data));
        setLoading(false);
      } catch (error) {
        dispatch(setSubjectError(error));
      }
    }

    fetchSubject();
  }, [unn]);

  return (
    <div className={styles.container}>
      {loading && (
        <SpinerSpace>
          <Spin size="large" tip="Загрузка данных . . ." />
        </SpinerSpace>
      )}
      {!loading && (
        <div>
          <Card title="Организация" style={{ textAlign: 'center' }}>
            <Card.Grid style={gridStyle}>УНП: </Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
          </Card>
        </div>
      )}
    </div>
  );
};

export default SubjectInfoTest;
