import {Link} from "react-router-dom";
import { ArticulosList } from '../components/ArticulosList';

export function ArticulosPage() {
    return (
        <div>
            <div className="px-5">

            
                <h1 className='font-bold'>Listado de Artículos</h1>
            
            </div>
            <ArticulosList /> 
        </div>
    );
}
