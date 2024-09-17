import React from 'react';
import FormRegister from '../../components/forms/formRegister';
import AuthLayout from '../../components/layout/authLayout';
import registerImage from '../../assets/images/gambar2.jpg';
import logo from '../../assets/images/logo.png';

const Register = () => {
    const leftContent = (
        <div>
            <img src={registerImage} alt="Register Illustration" className="w-2/3 mx-auto" />
            <h1 className="text-5xl font-bold text-white mb-6">Lorem Ipsum</h1>
            <p className="text-white text-lg">Silakan masukkan data diri Anda untuk mendaftar.</p>
        </div>
    );

    return (
        <AuthLayout leftContent={leftContent} logo={logo}>
            <h1 className="text-3xl font-bold mb-4 text-left">Buat akun Anda</h1>
            <p className="text-gray-500 mb-6 text-left">Silakan masukkan data diri Anda:</p>
            <FormRegister />
        </AuthLayout>
    );
};

export default Register;