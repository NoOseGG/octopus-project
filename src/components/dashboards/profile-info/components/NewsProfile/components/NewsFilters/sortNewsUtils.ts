import {
  SortFilterEnum,
  TypeFilterEnum,
} from '@app/components/dashboards/profile-info/components/NewsProfile/components/NewsFilters/NewsFilters';
import { News } from '@app/store/types/Subject';

export const sortNews = (type: TypeFilterEnum, sort: SortFilterEnum, news: News[]) => {
  switch (type) {
    case TypeFilterEnum.DATE: {
      return getDateSorted(sort, news);
    }
    case TypeFilterEnum.NAME: {
      return getNameSorted(sort, news);
    }
  }
  return getDateSorted(sort, news);
};

const getDateSorted = (sort: SortFilterEnum, news: News[]): News[] => {
  switch (sort) {
    case SortFilterEnum.ASCENDING: {
      return [
        ...news.sort((a, b) => {
          const dateA = a.from_dttm ? new Date(a.from_dttm) : null;
          const dateB = b.from_dttm ? new Date(b.from_dttm) : null;

          if (dateA && dateB) {
            return dateA.getTime() - dateB.getTime();
          }

          return 0;
        }),
      ];
    }
    case SortFilterEnum.DESCENDING: {
      return [
        ...news.sort((a, b) => {
          const dateA = a.from_dttm ? new Date(a.from_dttm) : null;
          const dateB = b.from_dttm ? new Date(b.from_dttm) : null;

          if (dateA && dateB) {
            return dateB.getTime() - dateA.getTime();
          }

          return 0;
        }),
      ];
    }
  }
};

const getNameSorted = (sort: SortFilterEnum, news: News[]): News[] => {
  switch (sort) {
    case SortFilterEnum.ASCENDING: {
      return [
        ...news.sort((a, b) => {
          const nameA = a.news_title ? a.news_title : null;
          const nameB = b.news_title ? b.news_title : null;

          if (nameA && nameB) {
            return nameA.localeCompare(nameB);
          }

          return 0;
        }),
      ];
    }
    case SortFilterEnum.DESCENDING: {
      return [
        ...news.sort((a, b) => {
          const nameA = a.news_title ? a.news_title : null;
          const nameB = b.news_title ? b.news_title : null;

          if (nameA && nameB) {
            return nameB.localeCompare(nameA);
          }

          return 0;
        }),
      ];
    }
  }
};
