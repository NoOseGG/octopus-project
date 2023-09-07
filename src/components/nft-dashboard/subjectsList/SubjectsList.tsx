import React, { Component, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import SubjectItem from '@app/components/nft-dashboard/subjectsList/subject-item/SubjectItem';
import styles from './SubjectList.module.css';
import { setData, setError } from '@app/store/slices/searchSlice';
import axios from 'axios';

const SubjectsList: React.FC = () => {
  const subjectList = useAppSelector((state) => state.search.data.results);
  const previousPage = useAppSelector((state) => state.search.data.previous);
  const nextPage = useAppSelector((state) => state.search.data.next);
  const dispatch = useAppDispatch();

  const handleClickPage = (newPage: string) => {
    async function fetchNewPage() {
      try {
        const response = await axios.get(newPage);
        dispatch(setData(response.data));
      } catch (error) {
        console.log(error);
        dispatch(setError(error));
      }
    }

    scrollToTop();
    fetchNewPage();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Добавляет плавную анимацию
    });
  };

  return (
    <div className={styles.container}>
      {subjectList.length > 0 ? <h1 className={styles.title}>Список субъектов:</h1> : <div></div>}
      {subjectList.map((sub) => (
        <SubjectItem subject={sub} key={sub.unn} />
      ))}
      <div className={styles.navigation}>
        {previousPage !== null ? (
          <div className={styles.previous} onClick={() => handleClickPage(previousPage)}>
            Предыдущая страница
          </div>
        ) : (
          <div></div>
        )}
        {nextPage !== null ? (
          <div className={styles.next} onClick={() => handleClickPage(nextPage)}>
            Следующая страница
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default SubjectsList;
