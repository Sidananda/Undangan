import React from 'react';
import { useSelector } from 'react-redux';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Table = () => {
  const { buyers, loading, error } = useSelector((state) => state.dashboard);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow w-full">
      <h3 className="text-lg font-semibold mb-4">Status Pembeli</h3>
      <DataTable 
        value={buyers} 
        responsiveLayout="scroll" 
        paginator 
        rows={5}   
      > 
        <Column field="no" header="No" />
        <Column field="namaUndangan" header="Nama Undangan" />
        <Column field="pembeli" header="Pembeli" />
        <Column field="status" header="Status" />
      </DataTable>
    </div>
  );
};

export default Table;
