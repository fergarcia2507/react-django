import React from 'react';
import ExportExcel from '../components/ExportExcel';

export function ArticulosExportExcelPage() {
    return (
        <div className="px-5">
            <h1 className='font-bold pb-3 mx-auto'>Exportar Excel</h1>
            <div className="max-w-xl mx-auto border-2 rounded-lg border-zinc-700 bg-zinc-700 p-5">
                <ExportExcel /> 
            </div>
        </div>
    );
}