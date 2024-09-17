import React, { useState } from 'react';
import Input from '../elements/input';
import Button from '../elements/button';
import { Checkbox } from 'primereact/checkbox';
import { useDispatch } from 'react-redux';
import { registerSuccess, registerFailure } from '../../slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

const FormRegister = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // Untuk toggle password
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toast = React.useRef(null);

    const handleRegister = (e) => {
        e.preventDefault();
        if (!acceptTerms) {
            toast.current.show({ severity: 'warn', summary: 'Warning', detail: 'Anda harus menerima syarat dan ketentuan' });
            return;
        }

        if (!validateEmail(email)) {
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Format email tidak valid' });
            return dispatch(registerFailure('Email tidak valid'));
        }

        const user = { name, email };
        dispatch(registerSuccess({ user }));
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Registrasi berhasil' });
        setTimeout(() => navigate('/login'), 1500);
    };

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    };

    return (
        <form onSubmit={handleRegister} className="space-y-6">
            <Toast ref={toast} />
            <Input
                type="text"
                placeholder="Nama"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
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

            <div className="flex items-center">
                <Checkbox inputId="accept" checked={acceptTerms} onChange={(e) => setAcceptTerms(e.checked)} 
                className="p-checkbox-box w-5 h-5 border-2 border-gray-300 rounded focus:ring-blue-500"/>
                <label htmlFor="accept" className="ml-2 text-sm">Saya menyetujui persyaratan layanan dan kebijakan privasi</label>
            </div>

            <Button label="Daftar" type="submit" className="bg-blue-600" />

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
                    Sudah memiliki akun? <a href="/login" className="text-blue-600">Masuk</a>
                </p>
            </div>
        </form>
    );
};

export default FormRegister;