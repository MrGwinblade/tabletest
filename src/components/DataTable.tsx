import React from 'react';
import { Manager, TotalData } from '../types';
import { getVisibleMonths } from '../utils/dateUtils';
import { TableHeader } from './TableHeader';
import { TotalRow } from './TotalRow';
import { ManagerRow } from './ManagerRow';
import styles from './table.module.css';
import { Header } from './Header';

interface DataTableProps {
  managers: Manager[];
  totals: TotalData[];
  startMonthIndex: number;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

export const DataTable: React.FC<DataTableProps> = ({
  managers,
  totals,
  startMonthIndex,
  onPrevMonth,
  onNextMonth,
}) => {
  const visibleMonths = getVisibleMonths(startMonthIndex);
  const currentYear = managers.length > 0 ? managers[0].year : new Date().getFullYear();

  return (
    <div className={styles['table-container']}>
      <Header 
        currentYear={currentYear}
        visibleMonths={visibleMonths}
        onPrevMonth={onPrevMonth}
        onNextMonth={onNextMonth} 
      />
      <TableHeader
        visibleMonths={visibleMonths}
      />
      <TotalRow
        totals={totals}
        startMonthIndex={startMonthIndex}
      />
      {managers.map((manager, managerIndex) => (
        <React.Fragment key={manager.id}>
          <ManagerRow
            manager={manager}
            startMonthIndex={startMonthIndex}
            isEven={managerIndex % 2 === 0}
          />
        </React.Fragment>
      ))}
    </div>
  );
};