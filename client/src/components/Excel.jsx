import React, { Component } from "react";
import * as XLSX from 'xlsx';
import { createArticulo } from "../api/articulos.api";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default class Excel extends Component {

    state = {
        woorksheets: [],
        filas: [],
        propiedades: [],
        status: false
    }

    selectHoja = React.createRef();

    leerFilas = (index) => {
        var hoja = this.state.woorksheets[index];
        var filas = XLSX.utils.sheet_to_row_object_array(hoja.data);
        this.state.filas = [];
        this.state.filas = filas;
    }

    leerPropiedades = (index) => {
        var hoja = this.state.woorksheets[index];
        this.state.propiedades = [];

        var saveData = XLSX.utils.sheet_to_row_object_array(hoja.data);
        //console.log(saveData);
        saveData.map((field, index) => {
            createArticulo(field);
        })
        toast.success('Articulo creado correctamente');

        for (let key in hoja.data) {
            let regEx = new RegExp("^\(\\w\)\(1\){1}$");
            if (regEx.test(key) == true) {
                this.state.propiedades.push(hoja.data[key].v);
            }
        }
    }

    cambiarHoja = () => {
        this.leerPropiedades(this.selectHoja.current.value);
        this.leerFilas(this.selectHoja.current.value);
        this.setState({
            filas: this.state.filas,
            propiedades: this.state.propiedades
        })
    }

    leerExcel = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        var excel = formData.get("excel");
        var listWorksheet = [];

        var reader = new FileReader()
        reader.readAsArrayBuffer(excel)
        reader.onloadend = (e) => {
            var data = new Uint8Array(e.target.result)
            var excelRead = XLSX.read(data, {type: 'array'})
            excelRead.SheetNames.forEach(function(sheetName, index) {
                listWorksheet.push({
                    data: excelRead.Sheets[sheetName], 
                    name: sheetName, 
                    index: index
                })
            })
            
            this.state.woorksheets = listWorksheet;
            this.setState({
                woorksheets: this.state.woorksheets
            })

            this.leerPropiedades(0);
            this.leerFilas(0);
            this.setState({
                filas: this.state.filas,
                propiedades: this.state.propiedades,
                status: true
            })
        }        
    }

    render() {
        return (
        <div className="m-auto px-5">
            <div className="">
                <form onSubmit={this.leerExcel}>
                    <label className="text-sm">Archivo Excel:</label>
                    <input type={"file"} className="bg-zinc-600 p-3 rounded-lg block w-full mb-3" 
                    accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
                    name="excel"/>
                    <button className="bg-zinc-800 p-3 rounded-lg w-full my-5 hover:bg-zinc-900 hover:corsor-pointer">Importar</button>
                </form>
            </div>
            
            {
                this.state.status &&
                <>
                    <p className="pb-5 text-success-400">Listo! ya se importaron los siguientes artículos:</p>
                    <table className="w-full table">
                        <thead>
                            <tr>
                            {
                                this.state.propiedades.map((propiedad, index) => {                                    
                                    return (                                      
                                            <th key={index} className="left align-left">
                                                {propiedad}
                                            </th>                                        
                                    )                                    
                                })
                            }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.filas.map((fila, index1) => {
                                    return (
                                    <tr key={index1}>
                                        {
                                            this.state.propiedades.map((propiedad, index2) => {
                                                return <td>{fila[propiedad]}</td>
                                            })
                                        }
                                    </tr>
                                    )
                                })

                            }
                        </tbody>
                    </table>

                    <div>
                        <button className="bg-zinc-800 w-full mt-5 px-3 py-2 rounded-lg justify-end hover:bg-zinc-900 hover:corsor-pointer">
                        <Link to="/articulos/">
                            <h1 className="text-sm">Volver</h1>
                        </Link>
                        </button>
                    </div>          
                </>
            }
        </div>
        
        );
    }
}