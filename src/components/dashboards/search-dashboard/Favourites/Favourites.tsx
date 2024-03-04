import React, { useEffect } from 'react';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { doGetFavourites } from '@app/store/slices/search/favouritesSlice';
import { formatDateWithTime } from '@app/utils/utils';
import { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import styles from '@app/components/dashboards/search-dashboard/subjectsList/subject-item/SubjectItem.module.css';
import { SUBJECT_INFO_DASHBOARD_PATH } from '@app/components/router/AppRouter';
import { Divider, Table } from 'antd';
import { FavouritesObject } from '@app/store/types/FavouritesTypes';
import FavouritesButton, {
  FavouritesButtonSize,
} from '@app/components/dashboards/search-dashboard/FavouritesButton/FavouritesButton';

type MyComponentProps = {
  favourites: FavouritesObject[];
};

const Favourites: React.FC<MyComponentProps> = ({ favourites }) => {
  const dispatch = useAppDispatch();

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
      render: (text, record) => (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link className={styles.link} to={`${SUBJECT_INFO_DASHBOARD_PATH}/${record.legal_entity_id}`}>
            <span style={{ cursor: 'pointer', textDecoration: 'underline' }}>{text}</span>
          </Link>
          <FavouritesButton unn={text} size={FavouritesButtonSize.SMALL} />
        </div>
      ),
    },
    {
      title: 'Время добавления',
      dataIndex: 'created_at',
    },
  ];

  useEffect(() => {
    dispatch(doGetFavourites());
  }, [dispatch]);

  return (
    <div>
      <Divider>Избранные</Divider>
      <Table columns={columns} dataSource={newFavourites} size={'small'} pagination={{ pageSize: 10 }}></Table>
    </div>
  );
};

export default Favourites;
