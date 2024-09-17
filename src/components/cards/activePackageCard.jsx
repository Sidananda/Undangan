import React from 'react';

const ActivePackageCard = () => {
    return (
        <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-lg font-bold">Paket aktif: Paket Tahunan</h3>
            <p className="text-sm">Masa aktif: 26 Agustus 2025</p>
            <p className="text-sm">Pembayaran terakhir: 26 Agustus 2024</p>
        </div>
    );
};

export default ActivePackageCard;
