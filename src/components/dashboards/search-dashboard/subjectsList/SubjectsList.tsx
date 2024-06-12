import React from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import styles from './SubjectList.module.css';
import { doNewPage, Organization } from '@app/store/slices/search/searchSlice';
import SubjectItem from '@app/components/dashboards/search-dashboard/subjectsList/subject-item/SubjectItem';
import { useResponsive } from '@app/hooks/useResponsive';

type MyComponentProps = {
  listItems: Organization[];
};

const SubjectsList: React.FC<MyComponentProps> = ({ listItems }) => {
  const { previous, next } = useAppSelector((state) => state.search.data);
  const { isTablet, mobileOnly } = useResponsive();
  const dispatch = useAppDispatch();

  const handleClickPage = (newPage: string) => {
    dispatch(doNewPage(newPage));
  };

  return (
    <>
      {isTablet && (
        <div className={styles.container}>
          <>
            {listItems && (
              <>
                {listItems.length > 0 ? <h1 className={styles.title}>Список субъектов:</h1> : <div></div>}
                {listItems.map((item) => (
                  <SubjectItem subject={item} key={item.unn} />
                ))}
                <div className={styles.navigation}>
                  {previous !== null ? (
                    <div className={styles.previous} onClick={() => handleClickPage(previous)}>
                      Предыдущая страница
                    </div>
                  ) : (
                    <div></div>
                  )}
                  {next !== null ? (
                    <div className={styles.next} onClick={() => handleClickPage(next)}>
                      Следующая страница
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </>
            )}
          </>
        </div>
      )}

      {mobileOnly && (
        <>
          {listItems.map((sub) => (
            <SubjectItem subject={sub} key={sub.unn} />
          ))}
          <div className={styles.navigation}>
            {previous !== null && (
              <div className={styles.previous} onClick={() => handleClickPage(previous)}>
                `&lt;`
              </div>
            )}
            {next !== null && (
              <div className={styles.next} onClick={() => handleClickPage(next)}>
                `&gt;`
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default SubjectsList;
