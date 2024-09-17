import React from 'react';

const AuthLayout = ({ children, leftContent, logo }) => {
    return (
        <div className="min-h-screen flex">
            {/* Kolom kiri untuk gambar */}
            <div className="hidden lg:flex lg:w-1/2 bg-accent justify-center items-center">
                <div className="text-center p-8 text-primary">
                    {leftContent} {/* Konten kiri */}
                </div>
            </div>

            {/* Kolom kanan untuk form dan logo */}
            <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center items-center">
                <div className="max-w-md w-full">
                    <div className="flex justify-left mb-6">
                        <img src={logo} alt="Logo" className="w-10 h-10 object-contain" /> {/* Logo di atas form */}
                    </div>
                    {children} {/* Form login atau register */}
                </div>
                <div className="mt-10 text-center text-gray-400 text-sm">
                    <p>Tokoundangan 2024</p>
                    <p>by Tokoevent</p>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
