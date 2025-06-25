import React from 'react';

import styles from './table.module.css';

interface TableHeaderProps {
  visibleMonths: string[];
}

export const TableHeader: React.FC<TableHeaderProps> = ({
  visibleMonths,
}) => {
  return (
    <div className={styles['header-container']}>

      <div className={`${styles['grid-container']} ${styles['header-month']}`}>
        <div className={styles['cell-header']}></div>
        <div className={styles['cell-header']}></div>
        {visibleMonths.map((month, index) => (
          <div
            key={`${month}-${index}`}
            className={`${styles.cell} font-medium text-gray-900`}
          >
            <div className="text-sm">{month}</div>
            <div className="text-xs text-gray-500 mt-1">Plan / Fact</div>
          </div>
        ))}
      </div>
    </div>
  );
};