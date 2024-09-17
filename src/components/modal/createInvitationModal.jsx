import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

const CreateInvitationModal = ({ visible, onHide, onSave, currentData }) => {
  const [namaUndangan, setNamaUndangan] = useState('');
  const [pembeli, setPembeli] = useState('');
  const [status, setStatus] = useState('Aktif');

  useEffect(() => {
    if (currentData) {
      setNamaUndangan(currentData.namaUndangan);
      setPembeli(currentData.pembeli);
      setStatus(currentData.status);
    } else {
      setNamaUndangan('');
      setPembeli('');
      setStatus('Aktif');
    }
  }, [currentData]);

  const handleSave = () => {
    const newInvitation = { namaUndangan, pembeli, status };
    onSave(newInvitation);
    onHide();
  };

  return (
    <Dialog
      header={currentData ? "Edit Undangan" : "Buat Undangan Baru"}
      visible={visible}
      style={{ width: '30vw', padding: '20px' }}
      onHide={onHide}
    >
      <div className="flex flex-col gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2">Nama Undangan</label>
          <InputText
            value={namaUndangan}
            onChange={(e) => setNamaUndangan(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Masukkan nama undangan"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Pembeli</label>
          <InputText
            value={pembeli}
            onChange={(e) => setPembeli(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Masukkan nama pembeli"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">Status</label>
          <Dropdown
            value={status}
            options={[
              { label: 'Aktif', value: 'Aktif' },
              { label: 'Nonaktif', value: 'Nonaktif' },
            ]}
            onChange={(e) => setStatus(e.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-6">
        <Button
          label="Batal"
          className="bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded-lg"
          onClick={onHide}
        />
        <Button
          label="Simpan"
          className="bg-primary text-white hover:bg-primary-dark px-4 py-2 rounded-lg"
          onClick={handleSave}
        />
      </div>
    </Dialog>
  );
};

export default CreateInvitationModal;
