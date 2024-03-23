import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Skeleton, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { ILevelCompetitionObject } from '@app/store/types/dashboard/LevelCompetitionTypes';
import { doGetLevelCompetition } from '@app/store/slices/legalEntityDashboard/levelCompetition/levelCompetitonSlice';
import { Content } from '@app/components/dashboards/dashboard/styles/DetailedInformationCompanyStyle';

const LevelCompetition: React.FC = () => {
  const dispatch = useAppDispatch();
  const { level_competition, isLoading } = useAppSelector((state) => state.levelCompetition);

  useEffect(() => {
    dispatch(doGetLevelCompetition());
  }, [dispatch]);

  const columns: ColumnsType<ILevelCompetitionObject> = [
    {
      title: 'УНП',
      dataIndex: 'legal_entity_id',
      render: (text) => <Content textAlign={'center'}>{text}</Content>,
    },
    {
      title: 'Вид деятельности',
      dataIndex: 'type_activity_name',
      render: (text) => <Content textAlign={'center'}>{text}</Content>,
    },
    {
      title: 'Населенный пункт',
      dataIndex: 'settlement',
      render: (text) => <Content textAlign={'center'}>{text}</Content>,
    },
    {
      title: 'Количество действующих компаний',
      dataIndex: 'count_lei',
      render: (text) => <Content textAlign={'center'}>{text}</Content>,
    },
    {
      title: 'Среднее количество по виду деятельности',
      dataIndex: 'avg_lei',
      render: (text) => <Content textAlign={'center'}>{text}</Content>,
    },
    {
      title: 'Количество действующих компаний в городе',
      dataIndex: 'count_settlement',
      render: (text) => <Content textAlign={'center'}>{text}</Content>,
    },
    {
      title: 'Коэфициент активности компании в городе',
      dataIndex: 'ratio_by_settlement',
      render: (text) => <Content textAlign={'center'}>{text}</Content>,
    },
    {
      title: 'Предельное среднее',
      dataIndex: 'high_avg',
      render: (text) => <Content textAlign={'center'}>{text}</Content>,
    },
    {
      title: 'Уровень конкуренции',
      dataIndex: 'level_competition',
      render: (text) => <Content textAlign={'center'}>{text}</Content>,
    },
  ];

  return (
    <>
      {isLoading ? (
        <Skeleton active paragraph={{ rows: 10 }} />
      ) : (
        <>
          {Boolean(level_competition?.results.length) && (
            <LevelCompetitionContainer>
              <Table
                columns={columns}
                dataSource={level_competition.results}
                pagination={{ pageSize: 5, size: 'small', showSizeChanger: false }}
              />
            </LevelCompetitionContainer>
          )}
        </>
      )}
    </>
  );
};

export default LevelCompetition;

const LevelCompetitionContainer = styled.div``;
