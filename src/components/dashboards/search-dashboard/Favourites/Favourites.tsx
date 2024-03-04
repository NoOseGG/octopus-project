import React, { useEffect } from 'react';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { doGetFavourites } from '@app/store/slices/search/favouritesSlice';
import { formatDateWithTime } from '@app/utils/utils';
import { ColumnsType } from 'antd/es/table';
import { useNavigate } from 'react-router-dom';
import { SUBJECT_INFO_DASHBOARD_PATH } from '@app/components/router/AppRouter';
import { Divider, Table } from 'antd';
import { FavouritesObject } from '@app/store/types/FavouritesTypes';
import FavouritesButton, {
  FavouritesButtonSize,
} from '@app/components/dashboards/search-dashboard/FavouritesButton/FavouritesButton';
import styled from 'styled-components';

type MyComponentProps = {
  favourites: FavouritesObject[];
};

const Favourites: React.FC<MyComponentProps> = ({ favourites }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const newFavourites = favourites?.map((item, index) => {
    return {
      ...item,
      created_at: formatDateWithTime(item.created_at),
      key: index,
    };
  });

  const columns: ColumnsType<FavouritesObject> = [
    {
      title: 'УНП',
      dataIndex: 'legal_entity_id',
      render: (text) => (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 5,
            fontSize: 12,
            lineHeight: 1.2,
          }}
        >
          <span>{text}</span>
          <FavouritesButton unn={text} size={FavouritesButtonSize.SMALL} />
        </div>
      ),
    },
    {
      title: 'Название',
      dataIndex: 'legal_entity_name',
      render: (text) => <Content>{text}</Content>,
    },
    {
      title: 'Время добавления',
      dataIndex: 'created_at',
      render: (text) => <Content>{text}</Content>,
    },
  ];

  useEffect(() => {
    dispatch(doGetFavourites());
  }, [dispatch]);

  const handleClickRow = (value: string) => {
    navigate(`${SUBJECT_INFO_DASHBOARD_PATH}/${value}`);
  };

  return (
    <div>
      <Divider>Избранные</Divider>
      <Table
        columns={columns}
        dataSource={newFavourites}
        size={'small'}
        pagination={{ pageSize: 10 }}
        onRow={(record) => ({
          onClick: () => {
            if (record.legal_entity_id !== null) handleClickRow(record.legal_entity_id);
          },
        })}
        rowClassName={() => 'custom-row'}
      ></Table>
    </div>
  );
};

export default Favourites;

const Content = styled.div`
  font-size: 12px;
  line-height: 1.2;
`;
