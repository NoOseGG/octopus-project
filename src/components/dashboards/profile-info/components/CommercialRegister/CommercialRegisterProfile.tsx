import React, { useEffect, useState } from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import CountCommercialRegister from '@app/components/dashboards/profile-info/components/CommercialRegister/components/CountCommercialRegister/CountCommercialRegister';
import styled from 'styled-components';
import MyCommercialRegister from '@app/components/dashboards/profile-info/components/CommercialRegister/components/CommercialRegister/MyCommercialRegister';
import { Select } from 'antd';
import { filterStyle, PlaceholderText } from '@app/components/dashboards/profile-info/styles/SelectStyles';
import StatisticTable, {
  StatisticTableType,
} from '@app/components/dashboards/profile-info/components/StatisticTable/StatisticTable';
import { GroupDataType } from '@app/components/dashboards/profile-info/components/CommercialRegister/types/CommercialRegisterTypes';
import { CommercialRegister } from '@app/store/types/Subject';

enum SelectEnum {
  DATE = 'По названию',
  NAME = 'По имени',
}

enum AscendingEnum {
  ASCENDING = 'По возрастанию',
  ASCENDING_REVERSE = 'По убыванию',
}

enum StatusEnum {
  ALL = 'Все статусы',
  CURRENT = 'Действующий',
  EXCLUDED = 'Исключен',
}

const CommercialRegisterProfile: React.FC = () => {
  const commercialRegister = useAppSelector((state) => state.searchProfile.profile.commercial_register);
  const [sortedCommercialRegister, setSortedCommercialRegister] = useState([...commercialRegister]);
  const [ascending, setAscending] = useState(AscendingEnum.ASCENDING_REVERSE);
  const [selectField, setSelectField] = useState(SelectEnum.DATE);
  const [status, setStatus] = useState(StatusEnum.ALL);
  const [statisticData, setStatisticData] = useState<{ value: string; count: number }[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  useEffect(() => {
    const groupData: GroupDataType = sortedCommercialRegister.reduce((acc: GroupDataType, item) => {
      const value = item.object_type;

      if (value !== null) {
        if (acc[value]) {
          acc[value]++;
        } else {
          acc[value] = 1;
        }
      }

      return acc;
    }, {});

    const resultArray = Object.keys(groupData).map((key) => ({ value: key, count: groupData[key] }));

    setStatisticData(resultArray);
  }, [sortedCommercialRegister]);

  const addFilter = (text: string) => {
    const result = sortedCommercialRegister.filter((item) => item.object_type === text);
    setSortedCommercialRegister(result);
    setSelectedFilter(text);
  };

  const deleteFilter = () => {
    setSortedCommercialRegister([...commercialRegister]);
    setSelectedFilter(null);
  };

  const sortCommercialRegister = (commercial: CommercialRegister[]): CommercialRegister[] => {
    switch (selectField) {
      case SelectEnum.DATE: {
        if (ascending === AscendingEnum.ASCENDING) {
          return commercial.slice().sort((a, b) => {
            const dateA = a.from_dttm ? new Date(a.from_dttm) : null;
            const dateB = b.from_dttm ? new Date(b.from_dttm) : null;

            // Добавьте проверку на null перед использованием даты
            if (dateA && dateB) {
              return dateA.getTime() - dateB.getTime();
            }

            // Обработка случая, если хотя бы одна из дат равна null
            return 0;
          });
        } else {
          return commercial.slice().sort((a, b) => {
            const dateA = a.from_dttm ? new Date(a.from_dttm) : null;
            const dateB = b.from_dttm ? new Date(b.from_dttm) : null;

            // Добавьте проверку на null перед использованием даты
            if (dateA && dateB) {
              return dateB.getTime() - dateA.getTime();
            }

            // Обработка случая, если хотя бы одна из дат равна null
            return 0;
          });
        }
      }
      case SelectEnum.NAME: {
        if (ascending === AscendingEnum.ASCENDING) {
          return commercial.slice().sort((a, b) => {
            const nameA = a.type_retail_goods || '';
            const nameB = b.type_retail_goods || '';

            return nameA.localeCompare(nameB);
          });
        } else {
          return commercial.slice().sort((a, b) => {
            const nameA = a.type_retail_goods || '';
            const nameB = b.type_retail_goods || '';

            return nameB.localeCompare(nameA);
          });
        }
      }
    }
  };

  const filterCommercialRegister = (commercial: CommercialRegister[]) => {
    switch (status) {
      case StatusEnum.ALL:
        {
          setSortedCommercialRegister(commercial);
        }
        break;
      case StatusEnum.CURRENT:
        {
          setSortedCommercialRegister(commercial.filter((item) => item.to_dttm === null));
        }
        break;
      case StatusEnum.EXCLUDED:
        {
          setSortedCommercialRegister(commercial.filter((item) => item.to_dttm !== null));
        }
        break;
    }
  };

  useEffect(() => {
    const sortedCommercial = sortCommercialRegister(commercialRegister);
    filterCommercialRegister(sortedCommercial);
  }, [ascending, selectField, status]);

  const dataSelectField = [
    {
      value: SelectEnum.DATE,
      label: 'По дате',
    },
    {
      value: SelectEnum.NAME,
      label: 'По названию',
    },
  ];

  const dataAscending = [
    {
      value: AscendingEnum.ASCENDING,
      label: 'По возрастанию',
    },
    {
      value: AscendingEnum.ASCENDING_REVERSE,
      label: 'По убыванию',
    },
  ];

  const dataStatus = [
    {
      value: StatusEnum.ALL,
      label: 'Все статусы',
    },
    {
      value: StatusEnum.CURRENT,
      label: 'Действующий',
    },
    {
      value: StatusEnum.EXCLUDED,
      label: 'Исключен',
    },
  ];

  return (
    <>
      {Boolean(commercialRegister.length) ? (
        <>
          <StatisticTable
            statistics={statisticData}
            addFilter={addFilter}
            deleteFilter={deleteFilter}
            selectedFilter={selectedFilter}
            statisticTableType={StatisticTableType.ALL}
          />
          <SelectContainer>
            <Select
              size="small"
              showSearch
              style={filterStyle}
              placeholder={<PlaceholderText>{selectField}</PlaceholderText>}
              optionFilterProp="children"
              value={selectField}
              onChange={setSelectField}
              filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
              options={dataSelectField}
            />
            <Select
              size="small"
              showSearch
              style={filterStyle}
              placeholder={<PlaceholderText>{ascending}</PlaceholderText>}
              optionFilterProp="children"
              value={ascending}
              onChange={setAscending}
              filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
              options={dataAscending}
            />
            <Select
              size="small"
              showSearch
              style={filterStyle}
              placeholder={<PlaceholderText>{status}</PlaceholderText>}
              optionFilterProp="children"
              value={status}
              onChange={setStatus}
              filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
              options={dataStatus}
            />
          </SelectContainer>
          <CountCommercialRegister count={commercialRegister.length} />
          <CommercialRegisterContainer>
            {sortedCommercialRegister.map((item, index) => (
              <MyCommercialRegister commercialRegister={item} key={index} />
            ))}
          </CommercialRegisterContainer>
        </>
      ) : (
        <h1 style={{ textAlign: 'center' }}>Данные из торгового реестра отсутсвуют</h1>
      )}
    </>
  );
};

export default CommercialRegisterProfile;

const CommercialRegisterContainer = styled.div``;

const SelectContainer = styled.div`
  margin-top: 1.8735rem;
  display: flex;
  justify-content: space-around;
`;
