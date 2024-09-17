import React from 'react';
import FormLogin from '../../components/forms/formLogin';
import AuthLayout from '../../components/layout/authLayout';
import loginImage from '../../assets/images/gambar1.png';
import logo from '../../assets/images/logo.png';

const Login = () => {
    const leftContent = (
        <div>
            <img src={loginImage} alt="Login Illustration" className="w-2/5 mx-auto" />
            <h1 className="text-5xl font-bold text-white mb-6">Lorem Ipsum</h1>
            <p className="text-white text-lg">Selamat datang! Pilih metode untuk masuk dengan mudah.</p>
        </div>
    );

    return (
        <AuthLayout leftContent={leftContent} logo={logo}>
            <h1 className="text-3xl font-bold mb-4 text-left">Masuk ke akun Anda</h1>
            <p className="text-gray-500 mb-6 text-left">Silakan masukkan email dan password untuk masuk:</p>
            <FormLogin />
        </AuthLayout>
    );
};

export default Login;
