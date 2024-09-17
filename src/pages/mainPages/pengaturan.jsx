import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile, updatePassword } from '../../slices/settingsSlice';
import MainLayout from '../../components/layout/mainLayout';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';

const Pengaturan = () => {
    const dispatch = useDispatch();
    const { profile } = useSelector((state) => state.settings);

    // State untuk edit mode dan modal password
    const [isEditing, setIsEditing] = useState(false);
    const [showPasswordModal, setShowPasswordModal] = useState(false);

    // State untuk form profil
    const [name, setName] = useState(profile.name);
    const [email, setEmail] = useState(profile.email);

    // State untuk form password
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Fungsi untuk menyimpan perubahan profil
    const handleProfileSave = () => {
        dispatch(updateProfile({ name, email }));
        alert('Profil berhasil diperbarui');
        setIsEditing(false); // Kembali ke mode tampilan
    };

    // Fungsi untuk mengganti password
    const handleChangePassword = () => {
        if (newPassword === confirmPassword) {
            dispatch(updatePassword({ currentPassword, newPassword }));
            alert('Password berhasil diubah');
            setShowPasswordModal(false); // Tutup modal setelah berhasil ganti password
        } else {
            alert('Password konfirmasi tidak cocok');
        }
    };

    // Footer Modal untuk Password
    const passwordModalFooter = (
        <div>
            <button
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                onClick={() => setShowPasswordModal(false)}
            >
                Batal
            </button>
            <button
                className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark"
                onClick={handleChangePassword}
            >
                Simpan
            </button>
        </div>
    );

    return (
        <MainLayout>
            <div className="bg-white p-6 rounded-lg shadow border border-gray-300">
                <h2 className="text-2xl font-semibold mb-6">Pengaturan Profil</h2>
                
                {/* Tampilan Profil */}
                {!isEditing && (
                    <div className="border p-4 rounded-lg border-gray-300 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Nama</label>
                            <p>{profile.name}</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Email</label>
                            <p>{profile.email}</p>
                        </div>
                        <button
                            className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark"
                            onClick={() => setIsEditing(true)}
                        >
                            Edit Profil
                        </button>
                    </div>
                )}

                {/* Edit Profil */}
                {isEditing && (
                    <div className="border p-4 rounded-lg border-gray-300 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Nama</label>
                            <InputText
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-inputtext border border-gray-300 rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Email</label>
                            <InputText
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-inputtext border border-gray-300 rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <button
                                className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark"
                                onClick={() => setShowPasswordModal(true)}
                            >
                                Ganti Password
                            </button>
                        </div>
                        {/* Tambah flex dan spacing */}
                        <div className="flex space-x-4">
                            <button
                                className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark"
                                onClick={handleProfileSave}
                            >
                                Simpan
                            </button>
                            <button
                                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                                onClick={() => setIsEditing(false)}
                            >
                                Batal
                            </button>
                        </div>
                    </div>
                )}

                {/* Modal untuk Konfirmasi Password */}
                <Dialog
                    visible={showPasswordModal}
                    style={{ width: '450px' }}
                    header="Ganti Password"
                    modal
                    footer={passwordModalFooter}
                    onHide={() => setShowPasswordModal(false)}
                >
                    <div className="p-3">
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Password Saat Ini</label>
                            <InputText
                                type="password"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                className="w-full p-inputtext border border-gray-300 rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Password Baru</label>
                            <InputText
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full p-inputtext border border-gray-300 rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Konfirmasi Password Baru</label>
                            <InputText
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full p-inputtext border border-gray-300 rounded"
                            />
                        </div>
                    </div>
                </Dialog>
            </div>
        </MainLayout>
    );
};

export default Pengaturan;
