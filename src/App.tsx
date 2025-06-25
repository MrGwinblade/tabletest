import React, { useState } from 'react';
import { useApiData } from './hooks/useApiData';
import { getCurrentMonthIndex } from './utils/dateUtils';
import { DataTable } from './components/DataTable';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';

function App() {
  const { data, loading, error } = useApiData();
  const [startMonthIndex, setStartMonthIndex] = useState(getCurrentMonthIndex());

  const handlePrevMonth = () => {
    setStartMonthIndex((prev) => (prev - 1 + 12) % 12);
  };

  const handleNextMonth = () => {
    setStartMonthIndex((prev) => (prev + 1) % 12);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!data?.success || !data.data) {
    return <ErrorMessage message="No data available" />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 w-[1440px] m-auto ">
      <div className="container mx-auto h-full flex items-center justify-center">
        <DataTable
          managers={data.data.table}
          totals={data.data.total}
          startMonthIndex={startMonthIndex}
          onPrevMonth={handlePrevMonth}
          onNextMonth={handleNextMonth}
        />
      </div>
    </div>
  );
}

export default App;