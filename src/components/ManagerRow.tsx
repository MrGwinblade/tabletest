import React from 'react';
import { Manager, MonthData } from '../types';
import { formatNumber } from '../utils/dateUtils';
import styles from './table.module.css';

interface ManagerRowProps {
  manager: Manager;
  startMonthIndex: number;
  isEven: boolean;
}

export const ManagerRow: React.FC<ManagerRowProps> = ({
  manager,
  startMonthIndex,
  isEven,
}) => {
  const getVisibleMonths = (): (MonthData | null)[] => {
    const visibleMonths: (MonthData | null)[] = [];
    for (let i = 0; i < 6; i++) {
      const monthIndex = (startMonthIndex + i) % 12;
      visibleMonths.push(manager.months[monthIndex]);
    }
    return visibleMonths;
  };

  const rowStyle = isEven ? styles['manager-row-even'] : styles['manager-row-odd'];

  return (
    <div className={`${styles['grid-container']} ${rowStyle}`}>
      <div className={`${styles['cell-header']} content-center`}>
        {manager.adminName}
      </div>
      <div className={styles['cell-header-second']}>
        <div className={styles['header-divider']}>Income</div>
        <div className={styles['header-bottom']}>Active partners</div>
      </div>
      {getVisibleMonths().map((monthData, index) => (
        <div
          key={index}
          className={`${styles.cell} content-center`}
        >
          {monthData ? (
            <>
              <div className={styles['data-row-income']}>
                <span>{formatNumber(monthData.plan['income'])}</span>
                <span>{formatNumber(monthData.fact['income'])}</span>
              </div>
              <div className={styles['data-row-partners']}>
                <span>{formatNumber(monthData.plan['activePartners'])}</span>
                <span>{formatNumber(monthData.fact['activePartners'])}</span>
              </div>
            </>
          ) : (
            <div className={styles['no-data']}>No data</div>
          )}
        </div>
      ))}
    </div>
  );
};  