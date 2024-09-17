import React from 'react';
import { startOfMonth, endOfMonth, eachDayOfInterval, format, getDay } from 'date-fns';

const Calendar = () => {
  const currentDate = new Date();
  const start = startOfMonth(currentDate);
  const end = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start, end });

  const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  // Menghitung padding untuk hari pertama bulan agar gridnya sejajar dengan benar
  const firstDayOfWeek = getDay(start);

  return (
    <div className="bg-white p-3 rounded-lg shadow-lg w-full max-w-xs">
      {/* Header bulan */}
      <div className="text-center mb-2">
        <h3 className="text-md font-semibold">
          {format(currentDate, 'MMMM yyyy')}
        </h3>
      </div>

      {/* Nama hari */}
      <div className="grid grid-cols-7 text-center text-xs text-gray-500 mb-2">
        {dayNames.map((day, index) => (
          <div key={index} className="font-medium">
            {day}
          </div>
        ))}
      </div>

      {/* Tanggal */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {Array.from({ length: firstDayOfWeek }).map((_, index) => (
          <div key={index}></div>
        ))}

        {days.map((day, index) => (
          <div
            key={index}
            className={`p-2 w-8 h-8 flex items-center justify-center text-xs ${
              format(day, 'd') === format(currentDate, 'd')
                ? 'bg-primary text-white rounded-full'
                : 'text-gray-700'
            }`}
          >
            {format(day, 'd')}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
