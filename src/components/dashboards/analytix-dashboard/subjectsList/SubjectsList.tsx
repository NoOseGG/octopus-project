import React from 'react';
import {useAppDispatch, useAppSelector} from '@app/hooks/reduxHooks';
import styles from './SubjectList.module.css';
import {doNewPage} from '@app/store/slices/searchSlice';
import styled from 'styled-components';
import {Spin} from 'antd';
import SubjectItem from '@app/components/dashboards/analytix-dashboard/subjectsList/subject-item/SubjectItem';
import {useResponsive} from '@app/hooks/useResponsive';

const SubjectsList: React.FC = () => {
    const {isTablet, mobileOnly} = useResponsive();
    const {results, previous, next} = useAppSelector((state) => state.search.data);
    const {error, loading} = useAppSelector((state) => state.search);
    const dispatch = useAppDispatch();

    const handleClickPage = (newPage: string) => {
        dispatch(doNewPage(newPage));
    };

    return (
        <>
            {isTablet && (
                <div className={styles.container}>
                    {loading && (
                        <SpinnerSpace>
                            <Spin size="large" tip="Загрузка данных . . ."/>
                        </SpinnerSpace>
                    )}

                    {error && <h1>ОШИБКА ПОЛУЧЕНИЯ ДАННЫХ</h1>}

                    {!error && (
                        <>
                            {results.length > 0 ? <h1 className={styles.title}>Список субъектов:</h1> : <div></div>}
                            {results.map((sub) => (
                                <SubjectItem subject={sub} key={sub.unn}/>
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
                </div>
            )}

            {mobileOnly && (
                <>
                    {results.map((sub) => (
                        <SubjectItem subject={sub} key={sub.unn}/>
                    ))}
                    <div className={styles.navigation}>
                        {previous !== null ? (
                            <div className={styles.previous} onClick={() => handleClickPage(previous)}>
                                `&lt;`
                            </div>
                        ) : (
                            <div></div>
                        )}
                        {next !== null ? (
                            <div className={styles.next} onClick={() => handleClickPage(next)}>
                                `&gt;`
                            </div>
                        ) : (
                            <div></div>
                        )}
                    </div>
                </>
            )}
        </>
    );
};

export default SubjectsList;

const SpinnerSpace = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
