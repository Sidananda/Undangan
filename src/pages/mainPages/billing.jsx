import React from 'react';
import ActivePackageCard from '../../components/cards/activePackageCard';
import TableBilling from '../../components/widgets/tableBilling';
import CreateBillingModal from '../../components/modal/createBillingModal'; 
import MainLayout from '../../components/layout/mainLayout';

const Billing = () => {
    return (
        <MainLayout>
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Billing</h1>

                {/* Card untuk paket aktif */}
                <ActivePackageCard />

                {/* Section Riwayat Pembayaran dengan Tombol Langganan Sekarang di pojok kanan atas */}
                <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="font-semibold">Riwayat Pembayaran</h2>
                        <CreateBillingModal />
                    </div>

                    {/* Tabel Riwayat Pembayaran */}
                    <TableBilling />
                </div>
            </div>
        </MainLayout>
    );
};

export default Billing;
