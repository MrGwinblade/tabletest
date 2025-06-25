import React from 'react';
import { TotalData } from '../types';
import { formatNumber } from '../utils/dateUtils';
import styles from './table.module.css';

interface TotalRowProps {
  totals: TotalData[];
  startMonthIndex: number;
}

export const TotalRow: React.FC<TotalRowProps> = ({
  totals,
  startMonthIndex,
}) => {
  const getVisibleTotals = () => {
    const visibleTotals: TotalData[] = [];
    for (let i = 0; i < 6; i++) {
      const monthIndex = (startMonthIndex + i) % 12;
      visibleTotals.push(totals[monthIndex]);
    }
    return visibleTotals;
  };

  return (
    <div className={`${styles['grid-container']} ${styles['total-row']}`}>
      <div className={`${styles['cell-header']} content-center`}>
        Manager
      </div>
      <div className={styles['cell-header-second']}>
        <div className={styles['header-divider']}>Total income</div>
        <div className={styles['header-bottom']}>Total active partners</div>
      </div>
      {getVisibleTotals().map((total, index) => (
        <div
          key={index}
          className={`${styles.cell} content-center`}
        >
          <div className={styles['data-row-income']}>
            <span>{formatNumber(total.plan['income'])}</span>
            <span>{formatNumber(total.fact['income'])}</span>
          </div>
          <div className={styles['data-row-partners']}>
            <span>{formatNumber(total.plan['activePartners'])}</span>
            <span>{formatNumber(total.fact['activePartners'])}</span>
          </div>
        </div>
      ))}
    </div>
  );
};