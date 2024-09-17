import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess, loginFailure } from '../../slices/authSlice';
import { useNavigate } from 'react-router-dom';
import Input from '../elements/input';
import Button from '../elements/button';
import { Checkbox } from 'primereact/checkbox';
import { Toast } from 'primereact/toast';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'; 


const FormLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // Untuk menampilkan atau menyembunyikan password
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toast = React.useRef(null);

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === 'nanda@gmail.com' && password === '123') {
            const user = { email };
            const token = 'mock-token';
            dispatch(loginSuccess({ user, token }));
            localStorage.setItem('token', token);
            toast.current.show({ severity: 'success', summary: 'Success', detail: 'Login berhasil' });
            navigate('/dashboard');
        } else {
            dispatch(loginFailure('Login gagal, periksa kredensial Anda'));
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Login gagal' });
        }
    };

    return (
        <form onSubmit={handleLogin} className="space-y-6">
            <Toast ref={toast} />

            {/* Input untuk email */}
            <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            {/* Input untuk password dengan toggle show/hide */}
            <div className="relative">
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 text-sm bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                >
                    {showPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                </span>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Checkbox inputId="rememberMe" checked={rememberMe} onChange={(e) => setRememberMe(e.checked)} className="p-checkbox-box border-2 border-gray-300 rounded focus:ring-blue-500"/>
                    <label htmlFor="rememberMe" className="ml-2 text-sm ">Ingat saya</label>
                </div>
                <a href="/forgot-password" className="text-blue-600 text-sm">Lupa password?</a>
            </div>

            <Button label="Masuk" type="submit" className="bg-blue-600" />

            {/* Bagian login dengan sosial media */}
            <div className="mt-8 text-center">
                <div className="flex items-center justify-between mb-4">
                    <hr className="flex-grow border-gray-300" />
                    <span className="px-4 text-gray-500">atau login dengan</span>
                    <hr className="flex-grow border-gray-300" />
                </div>
                <div className="flex justify-center space-x-4">
                    <button className="bg-gray-100 p-2 rounded-full w-10 h-10">
                    <img src="/src/assets/icons/google.png" alt="Google" />
                    </button>
                    <button className="bg-gray-100 p-2 rounded-full w-10 h-10">
                        <img src="/src/assets/icons/apple.png" alt="Apple" />
                    </button>
                </div>
            </div>

            {/* Sudah memiliki akun */}
            <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                    Tidak memiliki akun? <a href="/register" className="text-blue-600">Buat akun</a>
                </p>
            </div>
        </form>
    );
};

export default FormLogin;
