import {Link} from "react-router-dom";
import { ArticulosList } from '../components/ArticulosList';

export function ArticulosPage() {
    return (
        <div>
            <div className="flex justify-between px-5">

            
            <h1 className='font-bold text-lg position-bottom'>Listado de Articulos</h1>
            <button className="bg-indigo-500 px-3 py-2 rounded-lg justify-end ">
                <Link to="/articulos-create/">
                    <h1 className="text-sm"> Crear articulo</h1>
                </Link>
            </button>
            </div>
            <ArticulosList /> 
        </div>
    );
}