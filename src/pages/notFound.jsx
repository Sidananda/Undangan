import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
                <p className="text-2xl font-semibold mb-4">Oops! Halaman tidak ditemukan.</p>
                <p className="text-gray-600 mb-8">Halaman yang Anda cari mungkin telah dihapus atau URL salah.</p>
                <Link
                    to="/"
                    className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
                >
                    Kembali ke Beranda
                </Link>
            </div>
        </div>
    );
};

export default NotFound;