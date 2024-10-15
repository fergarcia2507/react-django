import { useEffect, useState } from "react";
import * as XLSX from 'xlsx';
import FileSaver from 'file-saver';
import { getAllArticulos } from '../api/articulos.api';

export default function ExcelExport() {
    
    const [articulos, setArticulos] = useState([]);
                //setArticulos(res.data);
        
        
                useEffect(() => { 
                    async function loadArticulos() {
                        const res = await getAllArticulos();
                        setArticulos(res.data);
                    }
                    loadArticulos()
                }, []);
            
            
        var exportToExcel = () => {
            const ws = XLSX.utils.book_new();
            
            XLSX.utils.sheet_add_json(ws, articulos, { origin: 'A1', skipHeader: false });
            const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
            const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array', cellStyles:true });
            const finalData = new Blob([excelBuffer], { type: 'xlsx' });
            FileSaver.saveAs(finalData, "Data.xlsx");
        }
    
        return (
            <div>
                <label className="text-sm">Descargar artículos en Excel:</label>
                <button className="bg-zinc-800 p-3 rounded-lg w-full mb-3 hover:bg-zinc-900 hover:corsor-pointer" onClick={exportToExcel}>Export Excel</button>
            </div>
        );
}
