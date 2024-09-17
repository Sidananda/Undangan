import React from 'react';
import { useSelector } from 'react-redux';

const TableBilling = () => {
    const billingList = useSelector((state) => state.billing.billingList); 

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="py-2 px-4 border">#</th>
                        <th className="py-2 px-4 border">Jumlah Pembayaran</th>
                        <th className="py-2 px-4 border">Metode Pembayaran</th>
                        <th className="py-2 px-4 border">Tanggal</th>
                        <th className="py-2 px-4 border">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {billingList.map((item, index) => (
                        <tr key={index} className="text-center">
                            <td className="py-2 px-4 border">{index + 1}</td>
                            <td className="py-2 px-4 border">{item.amount}</td>
                            <td className="py-2 px-4 border">{item.method}</td>
                            <td className="py-2 px-4 border">{item.date}</td>
                            <td className="py-2 px-4 border">{item.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableBilling;
