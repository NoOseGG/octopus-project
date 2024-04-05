import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { CountYearProps } from '@app/components/dashboards/dashboard/components/MainInfo/components/CountYear/CountYearTypes';

const CountYearTest: React.FC<CountYearProps> = ({ countYear, percentYear }) => {
  const filters = useAppSelector((state) => state.searchFilters.filters);

  return null;
  // return (
  //   <>
  //     {loading ? (
  //       <Skeleton style={{ padding: 5 }} active />
  //     ) : (
  //       <>
  //         {!filters.isDate && (
  //           <Block>
  //             <Title>{getTitleForCountYear(countYear)}</Title>
  //             <Title>
  //               ({getDateLastYear(1, true)} - {getCurrentDate(true)})
  //             </Title>
  //             <Content>
  //               <div>
  //                 {formatNumberWithCommas(count)}{' '}
  //                 {percentLoading ? (
  //                   <Skeleton.Button style={{ marginTop: 10 }} active={true} size={'small'} shape={'circle'} />
  //                 ) : (
  //                   <Popover
  //                     trigger={'hover'}
  //                     content={`Отношение количества ${getStatusForPercent(
  //                       percentYear,
  //                     )} по отношению к прошлому году: (${twoLastYearDate} - ${lastYearDate}) к (${lastYearDate} - ${currentDate})`}
  //                   >
  //                     <Percent number={percent}>({percent}%)</Percent>
  //                   </Popover>
  //                 )}
  //               </div>
  //             </Content>
  //           </Block>
  //         )}
  //       </>
  //     )}
  //   </>
  // );
};

export default CountYearTest;
