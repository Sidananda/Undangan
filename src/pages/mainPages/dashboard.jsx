import React from 'react';
import MainLayout from '../../components/layout/mainLayout'; 
import Summary from '../../components/widgets/summary';
import Chart from '../../components/widgets/chart';
import Table from '../../components/widgets/table';
import Calendar from '../../components/widgets/calendar';
import Card1 from '../../components/cards/card1';
import Card2 from '../../components/cards/card2';

import { FaRegEnvelope, FaShoppingCart, FaMoneyBillAlt, FaUserFriends } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Bagian Selamat Datang + Kalender */}
        <div className="col-span-3 bg-white p-5 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Selamat datang di Dashboard</h2>
          <p className="text-gray-600 mb-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente cumque pariatur corrupti laborum autem soluta? Qui voluptate repellat doloribus quam minus, quaerat vitae! Possimus illum corporis reiciendis, neque pariatur necessitatibus?</p>
        </div>

        {/* Kalender di sebelah kanan */}
        <div className="col-span-1 bg-white p-4 rounded-lg shadow flex justify-end">
          <Calendar /> 
        </div>

        {/* Ringkasan (Summary Cards) */}
        <div className="col-span-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          <Summary title="Undangan" value="1220" bgColor="bg-purple-100" icon={<FaRegEnvelope />} />
          <Summary title="Jumlah Order" value="07" bgColor="bg-blue-100" icon={<FaShoppingCart />} />
          <Summary title="Pemasukan" value="43" bgColor="bg-red-100" icon={<FaMoneyBillAlt />} />
          <Summary title="Pembeli" value="1550" bgColor="bg-green-100" icon={<FaUserFriends />} />
        </div>

        {/* Status Pembeli (Chart + Table) */}
        <div className="col-span-4 grid grid-cols-2 gap-4"> 
          <Chart />
          <Table />
        </div>

        {/* Dua Cards di bagian bawah */}
        <div className="col-span-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card1 />
          <Card2 />
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
