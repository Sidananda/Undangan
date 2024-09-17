import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const TableUndangan = ({ data, onEdit, onDelete }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg w-full border border-gray-300">
      <DataTable value={data} responsiveLayout="scroll" className="border-collapse border border-gray-300">
        <Column field="id" header="#" body={(rowData, options) => options.rowIndex + 1} className="border border-gray-300" />
        <Column field="namaUndangan" header="Nama Undangan" className="border border-gray-300" />
        <Column field="pembeli" header="Pembeli" className="border border-gray-300" />
        <Column field="status" header="Status" className="border border-gray-300" />
        <Column
          header="Aksi"
          body={(rowData) => (
            <div className="flex gap-4">
              {/* Tombol Edit */}
              <button onClick={() => onEdit(rowData)} className="flex items-center text-primary">
                <i className="pi pi-pencil mr-1"></i>
                Edit
              </button>

              {/* Tombol Delete */}
              <button onClick={() => onDelete(rowData.id)} className="flex items-center text-red-500">
                <i className="pi pi-trash mr-1"></i>
                Delete
              </button>
            </div>
          )}
          className="border border-gray-300"
        />
      </DataTable>
    </div>
  );
};

export default TableUndangan;