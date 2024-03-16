import React, { useRef, useState } from 'react';
import { SearchOverlay } from './searchOverlay/SearchOverlay/SearchOverlay';
import { HeaderActionWrapper } from '@app/components/header/Header.styles';
import { CategoryComponents } from '@app/components/header/components/HeaderSearch/HeaderSearch';
import { Btn, InputSearch } from '../HeaderSearch/HeaderSearch.styles';
import { useTranslation } from 'react-i18next';
import { Dropdown } from '@app/components/common/Dropdown/Dropdown';
import { SearchOutlined } from '@ant-design/icons';

interface SearchOverlayProps {
  query: string;
  setQuery: (query: string) => void;
  data: CategoryComponents[] | null;
  isOverlayVisible: boolean;
}

export const SearchDropdown: React.FC<SearchOverlayProps> = ({ query, setQuery, data, isOverlayVisible }) => {
  const [isFilterVisible, setFilterActive] = useState(false);

  const { t } = useTranslation();

  // useEffect(() => {
  //   setOverlayVisible(!!query || isFilterVisible);
  // }, [query, isFilterVisible, setOverlayVisible]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);

  return (
    <>
      <Dropdown
        {...((!!data || isFilterVisible) && { trigger: ['click'] })}
        overlayClassName="search-dropdown"
        overlay={<SearchOverlay data={data} isFilterVisible={isFilterVisible} />}
        visible={isOverlayVisible}
        getPopupContainer={() => ref.current}
      >
        <HeaderActionWrapper>
          <InputSearch
            width="100%"
            value={query}
            placeholder={t('header.search')}
            filter={
              <Btn
                size="small"
                type={isFilterVisible ? 'ghost' : 'text'}
                aria-label="Filter"
                icon={<SearchOutlined />}
                onClick={() => setFilterActive(!isFilterVisible)}
              />
            }
            onChange={(event) => setQuery(event.target.value)}
            enterButton={null}
            addonAfter={null}
            prefix={''}
          />
          <div ref={ref} />
        </HeaderActionWrapper>
      </Dropdown>
    </>
  );
};
