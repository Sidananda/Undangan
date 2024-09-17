import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBilling } from '../../slices/billingSlice';
import qrisImage from '../../assets/images/qris.png';  

const CreateBillingModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isQRISOpen, setQRISOpen] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState('');
    const [isSuccess, setSuccess] = useState(false);
    const dispatch = useDispatch();

    // Mengatur harga sesuai dengan paket yang dipilih
    const calculatePrice = () => {
        switch (selectedPackage) {
            case 'Tahunan':
                return 2000000;
            case 'Bulanan':
                return 200000;
            case 'Mingguan':
                return 50000;
            default:
                return 0;
        }
    };

    // Mengatur diskon sesuai paket yang dipilih
    const calculateDiscount = () => {
        switch (selectedPackage) {
            case 'Tahunan':
                return 100000;
            case 'Bulanan':
                return 5000;
            case 'Mingguan':
                return 2000;
            default:
                return 0;
        }
    };

    const handleSubmit = () => {
        if (!selectedPackage) return;  // Jangan lanjut jika belum memilih paket
        setQRISOpen(true); // Buka pop-up QRIS setelah klik "Langganan Sekarang"
    };

    // Simulasi sukses pembayaran
    const handleQRISSuccess = () => {
        const billingData = {
            package: selectedPackage,
            amount: `Rp${calculatePrice().toLocaleString()}`,
            method: 'QRIS',
            date: new Date().toLocaleDateString(),
            status: 'Sukses',
        };
        dispatch(addBilling(billingData)); // Tambah data setelah pembayaran sukses
        setQRISOpen(false); // Tutup pop-up QRIS
        setIsOpen(false); // Tutup modal
        setSuccess(true); // Tampilkan sukses
    };

    return (
        <>
            {/* Tombol Langganan Sekarang */}
            <button
                onClick={() => setIsOpen(true)}
                className="bg-primary text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-primary-dark"
            >
                Langganan Sekarang
            </button>

            {/* Modal untuk memilih paket */}
            {isOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg w-1/3">
                        <h2 className="text-xl font-semibold mb-4">Pilih paket yang kamu inginkan</h2>

                        {/* Card untuk memilih paket */}
                        <div className="flex justify-between space-x-4 mb-4">
                            <div
                                className={`p-4 border rounded-lg cursor-pointer ${selectedPackage === 'Tahunan' ? 'border-primary' : 'border-gray-300'} hover:shadow-lg`}
                                onClick={() => setSelectedPackage('Tahunan')}
                            >
                                <h3 className="text-lg font-bold">Tahunan</h3>
                                <p>Rp2.000.000 / Tahun</p>
                            </div>
                            <div
                                className={`p-4 border rounded-lg cursor-pointer ${selectedPackage === 'Bulanan' ? 'border-primary' : 'border-gray-300'} hover:shadow-lg`}
                                onClick={() => setSelectedPackage('Bulanan')}
                            >
                                <h3 className="text-lg font-bold">Bulanan</h3>
                                <p>Rp200.000 / Bulan</p>
                            </div>
                            <div
                                className={`p-4 border rounded-lg cursor-pointer ${selectedPackage === 'Mingguan' ? 'border-primary' : 'border-gray-300'} hover:shadow-lg`}
                                onClick={() => setSelectedPackage('Mingguan')}
                            >
                                <h3 className="text-lg font-bold">Mingguan</h3>
                                <p>Rp50.000 / Minggu</p>
                            </div>
                        </div>

                        {/* Harga Total */}
                        {selectedPackage && (
                            <div className="text-right mb-4">
                                <p>Subtotal: Rp{calculatePrice().toLocaleString()}</p>
                                <p>Diskon: Rp{calculateDiscount().toLocaleString()}</p>
                                <p className="text-black font-bold text-2xl">
                                    Total: Rp{(calculatePrice() - calculateDiscount()).toLocaleString()}
                                </p>
                            </div>
                        )}

                        <button
                            onClick={handleSubmit}
                            className={`bg-primary text-white font-bold px-4 py-2 rounded-lg hover:bg-primary-dark ${!selectedPackage ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={!selectedPackage}  // Tombol dinonaktifkan jika paket belum dipilih
                        >
                            Langganan Sekarang
                        </button>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="ml-4 bg-red-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-red-600"
                        >
                            Batal
                        </button>
                    </div>
                </div>
            )}

            {/* QRIS Pop-up */}
            {isQRISOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg w-1/3">
                        <h2 className="text-xl font-semibold mb-4">Pembayaran QRIS</h2>
                        <div className="text-center mb-4">
                            <img
                                src={qrisImage}  // Gambar QRIS di sini
                                alt="QRIS code"
                                className="mx-auto"
                            />
                            <p className="mt-4">Scan QRIS untuk menyelesaikan pembayaran</p>
                        </div>

                        {/* Tombol dengan teks ditengah */}
                        <div className="flex justify-center space-x-4">
                            <button
                                onClick={handleQRISSuccess}
                                className="bg-primary text-white font-bold px-4 py-2 rounded-lg hover:bg-secondary text-center flex items-center justify-center"
                            >
                                Konfirmasi Pembayaran Sukses
                            </button>
                            <button
                                onClick={() => setQRISOpen(false)}
                                className="bg-red-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-red-600 text-center flex items-center justify-center"
                            >
                                Batal
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Pop-up Sukses */}
            {isSuccess && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg w-1/3">
                        <h2 className="text-xl font-semibold mb-4 text-center">Pembayaran Berhasil</h2>
                        <div className="text-center">
                            <img
                                src="/src/assets/images/suksesBayar.png"
                                alt="Success Icon"
                                className="mx-auto"
                            />
                            <p className="mt-4 text-green-600 font-bold">
                                Paket pilihan kamu: {selectedPackage}
                            </p>
                        </div>
                        <button
                            onClick={() => setSuccess(false)}
                            className="bg-primary text-white font-bold px-4 py-2 rounded-lg mt-4 mx-auto block"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default CreateBillingModal;