import React from 'react';
import styles from './table.module.css';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

interface Props {
  currentYear: number;
  visibleMonths: string[];
  onPrevMonth: () => void;
  onNextMonth: () => void;
  className?: string;
}

export const Header: React.FC<Props> = ({ className, currentYear, visibleMonths, onPrevMonth, onNextMonth }) => {
  const years = Array.from({ length: 5 }, (_, i) => currentYear - 2 + i);

  return (
    <div className={`${styles['header-container']} ${className || ''}`}>
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <div className="flex items-center gap-4">
          <select
            value={currentYear}
             className={`${styles['year-dropdown']} text-xl font-semibold`}
          >
            {years.map((year) => (
              <option key={year} value={year}>
                Year {year}
              </option>
            ))}
          </select>
          <div className="flex items-center gap-2">
            <button
              onClick={onPrevMonth}
              className={styles['button-nav']}
              aria-label="Previous month"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={onNextMonth}
              className={styles['button-nav']}
              aria-label="Next month"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
        <button className={styles['button-add']}>
          <Plus className="w-4 h-4" />
          Add plan
        </button>
      </div>
    </div>
  );
};