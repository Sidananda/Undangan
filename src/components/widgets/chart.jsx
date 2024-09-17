import React from 'react';
import { useSelector } from 'react-redux';
import { Chart as PrimeChart } from 'primereact/chart';

const Chart = () => {
  const { buyers } = useSelector((state) => state.dashboard);

  const totalBuyers = buyers.length;
  const activeBuyers = buyers.filter((buyer) => buyer.status === 'Aktif').length;
  const activePercentage = Math.round((activeBuyers / totalBuyers) * 100);

  const data = {
    datasets: [
      {
        data: [activePercentage, 100 - activePercentage],
        backgroundColor: ['#850F8D', '#e5e5e5'],
      },
    ],
  };

  const options = {
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow h-full">
      <h3 className="text-lg font-semibold mb-2 text-center">Tampilan chart Status Pembeli</h3>
      <PrimeChart type="doughnut" data={data} options={options} className="w-full h-40" />
      <div className="flex justify-center mt-4">
        <p className="text-xl font-bold">{activePercentage}%</p>
      </div>
      <div className="flex justify-around mt-4 text-center w-full">
        <div>
          <div className="w-4 h-4 bg-gray-300 inline-block rounded-full"></div>
          <p className="text-sm">Tidak Aktif</p>
        </div>
        <div>
          <div className="w-4 h-4 bg-[#850F8D] inline-block rounded-full"></div>
          <p className="text-sm">Aktif</p>
        </div>
      </div>
    </div>
  );
};

export default Chart;
