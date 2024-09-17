import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUndangan } from '../../slices/undanganSlice'; 
import TableUndangan from '../../components/widgets/tableUndangan'; 
import CreateInvitationModal from '../../components/modal/createInvitationModal'; 
import { Button } from 'primereact/button';
import MainLayout from '../../components/layout/mainLayout';
import { deleteUndangan, editUndangan } from '../../slices/undanganSlice';

const Undangan = () => {
  const dispatch = useDispatch();
  const { undanganList } = useSelector((state) => state.undangan); // Mengambil data dari Redux
  const [modalVisible, setModalVisible] = useState(false);
  const [currentData, setCurrentData] = useState(null); // Untuk menyimpan data yang sedang diedit

  const handleAddUndangan = (newUndangan) => {
    if (currentData) {
      dispatch(editUndangan({ id: currentData.id, ...newUndangan })); // Jika sedang edit, gunakan action edit
    } else {
      dispatch(addUndangan(newUndangan)); // Jika menambah data baru
    }
    setCurrentData(null);
  };

  const handleEdit = (data) => {
    setCurrentData(data); // Set data yang akan diedit
    setModalVisible(true); // Tampilkan modal
  };

  const handleDelete = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus undangan ini?')) {
      dispatch(deleteUndangan(id)); // Hapus undangan dari Redux
    }
  };

  return (
    <MainLayout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Undangan</h1>
          {/* Tombol Buat Undangan */}
          <Button
            label="Buat Undangan"
            icon="pi pi-plus"
            className="text-white bg-primary hover:bg-primary-dark rounded-lg shadow-lg px-4 py-2"
            onClick={() => setModalVisible(true)}
          />
        </div>

        {/* Tabel undangan */}
        <TableUndangan data={undanganList} onEdit={handleEdit} onDelete={handleDelete} />

        {/* Modal untuk buat atau edit undangan */}
        <CreateInvitationModal
          visible={modalVisible}
          onHide={() => setModalVisible(false)}
          onSave={handleAddUndangan}
          currentData={currentData} // Mengirim data yang sedang diedit ke modal
        />
      </div>
    </MainLayout>
  );
};

export default Undangan;
