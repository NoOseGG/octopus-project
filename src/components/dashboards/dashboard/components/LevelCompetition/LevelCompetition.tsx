import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Skeleton, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { ILevelCompetitionObject } from '@app/store/types/dashboard/LevelCompetitionTypes';
import { doGetLevelCompetition } from '@app/store/slices/legalEntityDashboard/levelCompetition/levelCompetitonSlice';
import { Content } from '@app/components/dashboards/dashboard/styles/DetailedInformationCompanyStyle';
import {
  getStateForLevelCompetition,
  LEVEL_COMPETITION,
} from '@app/components/dashboards/dashboard/components/LevelCompetition/LevelCompetitionTypes';
import { doGetLevelCompetitionSoleTrade } from '@app/store/slices/soleTradeDashboard/levelCompetition/levelCompetitonSoleTradeSlice';

type MyComponentProps = {
  level_competition: LEVEL_COMPETITION;
};

const LevelCompetition: React.FC<MyComponentProps> = ({ level_competition }) => {
  const dispatch = useAppDispatch();
  const dynamicState = useAppSelector((state) => getStateForLevelCompetition(state, level_competition));
  const results = dynamicState?.level_competition?.results;
  const isLoading = dynamicState?.isLoading;

  const getData = useCallback(
    (level_competition) => {
      switch (level_competition) {
        case LEVEL_COMPETITION.LEGAL_ENTITY:
          dispatch(doGetLevelCompetition());
          break;

        // Sole Trade

        case LEVEL_COMPETITION.SOLE_TRADE:
          dispatch(doGetLevelCompetitionSoleTrade());
          break;
      }
    },
    [dispatch],
  );

  useEffect(() => {
    getData(level_competition);
  }, [getData, level_competition]);

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
          {Boolean(results?.length) && (
            <LevelCompetitionContainer>
              <Table
                columns={columns}
                title={() => <Title>Срез по уровню конкуренции</Title>}
                dataSource={results.map((item, index) => ({ ...item, key: index }))}
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

export const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;
